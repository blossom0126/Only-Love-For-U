/**
 * Created by hanyile on 16/8/19.
 */

import { connect } from 'react-redux';
import { InitializeCakeDetail } from '../actions/CakeDetailActions';
import CakeDetailComponent from '../components/CakeDetailComponents';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch)=> ({
  
  loadPage: (id)=>{
    dispatch(InitializeCakeDetail(id));
  }

});

const CakeDetailContainer = connect(mapStateToProps, mapDispatchToProps)(CakeDetailComponent);

export default CakeDetailContainer;