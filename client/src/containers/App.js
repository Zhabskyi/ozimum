import { connect } from 'react-redux';
import {loadUser} from '../store/auth';
import App from '../App';

const mapDispatchToProps = (dispatch) => ({
  loadUser: () => dispatch(loadUser())
});

const mapStateToProps = () => {
  return {}
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
