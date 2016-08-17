import express from 'express';
import User from '../models/User';
let router = express.Router();
router.post('/', (req, res, next)=> {
  new User({
    username: req.body.username,
    password:req.body.password
  }).save((err,data) => {
    if(!err) {
      res.send(data);
    }
    return next(err);
  });
});
router.get('/', (req, res)=> {
  User.find((err, data)=> {
    res.send(data);
  });
});





module.exports = router;