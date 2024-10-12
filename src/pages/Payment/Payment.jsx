import React, { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // useNavigate 훅 추가
import * as P from "../../style/Payment";
import nfc from "../../assets/img/nfc.svg";

function Payment() {
  const location = useLocation(); // 이전 페이지에서 전달된 상태를 받음
  const navigate = useNavigate(); // 페이지 전환을 위한 navigate 훅 사용
  const ws = useRef(null); // WebSocket 참조
  const serverResponse =
    location.state?.serverResponse || "No message received"; // 서버 응답을 상태로 설정

  useEffect(() => {
    const controller = new AbortController();
    // WebSocket 연결 설정
    ws.current = new WebSocket("ws://192.168.35.6:8050");

    ws.current.onopen = () => {
      console.log("WebSocket connected");
    };

    ws.current.onmessage = (event) => {
      console.log("Message from server:", event.data);
      if (event.data === "CARD:PASS") {

        // CARD:PASS 메시지가 오면 PaymentComplete 페이지로 이동
        navigate("/paymentComplete");
        console.log("card pass")
      }
    };

    ws.current.onclose = () => {
      console.log("WebSocket connection closed");
    };

    // 컴포넌트 언마운트 시 WebSocket 연결 종료
    return () => {
      if (ws.current) ws.current.close();
    };
  }, [navigate]);

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
