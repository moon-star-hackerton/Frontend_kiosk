import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // 페이지 전환을 위한 useNavigate 훅 추가
import * as C from "../../style/BurgerChoose";
import arrow3 from "../../assets/img/arrow3.svg";

import MiracleBurger from "../../assets/img/MiracleBurger.svg";
import BulgogiBaconBurger from "../../assets/img/BulgogiBaconBurger.svg";
import ShrimfBaconBurger from "../../assets/img/ShrimfBaconBurger.svg";
import ShrimfBurger from "../../assets/img/ShrimfBurger.svg";
import JeonjuBibimRiceBurger from "../../assets/img/JeonjuBibimRiceBurger.svg";
import BulgogiBurger from "../../assets/img/BulgogiBurger.svg";
import TeriBurger from "../../assets/img/TeriBurger.svg";
import HanwooBulgogiBurger from "../../assets/img/HanwooBulgogiBurger.svg";
import CheeseBurger from "../../assets/img/CheeseBurger.svg";
import ChickenBurger from "../../assets/img/ChickenBurger.svg";

function BurgerChoose() {
  const [buttonStatus, setButtonStatus] = useState("No Status");
  const [serverResponse, setServerResponse] = useState(""); // 서버 응답 상태 추가
  const mediaRecorderRef = useRef(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const ws = useRef(null); // WebSocket 참조
  const navigate = useNavigate(); // 페이지 전환을 위한 navigate 훅 사용

  // WebSocket 연결
  useEffect(() => {
    ws.current = new WebSocket("ws://localhost:8050");

    ws.current.onopen = () => {
      console.log("WebSocket connected");
    };

    ws.current.onmessage = async (event) => {
      console.log("Message from server:", event.data);
      if (event.data === "BUTTON:UP") {
        setButtonStatus("Button Released: Start Recording");
        await startRecording();
      } else if (event.data === "BUTTON:DOWN") {
        setButtonStatus("Button Pressed: Stop Recording");
        stopRecording();
      }
    };

    ws.current.onclose = () => {
      console.log("WebSocket connection closed");
    };

    return () => {
      if (ws.current) ws.current.close();
    };
  }, []);

  // 녹음 시작
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      setAudioChunks([]);

      mediaRecorder.ondataavailable = (event) => {
        setAudioChunks((prev) => [...prev, event.data]);
      };

      mediaRecorder.start();
      console.log("Recording started");
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  // 녹음 중단 및 서버로 전송
  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
        sendAudioToServer(audioBlob); // 녹음 파일 전송
        console.log("Recording stopped");
      };
    }
  };

  // 서버로 녹음 파일 전송
  const sendAudioToServer = async (audioBlob) => {
    const formData = new FormData();
    formData.append("multipartFile", audioBlob, "recording.wav");

    try {
      const response = await fetch("http://43.203.124.158/stt", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log("Server response:", data);

      // 서버에서 받은 응답을 저장하고 Payment 페이지로 이동
      setServerResponse(data.message || "No message received");
      navigate("/payment", {
        state: { serverResponse: data.message || "No message received" },
      });
    } catch (error) {
      console.error("Error sending audio to server:", error);
    }
  };

  return (
    <>
      <C.title>어떤 버거를{"\n"}선택하시겠습니까?</C.title>

      <C.BurgerBox>
        <C.MiracleImage img src={MiracleBurger} />
        <C.MiracleBurger>미라클 버거</C.MiracleBurger>

        <C.BulgogiBaconImage img src={BulgogiBaconBurger} />
        <C.BulgogiBaconBurger>불고기 베이컨 버거</C.BulgogiBaconBurger>

        <C.ShrimfBaconImage img src={ShrimfBaconBurger} />
        <C.ShrimfBaconBurger>새우 베이컨 버거</C.ShrimfBaconBurger>

        <C.ShrimfImage img src={ShrimfBurger} />
        <C.ShrimfBurger>새우 버거</C.ShrimfBurger>

        <C.JeonjuBibimRiceImage img src={JeonjuBibimRiceBurger} />
        <C.JeonjuBibimRiceBurger>전주 비빔 라이스 버거</C.JeonjuBibimRiceBurger>

        <C.BulgogiImage img src={BulgogiBurger} />
        <C.BulgogiBurger>불고기 버거</C.BulgogiBurger>

        <C.TeriImage img src={TeriBurger} />
        <C.TeriBurger>데리 버거</C.TeriBurger>

        <C.HanwooBulgogiImage img src={HanwooBulgogiBurger} />
        <C.HanwooBulgogiBurger>한우 불고기 버거</C.HanwooBulgogiBurger>

        <C.CheeseImage img src={CheeseBurger} />
        <C.CheeseBurger>치즈 버거</C.CheeseBurger>

        <C.ChickenImage img src={ChickenBurger} />
        <C.ChickenBurger>치킨 버거</C.ChickenBurger>
      </C.BurgerBox>

      <C.noticeBox>
        <C.notice>아래의 버튼을 눌러{"\n"}음성으로 주문하세요</C.notice>
        <C.arrow1 img src={arrow3} />
        <C.arrow2 img src={arrow3} />
      </C.noticeBox>
    </>
  );
}

export default BurgerChoose;
