import { combineReducers } from 'redux';
import cake from './cake';
import cakeDetail from './cakeDetail';
import user from './users';
import signup from './signUp';


const cakeList = combineReducers({
  cake,
  cakeDetail,
  user,
  signup
});

export default cakeList;
