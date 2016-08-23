import mongoose from 'mongoose';

const OrderInfo = mongoose.model('OrderInfo', {
  name:String,
  tel:String, 
  address:String,
  more:String,
  cakeName:String, 
  image:String,
  price:Number,
  id:String,
  isPay:Boolean
});

export default OrderInfo;