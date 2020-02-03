import { connect } from 'react-redux';
import {getUser, logout} from '../store/auth';

import Navbar from '../components/navbar/Navbar';

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(logout())
});

const mapStateToProps = state => {
  return {
    user: getUser(state),
    logout: state.logout,
    isAuthenticated: state.isAuthenticated
  };
};


const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;
