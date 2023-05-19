import React from "react";
import { Link } from "react-router-dom";
import containerStyle from "../container.module.css";
const ForgotYourPw = (props) => {
  return (
    <>
      <Link to="/FindPw" className={containerStyle.link}>
        Forgot your password?
      </Link>
    </>
  );
};

export default ForgotYourPw;
