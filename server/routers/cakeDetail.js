/**
 * Created by hanyile on 16/8/19.
 */

import express from 'express';
import Cake from '../models/Cake';

let router = express.Router();

// //如果没有id的话
// router.get('/', (req, res)=> {
//     Cake.find({}, {}, {limit: 1}, (err, data)=> {
//         res.send(data);
//     });
// });

//获取蛋糕详情页的URI并返回结果
router.get('/:id', (req, res) => {
  Cake.findOne({_id: req.params.id}, (err, cake)=> {
    if (err) {
      res.status(404).send('error');
    }
    else {
      res.status(200).send(cake);
    }
  });
});
module.exports = router;