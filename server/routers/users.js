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


router.get('/', (req, res) => {
  User.find((err, data) => {
    res.send(data);
  });

  router.get('/', (req, res) => {
    User.findOne({ username: req.params.name }, (err, data) => {
      if (data.username) {
        if (data.body.password === req.body.password) {
          res.send('登录成功');
        }
        else {
          res.send('密码不正确');
        }
      }
      else {
        res.send('该用户不存在');
      }
    });
  });
});

module.exports = router;