import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import BookCategories from './components/BookCategories/BookCategories';
import FeaturedBooks from './components/FeaturedBooks/FeaturedBooks';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <BookCategories />
      <FeaturedBooks />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
