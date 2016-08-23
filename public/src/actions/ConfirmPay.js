export const OrderInfo = (id)=> {
  return {
    type:'OrderInfo',
    id
  };
};

export const OrderLoaded=(data)=>{
  return {
    type:'OrderLoaded',
    data
  };
};

export const ConfirmPay = (id)=> {
  return {
    type: 'ConfirmPay',
    id
  };
};
