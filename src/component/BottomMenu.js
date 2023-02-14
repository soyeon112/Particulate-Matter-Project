import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
  align-items: center;

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
    font-size: 2.6vw;
    margin-top: 10px;
  }
`;
const IconText = styled.span`
  display: inline-block;
  margin-top: 15px;
  font-size: 1.15vw;
  font-weight: 500;
`;

function BottomMenu() {
  return (
    <Menu_bg>
      <Inner>
        <Link to="/myPosition">
          <div className="innerIcon">
            <RiMapPinUserFill className="icon" />
            <IconText>내 지역보기</IconText>
          </div>
        </Link>
        <Link to="/main">
          <div className="innerIcon">
            <FaMapMarkedAlt className="icon" />
            <IconText>전체 시도보기</IconText>
          </div>
        </Link>
        <Link to="/Bookmark">
          <div className="innerIcon">
            <AiFillHeart className="icon" />
            <IconText>즐겨찾기</IconText>
          </div>
        </Link>
      </Inner>
    </Menu_bg>
  );
}

export default BottomMenu;
