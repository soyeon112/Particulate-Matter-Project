import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../static/img/icon.png";

//상단 헤더 컴포넌트 입니다.

const HeaderBg = styled.div`
  width: 100%;
  height: auto;
  /* padding: 5px 0; */
  margin-top: 15px;
  box-sizing: border-box;
`;

const LogoImg = styled.img`
  width: 110px;
  /* width: 80px; */
  display: block;
  margin: 0 auto;
  cursor: pointer;

  @media only screen and (max-width: 800px) {
    width: 90px;
  }
`;

function Header() {
  return (
    <>
      <HeaderBg>
        <Link to="/">
          <LogoImg src={logo} />
        </Link>
      </HeaderBg>
    </>
  );
}

export default Header;
