export const OrderInfo = (id)=> {
  return {
    type:'ORDER_INFO',
    id
  };
};

export const OrderLoaded=(data)=>{
  return {
    type:'ORDER_LOADED',
    data
  };
};

export const ConfirmPay = (id)=> {
  return {
    type: 'CONFIRM_PAY',
    id
  };
};
