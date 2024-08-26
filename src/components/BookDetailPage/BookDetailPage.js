import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './BookDetailPage.css';
import shettyImage from '../../assets/shetty.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart, faHeart as regularHeart } from '@fortawesome/free-solid-svg-icons';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import * as pdfjsLib from 'pdfjs-dist/build/pdf';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.entry';

// Import PDF files as modules
import atomicPdf from '../../images/atomic.pdf';

const books = [
  {
    id: 1,
    title: 'Atomic Habits',
    author: 'James Clear',
    cover: shettyImage,
    publishedDate: '2022-01-01',
    genre: 'Self Help',
    languages: 'English',
    price: '₹0.00',
    description: 'An Easy & Proven Way to Build Good Habits & Break Bad Ones.',
    summary: 'Summary: This book dives into the science of habits.',
    pdf: atomicPdf,
  },
  {
    id: 2,
    title: "Can't Hurt Me",
    author: 'David Goggins',
    cover: shettyImage,
    publishedDate: '2023-05-15',
    genre: 'Self Help',
    languages: 'English',
    price: '₹0.00',
    description: 'Master Your Mind and Defy the Odds.',
    summary: 'Summary: Goggins shares his extraordinary life story.',
    pdf: atomicPdf,
  },
];

const videoSources = {
  1: 'https://www.youtube.com/embed/11ElXK_QMnA?si=JbQrlBRPxISrCHVn',
  2: 'https://www.youtube.com/embed/VzzU2uF2R-U?si=xTeSkBQp8OqJoEVL',
};

const BookDetailPage = () => {
  const { id } = useParams();
  const book = books.find(book => book.id === parseInt(id, 10));

  const [isFavorite, setIsFavorite] = useState(false);
  const [isPdfVisible, setIsPdfVisible] = useState(false); // State to track PDF visibility

  if (!book) {
    return <div className="book-not-found">Book not found</div>;
  }

  const handleFavoriteClick = () => {
    setIsFavorite(prevState => !prevState);
  };

  const handleReadNowClick = () => {
    window.open(book.pdf, '_blank'); // Open the PDF in a new tab
  };

  const videoSrc = videoSources[book.id];

  // Set the worker source locally
  pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="book-detail-container">
      <h1 className="book-detail-heading">E-Book</h1>
      <div className="book-detail-content">
        <div className="book-detail-image">
          <div className="book-cover-box">
            <img src={book.cover} alt={book.title} className="book-cover-img" />
            <FontAwesomeIcon
              icon={isFavorite ? solidHeart : regularHeart}
              className={`favorite-icon ${isFavorite ? 'filled' : 'empty'}`}
              onClick={handleFavoriteClick}
            />
          </div>
        </div>
        <div className="book-detail-info">
          <h1 className="book-title">{book.title}</h1>
          <div className="book-meta">
            <p className="book-author">by {book.author}</p>
            <p className="book-published-date">Published Date: {book.publishedDate}</p>
            <p className="book-genre">Genre: {book.genre}</p>
            <p className="book-languages">Languages: {book.languages}</p>
            <p className="book-price">Price: {book.price}</p>
          </div>
          <div className="book-actions">
            {book.pdf && (
              <>
                <button onClick={handleReadNowClick} className="read-button">Read Now</button>
                <a href={book.pdf} download className="download-button">Download PDF</a>
              </>
            )}
          </div>
        </div>
        <div className="youtube-video">
          <iframe
            src={videoSrc}
            title="Book Video"
            frameBorder="0"
            allowFullScreen
            width="100%"
            height="315"
          />
        </div>
      </div>
      {isPdfVisible && (
        <div className="pdf-viewer-container">
          <Worker workerUrl={pdfWorker}>
            <Viewer fileUrl={book.pdf} plugins={[defaultLayoutPluginInstance]} />
          </Worker>
        </div>
      )}
    </div>
  );
};

export default BookDetailPage;
