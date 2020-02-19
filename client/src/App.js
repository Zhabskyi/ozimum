import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Navbar from './containers/Navbar';
import TopSection from './components/topSection/TopSection';
import Register from './containers/forms/FormRegister';
import Login from './containers/forms/FormLogin';
import PrivateRoute from './containers/AdminRoute';
import AddPhoto from './containers/forms/FormAddPhoto';

const App = props => {
  useEffect(() => {
    props.loadUser();
    // eslint-disable-next-line
  }, [props.isAuthenticated]);
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={TopSection} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <PrivateRoute exact path='/admin'>
            <div>Private</div>
            <AddPhoto />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
