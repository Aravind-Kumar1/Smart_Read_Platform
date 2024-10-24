import React, { useEffect, useRef } from 'react';
import './Testimonials.css'; // Import the CSS for styling and animations

// Define the testimonials array
const testimonials = [
  {
    type: 'leaders',
    name: 'A SmartRead user',
    title: 'Most CEOs read a book a week',
    text: 'Many use programs like this to acquire key concepts that help them keep a fresh perspective, honing vision, strategy, and action.',
  },
  {
    type: 'lifelong-learners',
    name: 'Lifelong learners',
    title: 'This is simply the coolest app that exists',
    text: 'It’s much nicer to spend your time learning new knowledge, rather than spending hours browsing social media.',
  },
  {
    type: 'innovators',
    name: 'Tech Enthusiast',
    title: 'An incredible way to learn',
    text: 'This platform has changed the way I consume knowledge, making it fun and easy to stay informed.',
  },
  {
    type: 'students',
    name: 'A Student User',
    title: 'A game changer for my studies!',
    text: 'SmartRead has helped me grasp complex concepts quickly and effectively. I love the audio summaries for on-the-go learning!',
  },
];

const Testimonials = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const cards = gridRef.current.querySelectorAll('.testimonial-card');
          cards.forEach((card, index) => {
            card.style.animation = `fadeInSequential 0.5s ${index * 0.2}s forwards`;
          });
        }
      });
    }, observerOptions);

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => {
      if (gridRef.current) {
        observer.unobserve(gridRef.current);
      }
    };
  }, []);

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2 className="testimonials-heading">
          Discover a world of knowledge—read, listen, <br /> and grow with SmartRead!
        </h2>
      </div>
      <div ref={gridRef} className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className={`testimonial-card ${testimonial.type}`}>
            <h3 className="testimonial-title">{testimonial.title}</h3>
            <p className="testimonial-text">{testimonial.text}</p>
            <p className="testimonial-name">— {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
