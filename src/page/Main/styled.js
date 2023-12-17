import styled from "styled-components";

export const MainWrap = styled.div`
  overflow: hidden;
  box-sizing: border-box;
  padding: 5px;
  margin-bottom: 90px;
  margin-top: 7px;

  @media (max-width: 820px) {
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-around; */
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const InfoText = styled.p`
  font-size: 20px;
  color: #405e77;
  font-family: "SoyoR";
  margin-top: 50px;
  text-align: center;
`;
