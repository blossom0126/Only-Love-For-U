/**
 * Created by jae on 16-8-23.
 */
import { connect } from 'react-redux';
import Logo from '../components/Logo';
import {validLogin} from '../actions/validLogin';

const mapStateToProps = (state) =>{
  return state;
};
const mapDispatchToProps = (dispatch)=> {
  return {
    aaaaliu: ()=> {
      dispatch(validLogin());
    }
  };
};
const LogoList = connect(mapStateToProps,mapDispatchToProps)(Logo);

export default  LogoList;