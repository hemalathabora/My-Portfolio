import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Hemalatha Bora</div>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((section) => (
            <li key={section}>
              <a href={`#${section.toLowerCase()}`}>{section}</a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="mobile-menu">
          {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((section) => (
            <li key={section}>
              <a
                href={`#${section.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
