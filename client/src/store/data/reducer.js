import {
  ADD_PHOTO,
  EDIT_PHOTO,
  DELETE_PHOTO,
  PHOTO_ERROR
} from "./actionTypes";

const INITIAL_STATE = {
  photos: null,
  loading: false,
  error: null
};

export default (state = INITIAL_STATE, action) => {
  
  switch (action.type) {
    case ADD_PHOTO:
      return {
        ...state,
        photos: [...state.photos, action.payload ],
        loading: false
      };
    case EDIT_PHOTO:
      return {
        ...state,
        photos: state.photos.map(photo =>
          photo.id === Number(action.payload.id) ? action.payload : photo
        ),
        loading: false
      };
    case DELETE_PHOTO:
      return {
        ...state,
        photos: state.photos.filter(item => item.id !== action.payload),
        loading: false
      };
    case PHOTO_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return { ...state };
  }
};
