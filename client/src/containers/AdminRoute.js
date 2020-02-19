import { connect } from 'react-redux';
import {getUser, logout} from '../store/auth';

import AdminRoute from "../components/routing/AdminRoute";

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(logout())
});

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    isAuthenticated: state.auth.isAuthenticated,
    isAdmin: state.auth.isAdmin
  };
};


const PrivateRouteContainer = connect(mapStateToProps, mapDispatchToProps)(AdminRoute);

export default PrivateRouteContainer;
