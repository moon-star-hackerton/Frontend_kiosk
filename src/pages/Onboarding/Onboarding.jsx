import React from "react";
import { useNavigate } from "react-router-dom";
import * as O from "../../style/Onboarding";
import click from "../../assets/img/click.svg";
import burger from "../../assets/img/hamburger.svg";
import mic from "../../assets/img/mic.svg";

function Onboarding() {
  const navigate = useNavigate();
  return (
    <>
      <O.background />
      <O.title1>어서오세요!</O.title1>
      <O.title2>어떤 방식으로 주문하시겠어요?</O.title2>
      <O.click img src={click} />
      <O.chooseBox1 onClick={() => navigate("/BurgerChoose")}>
        <O.chooseTitle1>바로 메뉴 주문</O.chooseTitle1>
        <O.burger img src={burger} />
      </O.chooseBox1 >
      <O.chooseBox2 onClick={() => navigate("/voicerecog")}>
        <O.chooseTitle2 >메뉴 추천 받기</O.chooseTitle2>
        <O.mic img src={mic} />
      </O.chooseBox2>
    </>
  );
}

export default Onboarding;
