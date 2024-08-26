import React, { useEffect, useRef } from 'react';
import './BookCategories.css';
import { FaArrowRight } from 'react-icons/fa'; // Arrow icon for "See more"
import subImage from '../../assets/sub.jpg';
import moImage from '../../assets/mo.webp';
import shettyImage from '../../assets/shetty.jpg';
import dieImage from '../../assets/die.jpeg';

const categories = [
  { name: 'Young Adult', image: subImage },
  { name: 'Romance', image: moImage },
  { name: 'Mystery', image: shettyImage },
  { name: 'Children\'s', image: dieImage },
  { name: 'Young Adult', image: subImage },
  { name: 'Romance', image: moImage },
  { name: 'Mystery', image: shettyImage },
  { name: 'Children\'s', image: dieImage },
  { name: 'Young Adult', image: subImage },
  { name: 'Romance', image: moImage },
  // Add more categories as needed
];

const BookCategories = () => {
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1 // Adjust this value based on when you want the animation to trigger
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === headerRef.current) {
            headerRef.current.classList.add('animate-header');
          }
          if (entry.target === gridRef.current) {
            gridRef.current.classList.add('animate-grid');
            const cards = gridRef.current.querySelectorAll('.category-card');
            cards.forEach((card, index) => {
              card.style.animation = `fadeInSequential 0.5s ${index * 0.2}s forwards`;
            });
          }
        }
      });
    }, observerOptions);

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
      if (gridRef.current) {
        observer.unobserve(gridRef.current);
      }
    };
  }, []);

  return (
    <section className="book-categories-section">
      <div ref={headerRef} className="categories-header">
        <h2 className="main-heading">Explore Our Book Categories</h2>
        <p className="tagline">Find the perfect book for every occasion.</p>
      </div>
      <div ref={gridRef} className="categories-grid">
        {categories.map((category, index) => (
          <a 
            key={index} 
            href={`/genres/${category.name.toLowerCase()}`} 
            className="category-card"
          >
            <img src={category.image} alt={category.name} className="category-image" />
            <div className="category-info">
              <h3 className="category-name">{category.name}</h3>
              <span className="see-more">
                See more <FaArrowRight />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default BookCategories;
