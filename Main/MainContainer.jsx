import React from "react";
import mainstyle from "./mainheader.module.css";
const MainContainer = (props) => {
  return (
    <>
      <div className={mainstyle.cafeintro}></div>
      <div className={mainstyle.container}></div>
    </>
  );
};

export default MainContainer;
