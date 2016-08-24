/**
 * Created by wt on 16-8-18.
 */

import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
class LogIn extends Component {
  doAction() {
    let arr = {};
    let inputn = this.refs.inputName.value.trim();
    let inputp = this.refs.inputPwd.value.trim();
    arr.username = inputn;
    arr.password = inputp;
    this.props.LogIna(arr);
    this.refs.inputName.value = '';
    this.refs.inputPwd.value = '';
  }

  handleKeyPress(e) {
    if (13 !== e.charCode) {
      return;
    }
    this.doAction();
  }
  render() {
    // const user = this.props.user;
    return (
        <div>
        <div className="container">
            <div className="col-md-10">
              <div className="col-md-10 ">
                <form action="#" className="form-horizontal col-md-12">
                  <div className="form-group">
                    <label htmlFor="inputEmail3" className="col-md-3 col-md-6 control-label">Username:</label>
                    <div className="col-md-5 col-md-6">
                      <input type="text"
                             className="form-control"
                             id="inputEmail3"
                             placeholder="Please input username"
                             ref="inputName"
                             onKeyPress={this.handleKeyPress.bind(this)}
                      />
                    </div>
                    <span className="text-danger col-md-4" id="error_show" ></span>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputEmail3" className="col-md-3 col-md-6 control-label">Password:</label>
                    <div className="col-md-5 col-md-6">
                    <input type="Password"
                           className="form-control"
                           id="inputEmail3"
                           placeholder="Please input password"
                           ref="inputPwd"
                           onKeyPress={this.handleKeyPress.bind(this)}
                    />
                    </div>
                 </div>
                  <div className="col-lg-offset-6 col-sm-5">
                    <button onClick={this.doAction.bind(this)} type="button" className="btn btn-default"> Login Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
export default LogIn;