/**
 * Created by jae on 16-8-23.
 */
import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import {browserHistory} from 'react-router';

class MainView extends Component {
  componentWillUpdate(nextProps){
    if(nextProps.loginstate==='SUCCESS')
    {
      console.log('main-success');
      console.log(nextProps.loginusername);
    }
    if(nextProps.loginstate==='FAIL')
    {
      console.log('main-fail');
      // browserHistory.push('/login');
      console.log(nextProps.loginusername);
    }
    if(nextProps.loginstate==='Checking')
    {
      console.log('main-checking');
    }
  }
  componentWillMount(){
    console.log(React.Children.toArray(this.props.children).map(c => c.props));
    this.props.valaaaid();
  }
  
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default MainView;
