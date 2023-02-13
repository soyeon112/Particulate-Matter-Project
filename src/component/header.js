import React from "react";
import styled from "styled-components";
import logo from "../static/img/logo2.png";

const Header_bg = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 25px;
`;

const LogoImg = styled.img`
  width: 200px;
  display: block;
  margin: 0 auto;
`;

function header() {
  return (
    <Header_bg>
      <LogoImg src={logo} />
    </Header_bg>
  );
}

export default header;
