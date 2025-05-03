import React from 'react';

function JSXExpressions() {
  const name = '둘리';
  const age = 20;
  const isLoggedIn = true;

  function formatName(user) {
    return user + '님';
  }

  return (
    <div>
      {/* 변수 사용 */}
      <h1>안녕하세요, {name}</h1>

      {/* 표현식 사용 */}
      <p>내년에 {age + 1}살이 됩니다</p>

      {/* 함수 호출 */}
      <p>반값습니다, {formatName(name)}</p>

      {/* 삼항 연산자 */}
      <p>{isLoggedIn ? '로그인 상태입니다' : '로그인이 필요합니다'}</p>

      {/* 논리 연산자를 활요한 조건부 랜더링 */}
      {isLoggedIn && <p>사랑합니다</p>}
    </div>
  );
}
export default JSXExpressions;