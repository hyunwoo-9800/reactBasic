import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {

  const TodoList = () => (<div>할 일 목록 페이지</div>);
  return (

    <div className="App">

      <header className="App-header">
        
        <h1>To Do List</h1>

        <nav>

          <ul>

            <li>
              <Link to = "/">홈</Link>
            </li>

            <li>
              <Link to = "/todos">할 일 목록</Link>
            </li>

            <li>
              <Link to = "/about">소개</Link>
            </li>

          </ul>

        </nav>

      </header>

      <main>
        <Routes>
          <Route path="/" element = {<Home></Home>}></Route>
          <Route path="/todos" element = {<TodoList></TodoList>}></Route>
          <Route path="/about" element = {<About></About>}></Route>
        </Routes>
      </main>

      <footer>
        <p>&copy; sleeping TodoList App</p>
      </footer>
    </div>
  );
}

export default App;
