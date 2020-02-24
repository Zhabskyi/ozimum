import React from 'react';
import classes from './Photo.module.scss';

const Photo = props => {
  const { id, photo } = props;

  return (
    <article>
        <img src={photo} alt='item' className={classes.article_img} />
    </article>
  );
};

export default Photo;
