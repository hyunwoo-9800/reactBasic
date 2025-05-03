import React, { useRef } from 'react';

function UncontrolledForm() {

  // ref 생성
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const topicRef = useRef(null);
  const agreeRef = useRef(null);

  const handleSubmit = (e) => {

    e.preventDefault();

    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
      topic: topicRef.current.value,
      agree: agreeRef.current.value,
    };

    console.log(`비제어 화면 제출한 폼 데이터: ${JSON.stringify(formData)}`);
  };


  return (

    <div>

      <h2>비제어 컴포넌트 폼</h2>

      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="name">이름:</label>
          <input
            type="text"
            id="name"
            name="name"
            ref={nameRef}
            defaultValue=""
          />
        </div>

        <div>
          <label htmlFor="email">이메일:</label>
          <input
            type="email"
            id="email"
            name="email"
            ref={emailRef}
            defaultValue=""
          />
        </div>

        <div>
          <label htmlFor="message">메시지:</label>
          <textarea
            id="message"
            name="message"
            ref={messageRef}
            defaultValue=""
          />
        </div>

        <div>
          <label htmlFor="topic">주제:</label>
          <select id="topic" name="topic" ref={topicRef} defaultValue="react">
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
              ref={agreeRef}
              defaultValue={false}
            />
            이용약관에 동의합니다
          </label>
        </div>

        <button type="submit">제출</button>

      </form>

    </div>

  );
  
}

export default UncontrolledForm;