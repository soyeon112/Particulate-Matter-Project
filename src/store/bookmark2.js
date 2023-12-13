import { createSlice, current } from "@reduxjs/toolkit";

const initialBookmarkState = { bookmark: [], city: "" };
const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState: initialBookmarkState,
  reducers: {
    addBookmark(state, action) {
      console.log(current(state.bookmark));
      console.log(action.payload.station);
      state.bookmark.push(action.payload);
      console.log("?", current(state.bookmark).station);
    },

    deleteBookmark(state, action) {
      console.log("redux it", action.payload);

      // state.bookmark.filter((it) => it.station !== action.payload.city);
      console.log("리덕스 북마크 삭제 >> ", current(state.bookmark));
    },
  },
});

export const bookmarkAction = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
