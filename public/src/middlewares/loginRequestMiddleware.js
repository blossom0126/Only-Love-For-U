import request from 'superagent';
import {browserHistory} from 'react-router';

const loginRequestMiddleware = store =>next=>action=> {// eslint-disable-line no-unused-vars
  switch (action.type) {
  case 'LoginVaild':
    request.post('/users/logining')
        .type('form')
        .send({
          username: action.text.username,
          password: action.text.password
        })
        .end((err, data)=> {
          if (data.status===201) {
            browserHistory.push('/');
            next({
              type: 'Loggin_return',
              username:data.body.data.username
            });
          }
          else {
            next({
              type: 'Loggin_return',
              username: '登录'
            });
          }
        });
    break;
  }
  next(action);
};
export default loginRequestMiddleware;