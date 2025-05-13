import { FaUtensils , FaBirthdayCake, FaCarrot , FaWineGlass  } from 'react-icons/fa';

export const RECIPELISTCATEGORIES = [
  { id: 'all', name: '전체' },
  { id: 'favorite', name: '즐겨찾기' },
  { id: 'easy', name: '쉬움' },
  { id: 'nomal', name: '보통' },
  { id: 'hard', name: '어려움' },
];

export const ADDRECIPECATEGORIES = [
  { id: 'mainDish', name: '메인요리', icon : <FaUtensils /> },
  { id: 'dessert', name: '디저트', icon : <FaBirthdayCake /> },
  { id: 'appetizer', name: '전채요리', icon : <FaCarrot /> },
  { id: 'drink', name: '음료', icon : <FaWineGlass /> },
];

// export const FILTERS = ["all", "active", "completed", "important"];