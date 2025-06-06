import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import AboutTimeline from './components/AboutTimeLine';
import ProjectCard from './components/ProjectCard';
import SkillsSection from './components/SkillsSection';
import ContactForm from './components/ContactForm';
import CompetitiveCoding from './components/CompetitiveCoding';
import './index.css';
import SocialLinks from './components/SocialLinks';

function App() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />

      {/* Intro Popup */}
      {showIntro && (
        <div className="intro-popup">
          <div className="intro-content">
            <button className="intro-close" onClick={() => setShowIntro(false)} aria-label="Close intro popup">×</button>
            <h2 style={{ marginTop: 0, color: "#007bff" }}>Hi, Hello! 👋</h2>
            <p>
              I'm an enthusiastic and curious learner with a strong passion for web development and creative problem-solving. As an undergraduate student in Computer Science, I enjoy turning ideas into user-friendly digital experiences. I'm always eager to grow, collaborate, and contribute to projects that make a real difference.
            </p>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="hero-section-bg">
        <div className="overlay">
          <div className="hero-flex">
            <div className="hero-left">
              <h1>
                Hi, I'm <span className="highlight">Hemalatha Bora</span>
              </h1>
              <p>A passionate Web Developer crafting unique experiences.</p>
              <div className="hero-buttons">
                <a href="#projects" className="btn-primary">View Projects</a>
                <a href="#contact" className="btn-outline">Contact Me</a>
              </div>
            </div>
            <div className="hero-right">
              <img
                src="/assets/icons/heroine.jpg"
                alt="Hero"
                className="hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutTimeline />

      {/* Projects Section */}
      <section id="projects" className="container section">
        <h2>Projects</h2>
        <p>Explore some of my featured projects below.</p>
        <div className="projects-grid">
          {[
            {
              title: "Rescue Nexus",
              image: "/assets/icons/rescuenexus.jpg",
              description: "A centralized disaster management platform connecting victims, volunteers, and authorities in real-time.",
              link: "https://rescue-nexus.onrender.com"
            },
            {
              title: "SkyCast",
              image: "/assets/icons/skycast.jpg",
              description: "A weather forecasting web app delivering precise and timely updates using ML and satellite data.",
              link: "https://github.com/hemalathabora/Weather_Forecast"
            },
            {
              title: "ResumeScreener",
              image: "/assets/icons/resume.jpg",
              description: "An AI-powered tool that filters and ranks resumes based on job relevance and skill match.",
              link: "https://github.com/gnaneswar675/resumatch"
            },
            {
              title: "Instant Blood Donors",
              image: "/assets/icons/ibd.jpg",
              description: "A location-based platform that instantly connects patients with nearby eligible blood donors.",
              link: "https://github.com/hemalathabora/InstantBloodDonors"
            },
            {
              title: "Meme Factory",
              image: "/assets/icons/meme.jpg",
              description: "A creative meme generation app allowing users to create, share, and explore trending memes.",
              link: "https://meme-factory-actc.onrender.com"
            },
            {
              title: "CineFinder",
              image: "/assets/icons/cinefinder.jpg",
              description: "A movie recommendation system that suggests films based on user mood and viewing history.",
              link: "https://movie-search-app-inky-five.vercel.app/"
            }
          ].map((proj, idx) => (
            <ProjectCard key={idx} {...proj} />
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />
      <CompetitiveCoding />
      {/* Contact Section */}
      <ContactForm />
      <SocialLinks />
    </>
  );
}

export default App;
