import React from 'react';
import classes from './Price.module.scss';

const Price = () => {
  return (
    <div className={classes.container}>
      <p className={classes.slogan}>
        You can get all images for FREE in lower quality.
      </p>
      <p className={classes.slogan}>
        Hight quality images cost just a cup of coffe - $5.00 &#128521;
      </p>
    </div>
  );
};

export default Price;
