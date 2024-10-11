import React from "react";
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
import ChickenBurger from "../../assets/img/ChickenBurger.svg"

function BurgerChoose() {
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

        <C.ChickenImage img src={ChickenBurger}/>
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
