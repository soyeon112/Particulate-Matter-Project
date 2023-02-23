// 전체 시도의 미세먼지를 필터링하여 확인할 수 있는 메인 페이지 입니다.

import React from "react";
import styled from "styled-components";
import Card from "../component/Card";
import Dropdown from "../component/Dropdown";
import { useSelector } from "react-redux";
var _ = require("lodash");

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
  arr = sidoPmList.setSido.pmArr;
  console.log(arr);

  let bmArr = sidoPmList.bookmark.arrBookmark;
  console.log("메인-즐찾리스트", bmArr);

  /*리덕스 북마크 리스트에서 데이터를 불러와 즐찾여부를 확인하여, 
  있으면 true를 전달, 아니면 false를 전달. - 구현 못함. */
  /* --테스트코드
  let bmState;
  let test = _.filter(bmArr, { stationName: "부산항" });
  if (test) {
    bmState = true;
  } else {
    bmState = false;
  }
  console.log(test);
  */

  return (
    <>
      <Dropdown />
      <CardContents>
        {arr.length !== 0 ? (
          arr.map((it) => {
            return (
              <>
                <Card
                  dateTime={it.dateTime}
                  grade={it.grade === null ? "알수없음" : it.grade}
                  value={it.value}
                  sidoName={it.sidoName}
                  stationName={it.stationName}
                  bmState={false}
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
