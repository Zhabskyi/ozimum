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
import keys from '../../keys';

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

export const addSingleImage = image => async dispatch => {
  try {

    const response = await axios({
      method: 'GET',
      url: `https://ynn8lzoi8e.execute-api.us-east-1.amazonaws.com/default/uploadImage`
    })

    console.log('Response: ', response.data);
    console.log('Uploading: ', image);

    let binary = atob(image.split(',')[1]);
    let array = []
    for (var i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i))
    }
    let blobData = new Blob([new Uint8Array(array)], {type: 'image/jpeg'})
    console.log('Uploading to: ', response.data.uploadURL)
    const result = await fetch(response.data.uploadURL, {
      method: 'PUT',
      body: blobData
    })


    const uploadURL = response.data.uploadURL.split('?')[0];
    console.log(uploadURL)
    
  } catch (err) {
    console.log("ERROR",err)
    dispatch({
      type: PHOTO_ERROR,
      payload: err.response
    });
  }
}

export const downloadFree = title => (dispatch) => {
  // const res = axios.get(`/photos/${title}`);
  // console.log(res)
  window.location = `http://localhost:3050/api/photos/${title}`;

};
