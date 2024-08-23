import React, { useState } from 'react';
import './HeroSection.css';
import harryImage from '../../assets/harry.png';
import howImage from '../../assets/how.png';
import obamaImage from '../../assets/bama.png';
import powImage from '../../assets/power.png';
import davidImage from '../../assets/david.jpg';
import subImage from '../../assets/sub.jpg';
import moImage from '../../assets/mo.webp';
import shettyImage from '../../assets/shetty.jpg';
import dieImage from '../../assets/die.jpeg';

const books = [
  { cover: shettyImage },
  { cover: subImage },
  { cover: moImage },
  { cover: davidImage },
  { cover: harryImage },
  { cover: howImage },
  { cover: dieImage },
   { cover: obamaImage },


  // Add more books as needed
];

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchTerm);
  };

  return (
    <section className="hero-section">
      <div className="text-content">
        <h1 className="hero-heading">
          Discover Your Next Great Read
        </h1>
        <p className="quote">
          "One who reads lives a thousand lives before he dies. The man who never reads lives only one." — George R.R. Martin
        </p>
        <form className="search-form" onSubmit={handleSearchSubmit}>
          <div className="search-bar">
            <button type="submit" className="search-button">🔍</button>
            <input
              type="text"
              placeholder="Search for books..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            {searchTerm && (
              <button type="button" className="clear-button" onClick={() => setSearchTerm('')}>❌</button>
            )}
          </div>
        </form>
        <div className="buttons">
          <button className="cta-button primary">Get Started Now</button>
          <button className="cta-button secondary">View Products</button>
        </div>
      </div>
      <div className="books-display">
        {books.map((book, index) => (
          <div key={index} className="book">
            <img src={book.cover} alt={`Book ${index}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
