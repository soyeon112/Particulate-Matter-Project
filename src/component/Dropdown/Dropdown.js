import React, { useState } from "react";
import axios from "axios";
import {
  DropMenu,
  ChoiceTextDiv,
  ChoiceText,
  DropInner,
  InnerWrap,
  InnerItem,
} from "./styled";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

import { useDispatch, useSelector } from "react-redux";
import { SidoAction } from "../../store/setSido";

//지역 선택 드롭 메뉴 컴포넌트입니다.

const arr_sido = [
  "서울",
  "부산",
  "대구",
  "인천",
  "광주",
  "대전",
  "울산",
  "경기",
  "강원",
  "충북",
  "충남",
  "전북",
  "전남",
  "경북",
  "경남",
  "제주",
  "세종",
];

function Dropdown({ sido }) {
  const [getData, setGetData] = useState([]);

  const [dropVisivility, setDropVisivility] = useState(false);
  let visibility = "hidden";

  const dispatch = useDispatch();
  const seletedSidoHandler = (sido, sidoArr) => {
    dispatch(SidoAction.setSido({ sido, sidoArr }));
    setDropVisivility(!dropVisivility);
  };

  const getCityApi = async (sido) => {
    console.log("get", sido);
    try {
      const res = await axios.get(
        `https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?sidoName=${sido}&pageNo=1&numOfRows=100&returnType=json&serviceKey=${process.env.REACT_APP_APIKEY}&ver=1.0`
      );
      await DataParsing(res.data.response.body.items, sido);
    } catch (err) {
      console.log(err);
    }
  };

  let arr = [];
  const DataParsing = (items, sido) => {
    {
      items.map((it, key) => {
        const obj = {
          grade: it.pm25Grade,
          value: it.pm25Value, //미세먼지 등급, 수치
          sidoName: it.sidoName, //지역명
          stationName: it.stationName, //측정소
          dateTime: it.dataTime, //측정날짜, 시간
          bookmark: false,
        };
        arr.push(obj);
      });
    }
    setGetData(arr);
    seletedSidoHandler(sido, arr);
    console.log(getData);
  };

  return (
    <DropMenu>
      <ChoiceTextDiv onClick={(e) => setDropVisivility(!dropVisivility)}>
        <ChoiceText>{sido ? sido : "지역선택"}</ChoiceText>
        {/* 드롭 열림 닫힘 */}
        {dropVisivility
          ? ((visibility = "visible"), (<TiArrowSortedUp className="icon" />))
          : ((visibility = "hidden"), (<TiArrowSortedDown className="icon" />))}
      </ChoiceTextDiv>
      <DropInner visibility={visibility}>
        <InnerWrap>
          {arr_sido.map((it, key) => {
            return (
              <InnerItem
                id={key}
                onClick={() => {
                  getCityApi(it);
                }}
              >
                {it}
              </InnerItem>
            );
          })}
        </InnerWrap>
      </DropInner>
    </DropMenu>
  );
}

export default Dropdown;
