const mongoose = require('mongoose');

const HoldingsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  qty: {
    type: Number,
    required: true,
    min: 0,
  },
  avg: {
    type: Number,
    min: 0,
  },
  price: {
    type: Number,
    min: 0,
  },
  net: {
    type: String,
    default: "0",
  },
  day: {
    type: String,
    default: "0",
  },
  isLoss: {
    type: Boolean,
    default: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }
});

// ✅ Prevent duplicate holdings for same user & stock
HoldingsSchema.index({ user: 1, name: 1 }, { unique: true });

module.exports = { HoldingsSchema };
