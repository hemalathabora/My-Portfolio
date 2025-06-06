// src/components/ContactForm.jsx
import { useState } from "react";
import './ContactForm.css';

export default function ContactForm() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2200); // Hide after 2.2s
    e.target.reset();
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
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
