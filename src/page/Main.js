import React, { useEffect, useState } from "react";
import axios from "axios";

import styled from "styled-components";
import Card from "../component/Card/Card";
import Dropdown from "../component/Dropdown2";

import { Fragment } from "react";
import { useSelector } from "react-redux";
var _ = require("lodash");

// 전체 시도의 미세먼지를 필터링하여 확인할 수 있는 메인 페이지 입니다.

const CardContents = styled.div`
  overflow: hidden;
  box-sizing: border-box;
  padding: 5px;
  margin-bottom: 90px;
  margin-top: 7px;
  text-align: center;
  @media (max-width: 1280px) {
    //웹
  }
  @media (max-width: 900px) {
    //태블릿
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  @media (max-width: 500px) {
    //모바일
    width: 100%;
  }
`;

const InfoText = styled.p`
  font-size: 20px;
  color: #405e77;
  font-family: "SoyoR";
  margin-top: 50px;
`;

function Main() {
  const [getData, setGetData] = useState([]);
  const getSido = useSelector((state) => state.sido.sido);
  const getbookmark = useSelector((state) => state.bookmark.bookmark);
  console.log("get", getSido);
  console.log("getbookmark", getbookmark);
  let arr = [];

  //요청후 받은 필요한 정보만 배열로 저장.
  const DataParsing = (items) => {
    {
      items.map((it) => {
        const obj = {
          /*미세먼지 등급, 수치 */
          grade: it.pm10Grade,
          value: it.pm10Value,
          /*지역명 */
          sidoName: it.sidoName,
          /*측정소 */
          stationName: it.stationName,
          /*측정날짜, 시간*/
          dateTime: it.dataTime,
        };
        arr.push(obj);
      });
    }
    setGetData(arr);
  };

  const getCityApi = async (sido) => {
    try {
      const res = await axios.get(
        `https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?sidoName=${sido}&pageNo=1&numOfRows=100&returnType=json&serviceKey=${process.env.REACT_APP_APIKEY}&ver=1.0`
      );
      DataParsing(res.data.response.body.items);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCityApi(getSido);
  }, [getSido]);

  return (
    <>
      <Dropdown sido={getSido} />
      <CardContents>
        {getData.length > 0 ? (
          getData.map((it, key) => {
            return (
              <Card
                id={key}
                dateTime={it.dateTime}
                grade={it.grade === null ? "알수없음" : it.grade}
                value={it.value}
                sidoName={it.sidoName}
                stationName={it.stationName}
              />
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
