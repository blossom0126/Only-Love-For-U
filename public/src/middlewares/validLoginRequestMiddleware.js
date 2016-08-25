/**
 * Created by jae on 16-8-23.
 */
import request from 'superagent';
const validLoginRequestMiddleware = store =>next=>action=> {// eslint-disable-line no-unused-vars
  switch (action.type) {
  case'VALID_LOGIN':
    request
      .get('/users/logining')
      .end((err, res)=>{
        if(res.status===200){
          next({
            type: 'Loggin_state_received',
            name:res.text,
            states:'SUCCESS'
          });
        }
        else{
          next({
            type: 'Loggin_state_received',
            name: null,
            states:'FAIL'
          });
        }
      });
    break;
  }
  next(action);
};

export default validLoginRequestMiddleware;