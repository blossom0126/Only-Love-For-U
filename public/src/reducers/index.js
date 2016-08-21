import { combineReducers } from 'redux';
import cake from './cake';
import CakeDetailReducers from './CakeDetailReducers';
import user from './users';
import signup from './signUp';

const cakeList = combineReducers({
  cake,
  CakeDetailReducers,
  user,
  signup
});

export default cakeList;
