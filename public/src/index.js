import React from 'react'; // eslint-disable-line no-unused-vars
import {render} from 'react-dom';
import CakesList from './components/CakeList';
import BrandStory from './components/BrandStory';
import Login from './container/LogIn';
import Slide from './components/SlideShow';
import APP from './components/App';
import Contact from './components/Contact';
import AddTodo from './container/AddTodo';
import cakeList from './reducers/index';
import CakeDetail from './components/CakeDetail';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import cakeRequestMiddleware from './middlewares/cakeRequestMiddleware';
import todoRequestMiddleware from './middlewares/todoRequestMiddleware';
import loginRequestMiddleware from './middlewares/loginRequestMiddleware';
import {Router, Route, browserHistory} from 'react-router';
const store = createStore(
    cakeList,
    applyMiddleware(cakeRequestMiddleware,loginRequestMiddleware, todoRequestMiddleware)
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
        <Route path="/cakedetail" component={CakeDetail}/>
      </Router>
    </Provider>,
    document.getElementById('app')
);