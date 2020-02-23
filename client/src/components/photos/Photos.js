import React, { useEffect, useState } from "react";
import classes from "./Photos.module.scss";
import { withRouter } from "react-router-dom";
//import Item from "./item/Item";
import Spinner from "../spinner/Spinner";
import Filter from "../filter/Filter";

const Photos = props => {


  const { photos, getPhotos, loading } = props;
  const [checkedCategory, setCategory] = useState("all");

  useEffect(() => {
    getPhotos();
    // eslint-disable-next-line
  }, []);

  const onFilter = e => {
    setCategory(e);
  };

  const postalItems = (
    <>
      {checkedCategory === "all"
        ? photos?.map(photo => <Photo key={photo.id} photo={photo} />)
        : photos?.map(photo =>
            checkedCategory === photo.category ? (
              <Photo key={photo.id} photo={photo} />
            ) : null
          )}
    </>
  );

  return (
    <>
      <Filter onFilter={onFilter} checkedCategory={checkedCategory} />
      <div className={classes.container}>
        {photo !== null && !loading ? (
          photos !== null ? (
            photos
          ) : (
            <>
              {checkedCategory === "all"
                ? photo.map(photo => <Photo key={photo.id} photo={photo} />)
                : photo.map(photo =>
                    checkedCategory === photo.category ? (
                      <Photo key={photo.id} item={photo} />
                    ) : null
                  )}
            </>
          )
        ) : (
          <Spinner />
        )}
      </div>
    </>
  );
};

export default withRouter(Photos);
