import React from 'react';

function Button({
  text = '버튼',
  onClick = () => alert('버튼이 클릭되었습니다'),
  color = 'blue',
  size = 'medium',
}) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
        padding:
          size === 'small'
            ? '5px 10px'
            : size === 'large'
            ? '15px 30px'
            : '10px 20px',
      }}
    >
      {text}
    </button>
  );
}

export default Button;