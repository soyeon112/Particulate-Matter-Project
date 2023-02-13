import React from "react";
import styled from "styled-components";
import CardCompo from "../component/card";

// 메인페이지 - 전체시도보기 탭

const CardContents = styled.div`
  overflow: hidden;
  box-sizing: border-box;
  padding: 5px;
`;
function main() {
  return (
    <CardContents>
      <CardCompo />
      <CardCompo />
      <CardCompo />
      <CardCompo />
    </CardContents>
  );
}

export default main;
