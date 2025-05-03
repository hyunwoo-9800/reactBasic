import React, { useState } from "react";

function ControlledForm() {

  // 상태 저장
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    topic: "react",
    agree: false,
  });

  const handleInputChange = (e) => {

    console.log(e.target);

    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));

  };

  const handleEmailChange = (e) => {

    console.log(e.target);

    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));

  };

  const handleMessageChange = (e) => {

    console.log(e.target);

    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));

  };

  const handleTopicChange = (e) => {

    console.log(e.target);

    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));

  };

  const handleAgreeChange = (e) => {

    console.log(e.target);

    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.checked,
    }));

  };

  const handleSubmit = (e) => {

    console.log(e.target);

    e.preventDefault();
    console.log(`제출한 폼 데이터:`, formData);

  };

  return (

    <div>

      <h2>제어 컴포넌트 폼</h2>

      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="name">이름:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="email">이메일:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleEmailChange}
          />
        </div>

        <div>
          <label htmlFor="message">메시지:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleMessageChange}
          />
        </div>

        <div>
          <label htmlFor="topic">주제:</label>
          <select
            id="topic"
            name="topic"
            value={formData.topic}
            onChange={handleTopicChange}
          >
            <option value="react">React</option>
            <option value="javascript">Javascript</option>
            <option value="css">Css</option>
          </select>
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleAgreeChange}
            />
            이용약관에 동의합니다
          </label>
        </div>

        <button type="submit">제출</button>

      </form>

      <div>
        <h3>현재 상태:</h3>
        <pre>{JSON.stringify(formData)}</pre>
      </div>

    </div>

  );
  
}

export default ControlledForm;
