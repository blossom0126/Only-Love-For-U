/**
 * Created by qinqi on 16-8-23.
 */
import express from 'express';
import Order from '../models/Order';

const router = express.Router();

router.post('/',(req, res,next)=> {
  new Order({
    username:req.body.username,
    name: req.body.name,
    tel: req.body.tel,
    address: req.body.address,
    more: req.body.more,
    cakeName:req.body.cakeName,
    image:req.body.image,
    isPay:req.body.isPay,
    price:req.body.price
  }).save((err, data) => {
    if (err) {
      return next(err);
    } else {
      res.send(data);
    }
  });
});


router.get('/:id', (req, res) => {
  Order.findOne({ _id: req.params.id }, (err, data) => {
    res.send(data);
  });
});
router.put('/:id', (req, res) => {
  Order.update({_id:req.params.id},{isPay:req.body.isPay}, (err, doc) => {// eslint-disable-line no-unused-vars
    if (!err) {
      res.status(205).send();
    }
    else{
      res.status(404).send();
    }
  });
});


module.exports = router;