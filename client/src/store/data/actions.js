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

// function arrayBufferToBase64(buffer) {
//   let binary = '';
//   let bytes = [].slice.call(new Uint8Array(buffer));
//   bytes.forEach((b) => binary += String.fromCharCode(b));
//   return window.btoa(binary);
// };

export const downloadFree = title => async (dispatch) => {
  try {
    const res = await axios.get(`/photos/${title}`);
    console.log(res)
    //const blob = new Blob(res.data);
    //var buffer = await Blob.arrayBuffer(res);
    
    //var dataURLReader = new FileReader();
    // dataURLReader.onload = function(event) {
    //   // Parse image properties
    //   var dataURL = res.data;

    //   var image = new Image();
    //   image.src = dataURL;
    //   image.onload = function() {
    //     console.log("Image width: " + this.width);
    //     console.log("Image height: " + this.height);
    //   };
    // };
   // dataURLReader.readAsBinaryString(blob);


    // let photo = {

    // }
  } catch (err) {
    console.log(err)
    dispatch({
      type: PHOTO_ERROR,
      payload: err.response
    });
  }

}
