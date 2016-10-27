/**
 * Created by jae on 16-8-23.
 */
import {connect} from 'react-redux';
import MainView from '../components/MainView';
import {redirectToLogin} from '../actions/validLogin';

const mapStateToProps = (state) => {
  return state;
};
const mapDispatchToProps = (dispatch)=> {
  return {
    redirectToLoginPage: ()=> {
      dispatch(redirectToLogin());
    }
  };
};

var connect2 = connect(mapStateToProps, mapDispatchToProps);
const ValidLogin = connect2(MainView);

export default ValidLogin;