// server.js
const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

// Models
const { OrdersModel } = require('./model/OrdersModel.js');
const { HoldingModel } = require('./model/HoldingsModel.js');
const { PostionsModel } = require('./model/PositionsModel.js');
const UserModel = require('./model/UserModel.js');

// Utils
const generateToken = require('../backend/Utils/generateToken.js');
const sendResetEmail = require('../backend/Utils/sendResetEmail.js');

const app = express();





app.use(cors());

app.use(cookieParser());
app.use(express.json());

const PORT = process.env.PORT || 3002;
const MONGO_URI = process.env.MONGO_URL || 'mongodb://localhost:27017/myapp';

// Auth Middleware
const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "Not logged in" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret");
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

// Protected Routes
app.get('/allHoldings', authMiddleware, async (req, res) => {
  const userHoldings = await HoldingModel.find({ user: req.userId });
  res.json(userHoldings);
});

app.get('/allPositions', authMiddleware, async (req, res) => {
  const userPositions = await PostionsModel.find({ user: req.userId });
  res.json(userPositions);
});

app.post('/newOrder', authMiddleware, async (req, res) => {
  try {
    const userId = req.userId;
    const { name, qty, price, mode } = req.body;

    if (!name || !qty || !price || !mode) {
      return res.status(400).send("Missing required fields");
    }

    const parsedQty = Number(qty);
    const parsedPrice = Number(price);

    const existingOrder = await OrdersModel.findOne({ name, mode, user: userId });

    if (mode === "BUY") {
      if (existingOrder) {
        existingOrder.qty += parsedQty;
        existingOrder.price = parsedPrice;
        await existingOrder.save();
      } else {
        const newOrder = new OrdersModel({ name, qty: parsedQty, price: parsedPrice, mode, user: userId });
        await newOrder.save();
      }
    }

    if (mode === "SELL") {
      if (existingOrder) {
        if (existingOrder.qty <= parsedQty) {
          await OrdersModel.deleteOne({ _id: existingOrder._id });
        } else {
          existingOrder.qty -= parsedQty;
          await existingOrder.save();
        }
      } else {
        const newSellOrder = new OrdersModel({ name, qty: parsedQty, price: parsedPrice, mode, user: userId });
        await newSellOrder.save();
      }
    }

    const holding = await HoldingModel.findOne({ name, user: userId });

    if (mode === "BUY") {
      if (holding) {
        const totalQty = holding.qty + parsedQty;
        const totalValue = (holding.avg * holding.qty) + (parsedPrice * parsedQty);
        holding.qty = totalQty;
        holding.avg = totalValue / totalQty;
        holding.price = parsedPrice;
        await holding.save();
      } else {
        const newHolding = new HoldingModel({
          name,
          qty: parsedQty,
          avg: parsedPrice,
          price: parsedPrice,
          user: userId
        });
        await newHolding.save();
      }
    }

    if (mode === "SELL") {
      if (!holding || holding.qty < parsedQty) {
        return res.status(400).send("Not enough shares to sell.");
      }

      holding.qty -= parsedQty;
      if (holding.qty === 0) {
        await HoldingModel.deleteOne({ _id: holding._id });
      } else {
        await holding.save();
      }
    }

    res.status(200).send("✅ Order and holdings updated successfully.");
  } catch (error) {
    console.error("❌ Error processing order or updating holdings:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Signup
app.post('/signup', async (req, res) => {
  const { email, name, password } = req.body;

  try {
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists, please login" });
    }

    const user = new UserModel({ email, name, password });
    await user.save();

    const token = generateToken(user._id);
    const { password: _, ...userWithoutPassword } = user.toObject();

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000
    }).status(201).json({
      user: userWithoutPassword,
      message: "User Created Successfully"
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await UserModel.findOne({ email }).select("+password");
    if (!existingUser) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = generateToken(existingUser._id);
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.status(200).json({
      body: existingUser,
      message: "You are successfully logged in..."
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Logout
app.post('/logout', (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production'
  });
  res.status(200).json({ message: 'Logged out successfully' });
});

// Forgot Password
app.post('/forgot', async (req, res) => {
  const { email } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const token = crypto.randomBytes(32).toString('hex');
    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 15 * 60 * 1000;
    await user.save();

    const resetLink = `http://localhost:3002/reset-password?token=${token}`;
    await sendResetEmail(user.email, resetLink);

    res.json({ message: "Reset link sent to email" });
  } catch (err) {
    console.error("Forgot password error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// Reset Password
app.post('/reset-password', async (req, res) => {
  const token = req.query.token;
  const { password } = req.body;

  if (!token) return res.status(400).json({ message: 'Reset token missing from URL' });

  try {
    const user = await UserModel.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() }
    });

    if (!user) return res.status(400).json({ message: 'Invalid or expired reset token' });

    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    await user.save();

    const loginToken = generateToken(user._id);
    res.cookie('token', loginToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.status(200).json({
      message: 'Password reset successful and user logged in',
      user: {
        _id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (err) {
    console.error('Reset error:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/',(req,res)=>{
  res.send("Welcome to the backend");
})

// Start Server
const startServer = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Failed to connect to DB:", err.message);
    process.exit(1);
  }
};

startServer();