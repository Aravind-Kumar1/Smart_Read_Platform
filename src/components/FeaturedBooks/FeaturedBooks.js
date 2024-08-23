import React from 'react';
import './FeaturedBooks.css';
import shettyImage from '../../assets/shetty.jpg';
import davidImage from '../../assets/david.jpg';
import subImage from '../../assets/sub.jpg';
import moImage from '../../assets/mo.webp';
import dieImage from '../../assets/die.jpeg';
import phyImage from '../../assets/phy.jpg';
import hoImage from '../../assets/ho.jpg';

const books = [
  {
    id: 1,
    title: 'Atomic Habits',
    author: 'James Clear',
    cover: phyImage,
    publishedDate: '2022-01-01'
  },
  {
    id: 2,
    title: "Can't Hurt Me",
    author: 'Jay Shetty',
    cover: hoImage,
    publishedDate: '2023-05-15'
  },
  {
    id: 3,
    title: 'The Subtle Art Of Not Giving A Fuck',
    author: 'James Clear',
    cover: subImage,
    publishedDate: '2022-01-01'
  },
  {
    id: 4,
    title: 'The Psychology of Money',
    author: 'James Clear',
    cover: moImage,
    publishedDate: '2022-01-01'
  },
  {
    id: 5,
    title: 'Who Will Cry When You Die',
    author: 'James Clear',
    cover: dieImage,
    publishedDate: '2022-01-01'
  },
  // Add more books as needed
];

const FeaturedBooks = () => {
  const handleReadClick = (bookId) => {
    // Corrected string interpolation using backticks
    alert(`Read more about book with ID: ${bookId}`);
  };

  return (
    <section className="featured-books">
      <h2 className="featured-books-subheading">We've got what everyone's Reading to</h2>
      <p className="featured-books-subtagline">Best sellers. New releases. That story you've been waiting for.</p>
      <div className="featured-books-grid">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <div className="book-cover-container">
              <img src={book.cover} alt={book.title} className="book-cover" />
            </div>
            <div className="book-details">
              <h3 className="book-title">{book.title}</h3>
              <div className="author-info">
                <span>Written by</span>
                <span className="author-name">{book.author}</span>
              </div>
              <span className="published-date">{book.publishedDate}</span>
              <button className="read-button" onClick={() => handleReadClick(book.id)}>Read</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedBooks;
