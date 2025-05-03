import React from 'react';

function BasicJSX() {
  // JSX를 사용한 선언
  const element = <h1>Hello, Donur</h1>;

  // JSX 없이 동일한 요소 생성
  const elementWithoutJSX = React.createElement('h1', null, 'Hello, Ddochi');

  return (
    <div>
      {element}
      <hr />
      {elementWithoutJSX}
      <p>위 두 요소는 동일하게 랜더링됩니다~</p>
    </div>
  );
}

export default BasicJSX;