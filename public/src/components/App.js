import React, {Component} from 'react';// eslint-disable-line no-unused-vars

import CakeList from '../container/CakeList';
import Logo from './Logo';
import BrandStory from './BrandStory';


class App extends Component {
  render() {
    return (
        <div>
          <Logo/>
          <CakeList/>
          <BrandStory/>
        </div>
    );
  }
}

export default App;
