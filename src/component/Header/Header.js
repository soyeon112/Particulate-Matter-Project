import React from "react";
import { Link } from "react-router-dom";
import { HeaderWrap, Logo } from "./styled";
import logo from "../../static/img/icon.png";

//상단 헤더 컴포넌트 입니다.

function Header() {
  return (
    <HeaderWrap>
      <Link to="/">
        <Logo src={logo} />
      </Link>
    </HeaderWrap>
  );
}

export default Header;
