import React, { useLayoutEffect } from "react";
import { MainWrap, InfoText } from "./styled";
import Card from "../../component/Card/Card";
import Dropdown from "../../component/Dropdown/Dropdown";

import { useSelector, useDispatch } from "react-redux";
import { SidoAction } from "../../store/setSido";

var _ = require("lodash");

// 전체 시도의 미세먼지를 필터링하여 확인할 수 있는 메인 페이지 입니다.

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
      <MainWrap>
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
      </MainWrap>
    </>
  );
}

export default Main;
