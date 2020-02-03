import { connect } from 'react-redux';
import { showModal, login } from '../store/actions';
import {getUser} from '../store/auth/selector';

import Navbar from '../components/navbar/Navbar';

const mapStateToProps = state => {
  return {
    isShowModal: state.app.isShowModal
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  onModal: isShowModal => dispatch(showModal(isShowModal)),
  onLogin: isAuthenticated => dispatch(login(isAuthenticated)),
  user: getUser(state),
  logout: state.logout,
  isAuthenticated: state.isAuthenticated
});

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;
