const SAVE_BM = "setSido/SAVE_BM";
const DELETE_BM = "setSido/DELETE_BM";

export const save_bk = () => ({ type: SAVE_BM });
export const delete_bk = () => ({ type: DELETE_BM });

const initialState = {
  // bookmark: {},
  arrBookmark: [{}],
};

export default function bm_reducer(state = initialState, action) {
  console.log("북마크 save", action.payload);
  switch (action.type) {
    case "SAVE_BM":
      return {
        ...state,
        //저장되어있던 배열에 추가로 push해준다.
        arrBookmark: [...state.arrBookmark, action.payload],
      };

    case "DELETE_BM":
      console.log("북마크 delete", action.payload);

      return {
        ...state,
        arrBookmark: state.arrBookmark.filter(
          (it) => it.station !== action.payload
        ),
      };
    default:
      return {
        ...state,
      };
  }
}
