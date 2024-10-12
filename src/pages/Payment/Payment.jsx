import React from "react";
import { useLocation } from "react-router-dom"; // useLocation 훅 추가
import * as P from "../../style/Payment";
import nfc from "../../assets/img/nfc.svg";

function Payment() {
  const location = useLocation(); // 이전 페이지에서 전달된 상태를 받음
  const serverResponse =
    location.state?.serverResponse || "No message received"; // 서버 응답을 상태로 설정

  return (
    <>
      <P.nfc img src={nfc} />
      <P.title>아래에 NFC 카드를 대서 결제하세요!</P.title>
      <P.warnBox>
        {/* 서버에서 받은 응답을 warnMessage1에 표시 */}
        <P.warnMessage1>{serverResponse}</P.warnMessage1>
        <P.warnMessage2>주문하신 메뉴가 맞으신가요?</P.warnMessage2>
      </P.warnBox>
    </>
  );
}

export default Payment;
