import React, { useState } from "react";
import "../../CSS/container.css";
import ForgotYourPw from "./ForgotYourPw";
import SocialLogin from "./KakaoLogin/SocialLogin";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const inputPlaceholder = ["Id", "Password"];
  const [inputs, setInputs] = useState(Array(2).fill(""));
  const navigate = useNavigate();

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const handleButtonClick = () => {
    axios({
      url: "http://localhost:8080/user/login",
      method: "post",
      data: {
        u_id: inputs[0],
        u_pw: inputs[1],
      },
      baseURL: "http://localhost:3000/Login",
    })
      .then(function (response) {
        // 성공적인 응답 (200 OK)
        console.log(response.data);
        Swal.fire({
          icon: "success",
          title: "",
          customClass: {
            confirmButton: "btn-color",
          },
        });
        console.log("요청이 성공했습니다!");
        navigate("/");
      })
      .catch(function (response) {
        Swal.fire({
          icon: "warning",
          title: "",
          text: "비밀번호를 다시 확인하세요",
          customClass: {
            confirmButton: "btn-color",
          },
        });
        console.log("요청이 실패했습니다. 상태 코드:", response.status);
      });
  };

  return (
    <div className="container__form container--signin">
      <div className="form" id="form2">
        <h2 className="form__title">ㅤㅤㅤㅤㅤ</h2>
        <React.Fragment>
          <input
            type="text"
            placeholder={inputPlaceholder[0]}
            className="input"
            value={inputs[0]}
            onChange={(e) => handleInputChange(0, e.target.value)}
          />
          <input
            type="password"
            placeholder={inputPlaceholder[1]}
            className="input"
            value={inputs[1]}
            onChange={(e) => handleInputChange(1, e.target.value)}
          />
        </React.Fragment>
        <ForgotYourPw />
        <button className="btn" onClick={handleButtonClick}>
          Login
        </button>
        <div className="divider">
          <span>or</span>
        </div>
        <SocialLogin />
      </div>
    </div>
  );
};

export default Login;
