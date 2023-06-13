import React, { useState } from "react";
import "../../CSS/container.css";
import "../../CSS/modal.css";

import SignUpInput from "./SignUpInput";
import Swal from "sweetalert2";

import axios from "axios";

const SignUp = (props) => {
  const inputPlaceholder = [
    " Username",
    " Id",
    " email",
    " Password",
    " Password Check",
    " Phone Number",
    " Card Number",
    " Card Password",
    " CVC",
    " Validity (유효기간)",
  ];
  const [inputs, setInputs] = useState(Array(9).fill(""));
  const [showCardInputs, setShowCardInputs] = useState(false);
  const [scrollAnimation, setScrollAnimation] = useState(false);

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const handleCardCheckboxChange = (e) => {
    setShowCardInputs(e.target.checked);
    setScrollAnimation(e.target.checked);
  };

  const handleButtonClick = () => {
    const passwordCheck = (e) => {
      if (inputs[2] !== inputPlaceholder[5]) {
        console.log(`pwCheckerror`);
      } else {
      }
    };
    axios({
      url: "http://localhost:8080/user/SignUp",
      method: "post",
      data: {
        u_name: inputs[0],
        u_id: inputs[1],
        u_email: inputs[2],
        u_pw: inputs[2],
        u_phone: inputs[3],
      },
      baseURL: "http://localhost:3000/Login",
    })
      .then(function a(response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(axios.data);
    Swal.fire({
      icon: "success",
      title: "",
      text: "회원가입되셨습니다.",
      customClass: {
        confirmButton: "btn-color",
      },
    });
  };

  return (
    <div
      className={`container__form container--signup ${
        scrollAnimation ? "scroll-animation" : ""
      }`}
    >
      <div className="form" id="form1">
        <h2 className="form__title">Sign Up</h2>
        <div className="scrollBar">
          {inputs.slice(0, 6).map((value, index) => {
            if (index === 2 || index === 3) {
              // Password 관련 input일 경우
              return (
                <React.Fragment key={index}>
                  <SignUpInput
                    type="password" // 패스워드 입력 타입
                    className="input"
                    value={inputs[index]}
                    placeholder={inputPlaceholder[index]}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                  />
                </React.Fragment>
              );
            } else if (index === 5) {
              // PhoneNumber 아래에 Card Information Checkbox 추가
              return (
                <React.Fragment key={index}>
                  <SignUpInput
                    type="text"
                    className="input"
                    value={inputs[index]}
                    placeholder={inputPlaceholder[index]}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                  />
                  <div className="checkbox-wrapper">
                    <input
                      type="checkbox"
                      id="terms-checkbox"
                      onChange={handleCardCheckboxChange}
                    />
                    <label htmlFor="terms-checkbox">Card Information</label>
                  </div>
                </React.Fragment>
              );
            }
            return (
              <SignUpInput
                key={index}
                type="text"
                className="input"
                value={inputs[index]}
                placeholder={inputPlaceholder[index]}
                onChange={(e) => handleInputChange(index, e.target.value)}
              />
            );
          })}
          {showCardInputs && (
            <div className="showCardInputs">
              <SignUpInput
                type="text"
                className="input"
                value={inputs[5]}
                placeholder={inputPlaceholder[5]}
                onChange={(e) => handleInputChange(5, e.target.value)}
              />
              <SignUpInput
                type="password"
                className="input"
                value={inputs[6]}
                placeholder={inputPlaceholder[6]}
                onChange={(e) => handleInputChange(6, e.target.value)}
              />
              <SignUpInput
                type="text"
                className="input"
                value={inputs[7]}
                placeholder={inputPlaceholder[7]}
                onChange={(e) => handleInputChange(7, e.target.value)}
              />
              <SignUpInput
                type="text"
                className="input"
                value={inputs[8]}
                placeholder={inputPlaceholder[8]}
                onChange={(e) => handleInputChange(8, e.target.value)}
              />
            </div>
          )}
        </div>
        <button
          className="btn swal2-confirm swal2-styled"
          onClick={handleButtonClick}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
