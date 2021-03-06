import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {loadUser} from '../store/auth';
import App from '../App';

const mapDispatchToProps = (dispatch) => ({
  loadUser: () => dispatch(loadUser())
});

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default withRouter(AppContainer);
