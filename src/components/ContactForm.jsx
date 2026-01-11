// src/components/ContactForm.jsx
import { useState, useEffect, useRef } from "react";
import './ContactForm.css';

export default function ContactForm() {
  const [showPopup, setShowPopup] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2200); // Hide after 2.2s
    e.target.reset();
  };

  return (
    <section id="contact" className={`contact-section ${isVisible ? 'reveal' : ''}`} ref={sectionRef}>
      <h2>Contact Me</h2>
      <p>Have a project in mind or just want to chat? I'd love to hear from you.</p>
      <form className="glass-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      {showPopup && (
        <div className="thankyou-popup">
          <div className="thankyou-content">
            Thank you for reaching out!
          </div>
        </div>
      )}
    </section>
  );
}
