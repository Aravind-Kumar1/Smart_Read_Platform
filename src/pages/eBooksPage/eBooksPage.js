import React from 'react';
import './eBooksPage.css';

// Importing book cover images
import phyImage from '../../assets/phy.jpg'; // Replace with your actual path
import hoImage from '../../assets/ho.jpg'; // Replace with your actual path
import subImage from '../../assets/sub.jpg'; // Replace with your actual path
import moImage from '../../assets/mo.webp'; // Replace with your actual path
import dieImage from '../../assets/die.jpeg'; // Replace with your actual path

// Import PDF files as modules
import atomicPdf from '../../images/atomic.pdf'; // Replace with your actual path
import cannotHurtPdf from '../../images/cannot_hurt.pdf'; // Replace with your actual path

// Hardcoded book data for each section
const popularBooks = [
  {
    id: 1,
    title: 'Atomic Habits',
    author: 'James Clear',
    cover: phyImage,
    publishedDate: '2022-01-01',
    pdf: atomicPdf,
  },
  {
    id: 2,
    title: "Can't Hurt Me",
    author: 'David Goggins',
    cover: hoImage,
    publishedDate: '2023-05-15',
    pdf: cannotHurtPdf,
  },
  {
    id: 2,
    title: "Can't Hurt Me",
    author: 'David Goggins',
    cover: hoImage,
    publishedDate: '2023-05-15',
    pdf: cannotHurtPdf,
  },
  {
    id: 2,
    title: "Can't Hurt Me",
    author: 'David Goggins',
    cover: hoImage,
    publishedDate: '2023-05-15',
    pdf: cannotHurtPdf,
  },
  {
    id: 2,
    title: "Can't Hurt Me",
    author: 'David Goggins',
    cover: hoImage,
    publishedDate: '2023-05-15',
    pdf: cannotHurtPdf,
  },
];

const recommendedBooks = [
  {
    id: 3,
    title: 'The Subtle Art Of Not Giving A F*ck',
    author: 'Mark Manson',
    cover: subImage,
    publishedDate: '2022-01-01',
    pdf: atomicPdf, // Replace with the actual PDF
  },
  {
    id: 4,
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    cover: moImage,
    publishedDate: '2022-01-01',
    pdf: atomicPdf, // Replace with the actual PDF
  },
  {
    id: 3,
    title: 'The Subtle Art Of Not Giving A F*ck',
    author: 'Mark Manson',
    cover: subImage,
    publishedDate: '2022-01-01',
    pdf: atomicPdf, // Replace with the actual PDF
  },
  {
    id: 3,
    title: 'The Subtle Art Of Not Giving A F*ck',
    author: 'Mark Manson',
    cover: subImage,
    publishedDate: '2022-01-01',
    pdf: atomicPdf, // Replace with the actual PDF
  },
  {
    id: 3,
    title: 'The Subtle Art Of Not Giving A F*ck',
    author: 'Mark Manson',
    cover: subImage,
    publishedDate: '2022-01-01',
    pdf: atomicPdf, // Replace with the actual PDF
  },
];

const topPicks = [
  {
    id: 5,
    title: 'Who Will Cry When You Die',
    author: 'Robin Sharma',
    cover: dieImage,
    publishedDate: '2022-01-01',
    pdf: atomicPdf, // Replace with the actual PDF
  },
  {
    id: 5,
    title: 'Who Will Cry When You Die',
    author: 'Robin Sharma',
    cover: dieImage,
    publishedDate: '2022-01-01',
    pdf: atomicPdf, // Replace with the actual PDF
  },
  {
    id: 5,
    title: 'Who Will Cry When You Die',
    author: 'Robin Sharma',
    cover: dieImage,
    publishedDate: '2022-01-01',
    pdf: atomicPdf, // Replace with the actual PDF
  },
  {
    id: 5,
    title: 'Who Will Cry When You Die',
    author: 'Robin Sharma',
    cover: dieImage,
    publishedDate: '2022-01-01',
    pdf: atomicPdf, // Replace with the actual PDF
  },
  {
    id: 5,
    title: 'Who Will Cry When You Die',
    author: 'Robin Sharma',
    cover: dieImage,
    publishedDate: '2022-01-01',
    pdf: atomicPdf, // Replace with the actual PDF
  },
];

const EbooksPage = () => {
  const handleReadClick = (pdf) => {
    window.location.href = pdf; // Open the PDF in the same tab
  };

  return (
    <div className="ebook-page">
      <div className="page-content">
        
        {/* Popular eBooks Section */}
        <section className="books-section popular-books">
          <h2 className="section-title">Popular eBooks</h2>
          <div className="books-grid">
            {popularBooks.map((book) => (
              <div key={book.id} className="e-book-card">
                <div className="e-book-cover-container">
                  <img src={book.cover} alt={book.title} className="e-book-cover" />
                </div>
                <div className="e-book-details">
                  <h3 className="e-book-title">{book.title}</h3>
                  <span className="e-book-author">{book.author}</span>
                  <span className="e-book-published-date">Published on: {book.publishedDate}</span>
                  <button className="e-read-button" onClick={() => handleReadClick(book.pdf)}>Read Now</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended Books Section */}
        <section className="books-section recommended-books">
          <h2 className="section-title">Recommended Books</h2>
          <div className="books-grid">
            {recommendedBooks.map((book) => (
              <div key={book.id} className="e-book-card">
                <div className="e-book-cover-container">
                  <img src={book.cover} alt={book.title} className="e-book-cover" />
                </div>
                <div className="e-book-details">
                  <h3 className="e-book-title">{book.title}</h3>
                  <span className="e-book-author">{book.author}</span>
                  <span className="e-book-published-date">Published on: {book.publishedDate}</span>
                  <button className="e-read-button" onClick={() => handleReadClick(book.pdf)}>Read Now</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Top Picks Section */}
        <section className="books-section top-picks">
          <h2 className="section-title">Top Picks</h2>
          <div className="books-grid">
            {topPicks.map((book) => (
              <div key={book.id} className="e-book-card">
                <div className="e-book-cover-container">
                  <img src={book.cover} alt={book.title} className="e-book-cover" />
                </div>
                <div className="e-book-details">
                  <h3 className="e-book-title">{book.title}</h3>
                  <span className="e-book-author">{book.author}</span>
                  <span className="e-book-published-date">Published on: {book.publishedDate}</span>
                  <button className="e-read-button" onClick={() => handleReadClick(book.pdf)}>Read Now</button>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default EbooksPage;
