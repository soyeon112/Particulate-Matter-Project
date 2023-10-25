import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../static/img/icon.png";

const Header_bg = styled.div`
  width: 100%;
  height: auto;
  padding: 5px 0;
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
      <Header_bg>
        <Link to="/">
          <LogoImg src={logo} />
        </Link>
      </Header_bg>
    </>
  );
}

export default Header;
