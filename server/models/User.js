import mongoose from 'mongoose';

const User = mongoose.model('User', {
  username: String,
  password: String,
  realName: String,
  telphone: String,
  address:  String,
  age:      Number,
  wechat:   String
});

export default User;