// BookCategories.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaBook, FaRocket, FaBalanceScale, FaBullhorn, FaLeaf, FaHeart,
  FaUserGraduate, FaGlobe, FaHistory, FaHandsHelping, FaIndustry,
  FaChartLine, FaThumbsUp, FaPiggyBank, FaCoins
} from 'react-icons/fa';
import './BookCategories.css';

const categories = [
  { name: 'popular', displayName: 'Popular', icon: <FaBook className="category-icon" /> },
  { name: 'entrepreneurship', displayName: 'Entrepreneurship', icon: <FaRocket className="category-icon" /> },
  { name: 'politics', displayName: 'Politics', icon: <FaBalanceScale className="category-icon" /> },
  { name: 'marketing-sales', displayName: 'Marketing & Sales', icon: <FaBullhorn className="category-icon" /> },
  { name: 'science', displayName: 'Science', icon: <FaLeaf className="category-icon" /> },
  { name: 'health-nutrition', displayName: 'Health & Nutrition', icon: <FaHeart className="category-icon" /> },
  { name: 'personal-development', displayName: 'Personal Development', icon: <FaUserGraduate className="category-icon" /> },
  { name: 'economics', displayName: 'Economics', icon: <FaGlobe className="category-icon" /> },
  { name: 'history', displayName: 'History', icon: <FaHistory className="category-icon" /> },
  { name: 'communication-skills', displayName: 'Communication Skills', icon: <FaHandsHelping className="category-icon" /> },
  { name: 'motivation-inspiration', displayName: 'Motivation & Inspiration', icon: <FaThumbsUp className="category-icon" /> },
  { name: 'money-investments', displayName: 'Money & Investments', icon: <FaPiggyBank className="category-icon" /> },
  
];

const BookCategories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (displayName) => {
    const selectedCategory = categories.find(category => category.displayName === displayName);
    navigate(`/category/${selectedCategory.name}`);
  };

  return (
    <div className="categories-page">
      <h2 className="main-heading">Explore Our Book Categories</h2>
      <p className="tagline">Find the perfect book for every occasion.</p>
      <div className="categories-list">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className="category-item flex flex-row items-center gap-4 rounded-lg shadow-lg transition-transform hover:scale-105 cursor-pointer p-4"
            onClick={() => handleCategoryClick(category.displayName)}
          >
            {category.icon}
            <div className="category-name font-medium">{category.displayName}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCategories;
