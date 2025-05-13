import React, { useState } from "react";
import {
  FaUtensils,
  FaBirthdayCake,
  FaCarrot,
  FaWineGlass,
  FaStar,
} from "react-icons/fa";
import {
  ADDRECIPECATEGORIES,
  RECIPELISTCATEGORIES,
} from "../constants/categories";
import AddRecipeList from "./AddRecipeList";
import "./RecipeList.css";

function RecipeList() {
  const [selectedCategory, setSelectedCategory] = useState("general");

  const [recipeList, setRecipeList] = useState([
    {
      id: 1,
      recipeName: "김치찌개",
      ingredient:
        "김치 500g, 돼지고기 200g, 두무 1모, 대파 1대, 고춧가루 1큰술, 다진마늘 1큰술",
      howToCook:
        "1. 냄비에 김치와 돼지고기를 볶습니다. 2. 물을 넣고 끓입니다. 3. 두부와 대파를 넣고 더 끓입니다. 4. 간을 맞추고 완성합니다.",
      cookTime: 30,
      difficultLevel: "보통",
      category: "메인요리",
      image: `${process.env.REACT_APP_PUBLIC_URL}/background/main-dish-bg.png`,
      icon: <FaUtensils />,
    },

    {
      id: 2,
      recipeName: "초코칩 쿠키",
      ingredient:
        "밀가루 200g, 설탕 100g, 버터 100g, 계란 1개, 초콜릿칩 100g, 베이킹 소다 1작은술",
      howToCook:
        "1. 버터와 설탕을 섞습니다. 2. 계란을 넣고 더 섞습니다. 3. 밀가루와 베이킹소다를 넣고 반죽합니다. 4. 초콜릿칩을 섞어 넣고 오븐에 굽습니다.",
      cookTime: 30,
      difficultLevel: "보통",
      category: "메인요리",
      image: `${process.env.REACT_APP_PUBLIC_URL}/background/main-dish-bg.png`,
      icon: <FaUtensils />,
    },

    {
      id: 2,
      recipeName: "김치찌개",
      ingredient:
        "김치 500g, 돼지고기 200g, 두무 1모, 대파 1대, 고춧가루 1큰술, 다진마늘 1큰술",
      howToCook:
        "1. 냄비에 김치와 돼지고기를 볶습니다. 2. 물을 넣고 끓입니다. 3. 두부와 대파를 넣고 더 끓입니다. 4. 간을 맞추고 완성합니다.",
      cookTime: 30,
      difficultLevel: "보통",
      category: "메인요리",
      image: `${process.env.REACT_APP_PUBLIC_URL}/background/main-dish-bg.png`,
      icon: <FaUtensils />,
    },
  ]);

  // 레시피 추가 함수
  const addRecipe = (form) => {
    const newRecipeList = {
      id: Date.now(),
      recipeName: form.recipeName,
      ingredient: form.ingredient,
      howToCook: form.howToCook,
      cookTime: form.cookTime,
      difficultLevel: form.difficultLevel,
    };

    setRecipeList([...recipeList, newRecipeList]);
  };

    const handleSelectedCategory = (id) => {
    setSelectedCategory(id);
  };

  // 레시피를 출력할 변수
  const recipe = recipeList.map((item) => (
    <div className="recipe-item">
      <div className="recipe-content" key={item.id}>
        <div className="recipe-header">
          <div>
            <div className="recipe-info">
              <p className="category-icon">{item.icon}</p>
              <h3>{item.recipeName}</h3>
              <button className="favorite-btn">
                <FaStar />
              </button>
              <span className="category-label">{item.category}</span>
              <span className="difficulty-badge">{item.difficultLevel}</span>
              <span className="cooking-time">{item.cookTime}</span>
            </div>

            <div className="recipe-section">
              <h4>재료</h4>
              <p>{item.ingredient}</p>

              <h4>조리방법</h4>
              <p>{item.howToCook}</p>
            </div>

            <button className="delete-btn">삭제</button>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      <AddRecipeList onAdd={addRecipe}></AddRecipeList>

      <div className="filters">
        {RECIPELISTCATEGORIES.map((category) => (
          <button
            key={category.id}
            className={`category-btn ${
              selectedCategory === category.id ? "selected" : ""
            }`
          }
          onClick={() => handleSelectedCategory(category.id)}
          >
            {category.icon}
            <span>{category.name}</span>
          </button>
        ))}
      </div>

      <div className="recipe-grid">{recipe}</div>
    </div>
  );
}

export default RecipeList;
