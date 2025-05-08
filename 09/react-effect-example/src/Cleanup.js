import React, { useState, useEffect } from "react";

function Cleanup() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "숨기기" : "보이기"}
      </button>
      {isVisible && <Timer></Timer>}
    </div>
  );
}

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("타이머 시작");
    const interverId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // cleanup 함수
    return () => {
      console.log("타이머 정리");
      clearInterval(interverId);    // 1초마다 실행되는 interverId의 내용을 정리
    };
  }, []); // [] : 마운트 시에만 실행

  return(
    <p>타이머 : {seconds} 초</p>
  );
}

export default Cleanup;
