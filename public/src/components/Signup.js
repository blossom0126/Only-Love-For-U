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
    arr.push(inputn, inputp);
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
    if((password === password_2))
      this.refs.passwordWrongSame.innerHTML = '';
    else
      this.refs.passwordWrongSame.innerHTML = '两次密码不一致';
  }

  render() {
    return (
      <div className="header">
        <div className="header-top">
          <div className="container">
            <div className="top-nav">
              <span className="menu two"> </span>
              <ul>
                <li><a href="http://127.0.0.1:3000">首&nbsp; &nbsp; 页</a></li>
                <li><a className="active" href="http://127.0.0.1:3000/cakelist">蛋糕名录</a></li>

                <li><a href="http://127.0.0.1:3000/brandstory">品牌故事</a></li>
                <li><a href="http://127.0.0.1:3000/login">个人中心</a></li>
                <li><a href="http://127.0.0.1:3000/signup">注册</a></li>
                <li className="lost"><a href="http://127.0.0.1:3000/contact">联系我们</a></li>

                <div className="clearfix"></div>
              </ul>
            </div>
            <div className="clearfix"></div>
          </div>
          <div className="clearfix"></div>
        </div>
        <div className="head-bg">
          <div className="logo three">
            <a href=""><h1>ONLY <span>FOR </span>CAKES</h1></a>
          </div>
        </div>

          <div className="container">
            <div className="col-md-10 col-">
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
                             onBlur={this.checkEmail.bind(this)}
                      />
                    </div>
                    <span className="text-danger col-md-3" ref="emailWrongMessage" > </span>
                  </div>

                  <div className="form-group">
                    <label htmlFor="inputEmail3" className="col-sm-3 col-md-3 control-label">Password:</label>
                    <div className="col-sm-6 col-md-6">
                      <input type="password"
                             className="form-control"
                             id="inputEmail3"
                             placeholder="Please input password"
                             ref="inputPwd"
                             onKeyPress={this.handleKeyPress.bind(this)}
                             onBlur={this.checkPasswordFormat.bind(this)}
                      />
                    </div>
                    <span className="text-danger col-md-3" ref='passwordWrongFormat' > </span>
                  </div>

                  <div className="form-group">
                    <label htmlFor="inputEmail3" className="col-sm-3 col-md-3 control-label">RePassword</label>
                    <div className="col-sm-6 col-md-6">
                      <input type="password"
                             className="form-control"
                             id="inputEmail3"
                             placeholder="Please input password again"
                             ref="rePassword"
                             onKeyPress={this.handleKeyPress.bind(this)}
                             onBlur={this.checkPasswordSame.bind(this)}
                      />

                    </div>
                    <span className="text-danger col-md-3" ref='passwordWrongSame' > </span>
                  </div>
                  <div className="col-sm-offset-2 col-sm-10">
                    <a href="http://127.0.0.1:3000/login" onClick={this.addTodo.bind(this)} type="button"
                       className="btn btn-default">Create new
                      account
                    </a>

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