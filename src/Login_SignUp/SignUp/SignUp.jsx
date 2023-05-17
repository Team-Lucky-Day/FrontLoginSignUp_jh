import React, { useState } from "react";
import containerStyle from "../container.module.css";

import SignUpInput from "./SignUpInput";

const SignUp = (props) => {
  return (
    <div
      className={
        containerStyle.container__form +
        " " +
        containerStyle["container--signup"]
      }
    >
      <form action="#" className={containerStyle.form} id="form1" method="post">
        <h2 className={containerStyle["form__title"]}>Sign Up</h2>
        <SignUpInput placeholder=" Username" />
        <SignUpInput placeholder=" Id (Email) " />
        <SignUpInput placeholder=" Password" />
        <SignUpInput placeholder=" Password Check" />
        <SignUpInput placeholder=" Phone number" />
        <button className={containerStyle.btn}>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
