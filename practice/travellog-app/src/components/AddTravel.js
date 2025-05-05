import React from "react";
import "./AddTravel.css";
import RatingStar from "./RatingStar";

function AddTravel() {

  return (
    <div>
      <form className="add-destination-form">
        <h2>새로운 여행지 추가</h2>

        <div className="form-group">
          <label>여행지 이름</label>
          <input
            type="text"
            placeholder="예 : 파리"
            name="travelName"
          ></input>
        </div>

        <div className="form-group">
          <label>이미지 URL (선택사항)</label>
          <input
            type="text"
            placeholder="https://example.com/image.jpg"
            name="imageUrl"
          ></input>
        </div>

        <div className="form-group">
          <label>설명</label>
          <textarea
            placeholder="이 여행지에 대한 설명을 작성하세요."
            name="description"
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
          ></input>
          <span><RatingStar></RatingStar></span>
        </div>

        <div className="form-group">
          <button className="submit-btn">여행지 추가</button>
        </div>
      </form>
    </div>
  );
}

export default AddTravel;
