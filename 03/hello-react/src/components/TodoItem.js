import React from 'react';

function TodoItem({ todo, onToggle, onDelete }) {

  return (

    <div className="todo-item">
        
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      ></input>

      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>

      <button onClick={() => onDelete(todo.id)}>삭제</button>

    </div>

  );

}

export default TodoItem;