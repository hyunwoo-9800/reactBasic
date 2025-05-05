import React from "react";

function RatingStar({ rating, max = 5 }) { // max 기본값을 5로 설정
  // 1. 정수 별을 계산
  const fullStar = Math.floor(rating);
  // 2. 반 별을 계산 (소수점이 0.25 이상 0.75 미만인 경우 반 별을 표시)
  const hasHalfStar = rating - fullStar >= 0.25 && rating - fullStar < 0.75;
  // 3. 빈 별을 계산 (전체 별에서 꽉 찬 별과 반 별을 제외한 부분)
  const emptyStar = max - fullStar - (hasHalfStar ? 1 : 0);

  const stars = [];

  // 4. 꽉 찬 별 추가
  for (let i = 0; i < fullStar; i++) {
    stars.push(<span key={`full-${i}`}>★</span>);
  }

  // 5. 반 별 추가 (소수점이 0.25 이상 0.75 미만인 경우)
  if (hasHalfStar) {
    stars.push(<span key="half">⯪</span>);
  }

  // 6. 빈 별 추가
  for (let i = 0; i < emptyStar; i++) {
    stars.push(<span key={`empty-${i}`}>☆</span>);
  }

  return (
    <div>{stars} ({rating}/{max})</div>
  );
}

export default RatingStar;
