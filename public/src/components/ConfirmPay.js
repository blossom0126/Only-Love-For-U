import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import Logo from './Logo';

class ConfirmPay extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadorderinfo(this.props.params.id);
    
  }

  readyToPay () {
    this.props.ConfirmBuy(this.props.params.id);
  }
  
  render() {
    const {_id,name,tel,address,more,cakeName,image,price}=this.props.order;
    return (
            <div>
                <Logo/>
                <div className='container col-md-12'>
                    <div className="col-md-7">
                    <img src={ '../' + image}></img>
                    <span>{cakeName}</span>                       
                    </div>
                    <div className="col-md-5">
                        <table>
                        <tbody>
                            <tr>
                                <td>订单编号: </td>
                                <td>{id}</td>
                            </tr>
                            <tr>
                                <td>真实姓名: </td>
                                <td>{name}</td>
                            </tr>
                            <tr>
                                <td>联系电话: </td>
                                <td>{tel}</td>
                            </tr>
                            <tr>
                                <td>收货地址: </td>
                                <td>{address}</td>
                            </tr>
                            <tr>
                                <td>实付价格: </td>
                                <td>{price}</td>
                            </tr>
                            <tr>
                                <td>备注信息: </td>
                                <td>{more}</td>
                            </tr>
                            </tbody>
                        </table>
                      <button onClick={this.readyToPay.bind(this)} type="button"className="btn btn-info">确认支付</button>
                    </div>
                </div>
            </div>
        );
  }
}
module.exports = ConfirmPay;