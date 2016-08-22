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
    const detail = this.props.CakeDetailReducers;
    return (
        <div>
          <Logo/>
          <img src={ '../' + detail.image}></img>
          {detail.id}
          {detail.name}
          {detail.intro}
          {detail.style}
          <Footer/>
        </div>
    );
  }
}

export default CakeDetailComponent;