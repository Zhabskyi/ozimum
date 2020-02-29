import React, { useEffect, useState } from 'react';
import classes from './Photos.module.scss';
import { withRouter } from 'react-router-dom';
import Photo from './photo/Photo';
import Spinner from '../spinner/Spinner';
import Filter from '../filter/Filter';

const Photos = props => {
  const { photos, loadPhotos, loading } = props;
  const [checkedCategory, setCategory] = useState('all');

  useEffect(() => {
    loadPhotos();
    // eslint-disable-next-line
  }, []);

  const onFilter = e => {
    setCategory(e);
  };

  const renderPhotos = (
    <>
      {checkedCategory === 'all'
        ? photos?.map(item => (
            <Photo
              key={item.id}
              photo={item.photo}
              id={item.id}
              title={item.title}
            />
          ))
        : photos?.map(item =>
            checkedCategory === item.category ? (
              <Photo
                key={item.id}
                photo={item.photo}
                id={item.id}
                title={item.title}
              />
            ) : null
          )}
    </>
  );

  return (
    <div className={classes.container}>
      <Filter onFilter={onFilter} checkedCategory={checkedCategory} />
      <section className={classes.cards}>
        {photos !== null && !loading ? renderPhotos : <Spinner />}
      </section>
    </div>
  );
};

export default withRouter(Photos);
