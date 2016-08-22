/**
 * Created by jae on 16-8-22.
 */
import request from 'superagent';
import { SelectedCake} from '../actions/BuyCakeInfo';
import {browserHistory} from 'react-router';

const orderRequestMiddleware = store =>next=>action=> {// eslint-disable-line no-unused-vars
  switch (action.type) {
  case 'ORDERLIST_INIT':
    request
        .get(`/api/cakedetail/${action.id}`)
        .end((err, res)=> {
          if(res.status===200){
            store.dispatch(SelectedCake(res.body));
          }
          else{
            browserHistory.push('/404');
          }
        });
    break;
  }
  next(action);
};

export default orderRequestMiddleware;