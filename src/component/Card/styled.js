import styled from "styled-components";

export const CardDiv = styled.div`
  display: inline-block;
  /* float: left; */
  width: 49%;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  /* margin: 0.5%; */
  margin: 10px 0.5%;
  padding: 15px;
  box-sizing: border-box;
  border-radius: 7px;

  @media (max-width: 500px) {
    //모바일
    width: 100%;
  }
`;

export const InnerTop = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #fff;

  .icon {
    font-size: 20px;
    cursor: pointer;
  }
`;

export const InnerTopAddr = styled.div`
  width: auto;
  height: auto;

  .dong {
    font-size: 1.5rem;
    font-family: "SoyoB";
    color: #f6ffa6;
    /* @media only screen and (max-width: 800px) {
      font-size: 20px;
      font-weight: bold;
    } */
  }
  .si {
    font-size: 1rem;
    margin-left: 5px;
    /* @media only screen and (max-width: 800px) {
      font-size: 13.5px;
      margin-left: 5px;
    } */
  }
`;

//중앙
export const InnerMiddle = styled.div`
  width: 100%;
  height: auto;
  margin: 15px auto;
  text-align: center;
`;
export const MiddleInnerText = styled.span`
  margin: 0 auto;
  display: inline-block;
  font-size: 1.6rem;
  padding: 10px 25px;
  background-color: rgba(255, 255, 255, 0.5);
  text-align: center;
  border-radius: 7px;
  font-weight: 600;
  box-sizing: border-box;
  color: #333;
`;
//하단
export const InnerBottom = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 0;
  box-sizing: border-box;
  text-align: center;
  margin-top: 10px;

  div {
    margin-bottom: 3px;
  }
`;
export const BottomInnerText = styled.span`
  font-size: 0.9rem;
  color: #333;
  font-weight: 500;
  margin: 0 2px;
`;
