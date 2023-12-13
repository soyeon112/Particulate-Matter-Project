import { createSlice, current } from "@reduxjs/toolkit";

const initialBookmarkState = { bookmark: [] };
const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState: initialBookmarkState,
  reducers: {
    addBookmark(state, action) {
      state.bookmark.push(action.payload);
    },

    deleteBookmark(state, action) {
      const arr = current(state.bookmark).filter(
        (it) => it.station !== action.payload.station
      );
      state.bookmark = arr;
    },
  },
});

export const bookmarkAction = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
