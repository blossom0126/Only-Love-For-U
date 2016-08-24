import request from 'superagent';
const getOrderInfoMiddleware = store => next => action => {// eslint-disable-line no-unused-vars
  switch (action.type) {
  case 'ORDER_INFO':
    request
          .get(`/api/order/${action.id}`)
          .end((err, res) => {
            if (res.body) {
              next({
                type: 'ORDER_LOADED',
                data: res.body
              });
            }
          });
    break;
  }
  next(action);
};

export default getOrderInfoMiddleware;