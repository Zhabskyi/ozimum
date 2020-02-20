import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AdminRoute = ({ component: Component, props, ...rest }) => {
  
  return (
    <Route
      {...rest}
      render={props =>
        (props.isAuthenticated && props.isAdmin) ? (
          <Redirect to='/admin' />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default AdminRoute;
