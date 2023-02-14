import "./App.css";
import BottomMenu from "./component/BottomMenu";
import Header from "./component/Header";
import MainPage from "./page/Main";

function App() {
  return (
    <>
      <Header />
      <div className="contents">
        <MainPage />
      </div>
      <BottomMenu />
    </>
  );
}

export default App;
