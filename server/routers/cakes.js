/**
 * Created by jae on 16-8-14.
 */
import express from 'express';
import Cake from '../models/Cake';

let router = express.Router();
//查所有数据
router.get('/', (req, res)=> {
  Cake.find((err, data)=> {
    res.send(data);
  });
});
// 查一条数据,把name加到后面
router.get('/:name', (req, res)=> {
  Cake.find({name: req.params.name}, (err, data)=> {
    res.send(data);
  });
});
// router.get('/:id', (req, res)=> {
//   Cake.findOne({id: req.params.id}, (err, data)=> {
//     res.send(data);
//   });
// });
// 查一条数据,把ID加到后面
/*router.get('/:id', (req, res)=> {
 console.log(req.params.id)
 Cake.findOne({
 id: req.params.id
 }, (err, data)=> {
 res.send(data);
 });
 });*/
//更新
router.put('/:id', (req, res)=> {
  Cake.update({
    id: req.params.id},
    {
      price: req.body.price,
      size: req.body.size
    }
    , (err, data)=> {
      res.send({
        error: err,
        data
      });
    });
});
//插入
router.post('/', (req, res, next)=> {
  new Cake({
    id: req.body.id,
    name: req.body.name,
    price: req.body.price,
    intro: req.body.intro,
    infor: req.body.infor,
    size: req.body.size,
    style: req.body.style,
  }).save((err, cake) => {
    if (err) {
      return next(err);
    } else {
      res.send(cake);
    }
  });
});

router.delete('/:id', (req, res)=> {
  //删除
  Cake.remove({id:req.params.id}, (err)=> {
    res.send({
      error: err
    });
  });
});

module.exports = router;
// export default router;