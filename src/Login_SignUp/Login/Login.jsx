import React, { useState } from "react";
import "../../CSS/container.css";
import ForgotYourPw from "./ForgotYourPw";
import SocialLogin from "./KakaoLogin/SocialLogin";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const inputPlaceholder = ["Id", " Password"];
  const [inputs, setInputs] = useState(Array(2).fill(""));
  const navigate = useNavigate();

  const handleInputChange = (index, value) => {
    const newInputs = [...inputPlaceholder];
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
        if (response.status === 200) {
          // 성공적인 응답 (200 OK)
          console.log(axios.data);
          Swal.fire({
            icon: "success",
            title: "",
            customClass: {
              confirmButton: "btn-color",
            },
          });
          console.log("요청이 성공했습니다!");
          navigate("/");
        } else if (response.status === 400) {
          // 기타 상태 코드 처리
          if (response && response.status === 400) {
            Swal.fire({
              icon: "warning",
              title: "",
              text: "비밀번호를 다시 확인하세요",
              customClass: {
                confirmButton: "btn-color",
              },
            });
          } else {
          }
          console.log("요청이 실패했습니다. 상태 코드:", response.status);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="container__form container--signin">
      <div className="form" id="form2">
        <h2 className="form__title">ㅤㅤㅤㅤㅤ</h2>

        <input
          type="text"
          placeholder={inputPlaceholder[0]}
          className="input"
          onChange={(e) => handleInputChange(e.target.value)}
        />
        <input
          type="password"
          placeholder={inputPlaceholder[1]}
          className="input"
          onChange={(e) => handleInputChange(e.target.value)}
        />
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
