import { connect } from 'react-redux';
//import {registerUser} from '../../store/auth';

import FormAddPhoto from '../../components/forms/FormAddPhoto';

const mapDispatchToProps = dispatch => ({
  // registerUser: (data) => dispatch(registerUser(data))
});

const mapStateToProps = state => {
  return {
    // isAuthenticated: state.auth.isAuthenticated,
    // error: state.error
  };
};


const FormAddPhotoContainer = connect(mapStateToProps, mapDispatchToProps)(FormAddPhoto);

export default FormAddPhotoContainer;
