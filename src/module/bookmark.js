const BOOKMARK = "setSido/BOOKMARK";

export const bookmark = () => ({ type: BOOKMARK });

const initialState = {
  bookmark: null,
};

export default function reducer(state = initialState, action) {
  console.log("머슨값이 들어오나?", action.payload);
  switch (action.type) {
    case "BOOKMARK":
      return {
        ...state,
        bookmark: [
          {
            id: action.payload.id,
            sido: action.payload.sidoName,
            station: action.payload.stationName,
            value: action.payload.value,
            grade: action.payload.grade,
            dateTime: action.payload.dateTime,
            bookMarkState: action.payload.bookMarkState,
          },
        ],
      };
    default:
      return {
        ...state,
      };
  }
}
