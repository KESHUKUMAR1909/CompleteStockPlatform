import mongoose from 'mongoose';
import UserSchema from './UserSchema.js';
const { Schema } = mongoose;

export const OrdersSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
}
});
