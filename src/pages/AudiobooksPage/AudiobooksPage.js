import React from 'react';
import './AudiobooksPage.css';
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
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    cover: book1,
    publishedDate: '2024-08-01'
  },
  {
    id: 2,
    title: '1984',
    author: 'George Orwell',
    cover: book2,
    publishedDate: '2024-08-02'
  },
  {
    id: 3,
    title: 'Brave New World',
    author: 'Aldous Huxley',
    cover: book3,
    publishedDate: '2024-08-03'
  },
  {
    id: 4,
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    cover: book4,
    publishedDate: '2024-08-04'
  },
  {
    id: 5,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    cover: book5,
    publishedDate: '2024-08-04'
  },
];

// Sample data for suggested authors
const authors = [
  {
    id: 1,
    name: 'J.K. Rowling',
    image: author1,
    title: 'Author'
  },
  {
    id: 2,
    name: 'George Orwell',
    image: author2,
    title: 'Author'
  },
  {
    id: 3,
    name: 'Aldous Huxley',
    image: author3,
    title: 'Author'
  },
  {
    id: 4,
    name: 'F. Scott Fitzgerald',
    image: author4,
    title: 'Author'
  },
  {
    id: 5,
    name: 'Harper Lee',
    image: author5,
    title: 'Author'
  },
];

const AudiobooksPage = () => {
  const navigate = useNavigate();

  const handleListenClick = (bookId) => {
    navigate(`/audiobook/${bookId}`);
  };

  return (
    <div className="audiobook-page">
      <div className="page-content">
        {/* Popular Audiobooks Section */}
        <section className="books-section popular-books">
          <h2 className="section-title">Popular Audiobooks</h2>
          <div className="books-grid">
            {books.map((book) => (
              <div key={book.id} className="audio-book-card" onClick={() => handleListenClick(book.id)}>
                <div className="audio-book-cover-container">
                  <img src={book.cover} alt={book.title} className="audio-book-cover" />
                </div>
                <div className="audio-book-details">
                  <h3 className="audio-book-title">{book.title}</h3>
                  <span className="audio-book-author">{book.author}</span>
                  <div className="audio-book-label">Free Audio Book</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Audiobooks Section */}
        <section className="books-section featured-books">
          <h2 className="section-title">Featured Audiobooks</h2>
          <div className="books-grid">
            {books.slice(0, 5).map((book) => (
              <div key={book.id} className="audio-book-card" onClick={() => handleListenClick(book.id)}>
                <div className="audio-book-cover-container">
                  <img src={book.cover} alt={book.title} className="audio-book-cover" />
                </div>
                <div className="audio-book-details">
                  <h3 className="audio-book-title">{book.title}</h3>
                  <span className="audio-book-author">{book.author}</span>
                  <div className="audio-book-label">Featured Audiobook</div>
                </div>
              </div>
            ))}
          </div>
        </section>

     

        {/* Top Picks Section */}
        <section className="books-section top-picks">
          <h2 className="section-title">Top Picks</h2>
          <div className="books-grid">
            {books.slice(0, 5).map((book) => (
              <div key={book.id} className="audio-book-card" onClick={() => handleListenClick(book.id)}>
                <div className="audio-book-cover-container">
                  <img src={book.cover} alt={book.title} className="audio-book-cover" />
                </div>
                <div className="audio-book-details">
                  <h3 className="audio-book-title">{book.title}</h3>
                  <span className="audio-book-author">{book.author}</span>
                  <div className="audio-book-label">Top Pick</div>
                </div>
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
                  <img src={author.image} alt={author.name} className="author-image" />
                </div>
                <div className="author-name">{author.name}</div>
                <div className="author-title">{author.title}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AudiobooksPage;
