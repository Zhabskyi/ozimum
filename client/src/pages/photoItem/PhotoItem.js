import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import classes from './PhotoItem.module.scss';
import PhotoPurchaseControl from '../../containers/photos/PhotoPurchaseControl';

const PhotoItem = props => {
  useEffect(() => {
    if (!props.photos) {
      props.history.push('/');
    }
  }, []);

  const photoId = +props.match.params.id;

  const photo = props.photos?.filter(item => photoId === item.id);

  return (
    <>
      {!!photo ? (
        <div className={classes.container}>
          <div className={classes.container__left}>
            <div className={classes.container__left__prev}>
              <div className={classes.container__left__prev__descript}>
                <h1 className={classes.container__left__prev__descript_title}>
                  {photo[0].title}
                </h1>
                <div className={classes.container__left__prev__descript_text}>
                  {photo[0].description}
                </div>
              </div>
              <div
                style={{ backgroundImage: `url(${photo[0].photo})` }}
                className={classes.container__left__prev__blur}
              ></div>
              <div className={classes.container__left__prev__card}>
                <div className={classes.container__left__prev__card__wrapper}>
                  <img
                    src={photo[0].photo}
                    alt={photo[0].title}
                    className={classes.container__left__prev__card__wrapper_img}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={classes.container__right}>
            <div className={classes.container__right__purchase}>
              <PhotoPurchaseControl  photo={photo[0]}/>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default withRouter(PhotoItem);
