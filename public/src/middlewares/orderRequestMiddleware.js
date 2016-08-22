/**
 * Created by jae on 16-8-22.
 */
import request from 'superagent';
import { SelectedCake} from '../actions/BuyCakeInfo';

const orderRequestMiddleware = store =>next=>action=> {// eslint-disable-line no-unused-vars
  switch (action.type) {
  case 'ORDERLIST_INIT':
    request
        .get(`/api/cakedetail/${action.id}`)
        .end((err, res)=> {
          store.dispatch(SelectedCake(res.body));
        });
    break;
  }
  next(action);
};

export default orderRequestMiddleware;