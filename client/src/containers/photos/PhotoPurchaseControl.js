import { connect } from 'react-redux';
import { downloadFree } from '../../store/data';


import PhotoPurchaseControl from '../../components/photos/photoPurchaseControl/PhotoPurchaseControl';

const mapDispatchToProps = dispatch => ({
  downloadFree: (title) => dispatch(downloadFree(title))
});

const mapStateToProps = state => {
  return {
    // isAuthenticated: state.auth.isAuthenticated,
    // error: state.error
  };
};


const PhotoPurchaseControlContainer = connect(mapStateToProps, mapDispatchToProps)(PhotoPurchaseControl);

export default PhotoPurchaseControlContainer;
