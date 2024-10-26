import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../Authentication/firebase/firebase';
import { doc, getDoc, setDoc, collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import './BookDetailPage.css';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import RelatedBooks from './RelatedBooks';
import BookSummary from './BookSummary';

// Import your book images
import atomicPdfEn from '../../images/atomic.pdf';  // English PDF
import atomicPdfHi from '../../images/cannot_hurt.pdf'; // Hindi PDF
import cannotEn from '../../images/cant.pdf'; // English PDF
import cannotHi from '../../images/cannot_hurt.pdf'; // Hindi PDF
import unfuckEn from '../../images/unfuck.pdf'; // English PDF
import unfuckHi from '../../images/cannot_hurt.pdf'; // Hindi PDF
import pshyEn from '../../images/pshy.pdf'; // English PDF
import pshyHi from '../../images/cannot_hurt.pdf'; // Hindi PDF
import subtleEn from '../../images/subtle.pdf'; // English PDF
import subtleHi from '../../images/cannot_hurt.pdf'; // Hindi PDF

const books = [
  { id: 1, title: 'Atomic Habits', pdfEn: atomicPdfEn, pdfHi: atomicPdfHi },
  { id: 2, title: 'Can’t Hurt Me', pdfEn: cannotEn, pdfHi: cannotHi },
  { id: 3, title: 'Unf*ck Yourself', pdfEn: unfuckEn, pdfHi: unfuckHi },
  { id: 4, title: 'Psychology of Money', pdfEn: pshyEn, pdfHi: pshyHi },
  { id: 5, title: 'The Subtle Art of Not Giving a F*ck', pdfEn: subtleEn, pdfHi: subtleHi },
];

const BookDetailPage = () => {
  const { id } = useParams();
  const book = books.find((book) => book.id === parseInt(id, 10));

  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [language, setLanguage] = useState('English');
  const [notes, setNotes] = useState('');
  const [notesList, setNotesList] = useState([]);
  const [selectedNoteId, setSelectedNoteId] = useState(null);
  const [userId] = useState("currentUserId"); // Replace with actual user ID logic

  // Animation states
  const [showSavedMessage, setShowSavedMessage] = useState(false);

  useEffect(() => {
    if (book) {
      const fetchNotes = async () => {
        try {
          const notesQuery = query(
            collection(db, 'notes'),
            where('userId', '==', userId),
            where('bookId', '==', book.id)
          );
          const notesSnapshot = await getDocs(notesQuery);
          const notesData = notesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setNotesList(notesData);
        } catch (error) {
          console.error("Error fetching notes:", error);
        }
      };
      fetchNotes();
    }
  }, [userId, book]);

  const saveNotes = async () => {
    try {
      const newNoteData = { userId, bookId: book.id, notes, timestamp: new Date() };
      if (selectedNoteId) {
        await setDoc(doc(db, 'notes', selectedNoteId), newNoteData);
        toast.success('Note updated successfully!');
      } else {
        await addDoc(collection(db, 'notes'), newNoteData);
        toast.success('New note saved successfully!');
      }
      // Show saved message animation
      setShowSavedMessage(true);
      setTimeout(() => {
        setShowSavedMessage(false);
      }, 2000); // Show for 2 seconds

      setSelectedNoteId(null);
      setNotes('');
      const notesQuery = query(
        collection(db, 'notes'),
        where('userId', '==', userId),
        where('bookId', '==', book.id)
      );
      const notesSnapshot = await getDocs(notesQuery);
      const notesData = notesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setNotesList(notesData);
    } catch (error) {
      console.error("Error saving notes:", error);
    }
  };

  const selectNote = (note) => {
    setNotes(note.notes);
    setSelectedNoteId(note.id);
    setIsNotesOpen(true);
  };

  if (!book) {
    return <div className="book-not-found">Book not found</div>;
  }

  // Create an instance of the default layout plugin
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    defaultScale: 0.6, // Set zoom level to 60%
  });

  return (
    <div className="book-detail-container">
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

      <div className="reading-mode">
        <div className="pdf-viewer">
          <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
            <Viewer fileUrl={language === 'Hindi' ? book.pdfHi : book.pdfEn} plugins={[defaultLayoutPluginInstance]} />
          </Worker>
        </div>
        <div className="notes-section">
          <button onClick={() => setIsNotesOpen((prev) => !prev)} className="notes-button">
            {isNotesOpen ? 'Close Notes' : 'Open Notes'}
          </button>

          {isNotesOpen && (
            <div className="notes-drawer">
              <div className="notes-header">
                <h2>{selectedNoteId ? 'Edit Note' : 'Notes'}</h2>
                <button className="save-button" onClick={saveNotes}>Save</button>
              </div>
              <textarea
                className="notes-textarea"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Start taking notes..."
              ></textarea>
            </div>
          )}

          <div className="notes-list">
            <h3 className="not">My Notes</h3>
            <ul>
              {notesList.map(note => (
                <li key={note.id} onClick={() => selectNote(note)} className="note-item"> 
                  {new Date(note.timestamp.seconds * 1000).toLocaleString()} - {note.notes.substring(0, 20)}...
                </li>
              ))}
            </ul>
          </div>

          {/* Notes Saved Animation */}
          {showSavedMessage && (
            <div className="notes-saved-message">
              Notes Saved!
            </div>
          )}
        </div>
      </div>

      <BookSummary videoUrl={book.summaryVideo} summaryText={book.summaryText} />
      <section className="related-books-section">
        <RelatedBooks />
      </section>

      <ToastContainer />
    </div>
  );
};

export default BookDetailPage;
