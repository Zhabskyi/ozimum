import React, {useEffect} from "react";
import { withRouter } from 'react-router-dom';
import classes from "./PhotoItem.module.scss";
import Photo from "../../components/photos/photo/Photo";

const PhotoItem = props => {
  useEffect(() => {
    console.log("PROPS", props);

  }, [])
  const { id, photo, title } = props;


  return (
    <>
      <Photo />
    </>
  );
};

export default PhotoItem;
