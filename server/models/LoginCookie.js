import mongoose from 'mongoose';
const LoginCookie = mongoose.model('LoginCookie',{
  UUID:String,
  username:String
});

module.exports = LoginCookie;