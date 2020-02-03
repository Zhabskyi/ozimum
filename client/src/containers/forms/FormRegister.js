import { connect } from 'react-redux';
import {registerUser} from '../store/auth';

import Navbar from '../components/navbar/Navbar';

const mapDispatchToProps = dispatch => ({
  registerUser: (data) => dispatch(registerUser(data))
});

const mapStateToProps = state => {
  return {
    isAuthenticated: state.isAuthenticated,
    error: state.error
  };
};


const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;
