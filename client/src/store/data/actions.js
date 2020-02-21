import {
  ADD_PHOTO,
  EDIT_PHOTO,
  DELETE_PHOTO,
  PHOTO_ERROR
} from "./actionTypes";

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