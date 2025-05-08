import React, { useState } from "react";
import TodoItem from "./TodoItem";
import AddTodoForm from "./AddTodoForm";
import "./TodoList.css";
import classNames from "classnames";
import { CATEGORIES, FILTERS } from "../constants/categories";


function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리액트 공부하기",
      completed: false,
      priority: "medium",
      important: true,
      category: "general",
    },
    {
      id: 2,
      text: "useState 이해하기",
      completed: true,
      priority: "medium",
      important: false,
      category: "general",
    },
    {
      id: 3,
      text: "TodoList 만들기",
      completed: false,
      priority: "medium",
      important: false,
      category: "general",
    },
  ]);

  const [filter, setFilter] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("general");

  // 완료 여부 토글
  const toggleTodo = (id, e) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // 새 할 일 추가
  const addTodo = (text, priority) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      priority: priority,
      completed: false,
      important: false,
      category: selectedCategory,
    };
    setTodos([...todos, newTodo]);
  };

  // 할 일 삭제
  const deleteTodo = (id, e) => {
    e.stopPropagation();
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // 중요 토글
  const toggleImportant = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, important: !todo.important } : todo
      )
    );
  };

  // 필터된 할 일 리스트
  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "completed") return todo.completed;
    if (filter === "active") return !todo.completed;
    if (filter === "important") return todo.important;
    return true;
  });

  // 카테고리 선택 핸들러
  const handleSelectedCategory = (id) => {
    setSelectedCategory(id);
  };

  return (
    <div className="todo-container" onClickCapture={() => {}}>
      {/* <h1>To Do List</h1> */}

      {/* 카테고리 버튼 */}
      <div className="category-selector">
        {CATEGORIES.map((category) => (
          <button
            key={category.id}
            className={`category-btn ${selectedCategory === category.id ? "selected" : ""}`}
            onClick={() => handleSelectedCategory(category.id)}
          >
            {category.icon}
            <span>{category.name}</span>
          </button>
        ))}
      </div>

      <AddTodoForm onAdd={addTodo} />

      {/* 필터 버튼 */}
      <div className="filters">
        {FILTERS.map((filterType) => (
          <button
            key={filterType}
            className={classNames({ active: filter === filterType })}
            onClick={() => setFilter(filterType)}
          >
            {filterType === "all"
              ? "전체"
              : filterType === "active"
              ? "미완료"
              : filterType === "completed"
              ? "완료"
              : "중요"}
          </button>
        ))}
      </div>

      {/* 조건부 메시지 또는 리스트 */}
      {filteredTodos.length === 0 ? (
        <p className="empty-message">
          {filter === "active"
            ? "미완료 할 일이 없습니다."
            : filter === "completed"
            ? "완료된 할 일이 없습니다."
            : filter === "important"
            ? "중요한 할 일이 없습니다."
            : "할 일이 없습니다.(새 할일을 추가해 주세요.)"}
        </p>
      ) : (
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              onImportant={toggleImportant}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
