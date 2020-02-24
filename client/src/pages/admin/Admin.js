import React from 'react';
import classes from './Admin.modules.scss';
import FormAddPhoto from '../../containers/forms/FormAddPhoto';
import Spinner from '../../components/spinner/Spinner';

const Admin = ({ loading }) => {
  return (
    <>
      {loading ? (
        <div className={classes.container}>
          <Spinner />
        </div>
      ) : (
        <FormAddPhoto />
      )}
    </>
  );
};

export default Admin;
