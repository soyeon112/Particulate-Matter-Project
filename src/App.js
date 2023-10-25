import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BottomMenu from "./component/BottomMenu";
import Header from "./component/Header";
import MainPage from "./page/Main"; //지역별 메인 페이지
import BookMark from "./page/BookMark"; //즐겨찾기 페이지
import MyPosition from "./page/MyPosition"; //내위치 페이지

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="contents">
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/myPosition" element={<MyPosition />} />
          <Route path="/bookmark" element={<BookMark />} />
        </Routes>
      </div>
      <BottomMenu />
    </BrowserRouter>
  );
}

export default App;
