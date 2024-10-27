import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Authentication/AuthContext';
import './FeaturedBooks.css';
import phyImage from '../../assets/phy.jpg';
import subImage from '../../assets/sub.jpg';
import atomic from '../../assets/Atomic.jpg';
import david from '../../assets/david.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart, faHeart as regularHeart } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db } from '../../Authentication/firebase/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';

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
    cover: require('../../assets/unfuck.jpg'),
    publishedDate: '2016-07-22',
  },
];

const FeaturedBooks = () => {
  const { user } = useAuth(); // Access user information from AuthContext
  const navigate = useNavigate();
  const [favoriteBooks, setFavoriteBooks] = useState({});

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
      sessionStorage.removeItem('featuredBooksScrollPosition');
    };
  }, []);

  useEffect(() => {
    if (user) {
      const fetchFavorites = async () => {
        const docRef = doc(db, 'favorites', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setFavoriteBooks(docSnap.data());
        }
      };
      fetchFavorites();
    }
  }, [user]);

  const handleReadClick = (bookId) => {
    navigate(`/book/${bookId}`);
  };

  const toggleFavorite = async (bookId) => {
    if (!user) {
      toast.error("Please log in to add to your favorites.");
      navigate("/login");
      return;
    }

    const newFavoriteStatus = !favoriteBooks[bookId];
    const updatedFavorites = {
      ...favoriteBooks,
      [bookId]: newFavoriteStatus,
    };

    setFavoriteBooks(updatedFavorites);

    try {
      await setDoc(doc(db, 'favorites', user.uid), updatedFavorites);
      if (newFavoriteStatus) {
        toast.success('Added to your wishlist!');
      } else {
        toast.error('Removed from your wishlist!');
      }
    } catch (error) {
      console.error("Error saving favorite: ", error);
      toast.error("Failed to update favorite status.");
    }
  };

  return (
    <section className="f-featured-books">
      <ToastContainer />
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
                  e.stopPropagation();
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
