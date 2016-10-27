import { combineReducers } from 'redux';
import cake from './cake';
import order from './order';
import CakeDetailReducers from './CakeDetailReducers';
import user from './users';
import signup from './signUp';
import orderInfo from './orderInfo';
import loginstate from './loginState';
import loginusername from './userName';
import personalInfo from './personalReducer';
import collectionReducer from './collectionReducer';

const cakeList = combineReducers({
  cake,
  CakeDetailReducers,
  user,
  signup,
  order,
  loginstate,
  loginusername,
  orderInfo,
  personalInfo,
  collectionReducer
});

export default cakeList;
