/**
 * Created by jae on 16-8-16.
 */
import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import CakeList from '../container/CakeList';
import Logo from './Logo';
import Footer from './Footer';

class CakesList extends Component {
  render() {
    return (
        <div>
          <Logo/>
          <CakeList/>
          <Footer/>
        </div>
    );
  }
}

export default CakesList;
