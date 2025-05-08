import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>

        <nav>
          <ul>
            <li>
              <Link to="/">홈</Link>
            </li>

            <li>
              <Link to="/todos">할 일 목록</Link>
            </li>

            <li>
              <Link to="/about">소개</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/todos" element={<TodoList></TodoList>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </main>

      <footer>
        <p>&copy; sleeping TodoList App</p>
      </footer>
    </div>
  );
}

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

export default App;
