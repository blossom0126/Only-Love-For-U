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
    order.price = 100;
    this.props.confirmOrderFunction(order);

  }


  render() {
    const order = this.props.order;
    // const id = this.props.order._id;
    return (
        <div className="liuxiananshen">
            <div className='col-md-2'></div>
            <div className="container col-md-8 orderlistborder text-center">
              <br/><br/>
              <p>您好, 请填写购买信息:</p>
              <div className="col-md-11">
                <form action="#" className="form-horizontal">
                  <div className="form-group">
                    <label htmlFor="inputEmail3" className="col-md-4 col-md-6 control-label">真实姓名: </label>
                    <div className="col-md-8 col-md-6">
                      <input type="text"
                             className="form-control"
                             id="inputEmail3"
                             ref="inputName"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputEmail3" className="col-md-4 col-md-6 control-label">联系电话: </label>
                    <div className="col-md-8 col-md-6">
                      <input type="text"
                             className="form-control"
                             id="inputEmail3"
                             ref="inputTel"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputEmail3" className="col-md-4 col-md-6 control-label">收货地址: </label>
                    <div className="col-md-8 col-md-6">
                      <input type="text"
                             className="form-control"
                             id="inputEmail3"
                             ref="inputAddress"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputEmail3" className="col-md-4 col-md-6 control-label">备注: </label>
                    <div className="col-md-8 col-md-6">
                      <input type="text"
                             className="form-control"
                             id="inputEmail3"
                             ref="inputMore"
                      />
                    </div>
                  </div>
                  <div>
                    <p>订购的蛋糕信息: </p>
                    <div>{order.name}</div>
                    <img src={ '../' + order.image}></img>
                  </div>
                  <br/><br/>
                  <div className="col-md-offset-10 col-sm-10">
                    <button  type="button"
                             className="btn btn-info"
                             onClick={this.confirm.bind(this)}>确认订单
                    </button>
                  </div>
                  <br/><br/>
                </form>
              </div>
            </div>
          </div>

    );
  }
}
export default OrderList;