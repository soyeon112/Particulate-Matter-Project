import { configureStore } from "@reduxjs/toolkit";

import setSidoReducer from "./setSido"; //드롭메뉴 지역 클릭
import bookmarkReducer from "./bookmark";

const store = configureStore({
  reducer: {
    sido: setSidoReducer,
    bookmark: bookmarkReducer,
  },
});

export default store;
