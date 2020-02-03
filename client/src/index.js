import React from "react";
import ReactDOM from "react-dom";
import {ConnectedRouter, connectRouter} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import { Provider } from "react-redux";
import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import {data} from './store/data';
import {auth} from './store/auth';
import thunk from 'redux-thunk';
import App from "./containers/App";


const composeEnhancers = (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
// @ts-ignore
? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
: compose;


const history = createBrowserHistory();

const rootReducer = combineReducers({
  router: connectRouter(history),
  data,
  auth
});

const customMiddleWare = (store) => (next) => (action) => {
  next(action);
};

const store = createStore(rootReducer, undefined, composeEnhancers(
  applyMiddleware(
    customMiddleWare,
    thunk
  )
));

const app = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
