/**
 * Created by jae on 16-8-17.
 */
import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import {Link} from 'react-router';
class Footer extends Component {
  render() {
    return (
        <div>
        <div className="footer">
          <div className="container">
            <div className="col-md-3 footer-grid">
              <div className="logo two">
                <a href="index.html"><h3>ONLY<span>cakes</span></h3></a>
              </div>
            </div>
            <div className=" col-md-3 footer-grid footer-grid2">
              <div className="bottom-nav">
                <h4>LEARN</h4>
                <ul>
                  <li><Link to="/">首&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;页</Link></li>

                  <li><Link to="/cakelist">蛋糕名录</Link></li>
                  <li><Link to="/exclusive">唯依专区</Link></li>
                  <li><Link to="/brandstory">品牌故事</Link></li>
                  <li><Link to="/contact">订购帮助</Link></li>
                  <div className="clearfix"></div>
                </ul>
              </div>
            </div>
            <div className=" col-md-3 footer-grid">
              <div className="Office Address">
                <h4>ADDRESS</h4>
                <ul className="bottom-icons">
                  <li><a className="home" href="#"><span> </span></a>Shanxi，Xian，China</li>
                  <li><a className="mail" href=""><span> </span>704069886@example.com</a></li>
                  <li><a className="mbl" href="#"><span> </span></a></li>
                  <div className="clearfix"></div>
                </ul>
              </div>
            </div>
            <div className="col-md-3 footer-grid">
              <h4>SUPPORT WITH</h4>

            </div>
            <div className="clearfix"></div>
          </div>
        </div>
          </div>
    );
  }
}
export default Footer;