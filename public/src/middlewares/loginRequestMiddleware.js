import request from 'superagent';
import {browserHistory} from 'react-router';
import Login from '../components/LogIn';
const loginRequestMiddleware = store => next => action => {// eslint-disable-line no-unused-vars
  switch (action.type) {
  case 'LoginValid':
    request.post('/users/login')
        .type('form')
        .send({
          username: action.text.username,
          password: action.text.password
        })
        .end((err, res) => {
          if (res.body) {
            browserHistory.push('/');
          }
          else {
            next({
              type: 'LoginFailed',
              data: 'input error~'
            });
          }
        });
    break;
  case 'LoginFailed':
    Login.showerror(action.data);
    break;
  }
  next(action);
};
module.exports = loginRequestMiddleware;