const orderInfo = (state = {}, action)=> {
  switch (action.type) {
  case 'OrderLoaded':
    return action.data;
  }
  return state;
};

export default orderInfo;