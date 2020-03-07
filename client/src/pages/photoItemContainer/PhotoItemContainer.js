import { connect } from 'react-redux';
import { getPhotos } from '../../store/data';
import { withRouter } from 'react-router-dom';
import PhotoItem from '../photoItem/PhotoItem';

const mapDispatchToProps = dispatch => ({
  
});

const mapStateToProps = state => {
  return {
    photos: getPhotos(state)
  };
};

const PhotoItemContainer = connect(mapStateToProps, mapDispatchToProps)(PhotoItem);

export default withRouter(PhotoItemContainer);
