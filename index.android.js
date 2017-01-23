import 'es6-symbol/implement';
import {
  AppRegistry,
} from 'react-native';
import React, {
  Component,
} from 'react';
import {
  Provider,
} from 'react-redux';
import {
  createStore,
  applyMiddleware,
} from 'redux';
import {
  Router,
  Route,
  IndexRoute,
  IndexRedirect,
  createMemoryHistory,
} from 'react-router';
import {
  syncHistoryWithStore,
  routerMiddleware,
} from 'react-router-redux';
import thunk from 'redux-thunk';
import fetchMiddleware from 'redux-middleware-fetch';

import reducers from './app/reducers/index.js';

import MainBoard from './app/components/MainBoard.js';
import Navigation from './app/containers/Navigation.js';

const memoryHistory = createMemoryHistory();

export const store = createStore(reducers, {}, applyMiddleware(
  thunk,
  fetchMiddleware,
  routerMiddleware(memoryHistory),
));

const history = syncHistoryWithStore(memoryHistory, store);

export default class myReactNativeApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={MainBoard}>
            <Route path="navigation" component={Navigation} pathKey="navigation" />
            <IndexRedirect to="navigation" />
          </Route>
        </Router>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('myReactNativeApp', () => myReactNativeApp);
