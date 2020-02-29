import React from 'react';
import classes from './Photo.module.scss';
import { Link } from 'react-router-dom';
import PhotoActionControls from '../photoActionControls/PhotoActionControls';

const Photo = props => {
  const { id, photo, title } = props;

  return (
    <article className={classes.article}>
      <Link className={classes.link} to={`photo/${id}`}>
        <figure className={classes.article__figure}>
          <img src={photo} alt='item' className={classes.article__figure_img} />
        </figure>
      </Link>
      <div className={classes.article__title}>
        <div className={classes.article__title_text}>{title}</div>
      </div>
      <div className={classes.actions}>
        <PhotoActionControls />
      </div>
    </article>
  );
};

export default Photo;
