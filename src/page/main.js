import React from "react";
import styled from "styled-components";
import CardCompo from "../component/Card";
import Dropdown from "../component/Dropdown";

// 메인페이지 - 전체시도보기 탭

const CardContents = styled.div`
  overflow: hidden;
  box-sizing: border-box;
  padding: 5px;
  margin-bottom: 90px;
  margin-top: 7px;
`;
function Main() {
  return (
    <>
      <Dropdown />
      <CardContents>
        <CardCompo />
        <CardCompo />
        <CardCompo />
        <CardCompo />
        <CardCompo />
        <CardCompo />
        <CardCompo />
        <CardCompo />
        <CardCompo />
        <CardCompo />
      </CardContents>
    </>
  );
}

export default Main;
