import request from 'superagent';

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
            next({
              type: 'LOGIN_SUCCESS',
              data: '登录成功！'
            });

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
export default loginRequestMiddleware;