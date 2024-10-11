import React from "react";
import { useNavigate } from "react-router-dom";
import * as B from "../../style/BurgerRecom";
import arrow2 from "../../assets/img/arrow2.svg";

function BurgerRecom() {
  const navigate = useNavigate();
  return (
    <>
      <B.title>버거 추천 도우미</B.title>
      <B.keyword>키워드:</B.keyword>
      <B.orderBox>
        <B.order onClick={() => navigate("/burgerChoose")}>주문하기</B.order>
        <B.arrow2 img src={arrow2} />
      </B.orderBox>
    </>
  );
}

export default BurgerRecom;
