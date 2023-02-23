//현재 나의 위치를 파악하여 해당 지역의 미세먼지 현황을 보여주는 페이지 입니다.

import React from "react";
import Geolocation from "../component/Geolocation";
import styled from "styled-components";

const PositionDiv = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
`;

function MyPosition() {
  return (
    <PositionDiv>
      <Geolocation />
      <p>내 지역의 미세먼지 정보를 알 수 있습니다.</p>
      <p>현재 위치를 불러와서 주소로 변경까지만 했습니다. console로 확인.</p>
    </PositionDiv>
  );
}

export default MyPosition;
