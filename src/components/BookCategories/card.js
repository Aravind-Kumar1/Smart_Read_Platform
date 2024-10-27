import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

const BookCard = ({ book }) => {
  const handleReadClick = () => {
    if (book.pdfUrl) {
      console.log("Opening PDF:", book.pdfUrl); // Debugging log
      window.open(book.pdfUrl, '_blank');
    } else {
      console.error("PDF link is not available for this book.");
    }
  };

  return (
    <div className="unique-book-card">
      <div className="unique-book-cover-container">
        <img src={book.coverImage || book.cover} alt={`${book.title} cover`} className="unique-book-cover" />
      </div>
      <div className="unique-book-details">
        <h3 className="unique-book-title">{book.title}</h3>
        <div className="unique-author-info">
          <span>Written by </span>
          <span className="unique-author-name">{book.author}</span>
        </div>
        <span className="unique-published-date">{book.publishedDate}</span>
        <button className="unique-read-button" onClick={handleReadClick}>Read</button>
      </div>
    </div>
  );
};

// Prop validation
BookCard.propTypes = {
  book: PropTypes.shape({
    coverImage: PropTypes.string,
    cover: PropTypes.string, // Support alternative field for cover image
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    publishedDate: PropTypes.string,
    pdfUrl: PropTypes.string, // PDF link for the book
  }).isRequired,
};

export default BookCard;
