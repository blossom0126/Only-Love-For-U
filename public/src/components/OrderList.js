/**
 * Created by jae on 16-8-22.
 */

import React, {Component} from 'react';// eslint-disable-line no-unused-vars
class OrderList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadorder(this.props.params.id);
  }

  confirm(){
    const order = {};
    order.username = '我不是黄蓉';
    order.name = this.refs.inputName.value.trim();
    order.tel = this.refs.inputTel.value.trim();
    order.address = this.refs.inputAddress.value.trim();
    order.more = this.refs.inputMore.value.trim();
    order.cakeName = this.props.order.name;
    order.image = this.props.order.image;
    order.isPay = false;
    order.price = this.props.order.price;
    this.props.confirmOrderFunction(order);

  }


  render() {
    const order = this.props.order;
    const login = this.props.loginusername;
    return (
        <div className="orderlist">
          <div className="welcome-section">
            <div className="container">
              <div className="about-grid ">
                <div className="col-md-8 about-text">
                  <div className="col-md-4 about-img">
                    <p>订购的蛋糕信息: </p>
                    <div>{order.style}￥：{order.price}</div>

                    <img src={ '../' + order.image} className="img-responsive zoom-img"></img>
                  </div>
                  <h3>   {login},您好, 请填写购买信息:</h3><br/>

                    <form action="#" className="form-horizontal">
                      <div className="form-group">

                        <div className="col-md-6 col-md-5" >
                          <label htmlFor="inputEmail3" className="control-label">真实姓名: </label>
                          <input type="text"
                                 className="form-control"
                                 id="inputEmail3"
                                 ref="inputName"
                          />
                        </div>
                        <div className="col-md-5 col-md-5 ">
                          <label htmlFor="inputEmail3" className="control-label">联系电话: </label>
                          <input type="text"
                                 className="form-control"
                                 id="inputEmail3"
                                 ref="inputTel"
                          />
                        </div>
                          <div className="col-md-5 col-md-5">
                            <label htmlFor="inputEmail3" className="control-label">收货地址: </label>
                            <input type="text"
                                   className="form-control"
                                   id="inputEmail3"
                                   ref="inputAddress"
                            />
                          </div>



                        <div className="col-md-5 col-md-5">
                          <label htmlFor="inputEmail3" className="control-label">备注: </label>
                          <input type="text"
                                 className="form-control"
                                 id="inputEmail3"
                                 ref="inputMore"
                          />
                        </div>

                        </div>
                      </form>
<div  style={{marginTop:'20px',marginLeft:'800px'}}>
                  <button  type="button"
                           className="btn btn-info"
                           onClick={this.confirm.bind(this)}>确认订单
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
export default OrderList;