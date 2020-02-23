import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  getUser,
  logout,
  getIfLogout,
  getIfAuthenticated,
  getIfAdmin
} from '../store/auth';

import Navbar from '../components/navbar/Navbar';

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(logout())
});

const mapStateToProps = state => {
  return {
    user: getUser(state),
    logout: getIfLogout(state),
    isAuthenticated: getIfAuthenticated(state),
    isAdmin: getIfAdmin(state)
  };
};

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default withRouter(NavbarContainer);
