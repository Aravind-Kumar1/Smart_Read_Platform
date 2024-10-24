// src/components/Notes.js
import React, { useState } from 'react';
import './Notes.css'; // Create this CSS file for styling

const Notes = ({ notes, onAddNote }) => {
  const [noteText, setNoteText] = useState('');

  const handleAddNote = () => {
    if (noteText.trim()) {
      onAddNote(noteText); // Call the function to add the note
      setNoteText(''); // Clear the input field
    }
  };

  return (
    <div className="notes-container">
      <h2>Notes</h2>
      <textarea
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        placeholder="Write your notes here..."
      />
      <button onClick={handleAddNote}>Add Note</button>
      <div className="notes-list">
        {notes.map((note, index) => (
          <div key={index} className="note">
            {note}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
