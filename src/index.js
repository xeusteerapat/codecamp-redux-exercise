import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { personReducer } from './store/reducer';
import './index.css';
import App from './App';

const logger1 = store => {
  return next => {
    return action => {
      console.log('[Middleware logger 1] ... dispatching', action);
      next(action);
      console.log(store.getState(), '...logger1');
    };
  };
};

const logger2 = store => {
  return next => {
    return action => {
      console.log('[Middleware logger 2] ... dispatching', action);
      next(action);
      console.log(store.getState(), '...logger2');
    };
  };
};

const composeEnchancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  personReducer,
  composeEnchancers(applyMiddleware(logger1, logger2, thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
