import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../Authentication/firebase/firebase";
import './AudioBookDetailPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart, faHeart as regularHeart } from '@fortawesome/free-solid-svg-icons';

const AudioBookDetailPage = () => {
  const { id } = useParams();
  const [audioBook, setAudioBook] = useState(null);
  const [relatedBooks, setRelatedBooks] = useState([]);
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
          fetchRelatedBooks(docSnap.data().genre);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching audiobook:", error);
      }
    };

    fetchAudiobook();
  }, [id]);

  const fetchRelatedBooks = async (genre) => {
    try {
      const querySnapshot = await getDocs(collection(db, "audio_book_data"));
      const allBooks = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.genre === genre && doc.id !== id) {
          allBooks.push({ id: doc.id, ...data });
        }
      });
      setRelatedBooks(allBooks);
    } catch (error) {
      console.error("Error fetching related books:", error);
    }
  };

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
          <audio controls className="audio-player">
            <source src={audioBook.audioSrc} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <div className="summary-layout">
          <div className="summary-text">
            <h2>Description</h2>
            <p>{audioBook.description}</p>
          </div>
        </div>
      </div>

      <h2 className="related-audiobooks-heading">You Might Also Like</h2>
      <div className="related-audiobooks-container">
        {relatedBooks.length > 0 ? (
          relatedBooks.map(book => (
            <div className="related-audiobook-card" key={book.id}>
              <img src={book.cover} alt={book.title} className="related-audiobook-cover" />
              <h1 className="related-audiobook-title">{book.title}</h1>
              <p className="related-audiobook-author">by {book.author}</p>
              <p className="related-audiobook-price">{book.price}</p>
              <button className="related-audiobook-button">Listen Now</button>
            </div>
          ))
        ) : (
          <p>No related audiobooks found.</p>
        )}
      </div>
    </div>
  );
};

export default AudioBookDetailPage;
