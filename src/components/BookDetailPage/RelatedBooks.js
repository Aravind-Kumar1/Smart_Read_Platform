import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RelatedBooks.css';
import phyImage from '../../assets/phy.jpg';
import hoImage from '../../assets/ho.jpg';
import subImage from '../../assets/sub.jpg';
import moImage from '../../assets/mo.webp';
import dieImage from '../../assets/die.jpeg';

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
    author: 'David Goggins',
    cover: hoImage,
    publishedDate: '2023-05-15'
  },
  {
    id: 3,
    title: 'The Subtle Art Of Not Giving A F*ck',
    author: 'Mark Manson',
    cover: subImage,
    publishedDate: '2022-01-01'
  },
  {
    id: 4,
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    cover: moImage,
    publishedDate: '2022-01-01'
  },
  {
    id: 5,
    title: 'Who Will Cry When You Die',
    author: 'Robin Sharma',
    cover: dieImage,
    publishedDate: '2022-01-01'
  },
];

const RelatedBooks = () => {
  const navigate = useNavigate();

  const handleReadClick = (bookId) => {
    navigate(`/book/${bookId}`);
  };

  return (
    <section className="r-related-books">
      <h2 className="r-related-books-heading">People Who Bought This Also Bought For You</h2>
      <div className="r-related-books-grid">
        {books.map((book) => (
          <div key={book.id} className="r-book-card" onClick={() => handleReadClick(book.id)}>
            <div className="r-book-cover-container">
              <img src={book.cover} alt={book.title} className="r-book-cover" />
            </div>
            <div className="r-book-details">
              <h3 className="r-book-title">{book.title}</h3>
              <div className="r-author-info">
                <span>Written by</span>
                <span className="r-author-name">{book.author}</span>
              </div>
              <span className="r-published-date">{book.publishedDate}</span>
              <button className="r-read-button">Read</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedBooks;
