import React from 'react';
import classes from './TopSection.module.scss';
import white from '../../static/white.png';
import photo_2 from '../../static/Camera_straight.png';

const TopSection = () => {
  return (
    <div className={classes.container}>
        <div>
          <h3>Just a buck for photo!</h3>
        </div>
        <p className={classes.slogan}>
          It is almost free give away. You will get high quality photos of HUGE
          size
        </p>
    </div>
  );
};

export default TopSection;
