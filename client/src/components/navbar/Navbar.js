import React  from "react";
import { withRouter } from "react-router-dom";
import classes from "./Navbar.module.scss";
import NavbarItems from "./navbarItems/NavbarItems";

const Navbar = props => {

  const { isAuthenticated, logout, user } = props;



  return (
    <nav className={classes.nav}>
      <NavbarItems
        user={user}
        isAuthenticated={isAuthenticated}
        logout={logout}
      />
    </nav>
  );
};

export default withRouter(Navbar);
