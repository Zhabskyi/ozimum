import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AdminRoute = ({ children, props, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        (props.isAuthenticated && props.isAdmin) ? (
          children
        ) : (
          <Redirect to='/admin' />
        )
      }
    />
  );
};

export default AdminRoute;
