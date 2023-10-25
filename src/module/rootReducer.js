import { combineReducers } from "redux";
import setSido from "./setSido"; //드롭메뉴 지역 클릭
import bookmark from "./bookmark";

const rootReducer = combineReducers({
  setSido,
  bookmark,
});

export default rootReducer;
