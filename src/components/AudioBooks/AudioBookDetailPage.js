// AudioBookDetailPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './AudioBookDetailPage.css';
import shettyImage from '../../assets/shetty.jpg'; // Replace with actual cover image
import atad from '../../audio/atomic.mp3'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart, faHeart as regularHeart } from '@fortawesome/free-solid-svg-icons';

const audioBooks = [
  {
    id: 1,
    title: 'Atomic Habits - Audiobook',
    author: 'James Clear',
    cover: shettyImage,
    publishedDate: '2022-01-01',
    genre: 'Self Help',
    languages: 'English',
    price: '₹0.00',
    audioSrc: atad,
    youtubeVideoId: '11ElXK_QMnA',
  },
  {
    id: 2,
    title: "Can't Hurt Me - Audiobook",
    author: 'David Goggins',
    cover: shettyImage,
    publishedDate: '2023-05-15',
    genre: 'Self Help',
    languages: 'English',
    price: '₹0.00',
    audioSrc: atad,
    youtubeVideoId: 'VzzU2uF2R-U',
  },
  {
    id: 3,
    title: "Can't Hurt Me - Audiobook",
    author: 'David Goggins',
    cover: shettyImage,
    publishedDate: '2023-05-15',
    genre: 'Self Help',
    languages: 'English',
    price: '₹0.00',
    audioSrc: 'path/to/cant-hurt-me-audio.mp3',
    youtubeVideoId: 'VzzU2uF2R-U',
  },
  {
    id: 4,
    title: "Can't Hurt Me - Audiobook",
    author: 'David Goggins',
    cover: shettyImage,
    publishedDate: '2023-05-15',
    genre: 'Self Help',
    languages: 'English',
    price: '₹0.00',
    audioSrc: 'path/to/cant-hurt-me-audio.mp3',
    youtubeVideoId: 'VzzU2uF2R-U',
  },
  {
    id: 5,
    title: "Can't Hurt Me - Audiobook",
    author: 'David Goggins',
    cover: shettyImage,
    publishedDate: '2023-05-15',
    genre: 'Self Help',
    languages: 'English',
    price: '₹0.00',
    audioSrc: 'path/to/cant-hurt-me-audio.mp3',
    youtubeVideoId: 'VzzU2uF2R-U',
  },
  // Add more audiobooks as needed
];

const recommendedAudiobooks = [
  {
    id: 6,
    title: 'The Power of Now - Audiobook',
    author: 'Eckhart Tolle',
    cover: shettyImage,
    price: '₹0.00',
    audioSrc: 'path/to/power-of-now-audio.mp3',
  },
  {
    id: 7,
    title: 'The Subtle Art of Not Giving a F*ck - Audiobook',
    author: 'Mark Manson',
    cover: shettyImage,
    price: '₹0.00',
    audioSrc: 'path/to/subtle-art-audio.mp3',
  },
 
 
  // Add more recommended audiobooks as needed
];

const AudioBookDetailPage = () => {
  const { id } = useParams();
  const audioBook = audioBooks.find(book => book.id === parseInt(id, 10));

  const [isFavorite, setIsFavorite] = useState(false);

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []);

  if (!audioBook) {
    return <div className="audio-book-not-found">Audio Book not found</div>;
  }

  const handleFavoriteClick = () => {
    setIsFavorite(prevState => !prevState);
  };

  return (
    <div className="audio-book-detail-container">
      <h1 className="audio-book-detail-heading">Audio Book</h1>
      <div className="audio-book-detail-content">
        <div className="audio-book-detail-image">
          <div className="audio-book-cover-box">
            <img src={audioBook.cover} alt={audioBook.title} className="audio-book-cover-img" />
            <FontAwesomeIcon
              icon={isFavorite ? solidHeart : regularHeart}
              className={`favorite-icon ${isFavorite ? 'filled' : 'empty'}`}
              onClick={handleFavoriteClick}
            />
          </div>
        </div>
        <div className="audio-book-detail-info">
          <h1 className="audio-book-title">{audioBook.title}</h1>
          <div className="audio-book-meta">
            <p className="audio-book-author">by {audioBook.author}</p>
            <p className="audio-book-published-date">Published Date: {audioBook.publishedDate}</p>
            <p className="audio-book-genre">Genre: {audioBook.genre}</p>
            <p className="audio-book-languages">Languages: {audioBook.languages}</p>
            <p className="audio-book-price">Price: {audioBook.price}</p>
          </div>
          
          <audio controls className="audio-player">
            <source src={audioBook.audioSrc} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <div className="youtube-video">
          <iframe
            src={`https://www.youtube.com/embed/${audioBook.youtubeVideoId}`}
            title="Audio Book Video"
            frameBorder="0"
            allowFullScreen
            width="100%"
            height="315"
          />
        </div>
      </div>

      {/* Popular Audiobooks Section */}
      <h2 className="popular-audiobooks-heading">Popular Audiobooks</h2>
      <div className="popular-audiobooks-container">
        {audioBooks.map(book => (
          <div className="popular-audiobook-card" key={book.id}>
            <img src={book.cover} alt={book.title} className="popular-audiobook-cover" />
            <h1 className="popular-audiobook-title">{book.title}</h1>
            <p className="popular-audiobook-author">by {book.author}</p>
            <p className="popular-audiobook-price">{book.price}</p>
            <button className="popular-audiobook-button">Listen Now</button>
          </div>
        ))}
      </div>

      {/* Recommended Audiobooks Section */}
      <h2 className="recommended-audiobooks-heading">Recommended Audiobooks</h2>
      <div className="recommended-audiobooks-container">
        {recommendedAudiobooks.map(book => (
          <div className="recommended-audiobook-card" key={book.id}>
            <img src={book.cover} alt={book.title} className="recommended-audiobook-cover" />
            <h1 className="recommended-audiobook-title">{book.title}</h1>
            <p className="recommended-audiobook-author">by {book.author}</p>
            <p className="recommended-audiobook-price">{book.price}</p>
            <button className="recommended-audiobook-button">Listen Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AudioBookDetailPage;
