import React, { useState } from 'react';
import TodoItem from './components/TodoItem';
import AddTodoForm from './components/AddTodoForm';
import './App.css';
import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';

function App() {

  // 할 일 목록
  const [todos, setTodos] = useState([
    { id: 1, text: '리액트 공부하기', completed: false },
    { id: 2, text: 'useState 이해하기', completed: true },
    { id: 3, text: 'TodoList 만들기', completed: false },
  ]);

  // 할 일 완료 상태 토글 함수
  const toggleTodo = (id) => {

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )

    );

  };

  // 새 할 일 추가 함수
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  return (

    <div className="App">

      <h1>To Do List</h1>

      <AddTodoForm onAdd={addTodo}></AddTodoForm>

      <ul className="todo-list">

        {todos.map((todo) => (
          <TodoItem key = {todo.id} todo = {todo} onToggle = {toggleTodo} />
        ))}

      </ul>

      <ControlledForm></ControlledForm>
      <UncontrolledForm></UncontrolledForm>

    </div>

  );

}

export default App;