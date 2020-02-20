import React  from "react";
import { withRouter } from 'react-router-dom';
import classes from "./Navbar.module.scss";
import NavbarItems from "./navbarItems/NavbarItems";

const Navbar = props => {

  const { isAuthenticated, onLogout, user, isAdmin } = props;



  return (
    <nav className={classes.nav}>
      <NavbarItems
        user={user}
        isAdmin={isAdmin}
        isAuthenticated={isAuthenticated}
        onLogout={onLogout}
      />
    </nav>
  );
};

export default withRouter(Navbar);
