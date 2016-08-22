/**
 * Created by jae on 16-8-14.
 */
import express from 'express';
import Cake from '../models/Cake';

let router = express.Router();
//查所有数据
router.get('/', (req, res)=> {
  Cake.find((err, data)=> {
    res.send(data.sort((a,b) => a.image > b.image));
  });
});

module.exports = router;
// export default router;