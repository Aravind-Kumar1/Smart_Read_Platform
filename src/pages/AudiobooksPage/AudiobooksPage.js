import React from 'react';
import './AudiobooksPage.css'; // Make sure this path is correct for your project structure
import { useNavigate } from 'react-router-dom';

// Import images for books and authors
import book1 from '../../assets/bama.png';
import book2 from '../../assets/shetty.jpg';
import book3 from '../../assets/david.jpg';
import book4 from '../../assets/harry.png';
import book5 from '../../assets/how.png';

import author1 from '../../assets/james.jpeg';
import author2 from '../../assets/james.jpeg';
import author3 from '../../assets/james.jpeg';
import author4 from '../../assets/james.jpeg';
import author5 from '../../assets/james.jpeg';

// Sample data for books
const books = [
  {
    id: 1,
    title: 'Atomic Habits',
    author: 'James Clear',
    cover: book1,
    publishedDate: '2022-01-01',
  },
  {
    id: 2,
    title: 'Aravind Kumar',
    author: 'George Orwell',
    cover: book2,
    publishedDate: '2024-08-02',
  },
  {
    id: 3,
    title: 'Brave New World',
    author: 'Aldous Huxley',
    cover: book3,
    publishedDate: '2024-08-03',
  },
  {
    id: 4,
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    cover: book4,
    publishedDate: '2024-08-04',
  },
  {
    id: 5,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    cover: book5,
    publishedDate: '2024-08-04',
  },
];

// Sample data for suggested authors
const authors = [
  {
    id: 1,
    name: 'J.K. Rowling',
    image: author1,
    title: 'Author',
  },
  {
    id: 2,
    name: 'George Orwell',
    image: author2,
    title: 'Author',
  },
  {
    id: 3,
    name: 'Aldous Huxley',
    image: author3,
    title: 'Author',
  },
  {
    id: 4,
    name: 'F. Scott Fitzgerald',
    image: author4,
    title: 'Author',
  },
  {
    id: 5,
    name: 'Harper Lee',
    image: author5,
    title: 'Author',
  },
];

const AudiobooksPage = () => {
  const navigate = useNavigate();

  const handleListenClick = (bookId) => {
    // Navigate to the audiobook detail page
    navigate(`/audiobook/${bookId}`);
  };

  return (
    <div className="ab-audiobook-page">
      <div className="ab-page-content">
        {/* Popular Audiobooks Section */}
        <section className="ab-books-section ab-popular-books">
          <h2 className="ab-section-title">Popular Audiobooks</h2>
          <div className="ab-books-grid">
            {books.map((book) => (
              <div
                key={book.id}
                className="ab-audio-book-card"
                onClick={() => handleListenClick(book.id)} // On click navigate to the detail page
              >
                <div className="ab-audio-book-cover-container">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="ab-audio-book-cover"
                  />
                </div>
                <div className="ab-audio-book-details">
                  <h3 className="ab-audio-book-title">{book.title}</h3>
                  <p className="ab-audio-book-author">{book.author}</p>
                  <p className="ab-audio-book-published-date">
                    {book.publishedDate}
                  </p>
                </div>
                <div className="ab-audio-book-label">Listen Now</div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Section  */}
        <section className="ab-books-section ab-popular-books">
          <h2 className="ab-section-title">Featured Audiobooks</h2>
          <div className="ab-books-grid">
            {books.map((book) => (
              <div
                key={book.id}
                className="ab-audio-book-card"
                onClick={() => handleListenClick(book.id)} // On click navigate to the detail page
              >
                <div className="ab-audio-book-cover-container">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="ab-audio-book-cover"
                  />
                </div>
                <div className="ab-audio-book-details">
                  <h3 className="ab-audio-book-title">{book.title}</h3>
                  <p className="ab-audio-book-author">{book.author}</p>
                  <p className="ab-audio-book-published-date">
                    {book.publishedDate}
                  </p>
                </div>
                <div className="ab-audio-book-label">Listen Now</div>
              </div>
            ))}
          </div>
        </section>

        {/* Suggested Authors Section */}
        <section className="suggested-authors-section">
          <h2 className="section-title">Suggested Authors</h2>
          <div className="suggested-authors-grid">
            {authors.map((author) => (
              <div key={author.id} className="author-card">
                <div className="author-image-container">
                  <img
                    src={author.image}
                    alt={author.name}
                    className="author-image"
                  />
                </div>
                <h3 className="author-name">{author.name}</h3>
                <p className="author-title">{author.title}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AudiobooksPage;
