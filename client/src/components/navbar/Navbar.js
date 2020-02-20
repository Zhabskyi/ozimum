import React  from "react";
import { withRouter } from 'react-router-dom';
import classes from "./Navbar.module.scss";
import NavbarItems from "./navbarItems/NavbarItems";

const Navbar = props => {

  const { isAuthenticated, onLogout, user } = props;



  return (
    <nav className={classes.nav}>
      <NavbarItems
        user={user}
        isAuthenticated={isAuthenticated}
        onLogout={onLogout}
      />
    </nav>
  );
};

export default withRouter(Navbar);
