import React from "react";

import styles from "../CSS/MypageMenuBar.module.css";
const MypageMenuBarContainer = ({ menuName, onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <>
      <div
        className={styles.mypageMenuBarContainer}
        style={{ borderBottom: "2px solid gray", paddingBottom: "5px" }}
        onClick={handleClick}
      >
        {menuName}
      </div>
    </>
  );
};

export default MypageMenuBarContainer;
