import React from "react";
import { Link, Outlet } from "react-router-dom";

function Product() {
  const products = [
    {
      id: 1,
      name: "노트북",
    },

    {
      id: 2,
      name: "스마트폰",
    },

    {
      id: 3,
      name: "태블릿",
    },
  ];

  return (
    <div>
      <h1>제품 목록</h1>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>

      <Outlet></Outlet>
    </div>
  );
}

export default Product;
