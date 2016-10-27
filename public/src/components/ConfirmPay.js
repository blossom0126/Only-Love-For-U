import React, {Component} from 'react';// eslint-disable-line no-unused-vars

class ConfirmPay extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadorderinfo(this.props.params.id);
    }

    readyToPay() {
        /* <div className="wel-grid">
         <div className="col-md-4 welcome-text">
         <h3>Welcome</h3>
         <h4>TO RESTAURANT!</h4>
         <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
         </div>
         <div className="col-md-8 welcome-img">
         <img src="images/img_03.jpg" className="img-responsive" alt="" />
         </div>
         <div className="clearfix"> </div>
         </div>*/
        this.props.ConfirmBuy(this.props.params.id);
    }

    render() {
        const username = this.props.loginusername;
        const {_id, name, tel, address, more, cakeName, image, price}=this.props.orderInfo;
        return (
            <div className="confirmpay">
                <div className="welcome-section">
                    <div className="container">
                        <div className="about-grid ">

                            <div className="col-md-8 about-text">
                                <h4 style={{marginBottom: '10px'}}>Hello！{username} Your Order!</h4>
                                <div className="col-md-4 about-img">
                                    <img src={ '../' + image} className="img-responsive zoom-img"
                                         style={{marginLeft: '30px'}} alt=""/>
                                </div>

                                <div style={{marginLeft: '540px'}}>
                                    <h4>蛋糕名称：{cakeName}</h4>
                                    <p>订单编号:{_id}</p>
                                    <p>真实姓名:{name}</p>
                                    <p>联系电话: {tel}</p>
                                    <p>收货地址:{address}</p>
                                    <p>实付价格:{price}元</p>
                                    <p>备注信息:{more}</p>

                                </div>
                                <div style={{marginTop: '20px', marginLeft: '800px'}}>
                                    <button onClick={this.readyToPay.bind(this)} type="button" className="btn btn-info">
                                        确认支付
                                    </button>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
module.exports = ConfirmPay;