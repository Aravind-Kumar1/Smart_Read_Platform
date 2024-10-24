// UploadForm.js
import React, { useState } from 'react';
import axios from 'axios';

const UploadForm = ({ fetchBooks }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [cover, setCover] = useState('');
    const [publishedDate, setPublishedDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newBook = { title, author, cover, publishedDate };

        try {
            await axios.post('http://localhost:5000/api/books', newBook);
            fetchBooks(); // Refresh the book list
            setTitle('');
            setAuthor('');
            setCover('');
            setPublishedDate('');
        } catch (error) {
            console.error('Failed to upload book:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Book Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Cover URL"
                value={cover}
                onChange={(e) => setCover(e.target.value)}
                required
            />
            <input
                type="date"
                value={publishedDate}
                onChange={(e) => setPublishedDate(e.target.value)}
                required
            />
            <button type="submit">Add Book</button>
        </form>
    );
};

export default UploadForm;
