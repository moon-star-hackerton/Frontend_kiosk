import React from "react";
import * as P from "../../style/PaymentComplet";
import check from "../../assets/img/check.svg";

function PaymentComplete() {
  return (
    <>
      <P.check img src={check} />
      <P.title>주문이 완료 되었습니다!</P.title>
    </>
  );
}

export default PaymentComplete;
