import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AudioBookCard from './AudioBookCard';
import './AudioBooksSection.css';
import biImage from '../../assets/bible.jpeg';
import phyImage from '../../assets/phy.jpg';
import hoImage from '../../assets/ho.jpg';
import dieImage from '../../assets/die.jpeg';

// Sample data
const audiobooks = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', cover: biImage },
  { id: 2, title: '1984', author: 'George Orwell', cover: phyImage },
  { id: 3, title: 'Brave New World', author: 'Aldous Huxley', cover: hoImage },
  { id: 4, title: 'The Catcher in the Rye', author: 'J.D. Salinger', cover: dieImage },
  { id: 5, title: 'To Kill a Mockingbird', author: 'Harper Lee', cover: phyImage },
];

const AudioBooksSection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const scrollPosition = sessionStorage.getItem('audioBooksScrollPosition');
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
    }

    const handleScroll = () => {
      sessionStorage.setItem('audioBooksScrollPosition', window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sessionStorage.removeItem('audioBooksScrollPosition');
    };
  }, []);

  const handleCardClick = (id) => {
    sessionStorage.removeItem('audioBooksScrollPosition'); // Clear the stored scroll position
    window.scrollTo(0, 0); // Scroll to the top of the page
    navigate(`/audiobook/${id}`); // Adjust the route to match your setup
  };

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
            onClick={() => handleCardClick(book.id)} // Pass the click handler
          />
        ))}
      </div>
    </section>
  );
};

export default AudioBooksSection;
