import React, { useEffect } from 'react';
import './App.scss';
import Navbar from './components/navbar/Navbar';

const App = () => {
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <h3>test</h3>
      <h1>Just changed!</h1>
    </div>
  );
};

export default App;
