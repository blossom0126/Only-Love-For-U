/**
 * Created by hanyile on 16/8/19.
 */

// import {ID_GETTER} from '../actions/CakeDetailActions';
// import {CAKEDETAIL_LOADED} from '../actions/CakeDetailActions';
import {CAKEDETAIl_INITIALIZED} from '../actions/CakeDetailActions';

const cakeDetail = (state = [], action)=> {

  switch (action.type) {
    // case CAKEDETAIL_LOADED:
    //   return action.data;
    // case ID_GETTER:
    //   return action.data;
  case 'CAKEDETAIL_LOADED':
    return action.data;
  }
  return state;
};

export default cakeDetail;