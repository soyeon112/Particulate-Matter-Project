import React from "react";
import { RiMapPinUserFill } from "react-icons/ri";
import { FaMapMarkedAlt } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { MenuWrap, MenuInner, InnerText, NavStyle } from "./styled";
//하단 메뉴 컴포넌트입니다.
function BottomMenu() {
  return (
    <MenuWrap>
      <MenuInner>
        {/* <NavStyle
          to="/myPosition"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <div className="innerIcon">
            <RiMapPinUserFill className="icon" />
            <InnerText>내 지역보기</InnerText>
          </div>
        </NavStyle> */}

        <NavStyle to="/">
          <div className="innerIcon">
            <FaMapMarkedAlt className="icon" />
            <InnerText>전체 시도보기</InnerText>
          </div>
        </NavStyle>

        <NavStyle to="/Bookmark">
          <div className="innerIcon">
            <AiFillHeart className="icon" />
            <InnerText>즐겨찾기</InnerText>
          </div>
        </NavStyle>
      </MenuInner>
    </MenuWrap>
  );
}

export default BottomMenu;
