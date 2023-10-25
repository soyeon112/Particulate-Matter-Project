import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { useSelector, useDispatch } from "react-redux";

const DropMenu = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
  margin: 0 auto;
`;

const ChoiceTextDiv = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 5px 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 7px;
  color: #333;

  @media (max-width: 820px) {
    width: 40%;
  }
  @media (max-width: 500px) {
    width: 98%;
  }

  :hover {
    cursor: pointer;
  }

  .icon {
    font-size: 20px;
  }
`;

const ChoiceText = styled.p`
  font-weight: bold;
  font-size: 18px;

  @media (max-width: 820px) {
    font-size: 16px;
  }
  @media (max-width: 500px) {
  }
`;

const DropInner = styled.div`
  width: 30%;
  height: 300px;
  overflow-y: auto;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 5px 10px;
  box-sizing: border-box;
  margin: 5px auto 0 auto;
  border-radius: 7px;
  visibility: ${(props) => props.visibility};

  @media (max-width: 820px) {
    width: 40%;
  }
  @media (max-width: 500px) {
    width: 98%;
  }
`;

const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Li = styled.li`
  list-style-type: none;
  padding: 10px 2px;
  border-bottom: 1px solid #eee;
  box-sizing: border;
  font-size: 15px;
  font-weight: 600;

  :hover {
    cursor: pointer;
    background-color: #eee;
  }
`;

const arr_sido = [
  "서울",
  "부산",
  "대구",
  "인천",
  "광주",
  "대전",
  "울산",
  "경기",
  "강원",
  "충북",
  "충남",
  "전북",
  "전남",
  "경북",
  "경남",
  "제주",
  "세종",
];

/**선택한 지역의 정보를 요청 */
function getAPI(sido, dispatch) {
  const api_key = `CAeicSLQPuFnd8xuHRTChkOxGDaUBAmhpWqk4qBc%2F4M2aKsr5Mqv4oBMw4gryiPD9GoRl6eciPzFaIAmmJszlA%3D%3D`;
  console.log("선택된 지역은?", sido);
  fetch(
    `https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?sidoName=${sido}&pageNo=1&numOfRows=100&returnType=json&serviceKey=${api_key}&ver=1.0`
  )
    .then((response) => response.json()) //받은 데이터 json형식으로 변환
    .then((data) => {
      /*응답받은 데이터 item만 저장 */
      const itmes = data.response.body.items;
      DataParsing(itmes, dispatch);
    })
    .catch((err) => console.log(err));
}
//요청후 받은 필요한 정보만 배열로 저장.
function DataParsing(items, dispatch) {
  console.log("들어왔>?", items);
  let arr = [];
  {
    items.map((it) => {
      const obj = {
        /*미세먼지 등급, 수치 */
        grade: it.pm10Grade,
        value: it.pm10Value,
        /*지역명 */
        sidoName: it.sidoName,
        /*측정소 */
        stationName: it.stationName,
        /*측정날짜, 시간*/
        dateTime: it.dataTime,
      };
      arr.push(obj);
    });
  }

  //선택된 지역의 정보를 모두 리덕스에 저장.
  dispatch({
    type: "PM_ARR",
    payload: arr,
  });
}

function Dropdown() {
  const getSido = useSelector((state) => state);
  const selectSido = getSido.setSido.sido;

  useEffect(() => {
    getAPI(selectSido);
  }, []);

  const dispatch = useDispatch();
  const [dropVisivility, setDropVisivility] = useState(false);
  let visibility = "hidden";

  return (
    <>
      <DropMenu>
        <ChoiceTextDiv onClick={(e) => setDropVisivility(!dropVisivility)}>
          <ChoiceText>{selectSido}</ChoiceText>
          {/* 드롭 열림 닫힘 🔼, 🔽 */}
          {dropVisivility
            ? ((visibility = "visible"), (<TiArrowSortedUp className="icon" />))
            : ((visibility = "hidden"),
              (<TiArrowSortedDown className="icon" />))}
        </ChoiceTextDiv>
        <DropInner visibility={visibility}>
          <Ul>
            {arr_sido.map((it) => {
              return (
                <>
                  <Li
                    onClick={() => {
                      dispatch({ type: "SET_SIDO", payload: it }); //선택된 지역 텍스트만 저장
                      setDropVisivility(!dropVisivility);
                      getAPI(it, dispatch);
                    }}
                  >
                    {it}
                  </Li>
                </>
              );
            })}
          </Ul>
        </DropInner>
      </DropMenu>
    </>
  );
}

export default Dropdown;
