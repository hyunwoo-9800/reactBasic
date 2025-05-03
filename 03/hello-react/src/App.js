import React, { useState } from "react";
import Greeting from "./components/Greeting";
import UserProfile from "./components/UserProfile";
import ProductCard from "./components/ProductCard";
import Button from "./components/Button";
import Card from "./components/Card";
import TodoList from "./components/TodoList";

function App() {
  const handleClick = () => alert("안녕하세요!");

  const [todos, setTodos] = useState([

    // todos 정의
    { id: 1, text: "리액트 공부하기", completed: false },
    { id: 2, text: "블로그 글 쓰기", completed: true },
    { id: 3, text: "운동하기", completed: false },

  ]);

  const handleToggle = (id) => {

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );

  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <Greeting></Greeting>

      {/* 컴포넌트 호출시에 파라미터 전달 */}
      <UserProfile
        name="홍길동"
        age={999}
        location="어딘가"
        hobbies={["잠자기", "졸기", "퇴근하기"]}
      ></UserProfile>

      <ProductCard
        name="스마트폰"
        price={1000000}
        discount={10}
        isAvailable={true}
      ></ProductCard>

      <ProductCard
        name="노트북"
        price={2000000}
        discount={15}
        isAvailable={false}
      ></ProductCard>

      <Button text="로그인" onClick={handleClick} color="green"></Button>
      <Button text="회원가입" color="purple" size="large"></Button>
      <Button></Button>

      <Card title="공지사항">
        {/* Card 컴포넌트의 children 파라미터 */}
        <p>이것은 카드 내부의 콘텐츠입니다.</p>
        <button>자세히 보기</button>
      </Card>

      <Card title="최근 게시물">
        {/* Card 컴포넌트의 children 파라미터 */}
        <ul>
          <li>첫 번째 게시물</li>
          <li>두 번째 게시물</li>
          <li>세 번째 게시물</li>
        </ul>
      </Card>

      <h1>할 일 목록</h1>

      <TodoList
        todos={todos}
        onToggle={handleToggle}
        onDelete={handleDelete}
      ></TodoList>
    </div>
  );
}

export default App;
