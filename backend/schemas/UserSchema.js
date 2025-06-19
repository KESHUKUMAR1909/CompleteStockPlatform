const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bcrypt = require('bcrypt');
const UserSchema = new Schema({
  email: {
    type: String,
    trim: true,
    required: [true, "Email should ne provided"],
    unique: [true, "Email is already in use"],
    match: [/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/, "Please enter a valid Email"]
  },
  name: {
    type: String,
    required: [true, "First Name is Required"],
    minLength: [5, "First Name Must be Atleast 5 characters long"],
    lowercase: true,
    trim: true,//if the user gives extra spaces it will remove it 
    maxlength: [20, "First Name should be less than or equal to 20 characters"]
  },
  password: {
    type: String,
    required: [true, "Password should be provided"],
    minLength: [6, "Password must be at least 6 characters long"],
    select: false
  },

  resetPasswordToken: String,
  resetPasswordExpires: Date


});


UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});


module.exports = UserSchema;