/**
 * Created by qinqi on 16-8-23.
 */
import mongoose from 'mongoose';

const Order = mongoose.model('Order', {
  username:String,
  name:String,
  tel:String,
  address:String,
  more:String,
  cakeName:String,
  image:String,
  isPay:Boolean,
  price:Number,
});

export default Order;