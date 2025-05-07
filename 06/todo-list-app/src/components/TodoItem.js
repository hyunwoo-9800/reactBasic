import React from 'react';
import classNames from 'classnames';

function TodoItem({ todo, onToggle, onDelete, onImportant }) {
  // 우선순위에 따라 색상 결정
  const getPriorityColor = (priority) => {
    // console.log(`priority:${priority}`);
    switch (priority) {
      case 'high':
        return '#ff5252';
      case 'medium':
        return '#ffb74d';
      case 'low':
        return '#81c784';
      default:
        return '#ffb74d';
    }
  };

  const handleCheckboxChange = (id, e) => {
    e.stopPropagation();
    // console.log(`체크박스 변경 Id: ${id}, checked:${e.target.checked}`);
    onToggle(id, e);
  };

  const handleImportantChange = (id, e) => {
    e.stopPropagation();
    // console.log(`체크박스 변경 Id: ${id}, checked:${e.target.checked}`);
    onImportant(id);
  };

  return (
    <li
      className={classNames('todo-item', {
        completed: todo.completed,
        important: todo.important,
      })}
    >
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => handleCheckboxChange(todo.id, e)}
        />
        <span className="todo-item-text">{todo.text}</span>
        {/* 우선순위 추가 */}
        <span
          className="priority-badge"
          style={{ backgroundColor: getPriorityColor(todo.priority) }}
        >
          {todo.priority === 'high'
            ? '높음'
            : todo.priority === 'medium'
            ? '중간'
            : '낮음'}
        </span>
        <button
          className={classNames('star-btn', { active: todo.important })}
          onClick={(e) => handleImportantChange(todo.id, e)}
        >
          ★
        </button>
      </div>
      <div className="todo-actions">
        <button className="delete-btn" onClick={(e) => onDelete(todo.id, e)}>
          삭제
        </button>
      </div>
    </li>
  );
}

export default TodoItem;