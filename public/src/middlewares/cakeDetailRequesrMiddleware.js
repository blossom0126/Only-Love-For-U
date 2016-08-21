/**
 * Created by hanyile on 16/8/22.
 */

import request from 'superagent';
import {ID_GETTER} from '../actions/CakeDetailActions';
import {INIT_CAKEDETAIL} from '../actions/CakeDetailActions';
import {CAKEDETAIL_LOADED} from '../actions/CakeDetailActions';
import {LoadCakeDetail} from '../actions/CakeDetailActions';

const cakeDetailRequestMiddleware = store =>next=>action=> {// eslint-disable-line no-unused-vars
  switch (action.type) {
    case  ID_GETTER:
      request
          .get(`api/cakedetail/${action.id}`)
          .end((err, res)=> {
            next(LoadCakeDetail(res.body));
          });
      break;
    case CAKEDETAIL_LOADED:
      request
          .get(`api/cakedetail/${action.id}`)
          .end((err, res)=> {
            next(LoadCakeDetail(res.body));
          });
      break;
    case INIT_CAKEDETAIL:
      request
          .get(`api/cakedetail/${action.url}`)
          .end((err, res)=> {
            store.dispatch(loadCakeDetail(res.body));
          });
      break;
  }
  next(action);
};

export default cakeDetailRequestMiddleware;