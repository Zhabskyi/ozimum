import {
  ADD_PHOTO,
  EDIT_PHOTO,
  DELETE_PHOTO,
  PHOTO_ERROR,
  GET_PHOTOS,
  SET_LOADING,
  SET_PHOTO
} from "./actionTypes";

const INITIAL_STATE = {
  photos: null,
  loading: false,
  error: null,
  photo: null
};

export default (state = INITIAL_STATE, action) => {
  
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_PHOTOS:
      return {
        ...state,
        photos: action.payload,
        loading: false
      };
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

      case SET_PHOTO:
        return {
          ...state,
          photo: action.payload
        };
    default:
      return { ...state };
  }
};

