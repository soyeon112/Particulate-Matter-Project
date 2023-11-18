import React, { useState } from "react";
import styled from "styled-components";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

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

const CardDiv = styled.div`
  display: inline-block;
  /* float: left; */
  width: 49%;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  /* margin: 0.5%; */
  margin: 10px 0.5%;
  padding: 15px;
  box-sizing: border-box;
  border-radius: 7px;

  /* @media only screen and (max-width: 1000px) {
    width: 100%;
    height: 100%;
  } */
  @media (max-width: 1280px) {
    //웹
  }
  @media (max-width: 900px) {
    //태블릿
  }
  @media (max-width: 500px) {
    //모바일
    width: 100%;
  }
`;

const InnerTop = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #fff;

  .icon {
    font-size: 20px;
    cursor: pointer;
  }
`;
const InnerTopAddr = styled.div`
  width: auto;
  height: auto;

  .dong {
    font-size: 1.5rem;
    font-family: "SoyoB";
    color: #f6ffa6;
    /* @media only screen and (max-width: 800px) {
      font-size: 20px;
      font-weight: bold;
    } */
  }
  .si {
    font-size: 1rem;
    margin-left: 5px;
    /* @media only screen and (max-width: 800px) {
      font-size: 13.5px;
      margin-left: 5px;
    } */
  }
`;

//중앙
const InnerMiddle = styled.div`
  width: 100%;
  height: auto;
  margin: 15px auto;
  text-align: center;
`;
const MiddleInnerText = styled.span`
  margin: 0 auto;
  display: inline-block;
  font-size: 1.6rem;
  padding: 10px 25px;
  background-color: rgba(255, 255, 255, 0.5);
  text-align: center;
  border-radius: 7px;
  font-weight: 600;
  box-sizing: border-box;
  color: #333;
`;
//하단
const InnerBottom = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
  margin-top: 10px;
`;
const BottomInnerText = styled.span`
  font-size: 0.9rem;
  color: #333;
  font-weight: 500;
  margin: 0 2px;
`;

function Card({ dateTime, grade, value, sidoName, stationName, bmState }) {
  if (!bmState) {
    bmState = false;
  }
  const [bookMarkState, setBookMarkState] = useState(bmState);
  const dispatch = useDispatch();
  let bmItemObj = {}; //하트 누른 아이템 객체화

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
    <>
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
                console.log("하트해제", stationName);
                dispatch({
                  type: "DELETE_BM",
                  payload: stationName, //즐찾 해제를 위해 측정소 이름을 보낸다. 그게 아이디인셈 -!
                });
              }}
            />
          ) : (
            <AiOutlineHeart
              className="icon"
              onClick={() => {
                setBookMarkState(!bookMarkState);
                console.log("하트누름", stationName);
                bmItemObj = {
                  station: stationName,
                  sido: sidoName,
                  date: dateTime,
                  grade: grade,
                  value: value,
                  bookmark: true,
                };
                dispatch({
                  type: "SAVE_BM", //즐찾을 위해 카드 생성에 필요한 데이터를 객체화 시켜 전달~
                  payload: bmItemObj,
                });
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
    </>
  );
}

export default Card;
