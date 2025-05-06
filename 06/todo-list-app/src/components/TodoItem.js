import React from 'react';

function TodoItem({ todo, onToggle, onDelete }) {
  // 우선순위에 따라 색상 결정
  const getPriorityColor = (priority) => {
    console.log(`priority:${priority}`);
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
    console.log(`체크박스 변경 Id: ${id}, checked:${e.target.checked}`);
    onToggle(id, e);
  };

  return (
    <li
      className={`todo-item ${todo.completed ? 'completed' : ''}`}
      onClick={(e) => onToggle(todo.id, e)}
    >
      <input
        type="checkbox"
        className="checkbox"
        checked={todo.completed}
        onChange={(e) => handleCheckboxChange(todo.id, e)}
      />
      <span>{todo.text}</span>
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
      <div className="todo-actions">
        <button className="edit-btn">수정</button>
        <button className="delete-btn" onClick={(e) => onDelete(todo.id, e)}>
          삭제
        </button>
      </div>
    </li>
  );
}

export default TodoItem;