import React, { useState } from "react";

import styled from "styled-components";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

import { useDispatch } from "react-redux";
import { SidoAction } from "../store/setSido2";

//지역 선택 드롭 메뉴 컴포넌트입니다.

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
  /* color: #333; */
  color: #405e77;
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
  font-family: "SoyoB";
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

function Dropdown2({ sido }) {
  console.log("sido", sido);
  const [dropVisivility, setDropVisivility] = useState(false);
  let visibility = "hidden";

  const dispatch = useDispatch();
  const seletedSidoHandler = (sido) => {
    dispatch(SidoAction.setSido(sido));
    setDropVisivility(!dropVisivility);
  };

  return (
    <>
      <DropMenu>
        <ChoiceTextDiv onClick={(e) => setDropVisivility(!dropVisivility)}>
          <ChoiceText>{sido ? sido : "지역선택"}</ChoiceText>
          {/* 드롭 열림 닫힘 */}
          {dropVisivility
            ? ((visibility = "visible"), (<TiArrowSortedUp className="icon" />))
            : ((visibility = "hidden"),
              (<TiArrowSortedDown className="icon" />))}
        </ChoiceTextDiv>
        <DropInner visibility={visibility}>
          <Ul>
            {arr_sido.map((it, key) => {
              return (
                <Li
                  id={key}
                  onClick={() => {
                    seletedSidoHandler(it);
                  }}
                >
                  {it}
                </Li>
              );
            })}
          </Ul>
        </DropInner>
      </DropMenu>
    </>
  );
}

export default Dropdown2;
