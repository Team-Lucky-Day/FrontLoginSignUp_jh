import React from "react";
const Rest_api_key = "381590a49ad13906a4df97ebbc42d353"; //REST API KEY
const redirect_uri = "http://localhost:3000/auth"; //Redirect URI
// oauth 요청 URL
const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
const handleLogin = () => {
  window.location.href = kakaoURL;
};
const SocialLogin = (props) => {
  // const code = new URL(window.location.href).searchParams.get("code");

  return (
    <div>
      <>
        <button onClick={handleLogin}>카카오 로그인</button>
      </>
    </div>
  );
};

export default SocialLogin;
