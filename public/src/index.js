import React from 'react'; // eslint-disable-line no-unused-vars
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import cakeList from './reducers';

import Login from './container/LogIn';
import AddTodo from './container/AddTodo';
import CakeDetailContainer from './container/CakeDetailContainer';

import CakesList from './components/CakeList';
import BrandStory from './components/BrandStory';
import Slide from './components/SlideShow';
import APP from './components/App';
import Contact from './components/Contact';

import cakeRequestMiddleware from './middlewares/cakeRequestMiddleware';
import todoRequestMiddleware from './middlewares/todoRequestMiddleware';
import cakeDetailRequestMiddleware from './middlewares/CakeDetailRequestMiddleware';
import loginRequestMiddleware from './middlewares/loginRequestMiddleware';

const store = createStore(
    cakeList,
    applyMiddleware(cakeRequestMiddleware, loginRequestMiddleware, todoRequestMiddleware, cakeDetailRequestMiddleware)
);

store.dispatch({
  type: 'INIT'
});

render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={APP}/>
        <Route path="/login" component={Login}/>
        <Route path="/cakelist" component={CakesList}/>
        <Route path="/brandstory" component={BrandStory}/>
        <Route path="/slideshow" component={Slide}/>
        <Route path="/signup" component={AddTodo}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/cakedetail/:id" component={CakeDetailContainer}/>
      </Router>
    </Provider>,
    document.getElementById('app')
);