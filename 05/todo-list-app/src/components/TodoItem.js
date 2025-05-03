import React from 'react';

function TodoItem({ todo, onToggle }) {

  return (

    <li
      className={`todo-item ${todo.completed ? 'completed' : ''}`}
      onClick={() => onToggle(todo.id)}
    >
      <span>{todo.text}</span>
    </li>
  );
  
}

export default TodoItem;