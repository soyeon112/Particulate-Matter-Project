//ducks구조로 작성
//액션 타입을 정의
const SET_SIDO = "setSido/SET_SIDO";

//액션 생성 함수
export const settingSido = () => ({ type: SET_SIDO });
//모륟의 초기값 생성
const initialState = {
  sido: "지역을  선택해주세요.",
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_SIDO":
      return {
        ...state,
        sido: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
