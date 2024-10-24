import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './BookDetailPage.css';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';   
import * as pdfjsLib from 'pdfjs-dist/build/pdf';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.entry';
import atomicPdf from '../../images/atomic.pdf'; // Import your PDF file
import cannot from '../../images/cannot_hurt.pdf';
import RelatedBooks from './RelatedBooks'; // Import the RelatedBooks component
import BookSummary from './BookSummary'; // Import the BookSummary component

// Sample book data
const books = [
  {
    id: 1,
    title: 'Atomic Habits',
    author: 'James Clear',
    pdf: atomicPdf,
    summaryVideo: 'https://www.youtube.com/embed/9cKp6u0p0O8', // Replace with your actual YouTube video link
    summaryText: 'In this book, James Clear lays out a framework for improving your habits every day. He emphasizes that small, incremental changes can lead to significant improvements over time.',
  },
  {
    id: 2,
    title: "Can't Hurt Me",
    author: 'David Goggins',
    pdf: cannot,
    summaryVideo: 'https://www.youtube.com/embed/9cKp6u0p0O8', // Replace with your actual YouTube video link
    summaryText: 'In this book, James Clear lays out a framework for improving your habits every day. He emphasizes that small, incremental changes can lead to significant improvements over time.',
  },
  {
    id: 3,
    title: 'Atomic Habits',
    author: 'James Clear',
    pdf: atomicPdf,
    summaryVideo: 'https://www.youtube.com/embed/9cKp6u0p0O8', // Replace with your actual YouTube video link
    summaryText: 'In this book, James Clear lays out a framework for improving your habits every day. He emphasizes that small, incremental changes can lead to significant improvements over time.',
  },
  {
    id: 4,
    title: 'Atomic Habits',
    author: 'James Clear',
    pdf: atomicPdf,
    summaryVideo: 'https://www.youtube.com/embed/9cKp6u0p0O8', // Replace with your actual YouTube video link
    summaryText: 'In this book, James Clear lays out a framework for improving your habits every day. He emphasizes that small, incremental changes can lead to significant improvements over time.',
  },
  {
    id: 5,
    title: 'Atomic Habits',
    author: 'James Clear',
    pdf: atomicPdf,
    summaryVideo: 'https://www.youtube.com/embed/9cKp6u0p0O8', // Replace with your actual YouTube video link
    summaryText: 'In this book, James Clear lays out a framework for improving your habits every day. He emphasizes that small, incremental changes can lead to significant improvements over time.',
  },
];

const BookDetailPage = () => {
  const { id } = useParams();
  const book = books.find((book) => book.id === parseInt(id, 10));

  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [language, setLanguage] = useState('English'); // Default language
  const [notes, setNotes] = useState(''); // State to hold notes
  const [userId] = useState("currentUserId"); // Replace with actual user ID logic

  // Fetch existing notes from backend when the component mounts
  useEffect(() => {
    if (book) { // Check if book is defined before making the API call
      const fetchNotes = async () => {
        try {
          const response = await axios.get(`/api/notes/${userId}/${book.id}`);
          if (response.data) {
            setNotes(response.data.notes);
          }
        } catch (error) {
          console.error("Error fetching notes:", error);
        }
      };
      
      fetchNotes(); // Call fetchNotes on component mount
    }
  }, [userId, book]); // Dependency array to re-run effect when userId or book changes

  // Save notes to backend
  const saveNotes = async () => {
    try {
      await axios.post('/api/notes', {
        userId,
        bookId: book.id,
        notes,
      });
      alert('Notes saved successfully');
    } catch (error) {
      console.error("Error saving notes:", error);
    }
  };

  if (!book) {
    return <div className="book-not-found">Book not found</div>;
  }

  // Set the worker source for PDF.js
  pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="book-detail-container">
      {/* Book Title and Language Selector Section */}
      <header className="book-header">
        <div className="book-info">
          <h1 className="book-title">Title: {book.title}</h1>
        </div>
        <div className="language-selector">
          <label htmlFor="language">Read in:</label>
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="language-dropdown"
          >
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
        </div>
      </header>

      {/* Directly show the book reading mode */}
      <div className="reading-mode">
        <div className="pdf-viewer">
          <Worker workerUrl={pdfWorker}>
            <Viewer fileUrl={book.pdf} plugins={[defaultLayoutPluginInstance]} />
          </Worker>
        </div>
        <div className="notes-section">
          {/* Notes Button */}
          <button onClick={() => setIsNotesOpen((prev) => !prev)} className="notes-button">
            {isNotesOpen ? 'Close Notes' : 'Open Notes'}
          </button>

          {/* Notes Drawer */}
          {isNotesOpen && (
            <div className="notes-drawer">
              <div className="notes-header">
                <h2>Untitled Notes</h2>
                <button className="save-button" onClick={saveNotes}>Save</button>
              </div>
              <textarea
                className="notes-textarea"
                value={notes}
                onChange={(e) => setNotes(e.target.value)} // Update state on change
                placeholder="Start taking notes..."
              ></textarea>
            </div>
          )}
        </div>
      </div>

      {/* Book Summary Section */}
      <BookSummary videoUrl={book.summaryVideo} summaryText={book.summaryText} />

      {/* Related Books Section */}
      <section className="related-books-section">
        <RelatedBooks />
      </section>
    </div>
  );
};

export default BookDetailPage;
