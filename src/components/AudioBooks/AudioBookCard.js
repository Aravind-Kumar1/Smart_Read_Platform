import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AudioBookCard.css';

const AudioBookCard = ({ id, title, author, cover }) => {
  const navigate = useNavigate();

  // Handler function to navigate to the details page
  const handleClick = () => {
    // Navigate to the AudioBookDetailPage, passing the id of the selected book
    navigate(`/audiobook/${id}`);
  };

  return (
    <div className="audio-book-card" onClick={handleClick}>
      <div className="audio-book-cover-container">
        <img src={cover} alt={title} className="audio-book-cover" />
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
