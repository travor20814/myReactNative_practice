import {
  LOGIN_SUCCESS,
} from '../actions/Login.js';

export default (state = {
  userName: '',
}, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        userName: action.name,
      };
    default:
      return state;
  }
};
