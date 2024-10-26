import React from 'react';
import './Testimonials.css'; // Ensure styles are imported
import leader from '../../assets/leader.webp';
import upskiller from '../../assets/upskiller.webp';
import learn from '../../assets/learner.webp';

const Testimonials = () => {
    const testimonials = [
        {
            category: 'Leaders',
            image: leader, // Replace with your image path
            rating: '★★★★★',
            text: (
                <>
                    <strong>Most CEOs read a book a week.</strong> Many use programs like this to acquire key concepts that help them keep a fresh perspective, helping hone <strong>vision, strategy, and action.</strong>
                </>
            ),
            className: 'leader' // Assigning class for specific styling
        },
        {
            category: 'Upskillers',
            image: upskiller, // Replace with your image path
            rating: '★★★★★',
            text: (
                <>
                    <strong>Life changing.</strong> The concept of being able to grasp a book's main point in such a short time truly opens multiple <strong>opportunities</strong> to grow <strong>every area</strong> of your life at a <strong>faster rate</strong>.
                </>
            ),
            className: 'upskiller' // Assigning class for specific styling
        },
        {
            category: 'Lifelong Learners',
            image: learn, // Replace with your image path
            rating: '★★★★★',
            text: (
                <>
                    This is simply the <strong>coolest app</strong> that exists. Deserved full credit. It's much nicer to spend your time learning new <strong>knowledge</strong>, rather than spending hours browsing <strong>social media</strong>.
                </>
            ),
            className: 'lifelong' // Assigning class for specific styling
        }
    ];

    return (
        <div className="container">
            <h1>Growing with Smart-Read</h1>
            <p style={{ fontSize: '18px', marginTop :'-20px', color: '#003060' }}>
                Nurturing Knowledge, One Page at a Time.
            </p>
            <div className="testimonial-section">
                {testimonials.map((testimonial, index) => (
                    <div className={`testimonial-card ${testimonial.className}`} key={index}>
                        <div className="category-label">{testimonial.category}</div>
                        <img src={testimonial.image} alt={`${testimonial.category} Image`} className="testimonial-image" />
                        <p className="rating">{testimonial.rating}</p>
                        <p className="testimonial-text">{testimonial.text}</p>
                    </div>
                ))}
            </div>

            <div className="stat-section">
                <div className="stat">
                    <p>95%</p>
                </div>
                <div className="stat">
                    <p>91%</p>
                </div>
                <div className="stat">
                    <p>87%</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
