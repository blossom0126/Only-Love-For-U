/**
 * Created by hanyile on 16/8/19.
 */

const cakeDetail = (state = [], action)=> {
  switch (action.type) {
  case 'CAKEDETAIL_LOADED':
    return action.data;
  }
  return state;
};

export default cakeDetail;