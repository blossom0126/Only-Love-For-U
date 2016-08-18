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

  }
  next(action);
};

export default todoRequestMiddleware;
