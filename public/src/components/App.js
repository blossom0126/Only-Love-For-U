import React, {Component} from 'react';// eslint-disable-line no-unused-vars

import CakeList from '../container/CakeList';
import Logo from './Logo';
import SlideShow from './SlideShow';
import BrandStory from './BrandStory';
import AddTodo from '../container/AddTodo';


class App extends Component {
  render() {
    return (
        <div>
          <Logo/>
          <BrandStory/>
          <AddTodo/>
          <SlideShow/>
          {/*<CakeList/>*/}
        </div>
    );
  }
}

export default App;
