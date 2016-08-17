/**
 * Created by jae on 16-8-14.
 */
import { connect } from 'react-redux';
import Cakes from '../components/Cakes';

const mapStateToProps = (state) =>{
  return state;
};

const CakeList = connect(mapStateToProps)(Cakes);

export default CakeList;