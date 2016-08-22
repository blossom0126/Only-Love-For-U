import request from 'superagent';

const signUpRequestMiddleware = store=> next=> action=> {
  switch (action.type) {
  case 'ADD_TODO':
    request.post('/users')
        .type('form')
        .send({
          username: action.text[0],
          password: action.text[1],
          rePassword: action.text[2]
        })
        .end((err,res)=> {
          if (res.body.error) {
            alert(res.body.error);
          }
          else {
            store.dispatch({
              type: 'INIT'
            });
          }
        });
    break;
  case 'INIT':
    request.get('/users')
        .end((err,res) => {
          next({
            type: 'TODO _LOADED',
            data: res.body
          });
        });
    break;
  }
  next(action);
};

export default signUpRequestMiddleware;
