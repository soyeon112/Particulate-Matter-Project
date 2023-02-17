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
  console.log("북마크페이지", bookmarkData);
  let aa = bookmarkData.bookmark.bookmark;
  console.log("aa", aa);

  return (
    <>
      <CardContents>
        {aa != null ? (
          aa.map((it) => {
            console.log("즐찾 측정소는?", it.station);
            return (
              <Card
                id={it.id}
                dateTime={it.dateTime}
                grade={it.grade}
                value={it.value}
                sidoName={it.sido}
                stationName={it.station}
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
