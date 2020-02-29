import { connect } from 'react-redux';
import { downloadFree } from '../../store/data';

import PhotoActionControls from '../../components/photos/photoActionControls/PhotoActionControls';

const mapDispatchToProps = dispatch => ({
 downloadFree: (title) => dispatch(downloadFree(title))
});

const mapStateToProps = state => {
  return {
    // isAuthenticated: state.auth.isAuthenticated,
    // error: state.error
  };
};


const PhotoActionControlsContainer = connect(mapStateToProps, mapDispatchToProps)(PhotoActionControls);

export default PhotoActionControlsContainer;
