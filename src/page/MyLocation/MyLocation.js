//현재 나의 위치를 파악하여 해당 지역의 미세먼지 현황을 보여주는 페이지 입니다.

import React from "react";
import Geolocation from "../../component/Geolocation/Geolocation";
import { LocationWrap } from "./styled";

function MyLocation() {
  return (
    <LocationWrap>
      <Geolocation />
      <p>지금 내 지역 : </p>
    </LocationWrap>
  );
}

export default MyLocation;
