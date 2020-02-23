import {
  ADD_PHOTO,
  EDIT_PHOTO,
  DELETE_PHOTO,
  GET_PHOTOS,
  PHOTO_ERROR
} from "./actionTypes";
import axios from '../../utils/axios-instance';


export  const getPhotos = async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:8001/api/photos");
      const revItems = Object.values(res.data).reverse()
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

export const addPhoto = photo => async (dispatch) => {
  try {
    const res = await axios.post("/photos", photo);

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