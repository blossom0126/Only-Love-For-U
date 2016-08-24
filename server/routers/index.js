const regRouter = (app)=> {
  app.use('/cakes', require('./cakes'));
  app.use('/api/cakedetail', require('./cakeDetail'));
  app.use('/users', require('./users'));
  app.use('/api/order',require('./confirmOrder'));


};

export default regRouter;