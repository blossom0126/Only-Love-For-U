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
                  <li><a href="">Home</a></li>
                  <li><a className="active" href="">Cakes</a></li>
                  <li><a href="">Exclusive</a></li>
                  <li><a href="">Brand Story</a></li>
                  <li className="lost"><a href="">Contact</a></li>
                 
                  <div className="clearfix"> </div>
                </ul>
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="clearfix"> </div>
          </div>
          <div className="head-bg">
            <div className="logo three">
              <a href=""><h1>ONLY <span>LOVE</span>FOR<span>U</span>CAKES</h1></a>
            </div>
          </div>
        </div>
    );
  }
}
export default Logo;