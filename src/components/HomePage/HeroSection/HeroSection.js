import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './HeroSection.css';
import harryImage from '../../../assets/harry.png';
import howImage from '../../../assets/how.png';
import obamaImage from '../../../assets/bama.png';
import powerImage from '../../../assets/power.png';
import davidImage from '../../../assets/david.jpg';
import subImage from '../../../assets/sub.jpg';
import moImage from '../../../assets/mo.webp';
import shettyImage from '../../../assets/shetty.jpg';
import dieImage from '../../../assets/die.jpeg';

const books = [
  { cover: shettyImage },
  { cover: subImage },
  { cover: moImage },
  { cover: davidImage },
  { cover: harryImage },
  { cover: howImage },
  { cover: dieImage },
  { cover: obamaImage },
];

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="text-content">
        <h1 className="hero-heading">
          Learn <br />
          <span className="light-text">something new</span> <br />
          every day
        </h1>
        <div className="quote-container">
          <p className="aligned-quote">
            Get the key ideas from the top <span className="ellipse blue">books</span>,
          </p>
          <p className="aligned-quote">
          <span className="ellipse orange">podcasts</span> , and <span className="ellipse pink">audiobooks</span> with the 
          </p>
          <p className="aligned-quote">
            <span className="highlight green">Smart-Read</span>.
          </p>
        </div>

        <div className="buttons">
          <a href="https://github.com" className="github-button">
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
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
