// import React, { useState } from 'react';
// import { Document, Page } from 'react-pdf';
// import './PDFViewer.css';

// const PDFViewer = ({ pdfFile }) => {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);
//   const [notes, setNotes] = useState([]);
//   const [currentNote, setCurrentNote] = useState('');

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   const handleAddNote = () => {
//     if (currentNote.trim()) {
//       setNotes([...notes, { content: currentNote, page: pageNumber }]);
//       setCurrentNote('');
//     }
//   };

//   return (
//     <div className="pdf-viewer-container">
//       <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
//         <Page pageNumber={pageNumber} />
//       </Document>
//       <div className="pdf-controls">
//         <button disabled={pageNumber <= 1} onClick={() => setPageNumber(pageNumber - 1)}>Previous</button>
//         <span>Page {pageNumber} of {numPages}</span>
//         <button disabled={pageNumber >= numPages} onClick={() => setPageNumber(pageNumber + 1)}>Next</button>
//       </div>
//       <div className="note-taking">
//         <textarea
//           value={currentNote}
//           onChange={(e) => setCurrentNote(e.target.value)}
//           placeholder="Take your notes here..."
//         />
//         <button onClick={handleAddNote}>Add Note</button>
//       </div>
//       <div className="notes-list">
//         <h3>Notes for Page {pageNumber}</h3>
//         {notes.filter(note => note.page === pageNumber).map((note, index) => (
//           <div key={index} className="note">
//             {note.content}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PDFViewer;
