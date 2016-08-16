const regRouter = (app)=> {
  app.use('/cakes', require('./cakes'));
};

export default regRouter;