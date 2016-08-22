/**
 * Created by jae on 16-8-22.
 */

import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import Logo from './Logo';
class OrderList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadorder(this.props.params.id);
  }
  componentWillMount() {

  }

  render() {
    const order = this.props.order;
    // const id = this.props.order._id;
    return (
        <div>
          <Logo/>
          <div>{order.name}</div>
          <img src={ '../' + order.image}></img>
        </div>
    );
  }
}
export default OrderList;