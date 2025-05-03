import React from 'react';

// 구조 분해 할당을 통해 props를 바로 개별 변수로 받을 수 있습니다
function ProductCard({ name, price, discount, isAvailable }) {
  const finalPrice = isAvailable ? price - (price * discount / 100) : '품절';

  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>원가 : {price}원</p>
      <p>할인 : {discount}%</p>
      <p>최종 가격 : {finalPrice}원</p>
      <p>{isAvailable ? '구매 가능' : '품절'}</p>
    </div>
  );
}

export default ProductCard;