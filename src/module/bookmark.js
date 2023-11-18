const SAVE_BM = "bookmark/SAVE_BM";
const DELETE_BM = "bookmark/DELETE_BM";

export const save_bk = () => ({ type: SAVE_BM });
export const delete_bk = () => ({ type: DELETE_BM });

const initialState = {
  arrBookmark: [],
  arrBmstation: [],
};

export default function bm_reducer(state = initialState, action) {
  //즐겨찾기 중복 예외처리  (구현xx)
  state.arrBookmark.map((it) => {
    console.log(it);
    console.log(action.payload.station);
    Object.keys(it).find((key) => {
      it[key] === action.payload.station
        ? console.log("있음")
        : console.log("없음");
    });
  });

  switch (action.type) {
    case "SAVE_BM":
      return {
        ...state,
        arrBookmark: [...state.arrBookmark, action.payload],
      };
    case "DELETE_BM":
      console.log("여기는 delete_bm");
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
