import express from 'express';
import User from '../models/User';
let router = express.Router();

router.post('/', (req, res,next)=> {
  const username = req.body.username;
  const password = req.body.password;
  const rePassword = req.body.rePassword;
//  console.log('wangting');
  /*const rePassword = req.body.rePassword;*/

  function checkUsername(username) {
    let patt = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+$/;
    return patt.test(username);
  }
  function checkPassword(password) {
    let patt = /^.{6,13}$/;
    return patt.test(password);
  }
  function checkPasswordSame(password,rePassword) {
    return password === rePassword;
  }

  User.findOne({ username: username }, (err, data) => {
    if (data) {
      res.send({error:'用户已存在'});
    }
    else {
      if(checkUsername(username)&&checkPassword(password)&&checkPasswordSame(password,rePassword)){
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
      }
      else
        res.send({error:'input information error!'});
    }
  });
});

router.post('/login', (req, res) => {
  User.findOne({username: req.body.username},
      (err, data) => {
        if (data) {
          // res.send(data.password===req.body.password)
          if (data.password === req.body.password) {
            // req.session.name = req.body.username;
            // console.log(req.session);
            // res.send({name: req.session.name});
            res.send(true);
          }
          else{
            res.send(false);
          }
        }
        else {
          res.send(false);
        }
      });
});

module.exports = router;