import React from 'react';
import './GrowWhereverYouAre.css'; // Ensure to create a CSS file for styling

const GrowWhereverYouAre = () => {
  return (
    <div className="grow-section">
      <h2 className="grow-title">Grow Wherever You Are</h2>
      <p className="grow-text">
      Learn and grow anywhere: from home, in nature, while commuting, and beyond
      </p>

      <div className="image-container"> {/* Main heading */}
        <div className="image-wrapper">
          <img
            src={require('../../assets/list.webp')}
            alt="Doing Chores 1"
            className="test-image"
            style={{ marginTop: '50px' }} // First image margin
          />
        </div>
        <div className="image-wrapper">
          <img
            src={require('../../assets/gar.jpg')}
            alt="Doing Chores 2"
            className="test-image"
            style={{ marginTop: '20px' }} // Second image margin
          />
        </div>
        <div className="image-wrapper">
          <img
            src={require('../../assets/digi.jpg')}
            alt="Doing Chores 3"
            className="test-image"
            style={{ marginTop: '50px' }} // Third image margin
          />
        </div>
        <div className="image-wrapper">
          <img
            src={require('../../assets/dri.webp')}
            alt="Doing Chores 4"
            className="test-image"
            style={{ marginTop: '20px' }} // Fourth image margin
          />
        </div>
      </div>
    </div>
  );
};

export default GrowWhereverYouAre;
