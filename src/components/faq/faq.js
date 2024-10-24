import React, { useState } from 'react';
import './faq.css'; // Import the CSS for styling

const faqData = [
  {
    question: "What is SmartRead?",
    answer: "SmartRead is a digital bookstore platform that allows users to read and download books for free. We also offer audiobooks and podcasts to enhance your reading experience."
  },
  {
    question: "How can I access books on SmartRead?",
    answer: "You can access books on SmartRead by signing up for an account. Once registered, you can browse our extensive library and start reading or downloading your favorite titles."
  },
  {
    question: "Are there any costs associated with using SmartRead?",
    answer: "SmartRead is completely free to use. You can read and download books without any charges."
  },
  {
    question: "What types of books are available on SmartRead?",
    answer: "SmartRead offers a wide range of genres, including fiction, non-fiction, self-help, and more. We aim to cater to diverse reading preferences."
  },
  {
    question: "Can I listen to audiobooks on SmartRead?",
    answer: "Yes! SmartRead provides a selection of audiobooks that you can listen to directly on our platform, making it easy to enjoy books on the go."
  },
  {
    question: "How do I create a favorites list?",
    answer: "Once logged in, you can easily add books to your favorites list by clicking the 'Add to Favorites' button on each book's detail page."
  },
  {
    question: "Is there a mobile app for SmartRead?",
    answer: "Currently, SmartRead is accessible through web browsers. We are working on developing a mobile app for a better user experience."
  },
  {
    question: "What should I do if I encounter a problem?",
    answer: "If you encounter any issues, feel free to contact our Customer Support team through the 'Help' section on our website."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleQuestion(index)}>
              <h3>{item.question}</h3>
              <span className={`arrow ${openIndex === index ? 'open' : ''}`}>&#x25BC;</span>
            </div>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
