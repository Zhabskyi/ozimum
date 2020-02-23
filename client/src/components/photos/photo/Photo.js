import React from 'react';
import classes from './Photo.module.scss';

const Photo = props => {
  const { id, photo } = props;

  return (
    <div className={classes.container}>
      <div className={classes.photo}>
        <img src={photo} alt='item' className={classes.photo} />
      </div>
    </div>
  );
};

export default Photo;
