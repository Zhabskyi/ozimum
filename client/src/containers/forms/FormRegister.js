import { connect } from 'react-redux';
import {registerUser} from '../../store/auth';

import FormRegister from '../../components/forms/FormRegister';

const mapDispatchToProps = dispatch => ({
  registerUser: (data) => dispatch(registerUser(data))
});

const mapStateToProps = state => {
  return {
    isAuthenticated: state.isAuthenticated,
    error: state.error
  };
};


const RegisterContainer = connect(mapStateToProps, mapDispatchToProps)(FormRegister);

export default RegisterContainer;
