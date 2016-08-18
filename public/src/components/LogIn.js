import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
class LogIn extends Component {
  doAction() {
    let arr = [];
    let inputn = this.refs.inputName.value.trim();
    let inputp = this.refs.inputPwd.value.trim();
    arr.push(inputn, inputp);
    if (arr) {
      this.props.addTodo(arr);
    }
    this.refs.inputName.value = '';
    this.refs.inputPwd.value = '';
  }

  handleKeyPress(e) {
    if (13 !== e.charCode) {
      return;
    }
    this.addTodo();
  }
  render() {
    return (
        <div className="container">
            <div className="col-md-10">
              <div className="col-md-6 ">
                <form action="#" className="form-horizontal col-md-12">
                  <div className="form-group">
                    <label htmlFor="inputEmail3" className="col-sm-3 col-md-3 control-label">Username:</label>
                    <div className="col-sm-6 col-md-6">
                      <input type="email"
                             className="form-control"
                             id="inputEmail3"
                             placeholder="Please input username"
                             ref="inputName"
                             onKeyPress={this.handleKeyPress.bind(this)}
                      />
                    </div>
                    <span className="text-danger col-md-3" id="error_show"> </span>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputEmail3" className="col-sm-3 col-md-3 control-label">Password:</label>
                    <div className="col-sm-6 col-md-6">
                    <input type="Password"
                           className="form-control"
                           id="inputEmail3"
                           placeholder="Please input username"
                           ref="inputPwd"
                           onKeyPress={this.handleKeyPress.bind(this)}
                    />
                    </div>
                    <span className="text-danger col-md-3" id="error_show"> </span>
                 </div>
                  <div className="col-sm-offset-2 col-sm-10">
                    <button onClick={this.addTodo.bind(this)} type="button" className="btn btn-default">登录
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
    );
  }
}
module.exports=LogIn;