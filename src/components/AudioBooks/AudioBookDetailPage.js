import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Authentication/firebase/firebase";
import './AudioBookDetailPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart, faHeart as regularHeart } from '@fortawesome/free-solid-svg-icons';

const AudioBookDetailPage = () => {
  const { id } = useParams();
  const [audioBook, setAudioBook] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchAudiobook = async () => {
      try {
        const docRef = doc(db, "audio_book_data", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setAudioBook({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching audiobook:", error);
      }
    };

    fetchAudiobook();
  }, [id]);

  if (!audioBook) {
    return <div className="audio-book-not-found">Audio Book not found</div>;
  }

  const handleFavoriteClick = () => {
    setIsFavorite(prevState => !prevState);
    alert(`${audioBook.title} added to wishlist!`);
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
        </div>
        <div className="summary-layout">
          <div className="summary-text">
            <h2 className="summary-heading">Listen to this Audiobook</h2>
            <iframe
              style={{ borderRadius: "12px" }}
              src={audioBook.iframeEmbedCode} // Fetch iframe code from Firebase
              width="100%"
              height="250"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      {/* Full-width summary section */}
      <div className="summary-section">
        <h2 className="summary-heading">Summary</h2>
        <p className="summary-text">{audioBook.summary}</p>
      </div>
    </div>
  );
};

export default AudioBookDetailPage;
