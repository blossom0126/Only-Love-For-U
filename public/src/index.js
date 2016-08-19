import React from 'react'; // eslint-disable-line no-unused-vars
import {render} from 'react-dom';
import CakeList from './components/CakeList';
import BrandStory from './components/BrandStory';
import Login from './components/PersonCenter';
import Slide from './components/SlideShow';
import APP from './components/App';
import Contact from './components/Contact';
import AddTodo from './container/AddTodo';
import cakeList from './reducers';
import CakeDetail from './components/CakeDetail';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import cakeRequestMiddleware from './middlewares/cakeRequestMiddleware';
import todoRequestMiddleware from './middlewares/todoRequestMiddleware';
import cakeDetailRequestMiddleware from './middlewares/cakeDetailRequestMiddleware';
import {Router, Route, browserHistory} from 'react-router';
const store = createStore(
    cakeList,
    applyMiddleware(cakeRequestMiddleware, todoRequestMiddleware, cakeDetailRequestMiddleware)
);

store.dispatch({
  type: 'INIT'
});

render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={APP}/>
        <Route path="/login" component={Login}/>
        <Route path="/cakelist" component={CakeList}/>
        <Route path="/brandstory" component={BrandStory}/>
        <Route path="/slideshow" component={Slide}/>
        <Route path="/signup" component={AddTodo}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/cakedetail/:id" component={CakeDetail}/>
      </Router>
    </Provider>,
    document.getElementById('app')
);