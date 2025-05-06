import React, { useState, useEffect  } from "react";
import "./AddTravel.css";

function AddTravel({ onAdd }) {
  const [form, setForm] = useState({
    image: "",
    location: "",
    description: "",
    rating: "3",
    visitCount : 0,
  });

  useEffect(() => {

    if (form.location) {

      setForm((prev) => ({

        ...prev,
        image: `https://placehold.co/300x200?text=${encodeURIComponent(prev.location)}`,

      }));

    }
  }, [form.location]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!form.location.trim()) {
      alert("여행지명을 입력해주세요!");
      return;
    }

    if (!form.description.trim()) {
      alert("여행지 설명을 입력해주세요!");
      return;
    }

    onAdd(form);

    setForm({
      image: "",
      location: "",
      description: "",
      rating: "3",
      visitCount : 0,
    });
  };

  return (
    <div>
      <form className="add-destination-form" onSubmit={handleSubmit}>
        <h2>새로운 여행지 추가</h2>

        <div className="form-group">
          <label>여행지 이름</label>
          <input
            type="text"
            placeholder="예 : 파리"
            name="location"
            value={form.location}
            onChange={handleInputChange}
          ></input>
        </div>

        <div className="form-group">
          <label>이미지 URL (선택사항)</label>
          <input
            type="text"
            placeholder="https://example.com/image.jpg"
            name="image"
            value={form.image}
            onChange={handleInputChange}
          ></input>
        </div>

        <div className="form-group">
          <label>설명</label>
          <textarea
            placeholder="이 여행지에 대한 설명을 작성하세요."
            name="description"
            value={form.description}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div className="form-group">
          <label>평점 (1-5)</label>
          <input
            type="range"
            className="rating-input"
            min="1"
            max="5"
            step="1"
            name="rating"
            value={form.rating}
            onChange={handleInputChange}
          ></input>
          <span>{form.rating}점</span>
        </div>

        <div className="form-group">
          <input type="hidden"
          name="visitCount"
          value={form.visitCount}
          onChange={handleInputChange}
          ></input>
        </div>

        <div className="form-group">
          <button className="submit-btn">여행지 추가</button>
        </div>
      </form>
    </div>
  );
}

export default AddTravel;
