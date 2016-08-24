import { combineReducers } from 'redux';
import cake from './cake';
import order from './order';
import CakeDetailReducers from './CakeDetailReducers';
import user from './users';
import signup from './signUp';
import orderInfo from './orderInfo';
import loginstate from './loginState';
import loginusername from './userName';


const cakeList = combineReducers({
  cake,
  CakeDetailReducers,
  user,
  signup,
  loginstate,
  loginusername,
  order,
  orderInfo
});

export default cakeList;
