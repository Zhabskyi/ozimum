import React from 'react';
import classes from './TopSection.module.scss';

const TopSection = () => {
  return (
    <div className={classes.container}>
        <h1 className={classes.header}>OZIMUM</h1>
      <p className={classes.slogan}>
        Private, small but very good quality photos stock. All pictures are in
        dimensions of 6000x4000 and resolution 300x300. Beautiful pictures by
        OZ.
      </p>
    </div>
  );
};

export default TopSection;
