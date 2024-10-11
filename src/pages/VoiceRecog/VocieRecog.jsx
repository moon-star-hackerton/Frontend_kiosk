import React from "react";
import * as V from "../../style/VocieRecog";
import mic2 from "../../assets/img/mic2.svg";
import arrow from "../../assets/img/arrow.svg";

function VoiceRecog() {
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
