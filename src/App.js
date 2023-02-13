import "./App.css";
import MenuCompo from "./component/menu";
import HeaderCompo from "./component/header";
import MainPage from "./page/main";

function App() {
  return (
    <>
      <HeaderCompo />
      <div className="contents">
        <MainPage />
      </div>
      <MenuCompo />
    </>
  );
}

export default App;
