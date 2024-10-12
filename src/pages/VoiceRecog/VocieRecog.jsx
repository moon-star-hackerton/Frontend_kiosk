import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 useNavigate 추가
import * as V from "../../style/VocieRecog";
import mic2 from "../../assets/img/mic2.svg";
import arrow from "../../assets/img/arrow.svg";

function VoiceRecog() {
  const navigate = useNavigate(); // 페이지 전환을 위한 navigate 훅 사용

  useEffect(() => {
    // 10초 후에 BurgerRecom 페이지로 이동
    const timer = setTimeout(() => {
      navigate("/burgerrecom"); // 10초 후 BurgerRecom 페이지로 이동
    }, 5000); // 5000ms = 50초

    // 컴포넌트 언마운트 시 타이머 클리어
    return () => clearTimeout(timer);
  }, [navigate]); // 의존성 배열에 navigate 추가

  return (
    <>
      <V.title>아래의 버튼을 누르고 {"\n"}원하는 재료를 말씀하세요!</V.title>
      <V.round />
      <V.mic2 img src={mic2} />
      <V.arrow1 img src={arrow} />
      <V.arrow2 img src={arrow} />
    </>
  );
}

export default VoiceRecog;
