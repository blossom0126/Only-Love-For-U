/**
 * Created by hanyile on 16/8/22.
 */

import request from 'superagent';
import { LoadCakeDetail } from '../actions/CakeDetailActions';

const CakeDetailRequestMiddleware = store =>next=>action=> {// eslint-disable-line no-unused-vars
  switch (action.type) {
    case 'CAKEDETAIl_INITIALIZED':
      console.log('middlewares/CakeDetailRequestMiddelware/CAKEDETAIl_INITIALIZED:action.id:' + action.id);
      request
          .get(`/api/cakedetail/${action.id}`)
          .end((err, res)=> {
            console.log('middlewares/CakeDetailRequestMiddelware/CAKEDETAIl_INITIALIZED:.end:res.body:' + res.body);
            store.dispatch(LoadCakeDetail(res.body));
          });
      break;
  }
  next(action);
};

export default CakeDetailRequestMiddleware;