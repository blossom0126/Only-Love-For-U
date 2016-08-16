import React, {Component} from 'react';// eslint-disable-line no-unused-vars

import CakeList from '../container/CakeList';
import Logo from './Logo';


class App extends Component {
  render() {
    return (
        <div>
          <Logo/>
          <CakeList/>
        </div>
    );
  }
}

export default App;
