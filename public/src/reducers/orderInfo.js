const orderInfo = (state = {}, action)=> {
  switch (action.type) {
  case 'ORDER_LOADED':
    return action.data;
  }
  return state;
};

export default orderInfo;