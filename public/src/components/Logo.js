import React, {Component} from 'react';// eslint-disable-line no-unused-vars

class Logo extends Component {
  render() {
    return (
        <div className="header">
          <div className="header-top">
            <div className="container">
              <div className="top-nav">
                <span className="menu two"> </span>
                <ul>
                  <li><a href="http://127.0.0.1:3000">首&nbsp;&nbsp;页</a></li>
                  <li><a className="active" href="http://127.0.0.1:3000/cakelist">蛋糕名录</a></li>

                  <li><a href="http://127.0.0.1:3000/brandstory">品牌故事</a></li>
                  <li><a href="http://127.0.0.1:3000/login">个人中心</a></li>
                  <li className="lost"><a href="http://127.0.0.1:3000/contact">联系我们</a></li>
                </ul>

              </div>
              <ul className="nav navbar-nav" style={{marginLeft:'70px'}}>
              <li><a className="loginands" href="http://127.0.0.1:3000/login">登陆</a></li>
              <li><a className="loginands" href="http://127.0.0.1:3000/signup">注册</a></li>
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