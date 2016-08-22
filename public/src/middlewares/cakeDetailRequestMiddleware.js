/**
 * Created by hanyile on 16/8/22.
 */

import request from 'superagent';
import { LoadCakeDetail } from '../actions/CakeDetailActions';

const cakeDetailRequestMiddleware = store =>next=>action=> {// eslint-disable-line no-unused-vars
  switch (action.type) {
    // case  ID_GETTER:
    //   console.log('middlewares/cakeDetailRequestMiddelware/ID_GETTER');
    //   request
    //       .get(`api/cakedetail/${action.id}`)
    //       .end((err, res)=> {
    //         console.log('middlewares/cakeDetailRequestMiddelware/ID_GETTER:.end:res.body:' + res.body);
    //         next(LoadCakeDetail(res.body));
    //       });
    //   break;
    // case 'CAKEDETAIL_LOADED':
    //   console.log('middlewares/cakeDetailRequestMiddelware/CAKEDETAIL_LOADED');
    //   request
    //       .get(`/api/cakedetail/${action.id}`)
    //       .end((err, res)=> {
    //         console.log('middlewares/cakeDetailRequestMiddelware/CAKEDETAIL_LOADED:.end:res.body:' + res.body);
    //         next(LoadCakeDetail(res.body));
    //       });
    //   break;
    case 'CAKEDETAIl_INITIALIZED':
      console.log('middlewares/cakeDetailRequestMiddelware/CAKEDETAIl_INITIALIZED');
      request
          .get(`/api/cakedetail/${action.id}`)
          .end((err, res)=> {
            store.dispatch(LoadCakeDetail(res.body));
            console.log('middlewares/cakeDetailRequestMiddelware/INIT_CAKEDETAIL:.end:res.body:' + res.body);
          });
      break;
  }
  next(action);
};

export default cakeDetailRequestMiddleware;