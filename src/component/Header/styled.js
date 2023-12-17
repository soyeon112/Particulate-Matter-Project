import styled from "styled-components";

export const HeaderWrap = styled.div`
  width: 100%;
  height: auto;
  margin-top: 15px;
  box-sizing: border-box;
`;

export const Logo = styled.img`
  width: 110px;
  display: block;
  margin: 0 auto;
  cursor: pointer;

  @media (max-width: 800px) {
    width: 90px;
  }
`;
