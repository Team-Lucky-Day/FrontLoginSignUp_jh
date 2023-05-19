import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MainHeaderBtn from "./MainHeaderBtn";
import mainstyle from "./mainheader.module.css";
import MainContainer from "./MainContainer";
const Main = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const text = "Login";
  return (
    <>
      <div className={mainstyle.header}>
        <div className={mainstyle.Luckyday}>LuckyDay</div>
        {/* <div className={mainstyle.headerBtnGroup}></div> */}
        <MainHeaderBtn text={text} />
        {/*MainHeaderBtn의 className={`${mainstyle.button} ${mainstyle.fast} ${mainstyle.white} */}
      </div>
      <MainContainer />
      {/* <div style={{ height: "500px" }}></div>
        <div style={boxStyle}>
          <p data-aos="fade-up">AOS 테스트2</p>
        </div> */}

      {/* <div style={{ height: "900px" }}></div>
      <div className={mainstyle.boxStyle} data-aos="fade-up">
        <p>AOS 테스트3</p>
      </div>
      <div style={{ height: "500px" }}></div> */}
    </>
  );
};

export default Main;
