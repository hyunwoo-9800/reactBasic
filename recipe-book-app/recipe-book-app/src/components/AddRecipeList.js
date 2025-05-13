import React, { useState } from "react";
import { ADDRECIPECATEGORIES } from "../constants/categories";

function AddRecipeList({ onAdd }) {
  const [selectedCategory, setSelectedCategory] = useState("general");

  const [form, setForm] = useState({
    recipeName: "",
    ingredient: "",
    howToCook: "",
    cookTime: 0,
    difficultLevel: "보통",
  });

  const addRecipe = (e) => {
    e.preventDefault();

    // if (!form.location.trim()) {
    //   alert("여행지명을 입력해주세요!");
    //   return;
    // }

    // if (!form.description.trim()) {
    //   alert("여행지 설명을 입력해주세요!");
    //   return;
    // }

    onAdd(form);

    setForm({
      recipeName: "",
      ingredient: "",
      howToCook: "",
      cookTime: 0,
      difficultLevel: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>레시피 목록</h1>

      <div className="category-selector">
        {ADDRECIPECATEGORIES.map((category) => (
          <button
            key={category.id}
            className={`category-btn ${
              selectedCategory === category.id ? "selected" : ""
            }`}
          >
            {category.icon}
            <span>{category.name}</span>
          </button>
        ))}
      </div>

      <div className="recipe-header">
        <h3>새 레시피 추가</h3>
      </div>

      <form className="add-recipe-form" onSubmit={addRecipe}>
        <div className="form-group">
          <label>레시피 제목</label>
          <input
            type="text"
            placeholder="예 : 김치볶음밥"
            name="recipeName"
            value={form.recipeName}
            onChange={handleInputChange}
          ></input>
        </div>

        <div className="form-group">
          <label>재료</label>
          <textarea
            placeholder="예 : 밥 1공기, 김치 100g, 햄 50g..."
            name="ingredient"
            value={form.ingredient}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div className="form-group">
          <label>조리 방법</label>
          <textarea
            placeholder="단계별로 조리 방법을 설명해주세요."
            name="howToCook"
            value={form.howToCook}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div className="form-group">
          <label>조리 시간 (분)</label>
          <input
            type="number"
            min="0"
            defaultValue="30"
            name="cookTime"
            value={form.cookTime}
            onChange={handleInputChange}
          ></input>
        </div>

        <div className="form-group">
          <label>난이도</label>
          <select>
            <option>쉬움</option>
            <option
              defaultChecked
              name="difficultLevel"
              value={form.difficultLevel}
              onChange={handleInputChange}
            >
              보통
            </option>
            <option>어려움</option>
          </select>
        </div>

        <button className="submit-btn">레시피 추가</button>
      </form>
    </div>
  );
}

export default AddRecipeList;
