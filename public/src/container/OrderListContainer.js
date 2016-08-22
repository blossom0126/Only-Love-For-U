/**
 * Created by jae on 16-8-22.
 */
import { connect } from 'react-redux';
import {orderlistinit} from '../actions/BuyCakeInfo';
import OrderList from '../components/OrderList';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch)=> ({

  loadorder: (id)=>{
    // console.log('container/cakeDetailContainer/loadPage:id:' + id);
    dispatch(orderlistinit(id));
  }

});

const OrderListContainer = connect(mapStateToProps, mapDispatchToProps)(OrderList);

export default OrderListContainer;