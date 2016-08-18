import express from 'express';
import User from '../models/User';
let router = express.Router();
router.post('/', (req, res,next)=> {
  new User({
    username: req.body.username,
    password: req.body.password
  }).save((err,data) => {
    if (err) {
      return next(err);
    } 
    else{
      res.send(data);
    }
  });
});

module.exports = router;