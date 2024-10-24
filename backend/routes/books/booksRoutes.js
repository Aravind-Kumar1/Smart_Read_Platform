const express = require('express');
const router = express.Router();

// Dummy book data; ideally, you'd fetch this from a database
let books = [
    {
        _id: '1',
        title: 'Atomic Habits',
        author: 'James Clear',
        cover: '/images/atomic-habits.jpg', // Path to the cover image
        fileUrl: '/books/atomic-habits.pdf', // Path to the PDF file
        publishedDate: '2022-01-01',
    },
    {
        _id: '2',
        title: "Can't Hurt Me",
        author: 'David Goggins',
        cover: '/images/cant-hurt-me.jpg',
        fileUrl: '/books/cant-hurt-me.pdf',
        publishedDate: '2023-05-15',
    },
];

// API to get all books
router.get('/books', (req, res) => {
    res.json(books);
});

module.exports = router;
