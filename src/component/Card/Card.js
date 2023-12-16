import React, { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import {
  CardDiv,
  InnerTop,
  InnerTopAddr,
  InnerMiddle,
  MiddleInnerText,
  InnerBottom,
  BottomInnerText,
} from "./styled";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { bookmarkAction } from "../../store/bookmark";
import { SidoAction } from "../../store/setSido";

import { get } from "lodash";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";
//측정소 별 미세먼지 카드 컴포넌트입니다.

// 미세먼지 상황별 색상코드
const colors = {
  좋음: "#71bbee",
  보통: "#a1c651",
  한때나쁨: "#fdd77d",
  나쁨: "#ffbf87",
  매우나쁨: "#ff414d",
  알수없음: "#ABABAB",
};

function Card({
  dateTime,
  grade,
  value,
  sidoName,
  stationName,
  bookmarkState,
}) {
  const [bookmark, setBookmark] = useState(bookmarkState);

  const dispatch = useDispatch();

  const addBookmarkHandler = (city) => {
    city.bookmarkState = true;
    dispatch(bookmarkAction.addBookmark(city));
  };
  const deleteBookmarkHandler = (city) => {
    city.bookmarkState = false;
    dispatch(bookmarkAction.deleteBookmark(city));
    dispatch(SidoAction.deleteBookmark(city.stationName));
  };

  let bmItemObj = {}; //하트 누른 아이템 객체화
  bmItemObj = {
    stationName: stationName,
    sidoName: sidoName,
    dateTime: dateTime,
    grade: grade,
    value: value,
    bookmarkState: bookmark,
  };

  //grade별 bg색상 지정 / 텍스트 저장
  let bgColor;
  let gradeText;
  switch (grade) {
    case "1":
      bgColor = colors.좋음;
      gradeText = "좋음🤗";
      break;
    case "2":
      bgColor = colors.보통;
      gradeText = "보통🙂";
      break;
    case "3":
      bgColor = colors.나쁨;
      gradeText = "나쁨😕";
      break;
    case "4":
      bgColor = colors.매우나쁨;
      gradeText = "매우나쁨😣";
      break;
    default:
      bgColor = colors.알수없음;
      gradeText = "알수없음🤔";
      break;
  }

  return (
    <CardDiv bgColor={bgColor}>
      <InnerTop>
        <InnerTopAddr>
          <span className="dong">{stationName}</span>
          <span className="si">{sidoName}</span>
        </InnerTopAddr>
        {bookmarkState ? (
          <AiFillHeart
            className="icon"
            onClick={() => {
              setBookmark(false);
              deleteBookmarkHandler(bmItemObj);
            }}
          />
        ) : (
          <AiOutlineHeart
            className="icon"
            onClick={() => {
              setBookmark(true);
              addBookmarkHandler(bmItemObj);
            }}
          />
        )}
      </InnerTop>
      <InnerMiddle>
        <MiddleInnerText>{gradeText}</MiddleInnerText>
      </InnerMiddle>
      <InnerBottom>
        <div>
          <BottomInnerText>미세먼지 수치 :</BottomInnerText>
          <BottomInnerText>{value}</BottomInnerText>
        </div>
        <BottomInnerText>{dateTime}</BottomInnerText>
      </InnerBottom>
    </CardDiv>
  );
}

export default Card;
