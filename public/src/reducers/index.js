import { combineReducers } from 'redux';
import cake from './cake';
import order from './order';
import CakeDetailReducers from './CakeDetailReducers';
import user from './users';
import signup from './signUp';
import orderInfo from './orderInfo';

const cakeList = combineReducers({
  cake,
  CakeDetailReducers,
  user,
  signup,
  order,
  orderInfo
});

export default cakeList;
