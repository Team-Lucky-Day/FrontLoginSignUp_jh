import React from "react";
import MypageMenuBarContainer from "./MypageMenuBarContainer";
import SignUpInput from "../Login_SignUp/SignUp/SignUpInput";
import MyMenuChart from "./MyMenuChart";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import styles from "../CSS/MypageMenuBar.module.css";
const MypageMenuBar = () => {
  const data = [
    {
      id: "japan",
      color: "hsl(34, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 123,
        },
        {
          x: "helicopter",
          y: 287,
        },
        {
          x: "boat",
          y: 44,
        },
        {
          x: "train",
          y: 1,
        },
        {
          x: "subway",
          y: 241,
        },
        {
          x: "bus",
          y: 63,
        },
        {
          x: "car",
          y: 77,
        },
        {
          x: "moto",
          y: 69,
        },
        {
          x: "bicycle",
          y: 256,
        },
        {
          x: "horse",
          y: 240,
        },
        {
          x: "skateboard",
          y: 95,
        },
        {
          x: "others",
          y: 60,
        },
      ],
    },
    {
      id: "france",
      color: "hsl(55, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 133,
        },
        {
          x: "helicopter",
          y: 183,
        },
        {
          x: "boat",
          y: 286,
        },
        {
          x: "train",
          y: 283,
        },
        {
          x: "subway",
          y: 278,
        },
        {
          x: "bus",
          y: 4,
        },
        {
          x: "car",
          y: 298,
        },
        {
          x: "moto",
          y: 3,
        },
        {
          x: "bicycle",
          y: 75,
        },
        {
          x: "horse",
          y: 112,
        },
        {
          x: "skateboard",
          y: 22,
        },
        {
          x: "others",
          y: 192,
        },
      ],
    },
    {
      id: "us",
      color: "hsl(248, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 78,
        },
        {
          x: "helicopter",
          y: 274,
        },
        {
          x: "boat",
          y: 181,
        },
        {
          x: "train",
          y: 281,
        },
        {
          x: "subway",
          y: 291,
        },
        {
          x: "bus",
          y: 247,
        },
        {
          x: "car",
          y: 36,
        },
        {
          x: "moto",
          y: 90,
        },
        {
          x: "bicycle",
          y: 284,
        },
        {
          x: "horse",
          y: 256,
        },
        {
          x: "skateboard",
          y: 13,
        },
        {
          x: "others",
          y: 242,
        },
      ],
    },
    {
      id: "germany",
      color: "hsl(293, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 24,
        },
        {
          x: "helicopter",
          y: 125,
        },
        {
          x: "boat",
          y: 277,
        },
        {
          x: "train",
          y: 97,
        },
        {
          x: "subway",
          y: 197,
        },
        {
          x: "bus",
          y: 252,
        },
        {
          x: "car",
          y: 7,
        },
        {
          x: "moto",
          y: 277,
        },
        {
          x: "bicycle",
          y: 27,
        },
        {
          x: "horse",
          y: 194,
        },
        {
          x: "skateboard",
          y: 273,
        },
        {
          x: "others",
          y: 166,
        },
      ],
    },
    {
      id: "norway",
      color: "hsl(324, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 142,
        },
        {
          x: "helicopter",
          y: 229,
        },
        {
          x: "boat",
          y: 143,
        },
        {
          x: "train",
          y: 102,
        },
        {
          x: "subway",
          y: 153,
        },
        {
          x: "bus",
          y: 87,
        },
        {
          x: "car",
          y: 181,
        },
        {
          x: "moto",
          y: 226,
        },
        {
          x: "bicycle",
          y: 6,
        },
        {
          x: "horse",
          y: 128,
        },
        {
          x: "skateboard",
          y: 293,
        },
        {
          x: "others",
          y: 176,
        },
      ],
    },
  ];

  const [personalInfo, setPersonalInfo] = React.useState(false);
  const [electronicReceipt, setElectronicReceipt] = React.useState(false);
  const [myMenu, setMyMenu] = React.useState(false);
  const [customerCenter, setCustomerCenter] = React.useState(false);
  const [memberWithdrawal, setMemberWithdrawal] = React.useState(false);
  const inputPlaceholder = [
    " Username",
    " email",
    " Password",
    " Password Check",
    " Phone Number",
    " Card Number",
    " Card Password",
    " CVC",
    " Validity (유효기간)",
  ];
  const [inputs, setInputs] = React.useState(Array(9).fill(""));
  const navigate = useNavigate();
  const handleClick = (menu) => {
    switch (menu) {
      case "개인정보 수정":
        setPersonalInfo(true);
        setElectronicReceipt(false);
        setMyMenu(false);
        setCustomerCenter(false);
        setMemberWithdrawal(false);
        break;
      case "전자영수증":
        setPersonalInfo(false);
        setElectronicReceipt(true);
        setMyMenu(false);
        setCustomerCenter(false);
        setMemberWithdrawal(false);
        break;
      case "나의 메뉴":
        setPersonalInfo(false);
        setElectronicReceipt(false);
        setMyMenu(true);
        setCustomerCenter(false);
        setMemberWithdrawal(false);
        break;
      case "고객 센터":
        setPersonalInfo(false);
        setElectronicReceipt(false);
        setMyMenu(false);
        setCustomerCenter(true);
        setMemberWithdrawal(false);
        break;
      case "회원 탈퇴":
        setPersonalInfo(false);
        setElectronicReceipt(false);
        setMyMenu(false);
        setCustomerCenter(false);
        setMemberWithdrawal(true);
        break;
      default:
        break;
    }
  };
  const handleButtonClick = () => {
    Swal.fire({
      icon: "success",
      title: "",
      text: "회원 탈퇴되었습니다.",
      customClass: {
        confirmButton: "btn-color",
      },
    });
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  return (
    <>
      <div className={styles.mypageMenuBar}>
        <MypageMenuBarContainer
          menuName="개인정보 수정"
          onClick={() => handleClick("개인정보 수정")}
        />
        <MypageMenuBarContainer
          menuName="전자영수증"
          onClick={() => handleClick("전자영수증")}
        />
        <MypageMenuBarContainer
          menuName="나의 메뉴"
          onClick={() => handleClick("나의 메뉴")}
        />
        <MypageMenuBarContainer
          menuName="고객 센터"
          onClick={() => handleClick("고객 센터")}
        />
        <MypageMenuBarContainer
          menuName="회원 탈퇴"
          onClick={() => handleClick("회원 탈퇴")}
        />
      </div>
      {personalInfo && (
        <div className={styles.mypageMenuBarpersonal}>
          <h3>개인정보 수정</h3>
          <div className={styles.mypageMenuBarContainerMain}>
            <div>
              <div className={styles.personalInfoImg}>
                <img src="/img/mypageuser.png" width={70} height={70} />
              </div>
              <div className={styles.mypageMenuBarContainerMainInput}>
                {inputs.slice(0, 9).map((value, index) => {
                  return (
                    <React.Fragment key={index}>
                      <SignUpInput
                        type="password" // 패스워드 입력 타입
                        className="input"
                        value={inputs[index]}
                        placeholder={inputPlaceholder[index]}
                      />
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
      {electronicReceipt && (
        <div className={styles.mypageMenuBarpersonal}>
          <h3>전자 영수증</h3>
          <div className={styles.mypageMenuBarContainerMain}>
            <div></div>
          </div>
        </div>
      )}
      {myMenu && (
        <div className={styles.mypageMenuBarpersonal}>
          <h3>나의 메뉴</h3>
          <div className={styles.mypageMenuBarMyMenu}>
            <MyMenuChart />
          </div>
        </div>
      )}
      {customerCenter && (
        <div className={styles.mypageMenuBarpersonal}>
          <h3>고객 센터</h3>
          <div className={styles.mypageMenuBarContainerMain}>
            <div></div>
          </div>
        </div>
      )}
      {memberWithdrawal && (
        <div className={styles.mypageMenuBarpersonal}>
          <h3>회원 탈퇴</h3>
          <div className={styles.mypageMenuBarContainerMain}>
            <div className={styles.mypageMenuBarWithdrawal}>
              {inputs.slice(0, 2).map((value, index) => {
                return (
                  <React.Fragment key={index}>
                    <SignUpInput
                      type="password" // 패스워드 입력 타입
                      className="input"
                      value={inputs[index + 2]}
                      placeholder={inputPlaceholder[index + 2]}
                    />
                  </React.Fragment>
                );
              })}
              <button onClick={handleButtonClick}>회원탈퇴</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MypageMenuBar;
