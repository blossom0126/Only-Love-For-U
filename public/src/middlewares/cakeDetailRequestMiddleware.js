/**
 * Created by hanyile on 16/8/22.
 */

import request from 'superagent';
import { LoadCakeDetail } from '../actions/CakeDetailActions';
import {browserHistory} from 'react-router';

const cakeDetailRequestMiddleware = store =>next=>action=> {// eslint-disable-line no-unused-vars
  switch (action.type) {
  
  case 'CAKEDETAIl_INITIALIZED':
    request
        .get(`/api/cakedetail/${action.id}`)
        .end((err, res)=> {
          if(res.status===200){
            next(LoadCakeDetail(res.body));
          }
          else if(res.status===404)
          {
            browserHistory.push('/404');
          }
        });
    break;
  }
  next(action);
};

export default cakeDetailRequestMiddleware;