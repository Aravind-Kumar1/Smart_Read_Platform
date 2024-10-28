import React from 'react';
import './GrowWhereverYouAre.css'; // Ensure to create a CSS file for styling

const GrowWhereverYouAre = () => {
  return (
    <div className="grow-section">
      <h2 className="grow-title">Grow Wherever You Are</h2>
      <p className="grow-text">
        Learn and grow anywhere: from home, in nature, while commuting, and beyond
      </p>

      <div className="image-container">
        <div className="image-wrapper">
          <img
            src={require('../../assets/list.webp')}
            alt="Doing Chores 1"
            className="test-image"
            style={{ marginTop: '50px' }}
          />
          <div className="image-overlay chores-overlay">Doing Chores</div>
        </div>
        <div className="image-wrapper">
          <img
            src={require('../../assets/gar.jpg')}
            alt="In Nature"
            className="test-image"
            style={{ marginTop: '20px' }}
          />
          <div className="image-overlay nature-overlay">In Nature</div>
        </div>
        <div className="image-wrapper">
          <img
            src={require('../../assets/digi.jpg')}
            alt="While Reading"
            className="test-image"
            style={{ marginTop: '50px' }}
          />
          <div className="image-overlay reading-overlay">While Reading</div>
        </div>
        <div className="image-wrapper">
          <img
            src={require('../../assets/dri.webp')}
            alt="Commuting"
            className="test-image"
            style={{ marginTop: '20px' }}
          />
          <div className="image-overlay commuting-overlay">Commuting</div>
        </div>
      </div>
    </div>
  );
};

export default GrowWhereverYouAre;
