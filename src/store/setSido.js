import { createSlice } from "@reduxjs/toolkit";
const initialSidoState = { sido: "", sidoArr: [] };
const sidoSlice = createSlice({
  name: "sido",
  initialState: initialSidoState,
  reducers: {
    setSido(state, action) {
      state.sido = action.payload.sido;
      state.sidoArr = action.payload.sidoArr;
    },
    saveBookmark(state, action) {
      state.sidoArr.map((it) => {
        if (it.stationName == action.payload) {
          it.bookmark = true;
        }
      });
    },
    deleteBookmark(state, action) {
      state.sidoArr.map((it) => {
        if (it.stationName == action.payload) {
          it.bookmark = false;
        }
      });
    },
  },
});

export const SidoAction = sidoSlice.actions;
export default sidoSlice.reducer;
