import { createSlice } from "@reduxjs/toolkit";

const initialSidoState = { sido: "" };
const sidoSlice = createSlice({
  name: "sido",
  initialState: initialSidoState,
  reducers: {
    setSido(state, action) {
      state.sido = action.payload;
      console.log("리덕스 지역 >> ", state.sido);
    },
  },
});

export const SidoAction = sidoSlice.actions;
export default sidoSlice.reducer;
