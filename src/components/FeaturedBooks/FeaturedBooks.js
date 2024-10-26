// FeaturedBooks.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FeaturedBooks.css';
import phyImage from '../../assets/phy.jpg';
import subImage from '../../assets/sub.jpg';
import atomic from '../../assets/Atomic.jpg';
import david from '../../assets/david.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart, faHeart as regularHeart } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications

// Sample data
const books = [
  {
    id: 1,
    title: 'Atomic Habits',
    author: 'James Clear',
    cover: atomic,
    publishedDate: '2022-01-01',
  },
  {
    id: 2,
    title: "Can't Hurt Me",
    author: 'David Goggins',
    cover: david,
    publishedDate: '2023-05-15',
  },
  {
    id: 3,
    title: 'The Subtle Art Of Not Giving A F*ck',
    author: 'Mark Manson',
    cover: subImage,
    publishedDate: '2022-01-01',
  },
  {
    id: 4,
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    cover: phyImage,
    publishedDate: '2022-01-01',
  },
  {
    id: 5,
    title: 'Unfu*k Yourself',
    author: 'Gary John Bishop',
    cover: require('../../assets/unfuck.jpg'), // Adjust path if necessary
    publishedDate: '2016-07-22',
  },
];

const FeaturedBooks = () => {
  const navigate = useNavigate();
  const [favoriteBooks, setFavoriteBooks] = useState({});

  // Restore scroll position
  useEffect(() => {
    const scrollPosition = sessionStorage.getItem('featuredBooksScrollPosition');
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
    }

    const handleScroll = () => {
      sessionStorage.setItem('featuredBooksScrollPosition', window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sessionStorage.removeItem('featuredBooksScrollPosition'); // Clean up on unmount
    };
  }, []);

  const handleReadClick = (bookId) => {
    navigate(`/book/${bookId}`);
  };

  const toggleFavorite = (bookId) => {
    setFavoriteBooks((prev) => {
      const isFavorite = !prev[bookId];
      if (isFavorite) {
        toast.success('Successfully added to your wishlist!'); // Toast message for adding
      } else {
        toast.error('Successfully removed from your wishlist!'); // Toast message for removing
      }
      return {
        ...prev,
        [bookId]: isFavorite,
      };
    });
  };

  return (
    <section className="f-featured-books">
      <ToastContainer /> {/* Render ToastContainer for notifications */}
      <h2 className="f-featured-books-subheading">We've got what everyone's reading</h2>
      <p className="f-featured-books-subtagline">Best sellers. New releases. That story you've been waiting for.</p>
      <div className="f-featured-books-grid">
        {books.map((book) => (
          <div key={book.id} className="f-book-card">
            <div className="f-book-cover-container">
              <img src={book.cover} alt={book.title} className="f-book-cover" />
              <FontAwesomeIcon
                icon={favoriteBooks[book.id] ? solidHeart : regularHeart}
                className={`favorite-icon ${favoriteBooks[book.id] ? 'filled' : 'empty'}`}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent click from triggering the card click
                  toggleFavorite(book.id);
                }}
              />
            </div>
            <div className="f-book-details">
              <h3 className="f-book-title">{book.title}</h3>
              <div className="f-author-info">
                <span>Written by</span>
                <span className="f-author-name">{book.author}</span>
              </div>
              <span className="f-published-date">{book.publishedDate}</span>
              <button className="f-read-button" onClick={() => handleReadClick(book.id)}>Read</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedBooks;
