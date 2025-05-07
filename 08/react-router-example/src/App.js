import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import UserProfile from "./pages/UserProfile";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/about">소개</Link>
            </li>
            <li>
              <Link to="/contact">연락처</Link>
            </li>
            <li>
              <Link to="/user/A">사용자 A</Link>
            </li>
            <li>
              <Link to="/user/B">사용자 B</Link>
            </li>
            <li>
              <Link to="/product">제품</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>

          <Route path="/" element={<Home></Home>}></Route>

          <Route path="/about" element={<About></About>}></Route>

          <Route path="/contact" element={<Contact></Contact>}></Route>

          <Route
            path="/user/:userId"
            element={<UserProfile></UserProfile>}
          ></Route>

          <Route
            path="/user/:userId"
            element={<UserProfile></UserProfile>}
          ></Route>

          <Route path="/product" element={<Product></Product>}>
            <Route path=":productId" element={<ProductDetail></ProductDetail>}></Route>
          </Route>

        </Routes>
      </main>
    </div>
  );
}

export default App;
