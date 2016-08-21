/**
 * Created by hanyile on 16/8/19.
 */

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CakeDetailActions from '../actions/CakeDetailActions';
import CakeDetailComponent from '../components/CakeDetailComponents';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch)=> ({

  getCakeDetail: (data)=> {
    return bindActionCreators(CakeDetailActions, dispatch(CakeDetailActions.LoadCakeDetail(data)));
  },

  loadPage: (id)=>{
    return bindActionCreators(CakeDetailActions, dispatch({
      type: CakeDetailActions.INIT_CAKEDETAIL,
      id
    }));
  }

});

const CakeDetailContainer = connect(mapStateToProps, mapDispatchToProps)(CakeDetailComponent);

export default CakeDetailContainer;