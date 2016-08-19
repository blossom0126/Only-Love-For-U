/**
 * Created by hanyile on 16/8/18.
 */

import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import Logo from './Logo';
import Footer from './Footer';
import request from 'superagent';
import {connect} from 'react-redux';
import {loadCakeDetail} from '../actions/index';

class CakeDetailClass extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    request
        .get(`/cakedetail/${this.props.params.id}`)
        .end((err, res)=> {
          this.props.getCakeDetail(res.body);
        });
  }

  render() {
    return (
        <div>
          <Logo/>
          <div>这里展示详情页</div>
          <Footer/>
        </div>
    );
  }
}

let mapStateToProps = (state)=> {
  return state;
};

let mapDispatchToProps = (dispatch) => ({
  getCakeDetail: (data)=> {
    dispatch(loadCakeDetail(data));
  }
});


let CakeDetail = connect(mapStateToProps, mapDispatchToProps)(CakeDetailClass);
export default CakeDetail;