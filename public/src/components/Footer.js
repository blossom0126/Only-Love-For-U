/**
 * Created by jae on 16-8-17.
 */
import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import {Link} from 'react-router';
class Footer extends Component {
  render() {
    return (
        <div >
        <div className="footer" style={{height:'150px'}}>
          <div className="container">
            <div className="col-md-3 footer-grid">
              <div className="logo two">
                <a><h3>ONLY<span>cakes</span></h3></a>
              </div>
            </div>
            <div className=" col-md-4 footer-grid footer-grid2">
              <div className="bottom-nav">
                <h4>About Only cakes</h4>
                <ul >
                  <li><Link to="/">首&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;页</Link></li>
                  <li><Link to="/cakelist">蛋糕名录</Link></li>
                  <li><Link to="/exclusive">唯依专区</Link></li>
                  <li><Link to="/brandstory">品牌故事</Link></li>
                  <li><Link to="/contact">订购帮助</Link></li>
                </ul>

              </div>
            </div>
            <div className="footer-grid">
                <h4 style={{marginLeft:'700px'}} > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ADDRESS</h4>
                <ul style={{marginLeft:'700px'}}   className="bottom-icons">
                  <li ><a className="home" href="#"><span> </span></a>Shanxi，Xian，China</li>
                </ul>
            </div>
          </div>
          <div className="copy-right">
            <div className="container">
              <p>Copyright &copy; 2016 All Rights Reserved . Design by Only Cake Team! </p>
            </div>
          </div>
        </div>
          </div>
    );
  }
}
export default Footer;