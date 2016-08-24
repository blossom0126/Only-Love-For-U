/**
 * Created by qinqi on 16-8-23.
 */
import request from 'superagent';
import {browserHistory} from 'react-router';

const confirmOrderMiddleware = store =>next=>action=> {// eslint-disable-line no-unused-vars
  switch (action.type) {
  case'CONFIRM_ORDER':
    request.post('/api/order')
          .type('form')
          .send({
            username:action.order.username,
            name:action.order.name,
            tel:action.order.tel,
            address:action.order.address,
            more:action.order.more,
            cakeName:action.order.cakeName,
            image:action.order.image,
            isPay:action.order.isPay,
            price:action.order.price,
          })
          .end((err, res)=> {
            next({
              type: 'CONFIRMED_ORDER',
              data: res.body._id
            });
            browserHistory.push('/confirmpay/'+res.body._id);
          });
    break;
  }
  next(action);
};

export default confirmOrderMiddleware;