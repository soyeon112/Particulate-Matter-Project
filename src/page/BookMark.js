//즐겨찾기 페이지입니다.

import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Card from "../component/Card";

const CardContents = styled.div`
  width: 100%;
  height: 100%;

  overflow: hidden;
  box-sizing: border-box;
  padding: 5px;
  margin-bottom: 90px;
  margin-top: 7px;
  /* text-align: center; */
  /* background-color: pink; */
`;

const InfoText = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #405e77;
`;

const Wrap = styled.div`
  width: 100%;
  text-align: center;
`;
function BookMark() {
  const bookmarkData = useSelector((state) => state.bookmark.arrBookmark);
  console.log(bookmarkData);

  //-- 테스트코드
  // let test = bmList.map((it) => {
  //   Object.values(it).find((t) => it[t] === true);
  //   // it.filter((it) => it.BookMark === true);
  // });
  // console.log("test", test);

  return (
    <>
      <CardContents>
        {bookmarkData.length > 0 ? (
          bookmarkData.map((it) => {
            console.log(it.station);
            if (it.station !== undefined) {
              return (
                <>
                  <Card
                    dateTime={it.dateTime}
                    grade={it.grade}
                    value={it.value}
                    sidoName={it.sido}
                    stationName={it.station}
                    bmState={true}
                  />
                </>
              );
            }
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
