/**
 * Created by jae on 16-8-13.
 */
import express from 'express';
import Person from '../models/Person';

let router = express.Router();
//查所有数据
router.get('/', (req, res)=> {
  Person.find((err, data)=> {
    res.send(data);
  });
});
//查一条数据,把ID加到后面
router.get('/:id', (req, res)=> {
  Person.findOne({
    _id: req.params.id
  }, (err, data)=> {
    res.send(data);
  });
});
//更新
router.put('/:id', (req, res)=> {
  Person.update({
    _id: req.params.id
  }, {
    name: req.body.name
  }, (err, data)=> {
    res.send({
      error: err,
      data
    });
  });
});
//插入
router.post('/', (req, res, next)=> {
  new Person({
    name: req.body.name,
    image: req.body.image
  }).save((err, person) => {
    if (err) {
      return next(err);
    } else {
      res.send(person);
    }
  });
});

router.delete('/:id', (req, res)=> {
  //删除
  Person.findByIdAndRemove(req.params.id, (err)=> {
    res.send({
      error: err
    });
  });
});

module.exports = router;
// export default router;