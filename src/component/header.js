import React from "react";
import styled from "styled-components";
import logo from "../static/img/icon.png";

const Header_bg = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 25px;
`;

const LogoImg = styled.img`
  /* width: 200px; */
  width: 80px;
  display: block;
  margin: 0 auto;
`;

function Header() {
  return (
    <>
      <Header_bg>
        <LogoImg src={logo} />
      </Header_bg>
    </>
  );
}

export default Header;
