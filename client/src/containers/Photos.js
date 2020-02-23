import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loadPhotos, getPhotos, getIfLoading } from '../store/data';

import Photos from '../components/photos/Photos';

const mapDispatchToProps = dispatch => ({
  loadPhotos: () => dispatch(loadPhotos())
});

const mapStateToProps = state => {
  return {
    photos: getPhotos(state),
    loading: getIfLoading(state)
  };
};

const PhotosContainer = connect(mapStateToProps, mapDispatchToProps)(Photos);

export default withRouter(PhotosContainer);
