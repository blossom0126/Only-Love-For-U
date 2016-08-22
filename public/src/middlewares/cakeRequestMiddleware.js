import request from 'superagent';
const cakeRequestMiddleware = store =>next=>action=> {// eslint-disable-line no-unused-vars
  switch (action.type) {
  case'INIT':
    request.get('/cakes')
      .end((err, res)=>{
        next({
          type: 'CAKE_LOADED',
          data: res.body
        });
      });
    break;
  }
  next(action);
};

export default cakeRequestMiddleware;