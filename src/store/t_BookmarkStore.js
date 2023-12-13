import { createStore } from "redux";

//액션 변수화
const ADD_BOOKMARK = "ADD_BOOKMARK";
const DELETE_BOOKMARK = "DELETE_BOOKMARK";

//디스패치 함수화
const add_bookmark = () => {
  console.log("add bookmark 함수");
};
const delete_bookmark = () => {
  console.log("delete book mark 함수");
};

//리듀서 생성
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOKMARK:
      console.log("북마크 추가");
    case DELETE_BOOKMARK:
      console.log("북마크 취소");
  }
};
//저장소 생성
const store = createStore(reducer);
