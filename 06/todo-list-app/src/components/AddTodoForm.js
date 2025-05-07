import React, { useState } from 'react';

function AddTodoForm({ onAdd }) {
  const [text, setText] = useState('');

  // 우선순위 값
  const [priority, setPriority] = useState('medium');

  const handleInputChange = (e) => {
    // console.log(`입력 변경:${e.target.value}`);
    setText(e.target.value);
  };

  const handlePriorityChange = (e) => {
    console.log(`우선순위:${e.target.value}`);
    setPriority(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(`text.trim():${text.trim()}`);
    if (!text.trim()) {
      console.log('빈 할일은 추가 할 수 없습니다');
      return;
    }
    onAdd(text, priority);
    setText('');
    setPriority('medium');
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        placeholder="새 할 일 입력"
      />
      {/* 추가: 우선순위 선택 셀렉트 박스 */}
      <select value={priority} onChange={handlePriorityChange}>
        <option value="high">높음</option>
        <option value="medium">중간</option>
        <option value="low">낮음</option>
      </select>
      <button type="submit">추가</button>
    </form>
  );
}

export default AddTodoForm;