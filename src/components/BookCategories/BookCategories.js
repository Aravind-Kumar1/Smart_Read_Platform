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
    const handleScroll = () => {
      const headerTop = headerRef.current.getBoundingClientRect().top;
      const gridTop = gridRef.current.getBoundingClientRect().top;
      const scrollPosition = window.innerHeight;

      // Add animation classes when sections come into view
      if (headerTop < scrollPosition) {
        headerRef.current.style.opacity = '1';
        headerRef.current.style.transform = 'translateY(0)';
      }
      if (gridTop < scrollPosition) {
        const cards = gridRef.current.querySelectorAll('.category-card');
        cards.forEach((card, index) => {
          card.style.animation = `fadeInSequential 0.5s ${index * 0.2}s forwards`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="book-categories-section">
      <div ref={headerRef} className="categories-header">
        <h2 className="main-heading">Explore Our Book Categories</h2>
        <p className="tagline">Find the perfect book for every occasion.</p>
      </div>
      <div ref={gridRef} className="categories-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <img src={category.image} alt={category.name} className="category-image" />
            <div className="category-info">
              <h3 className="category-name">{category.name}</h3>
              <a href={`/genres/${category.name.toLowerCase()}`} className="see-more">
                See more <FaArrowRight />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookCategories;
