/**
 * Created by jae on 16-8-22.
 */

const orderDetail = (state = [], action)=> {
  switch (action.type) {
  case 'SELECTED_CAKES_LOADED':
    return action.data;
  }
  return state;
};

export default orderDetail;