import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import RecipeList from "./components/RecipeList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/list" element={<RecipeList></RecipeList>}></Route>
          <Route path="/*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );

  function NotFound() {
  return (
    <div className="not-found-apge">
      <h2>404 - 페이지를 찾을 수 없습니다.</h2>
      <p>요청하신 페이지가 존재하지 않습니다.</p>
      <Link to="/" className="btn btn-primary">
        홈으로 돌아가기
      </Link>
    </div>
  );
}
}

export default App;
