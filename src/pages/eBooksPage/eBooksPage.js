// src/pages/EbooksPage.js
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Authentication/firebase/firebase";
import "./eBooksPage.css";

// EbooksPage component
const EbooksPage = () => {
  const [popularBooks, setPopularBooks] = useState([]);
  const [recommendedBooks, setRecommendedBooks] = useState([]);
  const [topPicks, setTopPicks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "books"));
        const booksData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

        // Split books data into categories as needed
        const firebasePopularBooks = booksData.filter((book) => book.category === "Popular");
        const firebaseRecommendedBooks = booksData.filter((book) => book.category === "Recommended");
        const firebaseTopPicks = booksData.filter((book) => book.category === "Top Picks");

        // Set state to the Firebase data
        setPopularBooks(firebasePopularBooks);
        setRecommendedBooks(firebaseRecommendedBooks);
        setTopPicks(firebaseTopPicks);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  const handleReadClick = (pdfUrl) => {
    window.location.href = pdfUrl;
  };

  return (
    <div className="ebook-page">
      <div className="page-content">
        {/* Popular eBooks Section */}
        <section className="books-section popular-books">
          <h2 className="section-title">Popular eBooks</h2>
          <div className="books-grid">
            {popularBooks.map((book) => (
              <div key={book.id} className="e-book-card">
                <div className="e-book-cover-container">
                  <img src={book.cover || book.coverUrl} alt={book.title} className="e-book-cover" />
                </div>
                <div className="e-book-details">
                  <h3 className="e-book-title">{book.title}</h3>
                  <span className="e-book-author">{book.author}</span>
                  <span className="e-book-published-date">Published on: {book.publishedDate || "N/A"}</span>
                  <button className="e-read-button" onClick={() => handleReadClick(book.pdf || book.fileUrl)}>Read Now</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended Books Section */}
        <section className="books-section recommended-books">
          <h2 className="section-title">Recommended Books</h2>
          <div className="books-grid">
            {recommendedBooks.map((book) => (
              <div key={book.id} className="e-book-card">
                <div className="e-book-cover-container">
                  <img src={book.cover || book.coverUrl} alt={book.title} className="e-book-cover" />
                </div>
                <div className="e-book-details">
                  <h3 className="e-book-title">{book.title}</h3>
                  <span className="e-book-author">{book.author}</span>
                  <span className="e-book-published-date">Published on: {book.publishedDate || "N/A"}</span>
                  <button className="e-read-button" onClick={() => handleReadClick(book.pdf || book.fileUrl)}>Read Now</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Top Picks Section */}
        <section className="books-section top-picks">
          <h2 className="section-title">Top Picks</h2>
          <div className="books-grid">
            {topPicks.map((book) => (
              <div key={book.id} className="e-book-card">
                <div className="e-book-cover-container">
                  <img src={book.cover || book.coverUrl} alt={book.title} className="e-book-cover" />
                </div>
                <div className="e-book-details">
                  <h3 className="e-book-title">{book.title}</h3>
                  <span className="e-book-author">{book.author}</span>
                  <span className="e-book-published-date">Published on: {book.publishedDate || "N/A"}</span>
                  <button className="e-read-button" onClick={() => handleReadClick(book.pdf || book.fileUrl)}>Read Now</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default EbooksPage;
