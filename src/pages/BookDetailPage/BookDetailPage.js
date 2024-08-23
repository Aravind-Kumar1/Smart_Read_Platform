import React from 'react';
import { useParams } from 'react-router-dom';
import './BookDetailPage.css';

import davidImage from '../../assets/david.jpg';

const BookDetailPage = () => {
  const { id } = useParams(); // Get the book ID from the URL

  return (
    <div className="book-detail-page">
      <div className="book-detail-header">
        <h1>E-Books</h1>
        <h2>Book Details</h2>
      </div>
      <div className="book-detail-content">
        <div className="book-cover">
          <img src={davidImage} alt="Book Cover" />
        </div>
        <div className="book-info">
          <h3 className="book-title">Book Title</h3>
          <p className="book-author">Author Name</p>
          <div className="book-options">
            <button className="read-btn">Read</button>
            <button className="download-btn">Download</button>
          </div>
          <div className="book-details">
            <p><strong>Genres:</strong> Young men</p>
            <p><strong>Languages:</strong> English</p>
            <p><strong>Provider:</strong> Gutenberg</p>
            <p><strong>Price:</strong> ₹0.00</p>
            <p><strong>Rating:</strong> ⭐⭐⭐⭐⭐</p>
          </div>
          <div className="book-summary">
            <h4>Summary</h4>
            <p>This Side of Paradise is the debut novel of F. Scott Fitzgerald. Published in 1920, and taking its title from a line of the Rupert Brooke poem Tiare Tahiti, the book examines the lives and morality of post-World War I youth. Its protagonist, Amory Blaine, is a wealthy and attractive Princeton University student who dabbles in literature and has a series of romances that eventually lead to his disillusionment. In his later novels, Fitzgerald would further develop the book's theme of love warped by greed and status-seeking. (Summary from Wikipedia)</p>
          </div>
          <div className="youtube-summary">
            <h4>Watch Book Summary</h4>
            <iframe 
              title="Book Summary Video" 
              src="https://www.youtube.com/embed/FqlsKyjmY_0?si=ADed1xFazhnqHsKM" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen 
            />
          </div>
        </div>
      </div>
      <div className="related-books">
        <h4>People Also Liked</h4>
        <div className="book-cards">
          {/* Example book card */}
          <div className="book-card">
            <img src="path/to/other/book-cover.jpg" alt="Book Cover" />
            <div className="book-card-info">
              <h5>Other Book Title</h5>
              <p>Author Name</p>
            </div>
          </div>
          {/* Add more book cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;
