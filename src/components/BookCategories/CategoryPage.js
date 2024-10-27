// CategoryPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../Authentication/firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
import BookCard from '../BookCategories/card'; // Make sure path to BookCard component is correct
import './CategoryPage.css';

const CategoryPage = () => {
  const { name } = useParams();
  const [books, setBooks] = useState([]);
  const categoryName = name.charAt(0).toUpperCase() + name.slice(1).replace(/_/g, " ");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const collectionName = name.toLowerCase().replace(/ & /g, "_").replace(/ /g, "_");
        const categoryCollection = collection(db, collectionName);
        const bookSnapshot = await getDocs(categoryCollection);
        const bookList = bookSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setBooks(bookList);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, [name]);

  return (
    <div className="category-page-container">
      <h1 className="category-title">{categoryName} Books</h1>
      <div className="books-grid">
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onReadClick={() => console.log(`Reading ${book.title}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
