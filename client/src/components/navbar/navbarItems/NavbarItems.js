import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import classes from '../Navbar.module.scss';
import { Link } from 'react-router-dom';
import Basket from '../../../static/basket_1.png';
import Logo from '../../../static/Logo.png';

const NavbarItems = props => {
  const { user, isAuthenticated, isAdmin, onLogout } = props;

  useEffect(() => {
    if (!isAuthenticated) {
      props.history.push('/');
    }
  }, [isAuthenticated, props.history]);

  const linksUser = (
    <>
      <li className={classes.nav__list_item}>
        <div className={classes.nav__list_item_ancor}>
          <span className={classes.name}>{user && user.first_name}</span>
          <span className={classes.name}>{user && user.last_name}</span>
        </div>
      </li>
      <li className={classes.nav__list_item}>
        <Link
          className={classes.nav__list_item_ancor}
          to='/basket'
          style={{ paddingTop: '10px' }}
        >
          <img className={classes.basket} src={Basket} alt='Basket' />
          Basket
        </Link>
      </li>
      <li className={classes.nav__list_item}>
        <div className={classes.nav__list_item_ancor}>
          <button onClick={onLogout}>Logout</button>
        </div>
      </li>
    </>
  );

  const linksUnregistered = (
    <>
      <li className={classes.nav__list_item}>
        <Link
          className={classes.nav__list_item_ancor}
          to='/basket'
          style={{ paddingTop: '10px' }}
        >
          <img className={classes.basket} src={Basket} alt='Basket' />
          Basket
        </Link>
      </li>
      <li className={classes.nav__list_item}>
        <Link className={classes.nav__list_item_ancor} to='/login'>
          Sign in
        </Link>
      </li>
    </>
  );

  const linksAdmin = (
    <>
      <li className={classes.nav__list_item}>
        <div className={classes.nav__list_item_ancor}>
          <span className={classes.admin}>ADMIN</span>
        </div>
      </li>
      <li className={classes.nav__list_item}>
        <div className={classes.nav__list_item_ancor}>
          <button onClick={onLogout}>Logout</button>
        </div>
      </li>
    </>
  );

  return (
    <>
      <ul className={[classes.nav__list, classes.empty].join(' ')}>
        <li className={classes.nav__list_item}>
          <Link className={classes.nav__list_item_ancor} to='/pricing'>
            Pricing
          </Link>
        </li>
      </ul>
      <div className={classes.nav_block}>
        <Link className={classes.logo} to='/'>
          <img className={classes.logo_img} src={Logo} alt='Logo' />
        </Link>
      </div>
      <ul className={classes.nav__list}>
        {isAuthenticated && isAdmin
          ? linksAdmin
          : isAuthenticated
          ? linksUser
          : linksUnregistered}
      </ul>
    </>
  );
};

export default withRouter(NavbarItems);
