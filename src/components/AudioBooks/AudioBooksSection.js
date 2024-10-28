import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import AudioBookCard from './AudioBookCard';
import './AudioBooksSection.css';
import { db } from '../../Authentication/firebase/firebase'; // Import your initialized Firestore instance

const AudioBooksSection = () => {
  const [audiobooks, setAudiobooks] = useState([]); // State to hold audiobooks
  const [favorites, setFavorites] = useState([]); // State to hold favorite audiobooks
  const [message, setMessage] = useState(''); // State to hold messages
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAudiobooks = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'audio_main')); // Fetch documents from Firestore
        const audiobooksData = querySnapshot.docs.map(doc => ({
          id: doc.id, // Use Firestore document ID as the id
          ...doc.data(), // Spread the document data
        }));
        setAudiobooks(audiobooksData); // Set the state with the fetched data
      } catch (error) {
        console.error('Error fetching audiobooks: ', error);
      }
    };

    fetchAudiobooks(); // Call the fetch function

    const scrollPosition = sessionStorage.getItem('audioBooksScrollPosition');
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
    }

    const handleScroll = () => {
      sessionStorage.setItem('audioBooksScrollPosition', window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sessionStorage.removeItem('audioBooksScrollPosition');
    };
  }, []);

  const handleCardClick = (id) => {
    sessionStorage.removeItem('audioBooksScrollPosition'); // Clear the stored scroll position
    window.scrollTo(0, 0); // Scroll to the top of the page
    navigate(`/audiobook/${id}`);
  };

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favoriteId => favoriteId !== id));
      setMessage('Removed from favorites'); // Set message when unfavoriting
    } else {
      setFavorites([...favorites, id]);
      setMessage('Added to favorites'); // Set message when favoriting
    }
    // Automatically clear the message after 2 seconds
    setTimeout(() => setMessage(''), 2000);
  };

  return (
    <section className="audio-books-section">
      <h2 className="audio-books-heading">The listening never has to stop</h2>
      <p className="audio-books-tagline">
        Thousands of included titles in the Plus Catalogue. No cap on listening time.
      </p>
      {message && <p className="favorite-message">{message}</p>} {/* Show message */}
      <div className="audio-books-grid">
        {audiobooks.map((book) => (
          <AudioBookCard 
            key={book.id} 
            id={book.id}
            title={book.title} 
            author={book.author} 
            cover={book.cover} 
            onClick={() => handleCardClick(book.id)} 
            onFavoriteToggle={() => toggleFavorite(book.id)} // Add favorite toggle function
            isFavorite={favorites.includes(book.id)} // Pass favorite status to the card
          />
        ))}
      </div>
    </section>
  );
};

export default AudioBooksSection;
