/**
 * Created by hanyile on 16/8/19.
 */

import express from 'express';
import Cake from '../models/Cake';

let router = express.Router();

router.get('/:id', (req, res) => {
  Cake.findOne({_id: req.params.id}, (err, cake)=> {
    if (err) {
      res.status(404).send('error');
    }
    else{
      res.status(200).send(cake);
    }

  });

});

module.exports = router;