import { connect } from 'react-redux';
import {getUser, logout} from '../store/auth';

import Navbar from '../components/navbar/Navbar';

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(logout())
});

const mapStateToProps = state => {
  return {
    user: getUser(state),
    logout: state.auth.logout,
    isAuthenticated: state.auth.isAuthenticated
  };
};


const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;
