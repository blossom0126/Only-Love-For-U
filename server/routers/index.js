const regRouter = (app)=> {
  app.use('/cakes', require('./cakes'));
  app.use('/users', require('./users'));
};

export default regRouter;