import { combineReducers } from "redux";
import setSido from "./setSido"; //드롭메뉴 지역 클릭

const rootReducer = combineReducers({
  setSido,
});

export default rootReducer;
