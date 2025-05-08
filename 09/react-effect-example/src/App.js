import React, { useState, useEffect } from "react";
import "./App.css";
import Cleanup from "./Cleanup";

function App() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // useEffect 기본 형태
  // useEffect(() => {
  //   // 실행할 부수 효과
  //   document.title = `카운트 : ${count}`
  //   console.log(`컴포넌트 마운트 마운트(첫 실행) 되었습니다 ${count}`)
  // });

  // 첫 렌더링시 작동
  useEffect(() => {
    // 실행할 부수 효과
    console.log(`컴포넌트 마운트 마운트(첫 실행) 되었습니다 ${count}`);
  }, []);

  
  useEffect(() => {
    // 실행할 부수 효과
    console.log(`name :  ${name}`);
    document.title = `카운트 : ${count}`
  }, [name]);

  return (
  <div className="App">
    <p>카운트 : {count}</p>
    <button onClick={() => setCount(count + 1)}>카운트 증가</button>
    <br></br>
    <input
    value={name}
    onChange={(e) => setName(e.target.value)}
    placeholder="이름을 입력하세요."
    ></input>
    <Cleanup></Cleanup>
  </div>)
  ;

}

export default App;
