import { connect } from 'react-redux';


import PhotoPurchaseControl from '../../components/photos/photoPurchaseControl/PhotoPurchaseControl';

const mapDispatchToProps = dispatch => ({
 
});

const mapStateToProps = state => {
  return {
    // isAuthenticated: state.auth.isAuthenticated,
    // error: state.error
  };
};


const PhotoPurchaseControlContainer = connect(mapStateToProps, mapDispatchToProps)(PhotoPurchaseControl);

export default PhotoPurchaseControlContainer;
