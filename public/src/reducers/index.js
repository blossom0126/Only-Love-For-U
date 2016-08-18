import { combineReducers } from 'redux';
import cake from './cake';
import user from './users';


const cakeList = combineReducers({
  cake,
  user
});

export default cakeList;
