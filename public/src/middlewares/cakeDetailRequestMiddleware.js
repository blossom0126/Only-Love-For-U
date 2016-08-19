/**
 * Created by hanyile on 16/8/19.
 */
import request from 'superagent';
import {ID_GETTER} from '../actions/index';
import {loadCakeDetail} from '../actions/index';

const cakeDetailRequestMiddleware = store =>next=>action=> {// eslint-disable-line no-unused-vars
  switch (action.type) {
  case  ID_GETTER:
    request
            .get(`/cakedetail/${action.id}`)
            .end((err, res)=> {
              next(loadCakeDetail(res.body));
            });
    break;
  }
  next(action);
};

export default cakeDetailRequestMiddleware;