/**
 * Created by jae on 16-8-17.
 */
/*wang genwang*/
import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      emailResult: false,
      passwordFormatResult: false,
      passwordSameResult: false
    };
  }

  addTodo() {
    let arr = [];
    let inputn = this.refs.inputName.value.trim();
    let inputp = this.refs.inputPwd.value.trim();
    let inputre = this.refs.rePassword.value.trim();
    arr.push(inputn, inputp, inputre);
    if (arr) {
      this.props.addTodo(arr);
    }
    this.refs.inputName.value = '';
    this.refs.inputPwd.value = '';
    this.refs.rePassword.value = '';
  }

  handleKeyPress(e) {
    if (13 !== e.charCode) {
      return;
    }
    this.addTodo();
  }

  checkEmail() {
    let email = this.refs.inputName.value.trim();
    let patt = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+$/;
    this.state.emailResult = patt.test(email);
    if(!patt.test(email))
      this.refs.emailWrongMessage.innerHTML = 'wrong format';
    else
      this.refs.emailWrongMessage.innerHTML = '';
  }

  checkPasswordFormat() {
    let password = this.refs.inputPwd.value.trim();
    let patt = /^.{6,13}$/;
    this.state.passwordFormatResult = patt.test(password);
    if(!patt.test(password))
      this.refs.passwordWrongFormat.innerHTML = '6 - 13位字符';
    else
      this.refs.passwordWrongFormat.innerHTML = '';
  }

  checkPasswordSame() {
    let password = this.refs.inputPwd.value.trim();
    let password_2 = this.refs.rePassword.value.trim();
    this.state.passwordSameResult = (password === password_2);
    if(password === password_2)
      this.refs.passwordWrongSame.innerHTML = '';
    else
      this.refs.passwordWrongSame.innerHTML = '两次密码不一致';
  }

  render() {
    const {signup}=this.props;
    return (

<div>
          <div className="container">
            <div className="col-md-10">
              <div className="col-md-8 ">
                <form action="#" className="form-horizontal col-md-12">
                  <div className="form-group">
                    <label htmlFor="inputEmail3" className="col-md-3 col-md-6 control-label">Username:</label>
                    <div className="col-md-5 col-md-6">
                      <input type="email"
                             className="form-control"
                             id="inputEmail3"
                             placeholder="Please input username"
                             ref="inputName"
                             onKeyPress={this.handleKeyPress.bind(this)}
                             onBlur={this.checkEmail.bind(this)}
                      />
                    </div>
                    <span className="text-danger col-md-4" ref="emailWrongMessage" > </span>
                  </div>

                  <div className="form-group">
                    <label htmlFor="inputEmail3" className="col-md-3 col-md-6 control-label">Password:</label>
                    <div className="col-md-5 col-md-6">
                      <input type="password"
                             className="form-control"
                             id="inputEmail3"
                             placeholder="Please input password"
                             ref="inputPwd"
                             onKeyPress={this.handleKeyPress.bind(this)}
                             onBlur={this.checkPasswordFormat.bind(this)}
                      />
                    </div>
                    <span className="text-danger col-md-4" ref='passwordWrongFormat' > </span>
                  </div>

                  <div className="form-group">
                    <label htmlFor="inputEmail3" className="col-md-3 col-md-6 control-label">RePassword:</label>
                    <div className="col-md-5 col-md-6">
                      <input type="password"
                             className="form-control"
                             id="inputEmail3"
                             placeholder="Please input password again"
                             ref="rePassword"
                             onKeyPress={this.handleKeyPress.bind(this)}
                             onBlur={this.checkPasswordSame.bind(this)}
                      />

                    </div>
                    <span className="text-danger col-md-4" ref='passwordWrongSame' > </span>
                  </div>
                  <span className="text-danger col-md-10" > {signup}</span>
                  <div className="col-md-offset-4 col-sm-10">
                    <button onClick={this.addTodo.bind(this)} type="button"
                       className="btn btn-default">Create new
                      account
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
export default SignUp;