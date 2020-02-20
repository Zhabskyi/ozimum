import React from 'react';
import classes from '../Form.module.scss';
import { NavLink } from 'react-router-dom';

const FormHeader = () => {
  return (
    <div className={classes.header}>
      <NavLink to='/login' activeClassName={classes.selected}>
        <h5>Login</h5>
      </NavLink>
      <NavLink to='/register' activeClassName={classes.selected}>
        <h5>Register</h5>
      </NavLink>
    </div>
  );
};

export default FormHeader;
