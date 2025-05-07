import React from 'react';

function BackgroundExample() {
  const style = {
    backgroundImage: `url(${process.env.REACT_APP_PUBLIC_URL}/Balloons.jpeg)`,
    backgroundSize: 'cover',
    height: '300px',
    width: '100%',
  };

  return <div style={style}>배경 이미지 예제</div>;
}

export default BackgroundExample;