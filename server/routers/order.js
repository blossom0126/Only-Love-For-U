import express from 'express';
import OrderInfo from '../models/OrderInfo';

let router = express.Router();
//查所有数据
router.get('/:id', (req, res) => {
  OrderInfo.findOne({ id: req.params.id }, (err, data) => {
    res.send(data);
  });
});

router.put('/:id', (req, res) => {
  OrderInfo.update({
    isPay: req.params.isPay
  }, (err, data) => {
    if (data) {
      res.status(205).send();
    }
    else {
      res.status(404).send();
    }
  });
});

module.exports = router;
// export default router;