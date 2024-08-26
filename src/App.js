import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/HomePage/Header/Header';
import HeroSection from './components/HomePage/HeroSection/HeroSection';
import BookCategories from './components/BookCategories/BookCategories';
import FeaturedBooks from './components/FeaturedBooks/FeaturedBooks';
import AudioBooksSection from './components/AudioBooks/AudioBooksSection';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import BookDetailPage from './components/BookDetailPage/BookDetailPage';
import EBooksPage from './pages/EBooksPage/EBooksPage';
import AudiobooksPage from './pages/AudiobooksPage/AudiobooksPage';
import LoginPage from './Authentication/LoginPage/LoginPage';
import SignUpPage from './Authentication/SignUpPage/SignUpPage';
import NoteTaking from './components/NoteTaking/NoteTaking';
import ClipboardTool from './components/pdfFeatures/Clipboard/ClipboardTool';  // Importing new components
import NoteTakingPdfViewer from './components/pdfFeatures/Notebooks/NoteTakingPdfViewer';  // Importing new components
import BookmarkPdfViewer from './components/pdfFeatures/Bookmarks/BookmarkPdfViewer';
import 'react-quill/dist/quill.snow.css';

  // Importing new components

// Component to scroll to the top on route change
const ScrollToTop = () => {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

// Layout Component to manage common elements like Header and Footer
const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <>
      {/* Only show the Header and Footer on pages other than login and signup */}
      {(location.pathname !== '/login' && location.pathname !== '/signup') && <Header />}
      <main>{children}</main>
      {(location.pathname !== '/login' && location.pathname !== '/signup') && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <Layout>
            <HeroSection />
            <BookCategories />
            <FeaturedBooks />
            <AudioBooksSection />
            <Testimonials />
          </Layout>
        } />
        <Route path="/book/:id" element={<Layout><BookDetailPage /></Layout>} />
        <Route path="/ebooks" element={<Layout><EBooksPage /></Layout>} />
        <Route path="/audiobooks" element={<Layout><AudiobooksPage /></Layout>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/note-taking/:id" element={<Layout><NoteTaking /></Layout>} />
        <Route path="/clipboard" element={<Layout><ClipboardTool /></Layout>} />  {/* New routes */}
        <Route path="/note-taking-pdf" element={<Layout><NoteTakingPdfViewer /></Layout>} />  {/* New routes */}
        <Route path="/bookmarks" element={<Layout><BookmarkPdfViewer /></Layout>} />  {/* New routes */}
      </Routes>
    </Router>
  );
}

export default App;
