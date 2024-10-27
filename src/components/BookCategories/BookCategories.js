// BookCategories.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BookCategories.css';
import {
  FaBook, FaLightbulb, FaBalanceScale, FaBullhorn, FaLeaf, FaHeart,
  FaUserGraduate, FaGlobe, FaHistory, FaHandsHelping, FaIndustry,
  FaChartLine, FaRocket, FaPiggyBank, FaThumbsUp, FaCoins
} from 'react-icons/fa';

const categories = [
  { name: 'Popular', icon: <FaBook className="category-icon" /> },
  { name: 'Entrepreneurship', icon: <FaRocket className="category-icon" /> },
  { name: 'Politics', icon: <FaBalanceScale className="category-icon" /> },
  { name: 'Marketing & Sales', icon: <FaBullhorn className="category-icon" /> },
  { name: 'Science', icon: <FaLeaf className="category-icon" /> },
  { name: 'Health & Nutrition', icon: <FaHeart className="category-icon" /> },
  { name: 'Personal Development', icon: <FaUserGraduate className="category-icon" /> },
  { name: 'Economics', icon: <FaGlobe className="category-icon" /> },
  { name: 'History', icon: <FaHistory className="category-icon" /> },
  { name: 'Communication Skills', icon: <FaHandsHelping className="category-icon" /> },
  { name: 'Corporate Culture', icon: <FaIndustry className="category-icon" /> },
  { name: 'Management & Leadership', icon: <FaChartLine className="category-icon" /> },
  { name: 'Motivation & Inspiration', icon: <FaThumbsUp className="category-icon" /> },
  { name: 'Money & Investments', icon: <FaPiggyBank className="category-icon" /> },
  { name: 'Wealth Management', icon: <FaCoins className="category-icon" /> },
];

const BookCategories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    const collectionName = categoryName.toLowerCase().replace(/ & /g, "_").replace(/ /g, "_");
    navigate(`/category/${collectionName}`);
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
            onClick={() => handleCategoryClick(category.name)}
          >
            {category.icon}
            <div className="category-name font-medium">{category.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCategories;
