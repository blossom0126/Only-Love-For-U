
/**
 * Created by jae on 16-8-14.
 */
import mongoose from 'mongoose';

const Cake = mongoose.model('Cake', {
  id:Number,
  name:String,
  intro:String,
  style:String,
  image:String
});

export default Cake;