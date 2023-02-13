import React from "react";
import styled from "styled-components";
import { RiMapPinUserFill } from "react-icons/ri";
import { FaMapMarkedAlt } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";

const Menu_bg = styled.div`
  width: 100%;
  height: 100px;
  position: fixed;
  bottom: 0;
  background-color: #405e77;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;
const Inner = styled.div`
  width: 90%;
  height: 85%;
  margin: 5px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  .innerIcon {
    align-self: center;
    border-radius: 7px;
    color: #f4f5ff;
  }
  .innerIcon:hover {
    cursor: pointer;
    color: #fee98d;
  }
  .icon {
    display: block;
    margin: auto;
    font-size: 3.5vh;
    margin-top: 10px;
  }
`;
const IconText = styled.span`
  display: inline-block;
  margin-top: 10px;
  font-size: 14px;
  font-weight: 500;
`;

function menu() {
  return (
    <Menu_bg>
      <Inner>
        <div className="innerIcon">
          <RiMapPinUserFill className="icon" />
          <IconText>내 지역보기</IconText>
        </div>
        <div className="innerIcon">
          <FaMapMarkedAlt className="icon" />
          <IconText>전체 시도보기</IconText>
        </div>
        <div className="innerIcon">
          <AiFillHeart className="icon" />
          <IconText>즐겨찾기</IconText>
        </div>
      </Inner>
    </Menu_bg>
  );
}

export default menu;
