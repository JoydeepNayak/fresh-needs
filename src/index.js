import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import ReduxLogger from 'redux-logger';
import Reducers from './reducers';

const enhancersDev = [ReduxThunk, ReduxLogger];
const enhancersProd = [ReduxThunk];
const store = () => {
  if (process.env.NODE_ENV === 'production') {
    return createStore(Reducers, applyMiddleware(...enhancersProd))
  }
  return createStore(Reducers, applyMiddleware(...enhancersDev))
};

ReactDOM.render(
  <Provider store={store()}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>, document.getElementById('root'));