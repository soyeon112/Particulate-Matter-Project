import React from "react";
import styled from "styled-components";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

// 미세먼지 상황별 색상코드
const colors = {
  매우좋음: "#71bbee",
  좋음: "a1c651",
  한때나쁨: "fdd77d",
  나쁨: "ffbf87",
  매우나쁨: "ff414d",
};

const Card = styled.div`
  display: inline-block;
  /* float: left; */
  width: 49%;
  height: 200px;
  background-color: #71bbee;
  margin: 0.5%;
  padding: 15px;
  box-sizing: border-box;
  border-radius: 7px;

  @media only screen and (max-width: 1000px) {
    width: 100%;
    height: 200px;
  }
`;

const Card_Inner_Top = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #fff;

  .icon {
    font-size: 3.5vh;
    margin-top: 10px;
  }
`;
const Inner_Addr = styled.div`
  width: auto;
  height: auto;

  .dong {
    font-size: 4vh;
    font-weight: bold;
  }
  .si {
    font-size: 2.3vh;
    margin-left: 5px;
  }
`;

//중앙
const Card_Inner_Middle = styled.div`
  width: 100%;
  height: auto;
  /* margin: 5px auto; */
  margin: 15px auto 12px;
`;
const Middle_InnerText = styled.p`
  margin: 0 auto;
  width: 120px;
  font-size: 5.3vh;
  padding: 5px 2px 2px;
  background-color: rgba(255, 255, 255, 0.5);
  text-align: center;
  border-radius: 7px;
  font-weight: 600;
  box-sizing: border-box;
  color: #333;
`;
//하단
const Card_Inner_Bottom = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
  margin-top: 10px;
`;
const Bottom_InnerText = styled.span`
  font-size: 1.9vh;
`;

function card() {
  return (
    <>
      <Card>
        <Card_Inner_Top>
          <Inner_Addr>
            <span className="dong">권선동</span>
            <span className="si">수원시</span>
          </Inner_Addr>
          {/* <AiFillHeart className="icon" /> --> 즐겨찾기 on */}
          <AiOutlineHeart className="icon" />
        </Card_Inner_Top>
        <Card_Inner_Middle>
          <Middle_InnerText>좋음</Middle_InnerText>
        </Card_Inner_Middle>
        <Card_Inner_Bottom>
          <div>
            <Bottom_InnerText>미세먼지 수치 :</Bottom_InnerText>
            <Bottom_InnerText>37</Bottom_InnerText>
          </div>
          <Bottom_InnerText>날짜</Bottom_InnerText>
        </Card_Inner_Bottom>
      </Card>
    </>
  );
}

export default card;
