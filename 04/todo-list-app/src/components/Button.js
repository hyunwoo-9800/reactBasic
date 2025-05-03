import React from 'react';

function Button() {
  // 인라인 함수
  //   return <button onClick={() => console.log('클릭함~')}>클릭</button>;

  // 컴포넌트 내 메서드
  const handleClick = () => {
    console.log('컴포넌트 내 메서드 handleClick 클릭');
  };

  return <button onClick={handleClick}>클릭해줘</button>;
}

export default Button;