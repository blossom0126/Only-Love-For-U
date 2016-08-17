/**
 * Created by jae on 16-8-17.
 */
import React, {Component} from 'react';// eslint-disable-line no-unused-vars
class Footer extends Component {
  render() {
    return (
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
                  <li><a className="active" href="">Home</a></li>
                  <li><a href="">Cakes</a></li>
                  <li><a href="">Exclusive</a></li>
                  <li><a href="">Brand Story</a></li>
                  <li><a href="">Contact</a></li>
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
              <div className="support">
                <input type="text" className="text"
                       value="Enter email to reset it"
                       onfocus="this.value = '';"
                       onblur="if (this.value == 'Enter email to reset it') {this.value = 'Enter email to reset it';}"/>
                <input type="submit" value="SUBMIT" className="botton"/>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
    );
  }
}
export default Footer;