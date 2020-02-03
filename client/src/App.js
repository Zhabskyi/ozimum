import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Navbar from './containers/Navbar';
import TopSection from './components/topSection/TopSection';

const App = props => {
  useEffect(() => {
    props.loadUser();
    // eslint-disable-next-line
  }, []);
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={TopSection} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          {/* <PrivateRoute exact path='/my-items'>
          <PrivateItems />
        </PrivateRoute> */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
