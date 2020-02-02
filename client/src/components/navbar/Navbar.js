import React, { useContext, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import classes from './Navbar.module.scss';
import NavbarItems from './navbarItems/NavbarItems';

const Navbar = props => {
  const { isAuthenticated, logout, user, loadUser } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <nav className={classes.nav}>
      <NavbarItems title={props.title} />
    </nav>
  );
};

export default withRouter(Navbar);
