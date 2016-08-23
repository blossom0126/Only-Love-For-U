import { connect } from 'react-redux';
import {OrderInfo} from '../actions/ConfirmPay';
import {ConfirmPay} from '../actions/ConfirmPay';
import OrderPay from '../components/ConfirmPay';
import {withRouter} from 'react-router';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch)=> ({

  loadorderinfo: (id) =>{
    dispatch(OrderInfo(id));
  },
  ConfirmBuy: (id) =>{
    dispatch(ConfirmPay(id));
  }
});

const ConfirmPayContainer= connect(mapStateToProps, mapDispatchToProps)(withRouter(OrderPay));

export default ConfirmPayContainer;