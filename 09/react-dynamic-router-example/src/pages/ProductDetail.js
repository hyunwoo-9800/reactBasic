import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {

    const {productId} = useParams();

    // 숫자로 변환
    // 변수, 10(진수)
    const iProductId = parseInt(productId, 10)
    
    return(
        <div>
            <h2>제품 상세</h2>
            <p>제품 ID : {iProductId}</p>
            <p>제품 ID가 홀수인지 : 
                {
                    iProductId % 2 === 1 ? ' 예' : ' 아니오'
                }
            </p>
        </div>
    );
}

export default ProductDetail;