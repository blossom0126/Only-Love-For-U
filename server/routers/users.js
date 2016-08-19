import express from 'express';
import User from '../models/User';
let router = express.Router();


router.post('/', (req, res, next)=> {
  new User({
    username: req.body.username,
    password: req.body.password
  }).save((err, data) => {
    if (err) {
      return next(err);
    }
    else {
      res.send(data);
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
            res.send(true);
          }
        }
        else {
          res.send(false);
        }

      });
});

module.exports = router;