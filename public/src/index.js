import React from 'react'; // eslint-disable-line no-unused-vars
import {render} from 'react-dom';
import CakeList from './components/CakeList';
import BrandStory from './components/BrandStory';
import Login from './components/Login';
import Slide from './components/SlideShow';
import AddTodo from './container/AddTodo';
import cakeList from './reducers';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import cakeRequestMiddleware from './middlewares/cakeRequestMiddleware';
import { Router, Route, browserHistory} from 'react-router';
const store = createStore(
    cakeList,
    applyMiddleware(cakeRequestMiddleware)
);

store.dispatch({
  type: 'INIT'
});

render(
    <Provider store={store}>
      <Router history={browserHistory}>
      <Route path="/login" component={Login}/>
      <Route path="/cakelist" component={CakeList}/>
        <Route path="/brandstory" component={BrandStory}/>
        <Route path="/slideshow" component={Slide}/>
        <Route path="/signup" component={AddTodo}/>
      </Router>
    </Provider>,
    document.getElementById('app')
);