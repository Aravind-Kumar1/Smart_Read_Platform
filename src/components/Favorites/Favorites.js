import React, { useEffect, useState } from 'react';
import { useAuth } from '../../Authentication/AuthContext';
import { db } from '../../Authentication/firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';
import '../FeaturedBooks/FeaturedBooks.css';
import { books } from '../../components/FeaturedBooks/FeaturedBooks'; // Ensure your books data includes audiobooks

const Favorites = () => {
  const { user } = useAuth();
  const [favoriteEBooks, setFavoriteEBooks] = useState([]);
  const [favoriteAudiobooks, setFavoriteAudiobooks] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      if (!user) return;

      try {
        const docRef = doc(db, 'favorites', user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const favoriteBookIds = Object.keys(docSnap.data()).filter(
            id => docSnap.data()[id] === true
          );

          // Assuming `books` is an array of both eBooks and audiobooks
          const filteredEBooks = books.filter(
            book => favoriteBookIds.includes(book.id.toString()) && book.type === 'ebook'
          );
          const filteredAudiobooks = books.filter(
            book => favoriteBookIds.includes(book.id.toString()) && book.type === 'audiobook'
          );

          setFavoriteEBooks(filteredEBooks);
          setFavoriteAudiobooks(filteredAudiobooks);
        }
      } catch (error) {
        console.error("Error fetching favorites: ", error);
      }
    };

    fetchFavorites();
  }, [user]);

  return (
    <div>
      {/* eBooks Section */}
      <section className="f-featured-books">
        <h2 className="f-featured-books-subheading">Your Favorite eBooks</h2>
        <p className="f-featured-books-subtagline">eBooks you've marked as favorites</p>
        <div className="f-featured-books-grid">
          {favoriteEBooks.length > 0 ? (
            favoriteEBooks.map(book => (
              <div key={book.id} className="f-book-card">
                <div className="f-book-cover-container">
                  <img src={book.cover} alt={book.title} className="f-book-cover" />
                </div>
                <div className="f-book-details">
                  <h3 className="f-book-title">{book.title}</h3>
                  <div className="f-author-info">
                    <span>Written by</span>
                    <span className="f-author-name">{book.author}</span>
                  </div>
                  <span className="f-published-date">{book.publishedDate}</span>
                </div>
              </div>
            ))
          ) : (
            <p>No favorite eBooks yet. Start adding eBooks to your list!</p>
          )}
        </div>
      </section>

      {/* Audiobooks Section */}
      <section className="f-featured-books">
        <h2 className="f-featured-books-subheading">Your Favorite Audiobooks</h2>
        <p className="f-featured-books-subtagline">Audiobooks you've marked as favorites</p>
        <div className="f-featured-books-grid">
          {favoriteAudiobooks.length > 0 ? (
            favoriteAudiobooks.map(book => (
              <div key={book.id} className="f-book-card">
                <div className="f-book-cover-container">
                  <img src={book.cover} alt={book.title} className="f-book-cover" />
                </div>
                <div className="f-book-details">
                  <h3 className="f-book-title">{book.title}</h3>
                  <div className="f-author-info">
                    <span>Narrated by</span>
                    <span className="f-author-name">{book.author}</span>
                  </div>
                  <span className="f-published-date">{book.publishedDate}</span>
                </div>
              </div>
            ))
          ) : (
            <p>No favorite audiobooks yet. Start adding audiobooks to your list!</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Favorites;
