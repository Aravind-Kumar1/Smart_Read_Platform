import React from 'react';
import './BookCategories.css'; // Ensure you create this CSS file

const categories = [
  { name: 'Fiction', image: 'path/to/fiction-image.jpg' },
  { name: 'Non-Fiction', image: 'path/to/non-fiction-image.jpg' },
  { name: 'Science', image: 'path/to/science-image.jpg' },
  { name: 'Biography', image: 'path/to/biography-image.jpg' },
  // Add more categories as needed
];

const BookCategories = () => (
  <section className="book-categories">
    <h2 className="categories-title">Browse by Categories</h2>
    <div className="categories-grid">
      {categories.map((category, index) => (
        <div key={index} className="category-card">
          <img src={category.image} alt={category.name} className="category-image" />
          <h3 className="category-name">{category.name}</h3>
        </div>
      ))}
    </div>
  </section>
);

export default BookCategories;
