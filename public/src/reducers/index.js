import { combineReducers } from 'redux';
import cake from './cake';
import order from './order';
import CakeDetailReducers from './CakeDetailReducers';
import user from './users';
import signup from './signUp';

const cakeList = combineReducers({
  cake,
  CakeDetailReducers,
  user,
  signup,
  order
});

export default cakeList;
