import {
  ADD_PHOTO,
  EDIT_PHOTO,
  DELETE_PHOTO,
  PHOTO_ERROR
} from "./actionTypes";

export const addPhoto = photo => async (dispatch, getState) => {
  const state = getState();
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

  //Add Item
  const addItem = async item => {
    try {
      const res = await axios.post("http://localhost:8001/api/items", item);

      dispatch({
        type: ADD_ITEM,
        payload: res.data
      });
     getMyItems(res.data.user_id);
    } catch (err) {
      dispatch({
        type: ITEM_ERROR,
        payload: err.response
      });
    }
  };