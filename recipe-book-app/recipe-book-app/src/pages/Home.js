import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <h2>맛있는 레시피 공유 플랫폼</h2>

      <p>
        이 애플리케이션은 다양한 요리 레시피를 관리하고 공유하기 위한
        플랫폼입니다.
      </p>
      <p>
        나만의 특별한 레시피를 추가하거나 다른 사람들의 레시피를 확인해보세요
      </p>

      <div className="home-buttons">
        <Link to="/list" className="btn btn-primary">
          레시피 목록 보기
        </Link>
        <Link to="/about" className="btn btn-secondary">
          앱 소개
        </Link>
      </div>
    </div>
  );
}

export default Home;
