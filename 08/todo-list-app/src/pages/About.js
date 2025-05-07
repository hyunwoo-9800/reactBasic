import React from 'react';

function About() {
  return (
    <div className="about-page">
      <h2>앱 소개</h2>
      <p>
        이 To Do List 어플리케이션은 React와 React Router를 사용하여 구현된
        SPA(Single-Page Application)입니다.
      </p>
      <h3>주요 기능</h3>
      <ul>
        <li>할 일 추가, 수정, 삭제</li>
        <li>할 일 완료 상태 관리</li>
        <li>할 일 상세 정보 보기</li>
        <li>React Router를 활용한 다중 페이지 구조</li>
      </ul>
      <h3>사용 기술</h3>
      <ul>
        <li>React - UI 구현</li>
        <li>React Router - 라우팅 처리</li>
        <li>localStorage - 데이터 저장</li>
        <li>CSS - 스타일링</li>
      </ul>
    </div>
  );
}

export default About;