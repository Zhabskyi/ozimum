import {
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  AUTH_ERROR
} from './actionTypes';
import { LOCATION_CHANGE } from 'connected-react-router';
import setAuthToken from '../../utils/setAuthToken';
import axios from '../../utils/axios-instance';
import keys from '../../keys';

// Load User
export const loadUser = () => async (dispatch) => {
  setAuthToken(localStorage.token);

  try {
    const res = await axios.get('/auth');

    if (res.data.msg !== 'Authorization denied!') {
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    }
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};

// Register User
export const registerUser =  (data) => async (dispatch) => {
  try {
    const res = await axios.post('/users', data);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });

  } catch (err) {
    console.log(err)
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response.data
    });
  }
};

// Login User
export const login = (formData) => async (dispatch) => {
  try {
    const res = await axios.post('/auth', formData);
    console.log(res.data)
    console.log(process.env);

    if (res.data.token === keys.adminSecret) {
      console.log("DONE")
    }

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    loadUser();
  } catch (err) {
    console.log('Error, login fail' + err);
  }
};

  // Logout
export  const logout = () => dispatch => dispatch({ type: LOGOUT });

export const authError = () => dispatch => {
  dispatch({
    type: LOCATION_CHANGE,
    payload: {
      location: {
        pathname: '/'
      },
      action: 'POP'
    }
  });
};