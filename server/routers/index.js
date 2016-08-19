const regRouter = (app)=> {
  app.use('/cakes', require('./cakes'));
  app.use('/cakedetail', require('./cakeDetail'));
  app.use('/users', require('./users'));
};

export default regRouter;