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
          <Redirect to='/' />
        )
      }
    />
  );
}

// const AdminRoute = ({
//   component: Component,
//   props,
//   isAuthenticated,
//   isAdmin,
//   loading,
//   ...rest
// }) => {
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         !isAuthenticated && !isAdmin && !loading ? (
//           <Redirect to='/' />
//         ) : (
//           <Component {...props} />
//         )
//       }
//     />
//   );
// };

export default AdminRoute;
