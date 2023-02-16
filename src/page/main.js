// 전체 시도의 미세먼지를 필터링하여 확인할 수 있는 메인 페이지 입니다.

import React from "react";
import styled from "styled-components";
import CardCompo from "../component/Card";
import Dropdown from "../component/Dropdown";
import { useSelector } from "react-redux";

const CardContents = styled.div`
  overflow: hidden;
  box-sizing: border-box;
  padding: 5px;
  margin-bottom: 90px;
  margin-top: 7px;
  text-align: center;
`;

const InfoText = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #405e77;
`;
function Main() {
  const sidoPmList = useSelector((state) => state);
  let arr;
  console.log("메인=리스트", sidoPmList.setSido.pmArr);
  arr = sidoPmList.setSido.pmArr;
  console.log("배열길이", arr.length);
  return (
    <>
      <Dropdown />
      <CardContents>
        {arr.length != 0 ? (
          arr.map((it) => {
            console.log("또 콘솔", it);
            return (
              <>
                <CardCompo
                  dateTime={it.dateTime}
                  grade={it.grade === null ? "알수없음" : it.grade}
                  value={it.value}
                  sidoName={it.sidoName}
                  stationName={it.stationName}
                />
              </>
            );
          })
        ) : (
          <InfoText>지역을 선택해주세요.🙂</InfoText>
        )}
      </CardContents>
    </>
  );
}

export default Main;
