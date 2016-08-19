import { combineReducers } from 'redux';
import cake from './cake';
import cakeDetail from './cakeDetail';
import user from './users';


const cakeList = combineReducers({
  cake,
  cakeDetail,
  user,
});

export default cakeList;
