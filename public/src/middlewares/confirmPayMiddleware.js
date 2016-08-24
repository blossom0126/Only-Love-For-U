/**
 * Created by wt on 16-8-24.
 */
import request from 'superagent';
import {browserHistory} from 'react-router';
const confirmPayMiddleware = store => next => action => {// eslint-disable-line no-unused-vars
  switch (action.type) {
  case 'CONFIRM_PAY':
    request
          .put(`/api/order/${action.id}`)
          .type('form')
          .send({isPay: true})
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

export default confirmPayMiddleware;