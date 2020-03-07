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
        <div className={classes.container}>
          <div className='container__left'>
            <div className='container__left__prev'>
              <div className='container__left__prev__descript'>
                <h1 className='container__left__prev__descript_title'>
                  {photo[0].title}
                </h1>
                <div className='container__left__prev__descript_text'>
                  {photo[0].description}
                </div>
              </div>
              <div
                style={{ backgroundImage: photo[0].photo }}
                className='container__left__prev__blur'
              ></div>
              <div className='container__left__prev__card'>
                <div className='container__left__prev__card__wrapper'>
                  <img
                    src={photo[0].photo}
                    alt={photo[0].title}
                    className='container__left__prev__card__wrapper_img'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='container__divider'></div>
          <div className='container__right'>
            <div className='container__right__panel'>
              <div className='container__right__panel__purchase'>
                <h2 className='container__right__panel__purchase_header'>
                  PURCHASE THE PHOTO
                </h2>
                <div className='container__right__panel__purchase__body'>
                  <section className='container__right__panel__purchase__body__top'></section>
                </div>
              </div>
              <div className='container__right__panel__details'></div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default withRouter(PhotoItem);
