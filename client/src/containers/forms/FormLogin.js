import { connect } from 'react-redux';
import { login } from '../../store/auth';

import FormLogin from '../../components/forms/FormLogin';

const mapDispatchToProps = dispatch => ({
  login: data => dispatch(login(data))
});

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isAdmin: state.auth.isAdmin
  };
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(FormLogin);

export default LoginContainer;
