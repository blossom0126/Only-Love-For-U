import request from 'superagent';

const todoRequestMiddleware = store=> next=> action=> {
  switch (action.type) {
  case 'ADD_TODO':
    request.post('/users')
          .type('form')
          .send({
            username: action.text[0],
            password: action.text[1]
          })
          .end(()=> {
            store.dispatch({
              type: 'INIT'
            });
          });
    break;
  case 'INIT':
    request.get('/users')
          .end((err, res)=> {
            next({
              type: 'TODO_LOADED',
              data: res.body
            });
          });
    break;
  }
  next(action);
};

export default todoRequestMiddleware;
