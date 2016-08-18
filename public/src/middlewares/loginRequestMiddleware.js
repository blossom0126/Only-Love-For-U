/**
 * Created by wt on 16-8-18.
 */
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
              alert('失败');
            }

          });
      break;
  }
};
module.exports = loginRequestMiddleware;