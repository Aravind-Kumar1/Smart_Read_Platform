import React from 'react';
import { useParams } from 'react-router-dom';
import { booksData } from './booksData'; // Import the books data
import Card from '../BookCategories/card'; // Import the BookCard component
import './CategoryPage.css'; // Import CSS file for custom styling

const CategoryPage = () => {
  const { name } = useParams();
  const categoryName = name.charAt(0).toUpperCase() + name.slice(1); // Capitalize category name

  // Fetch books for the specific category
  const books = booksData[name] || []; // Default to empty array if no books found

  return (
    <div className="category-page-container">
      <h1 className="category-title">{categoryName} Books</h1>
      <div className="books-grid">
        {books.map((book) => (
          <Card
            key={book.id}
            book={book}
            onReadClick={() => console.log(`Reading ${book.title}`)} // Handle the read button click
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
