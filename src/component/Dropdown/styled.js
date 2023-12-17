import styled from "styled-components";

export const DropMenu = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
  margin: 0 auto;
`;

export const ChoiceTextDiv = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 5px 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 7px;
  color: #405e77;
  outline: 1px solid #71bbee;
  @media (max-width: 820px) {
    width: 45%;
  }
  @media (max-width: 500px) {
    width: 95%;
  }

  :hover {
    cursor: pointer;
  }

  .icon {
    font-size: 20px;
  }
`;

export const ChoiceText = styled.p`
  font-size: 1.1rem;
  @media (max-width: 820px) {
    font-size: 1rem;
  }
  @media (max-width: 500px) {
  }
`;

export const DropInner = styled.div`
  width: 30%;
  height: 300px;
  overflow-y: auto;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 5px 10px;
  box-sizing: border-box;
  margin: 5px auto 0 auto;
  border-radius: 7px;
  visibility: ${(props) => props.visibility};
  color: #405e77;
  outline: 1px solid #71bbee;
  @media (max-width: 820px) {
    width: 45%;
  }
  @media (max-width: 500px) {
    width: 95%;
  }
`;

export const InnerWrap = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const InnerItem = styled.li`
  list-style-type: none;
  padding: 10px 2px;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
  font-size: 15px;

  :hover {
    cursor: pointer;
    color: #71bbee;
    font-family: "SoyoB";
  }
`;
