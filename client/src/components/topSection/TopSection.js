import React from 'react';
import classes from './TopSection.module.scss';
import photo_1 from '../../static/Camera.png';
import photo_2 from '../../static/Camera_straight.png';

const TopSection = () => {
  return (
    <div className={classes.container}>
      <div className={classes.block_info}>
        <div>
          <h3>Just a buck for photo!</h3>
        </div>
        <p className={classes.slogan}>
          It is almost free give away. You will get high quality photos of HUGE
          size
        </p>
      </div>
      <div className={classes.block_img}></div>
    </div>
  );
};

export default TopSection;
