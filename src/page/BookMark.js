import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Card from "../component/Card/Card";

//즐겨찾기 페이지입니다.

const CardContents = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  padding: 5px;
  margin-bottom: 90px;
  margin-top: 7px;
`;

const InfoText = styled.p`
  font-size: 20px;
  color: #405e77;
  font-family: "SoyoR";
  margin-top: 50px;
`;

const Wrap = styled.div`
  width: 100%;
  text-align: center;
`;

function BookMark() {
  const bookmarkData = useSelector((state) => state.bookmark.bookmark);

  // //로컬스토리지에 저장
  // window.localStorage.setItem("bookmark", bookmarkData);
  // const bookMark = window.localStorage.getItem("bookmark");
  // console.log("저장되나?", bookMark);

  return (
    <>
      <CardContents>
        {bookmarkData.length > 0 ? (
          bookmarkData.map((it) => {
            return (
              <Card
                dateTime={it.dateTime}
                grade={it.grade}
                value={it.value}
                sidoName={it.sidoName}
                stationName={it.stationName}
                bookmarkState={true}
              />
            );
          })
        ) : (
          <Wrap>
            <InfoText>즐겨찾기한 지역이 없습니다.</InfoText>
          </Wrap>
        )}
      </CardContents>
    </>
  );
}

export default BookMark;
