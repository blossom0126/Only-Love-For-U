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
        .end((err, data)=> {// eslint-disable-line no-unused-vars
          if (data.status===201) {
            console.log(data.body.data.username);
             browserHistory.push('/index');
             next({
               type: 'Loggin_state_received',
               name:data.body.data.username,
               states:'SUCCESS'
             });
          }
          else {
            next({
              type: 'Loggin_state_received',
              name: undefined,
              states:'FAIL'
            });
          }

        });
    break;

  }
  next(action);
};
export default loginRequestMiddleware;