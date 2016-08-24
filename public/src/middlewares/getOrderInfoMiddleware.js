import request from 'superagent';
import {browserHistory} from 'react-router';

const getOrderInfoMiddleware = store => next => action => {// eslint-disable-line no-unused-vars
  switch (action.type) {
  case 'OrderInfo':
    request
        .get('/api/order/${action.id}')
        .end((err, res) => {
          if (res.body) {
            next({
              type: 'OrderLoaded',
              data: res.body
            });
          }
        });

    break;
  case 'ConfirmPay':
    request
        .put('/api/order/${action.id}')
        .query({ isPay: true })
        .end((err, res) => {          
          if (res.status === 205) {
            alert('支付成功');
            browserHistory.push('/');
          }
        });
    break;
  }
  next(action);
};

export default getOrderInfoMiddleware;