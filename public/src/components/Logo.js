import React, {Component} from 'react';// eslint-disable-line no-unused-vars
class Logo extends Component {
  render() {
    return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">
                            <img alt="Brand" src="image/logo/logo.jpg" className=" logoimg" height="50px" width="200px"/>
                        </a>
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">蛋糕展示
                                <span className="sr-only">(current)
                            </span></a></li>
                          <li><a href="#">
                              注册
                           </a></li>
                        </ul>

                    </div>
                </div>
            </nav>

    );
  }
}
export default Logo;