import React, {Component} from 'react';
class PersonalInfo extends Component {

    constructor() {
        super();
        this.state = {
            realNameResult: false,
            telPhoneResult: false,
            addressResult: false,
            ageResult :false,
            wechatResult:false
        };
    }

    addTodo2() {
        let arr = [];
        let user = this.props.loginusername;
        let inputReal = this.refs.inputRealName.value.trim();
        let inputTel = this.refs.inputTel.value.trim();
        let inputAddress = this.refs.inputAddress.value.trim();
        let inputAge = this.refs.inputAge.value.trim();
        let inputWechat = this.refs.inputWechat.value.trim();
        arr.push(user,inputReal, inputTel, inputAddress,inputAge,inputWechat);
        if (arr) {
            this.props.addTodo2(arr);
        }
        this.refs.inputRealName.value = '';
        this.refs.inputTel.value = '';
        this.refs.inputAddress.value = '';
    }


    handleKeyPress(e) {
        if (13 !== e.charCode) {
            return;
        }
        this.addTodo2();
    }

    checkName() {
        let password = this.refs.inputRealName.value.trim();
        let patt = /^[\u4E00-\u9FA5]+$/;
        this.state.realName = patt.test(password);
        if (!patt.test(password))
            this.refs.realNameWrongFormat.innerHTML = '姓名为简体汉字';
        else
            this.refs.realNameWrongFormat.innerHTML = '';
    }

    checkAddress() {
        let rePassword = this.refs.inputAddress.value.trim();
        let pattern = /^[\u4E00-\u9FA5]+$/;
        this.state.addressResult = pattern.test(rePassword);
        if (!pattern.test(rePassword))
            this.refs.addressWrong.innerHTML = '详细地址为汉字';
        else
            this.refs.addressWrong.innerHTML = '';
    }



    checkTelphone() {
        let telphone = this.refs.inputTel.value.trim();
        let pattern = /^1[3|4|5|7|8][0-9]\d{8}$/;
        this.state.telPhoneResult = pattern.test(telphone);
        if (!pattern.test(telphone))
            this.refs.inputTelWrong.innerHTML = '请输入正确的手机号';
        else
            this.refs.inputTelWrong.innerHTML = '';
    }
    checkAge(){
        let age = this.refs.inputAge.value.trim();

        if(age<0 || age > 150){
            this.state.ageResult = false;
            this.refs.inputAgeWrong.innerHTML = '请输入合法的年龄';
        }else{
            this.state.ageResult = true;
            this.refs.inputAgeWrong.innerHTML = '';
        }
    }

    checkWechat(){
        let wechat = this.refs.inputWechat.value.trim();
        let pattern = /^1[3|4|5|7|8][0-9]\d{8}$/;
        this.state.wechatResult = pattern.test(wechat);
        if(!pattern.test(wechat)){
            this.refs.inputWechatWrong.innerHTML = '请输入正确的微信号';
        }else{
            this.refs.inputWechatWrong.innerHTML = '';
        }

    }
    render() {

        const {PersonalInfo} = this.props;
        let user = this.props.loginusername;

        return (
            <div>
                <div className="container">
                    <h3>Hi, {user}为了给您提供个性化的服务请您完善个人资料</h3>
                    <div className="col-md-10">
                        <div className="col-md-10 ">
                            <form action="#" className="form-horizontal col-md-12">

                                <div className="form-group">
                                    <label htmlFor="inputEmail3"
                                           className="col-md-3 col-md-6 control-label">RealName:</label>
                                    <div className="col-md-5 col-md-6">
                                        <input type="text"
                                               className="form-control"
                                               id="inputEmail3"
                                               placeholder="Please input your real name"
                                               ref="inputRealName"
                                               onKeyPress={this.handleKeyPress.bind(this)}
                                               onBlur={this.checkName.bind(this)}
                                        />
                                    </div>
                                    <span className="text-danger col-md-4" ref='realNameWrongFormat'> </span>
                                </div>


                                <div className="form-group">
                                    <label htmlFor="inputEmail3"
                                           className="col-md-3 col-md-6 control-label">Telphone:</label>
                                    <div className="col-md-5 col-md-6">
                                        <input type="text"
                                               className="form-control"
                                               id="inputEmail3"
                                               placeholder="Please input your telphone"
                                               ref="inputTel"
                                               onKeyPress={this.handleKeyPress.bind(this)}
                                               onBlur={this.checkTelphone.bind(this)}
                                        />
                                    </div>
                                    <span className="text-danger col-md-4" ref='inputTelWrong'> </span>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="inputEmail3"
                                           className="col-md-3 col-md-6 control-label">age:</label>
                                    <div className="col-md-5 col-md-6">
                                        <input type="text"
                                               className="form-control"
                                               id="inputEmail3"
                                               placeholder="Please input your age"
                                               ref="inputAge"
                                               onKeyPress={this.handleKeyPress.bind(this)}
                                               onBlur={this.checkAge.bind(this)}
                                        />
                                    </div>
                                    <span className="text-danger col-md-4" ref='inputAgeWrong'> </span>
                                </div>


                                <div className="form-group">
                                    <label htmlFor="inputEmail3"
                                           className="col-md-3 col-md-6 control-label">wechat:</label>
                                    <div className="col-md-5 col-md-6">
                                        <input type="text"
                                               className="form-control"
                                               id="inputEmail3"
                                               placeholder="Please input your wechat"
                                               ref="inputWechat"
                                               onKeyPress={this.handleKeyPress.bind(this)}
                                               onBlur={this.checkWechat.bind(this)}
                                        />
                                    </div>
                                    <span className="text-danger col-md-4" ref='inputWechatWrong'> </span>
                                </div>


                                <div className="form-group">
                                    <label htmlFor="inputEmail3"
                                           className="col-md-3 col-md-6 control-label">address:</label>
                                    <div className="col-md-5 col-md-6">
                                        <input type="text"
                                               className="form-control"
                                               id="inputEmail3"
                                               placeholder="Please input your addresss"
                                               ref="inputAddress"
                                               onKeyPress={this.handleKeyPress.bind(this)}
                                               onBlur={this.checkAddress.bind(this)}
                                        />

                                    </div>
                                    <span className="text-danger col-md-4" ref='addressWrong'> </span>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="inputEmail3"
                                           className="col-md-3 col-md-6 control-label">tip:</label>
                                    <div className="col-md-5 col-md-6">
                                        <div className="alert alert-info" role="alert">请您在第一次填写地址的时候仔细核对，如有错误请及时修改</div>

                                    </div>
                                    <span className="text-danger col-md-4"> </span>
                                </div>



                                <div className="form-group">
                                    <label htmlFor="inputEmail3"
                                           className="col-md-3 col-md-6 control-label">sex:</label>
                                    <div className="col-md-5 col-md-6">
                                        <label className="radio-inline">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <input type="radio" name="inlineRadioOptions" id="inlineRadio1"
                                                   value="option1"/> Sir
                                        </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <label className="radio-inline">
                                            <input type="radio" name="inlineRadioOptions" id="inlineRadio2"
                                                   value="option2"/> Miss
                                        </label>
                                    </div>
                                    <span className="text-danger col-md-4"> </span>
                                </div>

                                <span className="text-danger col-md-10"> {PersonalInfo}</span>
                                <div className="col-md-offset-4 col-sm-10">
                                    <button onClick={this.addTodo2.bind(this)} type="button"
                                     className="btn btn-primary">save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PersonalInfo;