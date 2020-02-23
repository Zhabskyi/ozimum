import {
  USER_LOADED,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT,
  AUTH_ERROR,
  ADMIN_LOGIN,
  ADMIN_LOGOUT
} from './actionTypes';

const INITIAL_STATE = {
  isAuthenticated: false,
  isAdmin: false,
  token: localStorage.getItem('token'),
  loading: false,
  user: null,
  error: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false
      };
    case ADMIN_LOGIN:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
        isAdmin: true
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        isAdmin: false,
        loading: false,
        user: null,
        error: action.payload
      };
    case ADMIN_LOGOUT:
      return {
        ...state,
        isAdmin: false
      };
    default:
      return state;
  }
};
