import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
    <div>
      <h1>Recipe Book</h1>

      <nav>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/list">레시피 목록</Link>
          </li>
          <li>
            <Link to="/about">소개</Link>
          </li>
        </ul>
      </nav>
      
    </div>
    );

}

export default Header;
