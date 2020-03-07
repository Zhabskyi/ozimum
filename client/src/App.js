import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Navbar from './containers/Navbar';
import Home from './pages/home/Home';
import Register from './containers/forms/FormRegister';
import Login from './containers/forms/FormLogin';
import AdminRoute from './containers/AdminRoute';
import Admin from './pages/adminContainer/Admin';
import PhotoItem from "./pages/photoItemContainer/PhotoItemContainer";

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
          <Route exact path='/' component={Home} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/photo/:id' component={PhotoItem} />
          <AdminRoute exact path='/admin'>
            <Admin />
          </AdminRoute>
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
