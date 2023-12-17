import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MenuWrap = styled.div`
  width: 100%;
  height: 13%;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #405e77; //#71BBEE 405e77
  display: flex;
  align-items: center;
  font-family: "SoyoR";
`;
export const MenuInner = styled.div`
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
  }
  @media (max-width: 820px) {
    .icon {
      font-size: 1.2rem;
    }
  }
`;
export const InnerText = styled.span`
  display: inline-block;
  margin-top: 12px;
  font-size: 0.8rem;
  font-weight: 500;
`;

export const NavStyle = styled(NavLink)`
  color: #f4f5ff; //기본 텍스트 컬러
  &.active {
    color: #f6ffa6; //클릭시 변경되는 컬러
  }
`;
