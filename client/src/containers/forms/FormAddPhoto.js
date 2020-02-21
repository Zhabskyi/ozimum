import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { addPhoto } from '../../store/data';

import FormAddPhoto from '../../components/forms/FormAddPhoto';

const mapDispatchToProps = dispatch => ({
  addItem: (data) => dispatch(addPhoto(data))
});

const mapStateToProps = state => {
  return {
    // isAuthenticated: state.auth.isAuthenticated,
    // error: state.error
  };
};


const FormAddPhotoContainer = connect(mapStateToProps, mapDispatchToProps)(FormAddPhoto);

export default withRouter(FormAddPhotoContainer);
