import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header'; // Your existing Header component
import HeroSection from './components/HeroSection/HeroSection';
import BookCategories from './components/BookCategories/BookCategories';
import FeaturedBooks from './components/FeaturedBooks/FeaturedBooks';
import AudioBooksSection from './components/AudioBooks/AudioBooksSection';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import BookDetailPage from './pages/BookDetailPage/BookDetailPage';
import eBooksPage from './pages/eBooksPage/eBooksPage';
import AudiobooksPage from './pages/AudiobooksPage/AudiobooksPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <BookCategories />
              <FeaturedBooks />
              <AudioBooksSection />
              <Testimonials />
            </>
          } />
          <Route path="/book/:id" element={<BookDetailPage />} />
          <Route path="/ebooks" element={<eBooksPage />} />
          <Route path="/audiobooks" element={<AudiobooksPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
