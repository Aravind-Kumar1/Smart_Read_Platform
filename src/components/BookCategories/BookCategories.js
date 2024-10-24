import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BookCategories.css';
import { FaBook, FaLightbulb, FaBalanceScale, FaBullhorn, FaLeaf, FaHeart, FaUserGraduate, FaGlobe, FaHistory, FaHandsHelping, FaIndustry, FaChartLine, FaRocket, FaPiggyBank, FaThumbsUp, FaCoins } from 'react-icons/fa';

const categories = [
  { name: 'Popular', icon: <FaBook className="category-icon" />, books: ['The Alchemist', 'Becoming'] },
  { name: 'Entrepreneurship', icon: <FaRocket className="category-icon" />, books: ['Start with Why', 'The Lean Startup'] },
  { name: 'Politics', icon: <FaBalanceScale className="category-icon" />, books: ['The Art of War', 'The Prince'] },
  { name: 'Marketing & Sales', icon: <FaBullhorn className="category-icon" />, books: ['Contagious', 'Influence: The Psychology of Persuasion'] },
  { name: 'Science', icon: <FaLeaf className="category-icon" />, books: ['Sapiens', 'A Brief History of Time'] },
  { name: 'Health & Nutrition', icon: <FaHeart className="category-icon" />, books: ['The Body Keeps the Score', 'How Not to Die'] },
  { name: 'Personal Development', icon: <FaUserGraduate className="category-icon" />, books: ['Atomic Habits', 'The 7 Habits of Highly Effective People'] },
  { name: 'Economics', icon: <FaGlobe className="category-icon" />, books: ['Freakonomics', 'The Wealth of Nations'] },
  { name: 'History', icon: <FaHistory className="category-icon" />, books: ['Guns, Germs, and Steel', 'The Diary of a Young Girl'] },
  { name: 'Communication Skills', icon: <FaHandsHelping className="category-icon" />, books: ['Crucial Conversations', 'How to Win Friends and Influence People'] },
  { name: 'Corporate Culture', icon: <FaIndustry className="category-icon" />, books: ['Good to Great', 'The Five Dysfunctions of a Team'] },
  { name: 'Management & Leadership', icon: <FaChartLine className="category-icon" />, books: ['Leaders Eat Last', 'The 5 Levels of Leadership'] },
  { name: 'Motivation & Inspiration', icon: <FaThumbsUp className="category-icon" />, books: ['You Are a Badass', 'The Power of Now'] },
  { name: 'Money & Investments', icon: <FaPiggyBank className="category-icon" />, books: ['Rich Dad Poor Dad', 'The Intelligent Investor'] },
  { name: 'Wealth Management', icon: <FaCoins className="category-icon" />, books: ['The Millionaire Next Door', 'Think and Grow Rich'] },
];

const BookCategories = () => {
  const navigate = useNavigate(); // Use useNavigate for routing

  const handleCategoryClick = (categoryName) => {
    navigate(`/category/${categoryName.toLowerCase()}`); // Navigate to the specific category page
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
            onClick={() => handleCategoryClick(category.name)} // Update to navigate
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
