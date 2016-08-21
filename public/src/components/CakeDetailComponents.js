/**
 * Created by hanyile on 16/8/18.
 */

import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import Logo from './Logo';
import Footer from './Footer';

class CakeDetailComponent extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadPage(this.props.params.id);
  }

  render() {
    return (
        <div>
          <Logo/>
          <p>{this.props.params.id}</p>
          <div>这里展示详情页</div>
          <Footer/>
        </div>
    );
  }
}

export default CakeDetailComponent;