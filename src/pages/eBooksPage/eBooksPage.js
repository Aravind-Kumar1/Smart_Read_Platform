import React from 'react';
import './EBooksPage.css';
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

const EbooksPage = () => {
  const navigate = useNavigate();

  const handleReadClick = (bookId) => {
    navigate(`/ebook/${bookId}`);
  };

  return (
    <div className="ebook-page">
      <div className="page-content">
        {/* Popular eBooks Section */}
        <section className="books-section popular-books">
          <h2 className="section-title">Popular eBooks</h2>
          <div className="books-grid">
            {books.map((book) => (
              <div key={book.id} className="e-book-card" onClick={() => handleReadClick(book.id)}>
                <div className="e-book-cover-container">
                  <img src={book.cover} alt={book.title} className="e-book-cover" />
                </div>
                <div className="e-book-details">
                  <h3 className="e-book-title">{book.title}</h3>
                  <span className="e-book-author">{book.author}</span>
                  <div className="e-book-label">Free eBook</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured eBooks Section */}
        <section className="books-section featured-books">
          <h2 className="section-title">Featured eBooks</h2>
          <div className="books-grid">
            {books.slice(0, 5).map((book) => (
              <div key={book.id} className="e-book-card" onClick={() => handleReadClick(book.id)}>
                <div className="e-book-cover-container">
                  <img src={book.cover} alt={book.title} className="e-book-cover" />
                </div>
                <div className="e-book-details">
                  <h3 className="e-book-title">{book.title}</h3>
                  <span className="e-book-author">{book.author}</span>
                  <div className="e-book-label">Free eBook</div>
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
                <h3 className="author-name">{author.name}</h3>
                <span className="author-title">{author.title}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default EbooksPage;
