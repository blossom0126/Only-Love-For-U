/**
 * Created by hanyile on 16/8/19.
 */

import {connect} from 'react-redux';
import {getItemId} from '../actions/index';

const mapStateToProps = (state) => {
  return state;
};


const mapDispatchToProps = (dispatch)=> ({
  getId: (id)=> {

    dispatch(getItemId(id));
  }
});

const MenuList = connect(mapStateToProps, mapDispatchToProps);

export default MenuList;
