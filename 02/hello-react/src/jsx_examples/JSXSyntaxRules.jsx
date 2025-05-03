import React, { Fragment } from 'react';

function JSXSyntaxRules() {
  return (
    // <div className="container">
    //   {/* 1. 모든 태그는 닫혀야 한다 */}
    //   <img src="https://placehold.co/150" alt="예시 이미지" />
    // </div>

    // 2. Fragment 사용 예시
    // <Fragment>
    //   <h2>Fragment 사용 예시</h2>
    //   <p>여러 요소를 하나로 그룹화 합니다</p>
    // </Fragment>

    // 축약된 Fragment 문법
    // <>
    //   <h2>측약된 Fragment 문법</h2>
    //   <p>태그 없이 그룹화 합니다</p>
    // </>

    <div className="container">
      {/* 3. className 사용 */}
      <label htmlFor="username">사용자이름:</label>
      <input id="username" type="text" />
    </div>
  );
}

export default JSXSyntaxRules;