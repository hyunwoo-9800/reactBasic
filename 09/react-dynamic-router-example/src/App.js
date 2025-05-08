import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import PostComment from "./pages/PostComment";
import ProductDetail from "./pages/ProductDetail";

function App() {

  const userId = 'hw';
  const postId = '1';
  const commentId = '2';

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
              <Link to={`/users/${userId}`}>프로필</Link>
            </li>

            <li>
              <Link to={`/post/${postId}/comments/${commentId}`}>댓글 상세</Link>
            </li>

          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/users/:userId?" element={<UserProfile></UserProfile>}></Route>
          <Route path="/post/:postId/comments/:commentId" element={<PostComment></PostComment>}></Route>
          <Route path="/ProductDetail/:productId" element={<ProductDetail></ProductDetail>}></Route>
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
