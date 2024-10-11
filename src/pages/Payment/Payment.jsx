import React from "react";
import * as P from "../../style/Payment";
import nfc from "../../assets/img/nfc.svg";

function Payment() {
  return (
    <>
      <P.nfc img src={nfc} />
      <P.title>아래에 NFC 카드를 대서 결제하세요!</P.title>
      <P.warnBox>
        <P.warnMessage1>불고기 버거 1, 새우 버거 3</P.warnMessage1>
        <P.warnMessage2>주문하신 메뉴가 맞으신가요?</P.warnMessage2>
      </P.warnBox>
    </>
  );
}

export default Payment;
