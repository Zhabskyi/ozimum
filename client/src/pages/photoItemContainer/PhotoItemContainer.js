import { connect } from 'react-redux';
import { getPhotos } from '../../store/data';

import PhotoItem from '../photoItemContainer/PhotoItemContainer';

const mapDispatchToProps = dispatch => ({
  
});

const mapStateToProps = state => {
  return {
    photos: getPhotos(state)
  };
};

const PhotoItemContainer = connect(mapStateToProps, mapDispatchToProps)(PhotoItem);

export default PhotoItemContainer;
