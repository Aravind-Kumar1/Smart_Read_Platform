import React from 'react';
import './BookSummary.css';

const BookSummary = () => {
  // The YouTube video URL
  const videoUrl = "https://www.youtube.com/embed/PZ7lDrwYdZc?si=3YE6aybRTl7FkzDk";

  const summaryText = `
    In "Atomic Habits," James Clear presents a comprehensive guide on how to build good habits and break bad ones.
    He emphasizes the power of small, incremental changes and how they can lead to significant improvements over time.
    Clear introduces the concept of the "Four Laws of Behavior Change," which provide a framework for transforming habits.
    This book is a must-read for anyone looking to make lasting changes in their lives.
  `;

  return (
    <div className="book-summary-container">
      <h2 className="video-heading">Watch YouTube Summary</h2>
      <div className="summary-layout">
        <div className="youtube-video">
          <iframe
            src={videoUrl}
            title="YouTube Video"
            frameBorder="0"
            allowFullScreen
            className="youtube-iframe"
          ></iframe>
        </div>
        <div className="summary-text">
          <h2>Book Summary</h2>
          <p>{summaryText}</p>
        </div>
      </div>
    </div>
  );
};

export default BookSummary;
