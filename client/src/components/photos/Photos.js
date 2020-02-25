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

  // const photos = (
  //   <>
  //     {checkedCategory === "all"
  //       ? photos?.map(photo => <Photo key={photo.id} photo={photo} />)
  //       : photos?.map(photo =>
  //           checkedCategory === photo.category ? (
  //             <Photo key={photo.id} photo={photo} />
  //           ) : null
  //         )}
  //   </>
  // );

  return (
    <div className={classes.container}>
      <Filter onFilter={onFilter} checkedCategory={checkedCategory} />
      <section className={classes.cards}>
        {photos !== null && !loading ? (
          photos?.map(item => (
            <Photo key={item.id} photo={item.photo} id={item.id} />
          ))
        ) : (
          <Spinner />
        )}
      </section>
    </div>
  );
};

export default withRouter(Photos);
