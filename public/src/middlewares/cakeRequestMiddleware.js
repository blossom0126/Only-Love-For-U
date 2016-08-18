import request from 'superagent';
const cakeRequestMiddleware = store =>next=>action=> {
  switch (action.type) {
  case'INIT':
    request.get('/cakes')
          .end((err, res)=>{
            console.log(res.body);
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