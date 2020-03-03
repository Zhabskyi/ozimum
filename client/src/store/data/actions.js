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
    await axios({
      method: 'get',
      url: `/photos/${title}`
    }).then((res, e) => { window.location = `http://localhost:3050/api/photos/${title}`; e.preventDefault();})
  //   const blob = res.data;
  //  console.log(res.data.length)

  //  let link = document.createElement('a');
  // link.download = 'hello.jpg';

  //  var blob = await new Blob([res.data], { type: 'image/jpg' });
  //  link.href = URL.createObjectURL(blob);
  //  link.click();

  // URL.revokeObjectURL(link.href);
 
  //  var sizeInBytes = blob.size;
  //  console.log(sizeInBytes);
  //  let reader = new FileReader(); 
  //  reader.readAsArrayBuffer(blob);

  //  reader.onload = function() {
  //   console.log(reader.result);
  // };

  // reader.onerror = function() {
  //   console.log(reader.error);
  // };


    // var base64Flag = 'data:image/jpeg;base64,';
    // var imageStr = arrayBufferToBase64(res.data);
    // const img = base64Flag + imageStr;
  //   const blob = new Blob([res.data], { type: 'image/jpg' });
    
              //   if(window.navigator.msSaveOrOpenBlob) {
              //     window.navigator.msSaveBlob(blob, `${title}`);
              // }
              // else{
              //     var elem = window.document.createElement('a');
              //     elem.href = window.URL.createObjectURL(blob);
              //     elem.download = `${title}`;        
              //     document.body.appendChild(elem);
              //     elem.click();        
              //     document.body.removeChild(elem);
              // }
    
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
   //dataURLReader.readAsBinaryString(img);


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
