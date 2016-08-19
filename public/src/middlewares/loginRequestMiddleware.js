import request from 'superagent';
import {browserHistory} from 'react-router';

const loginRequestMiddleware = store =>next=>action=> {// eslint-disable-line no-unused-vars
  switch (action.type) {
  case 'LoginVaild':
    request.post('/users/login')
        .type('form')
        .send({
          username: action.text.username,
          password: action.text.password
        })
        .end((err, res)=> {
          if (res.body) {
            browserHistory.push('/');
          }
          else {
            next({
              type: 'LOGIN_FAIR',
              data: '登陆失败，请重试'
            });
          }

        });
    break;
  }
  next(action);
};
module.exports = loginRequestMiddleware;