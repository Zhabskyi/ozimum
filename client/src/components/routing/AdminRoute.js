import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AdminRoute = ({
  component: Component,
  isAuthenticated,
  isAdmin,
  loading,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated && !isAdmin && !loading ? (
          <Redirect to='/' />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default AdminRoute;
