import React from 'react';
import './AudioBooksSection.css';
import AudioBookCard from './AudioBookCard';
import dieImage from '../../assets/die.jpeg';
import phyImage from '../../assets/phy.jpg';
import hoImage from '../../assets/ho.jpg';
import biImage from '../../assets/bible.jpeg';

// Sample data
const audiobooks = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', cover: biImage },
  { id: 2, title: '1984', author: 'George Orwell', cover: phyImage },
  { id: 3, title: 'Brave New World', author: 'Aldous Huxley', cover: hoImage },
  { id: 4, title: 'The Catcher in the Rye', author: 'J.D. Salinger', cover: dieImage },
  { id: 5, title: 'To Kill a Mockingbird', author: 'Harper Lee', cover: phyImage },
];

const AudioBooksSection = () => {
  return (
    <section className="audio-books-section">
      <h2 className="audio-books-heading">The listening never has to stop</h2>
      <p className="audio-books-tagline">
        Thousands of included titles in the Plus Catalogue. No cap on listening time.
      </p>
      <div className="audio-books-grid">
        {audiobooks.map((book) => (
          <AudioBookCard
            key={book.id}
            title={book.title}
            author={book.author}
            cover={book.cover}
          />
        ))}
      </div>
    </section>
  );
};

export default AudioBooksSection;
