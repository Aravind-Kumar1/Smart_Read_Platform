import React, { useRef } from 'react';
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
  { id: 6, title: 'Moby-Dick', author: 'Herman Melville', cover: hoImage },
  { id: 7, title: 'Pride and Prejudice', author: 'Jane Austen', cover: dieImage },
  { id: 8, title: 'War and Peace', author: 'Leo Tolstoy', cover: phyImage },
  { id: 9, title: 'The Odyssey', author: 'Homer', cover: hoImage },
  { id: 10, title: 'The Iliad', author: 'Homer', cover: dieImage },
  // Add more audiobooks as needed
];

const AudioBooksSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300, // Scroll distance
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="audio-books-section">
      <h2 className="audio-books-heading">The listening never has to stop</h2>
      <p className="audio-books-tagline">
        Thousands of included titles in the Plus Catalogue. No cap on listening time.
      </p>
      <div className="audio-books-carousel" ref={scrollRef}>
        <button className="arrow arrow-left" onClick={() => scroll('left')}>&lt;</button>
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
        <button className="arrow arrow-right" onClick={() => scroll('right')}>&gt;</button>
      </div>
    </section>
  );
};

export default AudioBooksSection;
