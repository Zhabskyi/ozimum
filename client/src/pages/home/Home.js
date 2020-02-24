import React from "react";
import classes from "./Home.module.scss";
import TopSection from '../../components/topSection/TopSection';
import Photos from '../../containers/Photos';
//import CopyRight from "../../components/copyRight/CopyRight";

const Home = () => {


  return (
    <>
      <TopSection />
      <div className={classes.container}>
        <Photos />
      </div>
    </>
  );
};

export default Home;
