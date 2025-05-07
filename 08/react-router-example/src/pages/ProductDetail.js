import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { productId } = useParams();

  const product = 
    {
      1 : {
      id : 1,
      name : '노트북',
      price : '1,000,000원'
    },
      2 : {
      id : 2,
      name : '스마트폰',
      price : '1,200,000원'
    },
      3 : {
      id : 3,
      name : '태블릿',
      price : '800,000원'
    },
  }[productId];

  const product2 = 
    {
      1 : {
      id : 1,
      name : '노트북',
      price : '1,000,000원'
    },
      2 : {
      id : 2,
      name : '스마트폰',
      price : '1,200,000원'
    },
      3 : {
      id : 3,
      name : '태블릿',
      price : '800,000원'
    },
  }.productId;
  

  return (
    <div>
      <h2>{product.name} 상세정보</h2>

      <p>가격 : {product.price}</p>
    </div>
  );
}

export default ProductDetail;
