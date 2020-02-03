import React, { useEffect } from 'react';
import './App.scss';
import Navbar from './containers/Navbar';

const App = props => {
  useEffect(() => {
    props.loadUser();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container">
      <Navbar/>
      <h3>test</h3>
      <h1>Just changed!</h1>
    </div>
  );
};

export default App;
