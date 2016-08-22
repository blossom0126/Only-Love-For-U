/**
 * Created by hanyile on 16/8/22.
 */

import request from 'superagent';
import { LoadCakeDetail } from '../actions/CakeDetailActions';

const cakeDetailRequestMiddleware = store =>next=>action=> {// eslint-disable-line no-unused-vars
  switch (action.type) {
  
  case 'CAKEDETAIl_INITIALIZED':
    request
        .get(`/api/cakedetail/${action.id}`)
        .end((err, res)=> {
          store.dispatch(LoadCakeDetail(res.body));
        });
    break;
  }
  next(action);
};

export default cakeDetailRequestMiddleware;