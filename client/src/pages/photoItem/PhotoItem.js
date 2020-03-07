import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { browserHistory } from 'connected-react-router';
import classes from './PhotoItem.module.scss';
import Photo from '../../components/photos/photo/Photo';

const PhotoItem = props => {
  useEffect(() => {
    if (!props.photos) {
      props.history.push('/');
    }
  }, []);

  const photoId = +props.match.params.id;

  const photo = props.photos?.filter(item => photoId === item.id);
  console.log(photo, photoId);

  return (
    <>
      {!!photo ? (
            <article className={classes.article}>
              <figure className={classes.article__figure}>
                <img src={photo[0].photo} alt='item' className={classes.article__figure_img} />
              </figure>
            <div className={classes.article__title}>
              <div className={classes.article__title_text}>{photo[0].title}</div>
            </div>
          </article>
      ) : null}
    </>
  );
};

export default withRouter(PhotoItem);
