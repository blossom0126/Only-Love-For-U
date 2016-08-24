/**
 * Created by jae on 16-8-23.
 */
import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import {browserHistory} from 'react-router';
import Logo from '../container/Logo';
import Footer from './Footer';
class MainView extends Component {
  componentWillUpdate(nextProps){
    if(nextProps.loginstate==='FAIL')
    {
      this.props.redirectToLoginPage();
      browserHistory.push('/login');
    }
  }
  
  render() {
    return (
      <div>
        <Logo/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default MainView;
