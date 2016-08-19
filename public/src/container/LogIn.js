/**
 * Created by wt on 16-8-18.
 */
import {connect} from 'react-redux';
import LogIn from '../components/LogIn';
import {LoginVaild} from '../actions/login_vaild';
const mapStateToProps = (state) => {
  return state;
};
const mapDispatchToProps = (dispatch)=> {
  return {
    LogIna: (arr)=> {
      dispatch(LoginVaild(arr));
    }
  };
};

var connect2 = connect(mapStateToProps, mapDispatchToProps);
const LogInList = connect2(LogIn);

export default LogInList;