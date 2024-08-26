// import React, { useState, useEffect } from 'react';
// import { PDFDocument } from 'pdf-lib';
// import * as pdfjsLib from 'pdfjs-dist';
// import pdfWorker from 'pdfjs-dist/build/pdf.worker.entry';
// import './NoteTaking.css';

// // Set the worker source
// pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

// const NoteTaking = () => {
//   const [pdfDocument, setPdfDocument] = useState(null);

//   useEffect(() => {
//     const loadPdf = async () => {
//       const pdfUrl = '/path/to/your/pdf-file.pdf'; // Replace with your PDF file path
//       const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
//       setPdfDocument(pdf);
//     };

//     loadPdf();
//   }, []);

//   const renderPage = async (pageNumber) => {
//     const page = await pdfDocument.getPage(pageNumber);
//     const viewport = page.getViewport({ scale: 1.5 });
//     const canvas = document.getElementById('pdf-canvas');
//     const context = canvas.getContext('2d');
//     canvas.height = viewport.height;
//     canvas.width = viewport.width;

//     const renderContext = {
//       canvasContext: context,
//       viewport: viewport,
//     };

//     await page.render(renderContext);
//   };

//   useEffect(() => {
//     if (pdfDocument) {
//       renderPage(1); // Render the first page
//     }
//   }, [pdfDocument]);

//   return (
//     <div className="note-taking-container">
//       <h1>NoteTaking Page</h1>
//       <div className="pdf-viewer">
//         <canvas id="pdf-canvas"></canvas>
//       </div>
//       <div className="tools-container">
//         {/* Add your tools here */}
//         <button>Highlight</button>
//         <button>Underline</button>
//         <button>Add Note</button>
//         {/* More tools can be added */}
//       </div>
//     </div>
//   );
// };

// export default NoteTaking;
