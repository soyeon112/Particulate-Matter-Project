import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { RiMapPinUserFill } from "react-icons/ri";
import { FaMapMarkedAlt } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";

const Menu_bg = styled.div`
  width: 100%;
  height: 13%;
  position: fixed;
  bottom: 0;
  background-color: #405e77; //#71BBEE 405e77
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  display: flex;
  align-items: center;
`;
const Inner = styled.div`
  width: 90%;
  height: calc(100%-50%);
  margin: 2.5vh auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  .innerIcon {
    align-self: center;
    border-radius: 7px;
  }
  .innerIcon:hover {
    cursor: pointer;
    /* color: #fee98d; */
  }
  .icon {
    display: block;
    margin: auto;
    font-size: 1.5rem;
    margin-top: 8px;
  }
`;
const IconText = styled.span`
  display: inline-block;
  margin-top: 12px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const NavStyle = styled(NavLink)`
  color: #f4f5ff; //기본 텍스트 컬러
  &.active {
    color: #f5e45f; //클릭시 변경되는 컬러
  }
`;

function BottomMenu() {
  return (
    <Menu_bg>
      <Inner>
        <NavStyle
          to="/myPosition"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <div className="innerIcon">
            <RiMapPinUserFill className="icon" />
            <IconText>내 지역보기</IconText>
          </div>
        </NavStyle>
        <NavStyle to="/">
          <div className="innerIcon">
            <FaMapMarkedAlt className="icon" />
            <IconText>전체 시도보기</IconText>
          </div>
        </NavStyle>
        <NavStyle to="/Bookmark">
          <div className="innerIcon">
            <AiFillHeart className="icon" />
            <IconText>즐겨찾기</IconText>
          </div>
        </NavStyle>
      </Inner>
    </Menu_bg>
  );
}

export default BottomMenu;
