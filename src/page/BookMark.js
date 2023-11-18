//즐겨찾기 페이지입니다.

import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Card from "../component/Card";
import { get } from "lodash";

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
  console.log("북마크 : ", bookmarkData);

  //로컬스토리지에 저장
  window.localStorage.setItem("bookmark", bookmarkData);
  const bookMark = window.localStorage.getItem("bookmark");
  console.log("저장되나?", bookMark);

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
