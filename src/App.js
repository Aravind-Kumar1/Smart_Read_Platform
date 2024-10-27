import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AuthProvider } from './Authentication/AuthContext'; // Adjust the path as necessary
import './App.css';
import Header from './components/HomePage/Header/Header';
import HeroSection from './components/HomePage/HeroSection/HeroSection';
import BookCategories from './components/BookCategories/BookCategories';
import FeaturedBooks from './components/FeaturedBooks/FeaturedBooks';
import AudioBooksSection from './components/AudioBooks/AudioBooksSection';
import Testimonials from './components/Testimonials/Testimonials';
import GrowWhereverYouAre from './components/GrowWhereverYouAre/GrowWhereverYouAre';
import Footer from './components/Footer/Footer';
import BookDetailPage from './components/BookDetailPage/BookDetailPage';
import EBooksPage from './pages/eBooksPage/eBooksPage';
import AudiobooksPage from './pages/AudiobooksPage/AudiobooksPage';
import AudioBookDetailPage from './components/AudioBooks/AudioBookDetailPage';
import LoginPage from './Authentication/LoginPage/LoginPage';
import SignUpPage from './Authentication/SignUpPage/SignUpPage';
import NoteTaking from './components/NoteTaking/NoteTaking';
import ClipboardTool from './components/pdfFeatures/Clipboard/ClipboardTool';
import NoteTakingPdfViewer from './components/pdfFeatures/Notebooks/NoteTakingPdfViewer';
import BookmarkPdfViewer from './components/pdfFeatures/Bookmarks/BookmarkPdfViewer';
import FAQ from './components/faq/faq';
import CategoryPage from './components/BookCategories/CategoryPage';
import Favorites from './components/Favorites/Favorites';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// CSS smooth scroll
import './App.css'; // Ensure this includes the smooth scroll CSS

// Scroll to top with smooth scroll on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll when changing routes
    });
  }, [pathname]);

  return null;
};

// Layout component to handle Header and Footer visibility
const Layout = ({ children }) => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <main>{children}</main>
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

// Home page with main sections
const HomePage = () => (
  <>
    <HeroSection />
    <BookCategories />
    <FeaturedBooks />
    <AudioBooksSection />
    <Testimonials />
    <GrowWhereverYouAre />
    <FAQ />
  </>
);

// Main App component
function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/audiobooks" element={<Layout><AudiobooksPage /></Layout>} />
          <Route path="/audiobook/:id" element={<Layout><AudioBookDetailPage /></Layout>} />
          <Route path="/book/:id" element={<Layout><BookDetailPage /></Layout>} />
          <Route path="/ebooks" element={<Layout><EBooksPage /></Layout>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/note-taking/:id" element={<Layout><NoteTaking /></Layout>} />
          <Route path="/clipboard" element={<Layout><ClipboardTool /></Layout>} />
          <Route path="/note-taking-pdf" element={<Layout><NoteTakingPdfViewer /></Layout>} />
          <Route path="/bookmarks" element={<Layout><BookmarkPdfViewer /></Layout>} />
          <Route path="/category/:name" element={<Layout><CategoryPage /></Layout>} />
          <Route path="/favorites" element={<Layout><Favorites /></Layout>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
