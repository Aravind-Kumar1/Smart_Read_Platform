import React from 'react';
import './card.css'; // Ensure this CSS file contains the styles below

const BookCard = ({ book, onReadClick }) => {
  return (
    <div className="unique-book-card" onClick={onReadClick}>
      <div className="unique-book-cover-container">
        <img src={book.cover} alt={book.title} className="unique-book-cover" />
      </div>
      <div className="unique-book-details">
        <h3 className="unique-book-title">{book.title}</h3>
        <div className="unique-author-info">
          <span>Written by</span>
          <span className="unique-author-name">{book.author}</span>
        </div>
        <span className="unique-published-date">{book.publishedDate}</span>
        <button className="unique-read-button">Read</button>
      </div>
    </div>
  );
};

export default BookCard;
