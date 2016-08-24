import express from 'express';
import OrderInfo from '../models/OrderInfo';

let router = express.Router();
//查所有数据
router.get('/:id', (req, res) => {
  orders.findOne({ _id: req.params.id }, (err, data) => {
    res.send(data);
  });
});

router.put('/:id', (req, res) => {
  orders.update({_id:req.params.id},{isPay:req.body.isPay}, (err, doc) => {// eslint-disable-line no-unused-vars
    console.log(doc);
    if (!err) {
      res.status(205).send();
    }
    else{
      res.status(404).send();
    }
  });
});

module.exports = router;