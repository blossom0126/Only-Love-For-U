import {connect } from 'react-redux';
import PersonalInfo from '../components/PersonalInfo';
import {personal_center} from '../actions/Personal_CenterAction';

const mapStateToProps = (state)=>(state);
const mapDispatchToProps = (dispatch)=>({
    addTodo2:(arr)=>{
        dispatch(personal_center(arr));
    }
});

const AddTodo2 = connect(mapStateToProps,mapDispatchToProps)(PersonalInfo);

export default AddTodo2;
