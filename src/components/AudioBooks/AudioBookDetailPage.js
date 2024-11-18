import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../Authentication/firebase/firebase';
import { getAuth } from 'firebase/auth'; // Import Firebase Authentication
import './AudioBookDetailPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'; 
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'; 
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons'; 
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons'; 

const AudioBookDetailPage = () => {
  const { id } = useParams();
  const [audioBook, setAudioBook] = useState(null); 
  const [isFavorite, setIsFavorite] = useState(false); 
  const [rating, setRating] = useState(0); // Ensure initial rating is 0 (empty stars)
  const [reviewMessage, setReviewMessage] = useState("");
  const [isSummaryExpanded, setIsSummaryExpanded] = useState(false);
  const [toastMessage, setToastMessage] = useState(""); 
  const navigate = useNavigate(); 

  const auth = getAuth(); // Firebase authentication

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
          setRating(docSnap.data().rating || 0); // Default to 0 if no rating exists
          setIsFavorite(docSnap.data().favorite || false); // Get the favorite status from Firestore
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
    return <div className="audio-book-not-found">Loading...</div>;
  }

  const handleFavoriteClick = async () => {
    if (!auth.currentUser) { // Check if user is logged in
      setToastMessage("Please log in to make a wishlist.");
      setTimeout(() => setToastMessage(""), 5000);
      return; // Don't allow action if not logged in
    }

    // Toggle the favorite status in the state
    const newFavoriteStatus = !isFavorite;
    setIsFavorite(newFavoriteStatus);

    try {
      // Update the favorite status in Firebase
      const docRef = doc(db, "audio_book_data", id);
      await updateDoc(docRef, {
        favorite: newFavoriteStatus // Save the favorite status to Firebase
      });
      setToastMessage(`${audioBook.title} ${newFavoriteStatus ? 'added to' : 'removed from'} wishlist!`);
      setTimeout(() => setToastMessage(""), 5000);
    } catch (error) {
      console.error("Error updating favorite status:", error);
    }
  };

  const handleStarClick = (starIndex) => {
    if (!auth.currentUser) { // Check if user is logged in
      setToastMessage("Please log in to rate this audiobook.");
      setRating(0); // Reset stars to empty
      setTimeout(() => setToastMessage(""), 6000);
      return; // Don't allow action if not logged in
    }
    setRating(starIndex);
    updateRatingInFirebase(starIndex);
    setToastMessage(`You rated ${audioBook.title} ${starIndex} stars!`);
    setTimeout(() => setToastMessage(""), 6000);
  };

  const updateRatingInFirebase = async (ratingValue) => {
    try {
      const docRef = doc(db, "audio_book_data", id);
      await updateDoc(docRef, {
        rating: ratingValue
      });
    } catch (error) {
      console.error("Error updating rating:", error);
    }
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i < 6; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={i <= rating ? solidStar : regularStar} // Empty or filled star based on rating
          className={`star ${i <= rating ? 'filled' : 'empty'}`}
          onClick={() => handleStarClick(i)}
          style={{ fontSize: '24px', cursor: 'pointer' }} 
        />
      );
    }
    return stars;
  };

  const handleReviewChange = (event) => {
    setReviewMessage(event.target.value);
  };

  const handleSubmitReview = () => {
    alert(`Review submitted! Rating: ${rating} stars. Message: ${reviewMessage}`);
  };

  const handleToggleSummary = () => {
    setIsSummaryExpanded(!isSummaryExpanded);
  };

  const summaryText = isSummaryExpanded 
    ? audioBook?.summary 
    : (audioBook?.summary?.substring(0, 200) || '');

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
              style={{
                fontSize: '24px',
                cursor: 'pointer',
                position: 'absolute',
                top: '10px',
                right: '10px'
              }} 
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
            <p className="audio-book-price">Price: ₹{audioBook.price}</p>
            <div className="audio-book-rating">
              <p>Rating: {renderStars()}</p>
            </div>
          </div>
        </div>
        <div className="summary-layout">
          <div className="summary-text">
            <h2 className="summary-heading">Listen to this Audiobook</h2>
            <iframe
              style={{ borderRadius: "12px" }}
              src={audioBook.iframeEmbedCode}
              width="100%"
              height="250"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="summary-section">
        <h2 className="summary-heading">Summary</h2>
        <p className="summary-text">{summaryText}</p>
        <button className="toggle-summary-btn" onClick={handleToggleSummary}>
          {isSummaryExpanded ? 'Show Less' : 'Show More'}
        </button>
      </div>

      {toastMessage && (
        <div className="toast-notification-a">
          {toastMessage}
        </div>
      )}
    </div>
  );
};

export default AudioBookDetailPage;
