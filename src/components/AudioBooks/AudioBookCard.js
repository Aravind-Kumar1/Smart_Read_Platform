import React from 'react';
import './AudioBookCard.css';

const AudioBookCard = ({ title, author, cover }) => {
  return (
    <div className="audio-book-card">
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
