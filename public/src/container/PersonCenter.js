/**
 * Created by jae on 16-8-26.
 */
import { connect } from 'react-redux';
import Person from '../components/PersonCenter';

const mapStateToProps = (state) =>{
  return state;
};

const PersonList = connect(mapStateToProps)(Person);

export default PersonList;