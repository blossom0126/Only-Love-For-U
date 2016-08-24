import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import {Link} from 'react-router';

class Logo extends Component {

  componentWillMount(){
    this.props.aaaaliu();
  }

  render() {
    let loginstate;
    let path;
    if(this.props.loginusername!==null)
    {
      loginstate=this.props.loginusername;
      path='/presoncenter';
    }
    else{
      loginstate='登录';
      path='/login';
    }

    return (
        <div className="header">
          <div className="header-top">
            <div className="container">
              <div className="top-nav">
                <span className="menu two"> </span>
                <ul>
                  <li><Link to="/">首&nbsp;&nbsp;页</Link></li>
                  <li><Link className="active" to="/cakelist">蛋糕名录</Link></li>
                  <li><Link to="/exclusive">唯依专区</Link></li>
                  <li><Link to="brandstory">品牌故事</Link></li>
                  <li className="lost"><Link to="/contact">联系我们</Link></li>
                </ul>

              </div>
              <ul className="nav navbar-nav" style={{marginLeft:'60px'}}>
              <li><Link className="loginands" to={path}>{loginstate}</Link></li>
              <li><Link className="loginands" to="/signup">注册</Link></li>
            </ul>
            </div>
          </div>
          <div className="head-bg">
            <div className="logo three">
              <a href=""><h1>ONLY <span>FOR </span>CAKES</h1></a>
            </div>
          </div>
        </div>
    );
  }
}
export default Logo;