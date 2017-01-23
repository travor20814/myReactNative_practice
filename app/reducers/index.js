import {
  combineReducers,
} from 'redux';

import {
  routerReducer,
} from 'react-router-redux';

import Login from './Login.js';

export default combineReducers({
  Login,
  routing: routerReducer,
});
