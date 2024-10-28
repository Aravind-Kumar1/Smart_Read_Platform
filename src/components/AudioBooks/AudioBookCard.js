import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart, faHeart as regularHeart } from '@fortawesome/free-solid-svg-icons';
import './AudioBookCard.css';

const AudioBookCard = ({ id, title, author, cover, onClick, onFavoriteToggle, isFavorite }) => {
  // Toggle favorite status
  const toggleFavorite = (e) => {
    e.stopPropagation(); // Prevents navigation on heart icon click
    onFavoriteToggle(id); // Call the favorite toggle function passed from parent
  };

  return (
    <div className="audio-book-card" onClick={onClick}>
      <div className="audio-book-cover-container">
        <img src={cover} alt={title} className="audio-book-cover" />
        <FontAwesomeIcon
          icon={isFavorite ? solidHeart : regularHeart}
          className={`favorite-icon ${isFavorite ? 'filled' : 'empty'}`}
          onClick={toggleFavorite}
        />
      </div>
      <div className="audio-book-details">
        <h3 className="audio-book-title">{title}</h3>
        <span className="audio-book-author">{author}</span>
        <div className="audio-book-label">Free Audio Book</div>
      </div>
    </div>
  );
};

export default AudioBookCard;
