import React, { useState } from "react";
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
  width: 25%;
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

  @media only screen and (max-width: 800px) {
    width: 40%;
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
  font-size: 1.8vw;
`;

const DropInner = styled.div`
  width: 22%;
  height: 200px;
  overflow-y: auto;
  background-color: #fff;
  position: absolute;
  left: 39%;
  border: 1px solid #ccc;
  margin-top: 5px;
  border-radius: 7px;
  visibility: ${(props) => props.visibility};

  @media only screen and (max-width: 800px) {
    width: 33%;
    left: 33%;
  }
`;

const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Li = styled.li`
  list-style-type: none;
  padding: 10px 15px;
  border-bottom: 1px solid #eee;
  box-sizing: border;
  font-size: 1.5vw;
  font-weight: 500;

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

function Dropdown() {
  const getSido = useSelector((state) => state);
  if (getSido !== undefined) {
    console.dir(getSido.setSido.sido);
  }
  const dispatch = useDispatch();
  const [dropVisivility, setDropVisivility] = useState(false);
  let visibility = "hidden";
  return (
    <>
      <DropMenu>
        <ChoiceTextDiv onClick={(e) => setDropVisivility(!dropVisivility)}>
          <ChoiceText>{getSido.setSido.sido}</ChoiceText>
          {/* 드롭 열림 닫힘 🔼, 🔽 */}
          {dropVisivility
            ? ((visibility = "visible"), (<TiArrowSortedUp className="icon" />))
            : ((visibility = "hidden"),
              (<TiArrowSortedDown className="icon" />))}
        </ChoiceTextDiv>
      </DropMenu>
      <DropInner visibility={visibility}>
        <Ul>
          {arr_sido.map((it) => {
            return (
              <>
                <Li
                  onClick={() => {
                    dispatch({ type: "SET_SIDO", payload: it });
                    setDropVisivility(!dropVisivility);
                  }}
                >
                  {it}
                </Li>
              </>
            );
          })}
        </Ul>
      </DropInner>
    </>
  );
}

export default Dropdown;
