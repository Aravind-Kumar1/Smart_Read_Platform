import React from "react";
import { Link } from "react-router-dom";
import './ImportanceOfReading.css'; // Include your custom CSS
import gatesImage from '../../assets/gates.jpg'; // Replace with correct image path
import buffetImage from '../../assets/buffet.jpg'; // Replace with correct image path
import muskImage from '../../assets/musk.jpg'; // Replace with correct image path

const ImportanceOfReadingPage = () => {
  return (
    <div className="importance-page">
      <header className="header-im">
        <h1 className="main-title">The Power of Reading: Words from Legends</h1>
        <p className="sub-title">Unlock the wisdom from the greatest minds on the importance of reading books.</p>
      </header>

      <section className="quotes-section">
        <div className="quotes-container">
          <div className="quote-card">
            <div className="quote-card-content">
              <div className="quote-card-img">
                <img src={gatesImage} alt="Bill Gates" />
              </div>
              <div className="quote-card-text">
                <p className="quote-text">"Reading is still the main way that I both learn new things and test my understanding."</p>
                <p className="quote-author">- Bill Gates</p>
              </div>
            </div>
          </div>

          <div className="quote-card">
            <div className="quote-card-content">
              <div className="quote-card-img">
                <img src={buffetImage} alt="Warren Buffet" />
              </div>
              <div className="quote-card-text">
                <p className="quote-text">"The more that you read, the more things you will know. The more that you learn, the more places you'll go."</p>
                <p className="quote-author">- Warren Buffet</p>
              </div>
            </div>
          </div>

          <div className="quote-card">
            <div className="quote-card-content">
              <div className="quote-card-img">
                <img src={muskImage} alt="Elon Musk" />
              </div>
              <div className="quote-card-text">
                <p className="quote-text">"I read books to understand the world and to keep learning, reading gives me perspective."</p>
                <p className="quote-author">- Elon Musk</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2 className="cta-title">Start Your Journey Today!</h2>
        <p className="cta-description">Books are the gateway to wisdom, success, and personal growth. Start reading now!</p>
        <div className="cta-button-container">
          {/* Use Link for navigation */}
          <Link to="/ebooks">
            <button className="cta-button">Browse Books</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ImportanceOfReadingPage;
