import React, { useState } from 'react';
import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';
import './TodoList.css';

function TodoList() {
  // 할 일 목록
  const [todos, setTodos] = useState([
    { id: 1, text: '리액트 공부하기', completed: false },
    { id: 2, text: 'useState 이해하기', completed: true },
    { id: 3, text: 'TodoList 만들기', completed: false },
  ]);

  // 할 일 완료 상태 토글 함수
  const toggleTodo = (id, e) => {
    console.log(`할 일 토글ID:${id}, 이벤트 타입:${e.type}`);
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // 새 할 일 추가 함수
  const addTodo = (text, priority) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      priority: priority,
      completed: false,
    };

    console.log(`새 할 일:${JSON.stringify(newTodo)}`);
    setTodos([...todos, newTodo]);
  };

  // 할 일 삭제 함수
  const deleteTodo = (id, e) => {
    // 이벤트 전파(버블링) 중지
    e.stopPropagation();

    console.log(`할 일 삭제 Id:${id}, 이벤트 타입:${e.type}`);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // 캡쳐링 단계 이벤트 핸들러
  const handleContainerClickCapture = (e) => {
    // console.log(`캡쳐링 단계: ${e.target.tagName} 요소 클릭 감지`);
  };

  return (
    <div
      className="todo-container"
      onClickCapture={handleContainerClickCapture}
    >
      <h1>To Do List</h1>
      <AddTodoForm onAdd={addTodo} />
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;