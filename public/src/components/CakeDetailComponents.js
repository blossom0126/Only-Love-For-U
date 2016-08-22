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
          <p>{detail.id}</p>
          <p>{detail.name}</p>
          <p>{detail.intro}</p>
          <p>{detail.style}</p>
          <img src={ '../' + detail.image}></img>
          <Footer/>
        </div>
    );
  }
}

export default CakeDetailComponent;