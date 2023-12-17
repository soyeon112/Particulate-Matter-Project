import React from "react";
import { useSelector } from "react-redux";
import Card from "../../component/Card/Card";
import { BookmarkWrap, InfoText } from "./styled";

//즐겨찾기 페이지입니다.

function BookMark() {
  const bookmarkData = useSelector((state) => state.bookmark.bookmark);

  // //로컬스토리지에 저장
  // window.localStorage.setItem("bookmark", bookmarkData);
  // const bookMark = window.localStorage.getItem("bookmark");
  // console.log("저장되나?", bookMark);

  return (
    <>
      <BookmarkWrap>
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
          <InfoText>즐겨찾기한 지역이 없습니다.</InfoText>
        )}
      </BookmarkWrap>
    </>
  );
}

export default BookMark;
