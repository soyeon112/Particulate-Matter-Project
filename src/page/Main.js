import React, { useLayoutEffect } from "react";

import styled from "styled-components";
import Card from "../component/Card/Card";
import Dropdown from "../component/Dropdown";

import { useSelector, useDispatch } from "react-redux";
import { SidoAction } from "../store/setSido";

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
  const getSido = useSelector((state) => state.sido.sido);
  const getSidoArr = useSelector((state) => state.sido.sidoArr);
  const getBookmark = useSelector((state) => state.bookmark.bookmark);

  const dispatch = useDispatch();
  const dispatchSaveBookmark = (station) => {
    dispatch(SidoAction.saveBookmark(station));
  };

  const saveBookmark = () => {
    getBookmark.map((it) => {
      dispatchSaveBookmark(it.stationName);
    });
  };
  useLayoutEffect(() => {
    saveBookmark();
  }, [getBookmark, getSido]);
  return (
    <>
      <Dropdown sido={getSido} />
      <CardContents>
        {getSidoArr.length > 0 ? (
          getSidoArr.map((it, key) => {
            return (
              <Card
                id={key}
                dateTime={it.dateTime}
                grade={it.grade === null ? "알수없음" : it.grade}
                value={it.value}
                sidoName={it.sidoName}
                stationName={it.stationName}
                bookmarkState={it.bookmark}
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
