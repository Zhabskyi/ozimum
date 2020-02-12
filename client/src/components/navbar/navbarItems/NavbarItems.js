import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import classes from '../Navbar.module.scss';
import { Link } from 'react-router-dom';
import Button from '../../button/Button';
import Logo from '../../../static/Logo.png';

const NavbarItems = props => {
  const { user, isAuthenticated, onLogout } = props;

  useEffect(() => {
    if (!isAuthenticated) {
      props.history.push('/');
    }
  }, [isAuthenticated, props.history]);

  const linksUser = (
    <>
      <div className={classes.nav__list_myItems}>
        <Link to='/my-items'>My Items</Link>
      </div>
      <li>
        <span className={classes.name}>{user && user.first_name}</span>
        <span className={classes.name}>{user && user.last_name}</span>
      </li>
      <li>
        <Button onClick={onLogout} confirm>
          Logout
        </Button>
      </li>
    </>
  );

  const linksUnregistered = (
    <>
      {/* <li>
        <Link to='/register'>
          <Button confirm>Register</Button>
        </Link>
      </li> */}
      <li className={classes.nav__list_item}>
        <Link className={classes.nav__list_item_ancor} to='/login'>
          Sign in
        </Link>
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
          <img className={classes.log0_img} src={Logo} alt='Logo' />
        </Link>
      </div>
      <ul className={classes.nav__list}>
        {isAuthenticated ? linksUser : linksUnregistered}
      </ul>
    </>
  );
};

export default withRouter(NavbarItems);
