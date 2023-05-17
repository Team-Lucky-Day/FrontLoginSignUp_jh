import React, { useState } from "react";
import containerStyle from "../container.module.css";
const Login = (props) => {
  return (
    <div
      className={
        containerStyle.container__form +
        " " +
        containerStyle["container--signin"]
      }
    >
      <form action="#" className={containerStyle.form} id="form2" method="post">
        <h2 className={containerStyle["form__title"]}>Login</h2>
        <input
          type="text"
          placeholder="Username"
          className={containerStyle.input}
        />
        <input
          type="password"
          placeholder="Password"
          className={containerStyle.input}
        />
        <a href="#" className={containerStyle.link} method="post">
          Forgot your password?
        </a>
        <button className={containerStyle.btn}>Login</button>
      </form>
    </div>
  );
};

export default Login;
