import {
  ADD_PHOTO,
  EDIT_PHOTO,
  DELETE_PHOTO,
  GET_PHOTOS,
  PHOTO_ERROR,
  SET_LOADING,
  SET_PHOTO
} from './actionTypes';
import axios from '../../utils/axios-instance';

export const loadPhotos = () => async dispatch => {
  try {
    const res = await axios.get('/photos');
    const revItems = Object.values(res.data).reverse();
    dispatch({
      type: GET_PHOTOS,
      payload: revItems
    });
  } catch (err) {
    dispatch({
      type: PHOTO_ERROR,
      payload: err.response
    });
  }
};

export const addPhoto = photo => async dispatch => {
  dispatch({
    type: SET_LOADING
  });

  try {
    const res = await axios.post('/photos', photo);

    dispatch({
      type: ADD_PHOTO,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PHOTO_ERROR,
      payload: err.response
    });
  }
};

export const downloadFree = title => (dispatch) => {
  window.location = `http://localhost:3050/api/photos/${title}`;

};
