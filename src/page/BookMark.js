//즐겨찾기 페이지입니다.

import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Card from "../component/Card";

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
function BookMark() {
  const bookmarkData = useSelector((state) => state);
  console.log("북마크페이지", bookmarkData.bookmark.arrBookmark);
  let bmList = bookmarkData.bookmark.arrBookmark;

  return (
    <>
      <CardContents>
        <InfoText>즐겨찾기한 지역이 없습니다.</InfoText>
        {bmList.length >= 1 ? (
          bmList.map((it) => {
            console.log("즐찾 측정소는?", it.station);
            return (
              <Card
                dateTime={it.dateTime}
                grade={it.grade}
                value={it.value}
                sidoName={it.sido}
                stationName={it.station}
                bmState={true}
              />
            );
          })
        ) : (
          <InfoText>즐겨찾기한 지역이 없습니다.</InfoText>
        )}
      </CardContents>
    </>
  );
}

export default BookMark;
