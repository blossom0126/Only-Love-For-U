import React from 'react'; // eslint-disable-line no-unused-vars
import {render} from 'react-dom';
import {Router, Route, browserHistory,IndexRoute} from 'react-router';
import CakeDetailContainer from './container/CakeDetailContainer';
import OrderListContainer from './container/OrderListContainer';
import CakesList from './components/CakeList';
import Notfound from './components/404';
import BrandStory from './components/BrandStory';
import Orderlist from './components/OrderList';
import ConfirmPay from './container/ConfirmPayContainer';
import PersonalInfo from './container/personalInfo';
import personalCollection from './container/CollectionContainer';
import Login from './container/LogIn';
import Slide from './components/SlideShow';
import APP from './components/App';
import MainView from './container/ValidLogin';
import Contact from './components/Contact';
import AddTodo from './container/AddTodo';
import cakeList from './reducers';
import Exclusive from './components/Exclusive';
import Presoncenter from './container/PersonCenter';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import cakeRequestMiddleware from './middlewares/cakeRequestMiddleware';
import signUpRequestMiddleware from './middlewares/signUpRequestMiddleware';
import cakeDetailRequestMiddleware from './middlewares/cakeDetailRequestMiddleware';
import loginRequestMiddleware from './middlewares/loginRequestMiddleware';
import orderRequestMiddleware from './middlewares/orderRequestMiddleware';
import confirmOrderMiddleware from './middlewares/confirmOrderMiddleware';
import validLoginRequestMiddleware from './middlewares/validLoginRequestMiddleware';
import {validLogin} from './actions/validLogin';
import getOrderInfoMiddleware from './middlewares/getOrderInfoMiddleware';
import confirmPayMiddleware from './middlewares/confirmPayMiddleware';
import personalInfoMiddleware from './middlewares/personalInfoMiddleware';
import personalCollecMiddleware from './middlewares/collectionMiddleware';

const store = createStore(
    cakeList,
    applyMiddleware(cakeRequestMiddleware, loginRequestMiddleware,
        signUpRequestMiddleware, cakeDetailRequestMiddleware,
        orderRequestMiddleware,getOrderInfoMiddleware,confirmPayMiddleware
    ,confirmOrderMiddleware, validLoginRequestMiddleware,personalInfoMiddleware,personalCollecMiddleware)
);

store.dispatch({
  type: 'INIT'
});

function validateLogin() {
  store.dispatch(validLogin());
}

render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={MainView}>
          <IndexRoute component={APP}/>
          <Route path="/login" component={Login}/>
          <Route path="/cakelist" component={CakesList}/>
          <Route path="/brandstory" component={BrandStory}/>
          <Route path="/slideshow" component={Slide}/>
          <Route path="/presoncenter" component={Presoncenter} onEnter={validateLogin}/>
          <Route path="/personalInfo" component={PersonalInfo} onEnter={validateLogin} />
          <Router path="/personalCollection" component={personalCollection} onEnter={validateLogin} />
          <Route path="/exclusive" component={Exclusive} onEnter={validateLogin}/>
          <Route path="/orderlist" component={Orderlist}/>
          <Route path="/confirmpay/:id" component={ConfirmPay}/>
          <Route path="/signup" component={AddTodo}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/404" component={Notfound}/>
          <Route path="/cakedetail/:id" component={CakeDetailContainer} onEnter={validateLogin}/>
          <Route path="/orderlist/:id" component={OrderListContainer} onEnter={validateLogin}/>
        </Route>
      </Router>
    </Provider>,
    document.getElementById('app')
);