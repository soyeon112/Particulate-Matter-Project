import { BrowserRouter, Route, Routes } from "react-router-dom";
import BottomMenu from "./component/BottomMenu/BottomMenu";
import Header from "./component/Header/Header";
import MainPage from "./page/Main/Main"; //지역별 메인 페이지
import BookMark from "./page/Bookmark/Bookmark"; //즐겨찾기 페이지
import MyPosition from "./page/MyLocation/MyLocation"; //내위치 페이지
import styled from "styled-components";
import { Reset } from "styled-reset";
import "./App.css";

const VisibleArea = styled.div`
  width: 90vw; //90%
  padding: 12px;
  box-sizing: border-box;
  margin: auto;
  font-family: "SoyoR";
`;
function App() {
  return (
    <BrowserRouter>
      <Reset />
      <Header />
      <VisibleArea>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/myPosition" element={<MyPosition />} />
          <Route path="/bookmark" element={<BookMark />} />
        </Routes>
      </VisibleArea>
      <BottomMenu />
    </BrowserRouter>
  );
}

export default App;
