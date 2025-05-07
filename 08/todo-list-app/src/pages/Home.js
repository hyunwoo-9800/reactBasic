import React from "react";
import { Link } from "react-router-dom";

function Home() {

  return (

    <div className="home-page">

      <h2>할 일 관리 어플리케이션</h2>
      <p>
        이 어플리케이션은 할 일을 관리하기 위한 간단한 Todo List 입니다.
        <br></br>
        React와 React Router를 사용하여 SPA(Single Page Application)로
        구현되었습니다.
      </p>

      <div className="home-buttons">

        <Link to="/todos" className="btn btn-primary">
          할 일 목록 보기
        </Link>
        <Link to="/about" className="btn btn-secondary">
          앱 소개
        </Link>
      </div>
      
    </div>

  );

}

export default Home;
