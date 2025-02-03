import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Authentication/firebase/firebase"; // Import Firebase configuration
import { useNavigate } from "react-router-dom";
import "./AudiobooksPage.css"; // Ensure the path is correct for your CSS file

const AudiobooksPage = () => {
  const [popularAudiobooks, setPopularAudiobooks] = useState([]);
  const [featuredAudiobooks, setFeaturedAudiobooks] = useState([]);
  const [trendingAudiobooks, setTrendingAudiobooks] = useState([]); // State for trending audiobooks
  const [authors, setAuthors] = useState([]); // State for suggested authors
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAudiobooks = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "audio_book_data"));
        const audiobooksData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

        // Split data into categories
        const popular = audiobooksData.filter((audiobook) => audiobook.category === "Popular");
        const featured = audiobooksData.filter((audiobook) => audiobook.category === "Featured");
        const trending = audiobooksData.filter((audiobook) => audiobook.category === "Trending"); // New Trending category

        setPopularAudiobooks(popular);
        setFeaturedAudiobooks(featured);
        setTrendingAudiobooks(trending); // Set trending audiobooks

        // For suggested authors (example setup, customize as needed)
        setAuthors([
          { id: 1, name: "J.K. Rowling", image: "path/to/image1" },
          { id: 2, name: "George Orwell", image: "path/to/image2" },
        ]);
      } catch (error) {
        console.error("Error fetching audiobooks:", error);
      }
    };

    fetchAudiobooks();
  }, []);

  const handleListenClick = (audiobookId) => {
    navigate(`/audiobook/${audiobookId}`); // Navigate to the detail page with the audiobook ID
  };

  return (
    <div className="ab-audiobook-page">
      <div className="ab-page-content">
        {/* Popular Audiobooks Section */}
        <section className="ab-books-section ab-popular-books">
          <h2 className="ab-section-title">Popular Audiobooks</h2>
          <div className="ab-books-grid">
            {popularAudiobooks.map((audiobook) => (
              <div
                key={audiobook.id}
                className="ab-audio-book-card"
                onClick={() => handleListenClick(audiobook.id)} // Pass the audiobook ID
              >
                <div className="ab-audio-book-cover-container">
                  <img src={audiobook.cover} alt={audiobook.title} className="ab-audio-book-cover" />
                </div>
                <div className="ab-audio-book-details">
                  <h3 className="ab-audio-book-title">{audiobook.title}</h3>
                  <p className="ab-audio-book-author">{audiobook.author}</p>
                </div>
                <div className="ab-audio-book-label">Listen Now</div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Audiobooks Section */}
        <section className="ab-books-section ab-featured-books">
          <h2 className="ab-section-title">Featured Audiobooks</h2>
          <div className="ab-books-grid">
            {featuredAudiobooks.map((audiobook) => (
              <div
                key={audiobook.id}
                className="ab-audio-book-card"
                onClick={() => handleListenClick(audiobook.id)} // Pass the audiobook ID
              >
                <div className="ab-audio-book-cover-container">
                  <img src={audiobook.cover} alt={audiobook.title} className="ab-audio-book-cover" />
                </div>
                <div className="ab-audio-book-details">
                  <h3 className="ab-audio-book-title">{audiobook.title}</h3>
                  <p className="ab-audio-book-author">{audiobook.author}</p>
                </div>
                <div className="ab-audio-book-label">Listen Now</div>
              </div>
            ))}
          </div>
        </section>

        {/* Trending Audiobooks Section */}
        <section className="ab-books-section ab-trending-books">
          <h2 className="ab-section-title">Trending Audiobooks</h2>
          <div className="ab-books-grid">
            {trendingAudiobooks.map((audiobook) => (
              <div
                key={audiobook.id}
                className="ab-audio-book-card"
                onClick={() => handleListenClick(audiobook.id)} // Pass the audiobook ID
              >
                <div className="ab-audio-book-cover-container">
                  <img src={audiobook.cover} alt={audiobook.title} className="ab-audio-book-cover" />
                </div>
                <div className="ab-audio-book-details">
                  <h3 className="ab-audio-book-title">{audiobook.title}</h3>
                  <p className="ab-audio-book-author">{audiobook.author}</p>
                </div>
                <div className="ab-audio-book-label">Listen Now</div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default AudiobooksPage;
