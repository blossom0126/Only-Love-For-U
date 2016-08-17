import mongoose from 'mongoose';

const User = mongoose.model('User', {
  username: String,
  password: String
});

export default User;