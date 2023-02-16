//ducks구조로 작성
//액션 타입을 정의
const SET_SIDO = "setSido/SET_SIDO";
const PM_ARR = "setSido/PM_ARR";
//액션 생성 함수
export const settingSido = () => ({ type: SET_SIDO });
export const pm_arr = () => ({ type: PM_ARR });

//모륟의 초기값 생성
const initialState = {
  sido: "지역 선택",
  pmArr: [],
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_SIDO":
      return {
        ...state,
        sido: action.payload,
      };
    case "PM_ARR":
      return {
        ...state,
        pmArr: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
