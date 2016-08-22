import request from 'superagent';
import {browserHistory} from 'react-router';
const todoRequestMiddleware = store=> next=> action=> {// eslint-disable-line no-unused-vars
  switch (action.type) {
  case 'ADD_TODO':
    request.post('/users')
        .type('form')
        .send({
          username: action.text[0],
          password: action.text[1],
          rePassword: action.text[2]
        })
        .end((err, res)=> {
          if (res.body.error) {
            next({
              type: 'SIGNUP_FAIR',
              data: res.body.error
            });
          }
          else {
            browserHistory.push('/personcenter');
          }
        });
    break;
  }
  next(action);
};

export default todoRequestMiddleware;
