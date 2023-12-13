import React, { useState } from "react";
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
import { bookmarkAction } from "../../store/bookmark2";
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

function Card({ dateTime, grade, value, sidoName, stationName }) {
  const [bookMarkState, setBookMarkState] = useState(false);
  const dispatch = useDispatch();

  const addBookmarkHandler = (city) => {
    dispatch(bookmarkAction.addBookmark(city));
  };
  const deleteBookmarkHandler = (city) => {
    dispatch(bookmarkAction.deleteBookmark(city));
  };

  let bmItemObj = {}; //하트 누른 아이템 객체화
  bmItemObj = {
    station: stationName,
    sido: sidoName,
    date: dateTime,
    grade: grade,
    value: value,
    bookmark: bookMarkState,
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
        {bookMarkState ? (
          <AiFillHeart
            className="icon"
            onClick={() => {
              setBookMarkState(!bookMarkState);
              deleteBookmarkHandler(bmItemObj);
            }}
          />
        ) : (
          <AiOutlineHeart
            className="icon"
            onClick={() => {
              setBookMarkState(!bookMarkState);
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
