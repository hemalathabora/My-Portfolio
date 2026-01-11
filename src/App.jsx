import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import AboutTimeline from './components/AboutTimeLine';
import ProjectCard from './components/ProjectCard';
import SkillsSection from './components/SkillsSection';
import ContactForm from './components/ContactForm';
import CompetitiveCoding from './components/CompetitiveCoding';
import './index.css';
import SocialLinks from './components/SocialLinks';

function App() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);
  
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  // Hero section animation on load
  useEffect(() => {
    const timer = setTimeout(() => {
      if (heroRef.current) {
        setHeroVisible(true);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // About section scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAboutVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  // Projects section scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProjectsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section - Reveals on page load */}
      <section id="home" className="hero-section-bg" ref={heroRef}>
        <div className="overlay">
          <div className="hero-flex">
            <div className={`hero-left ${heroVisible ? 'reveal' : ''}`}>
              <h1 className="hero-name">Hemalatha Bora</h1>
              <p className="hero-subtitle">Software Engineer building modern web applications and ML-driven solutions</p>
              <p className="hero-description">I build clean web applications, work on machine learning projects, and enjoy solving real-world problems through code.</p>
              <div className="hero-buttons">
                <a href="#projects" className="btn-primary">View Projects</a>
                <a href="#contact" className="btn-outline">Get in Touch</a>
              </div>
            </div>
            <div className={`hero-gallery ${heroVisible ? 'reveal' : ''}`}>
              <div className="gallery-item gallery-item-1">
                <img
                  src="/assets/icons/img1.png"
                  alt="Hemalatha working on code"
                  className="gallery-image"
                />
              </div>
              <div className="gallery-item gallery-item-2">
                <img
                  src="/assets/icons/img2.jpeg"
                  alt="Hemalatha at desk"
                  className="gallery-image"
                />
              </div>
              <div className="gallery-item gallery-item-3">
                <img
                  src="/assets/icons/img3.png"
                  alt="Hemalatha collaboration"
                  className="gallery-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Reveals on scroll */}
      <div ref={aboutRef}>
        <AboutTimeline visible={aboutVisible} />
      </div>

      {/* Projects Section - Reveals on scroll */}
      <section id="projects" className={`container section projects-section ${projectsVisible ? 'reveal' : ''}`} ref={projectsRef}>
        <h2>Projects</h2>
        <p>Explore some of my featured projects below.</p>

        <div className="projects-grid">
          {[
            {
              title: "Rescue Nexus",
              image: "/assets/icons/rescuenexus.jpg",
              description:
                "A centralized disaster management platform connecting victims, volunteers, and authorities in real-time.",
              github: "https://github.com/hemalathabora/rescue-nexus",
              live: "https://rescue-nexus.onrender.com"
            },
            {
              title: "ResumeScreener",
              image: "/assets/icons/resume.jpg",
              description:
                "An AI-powered tool that filters and ranks resumes based on job relevance and skill match.",
              github: "https://github.com/hemalathabora/Resume-screener",
              live: ""
            },
            {
              title: "Fake Job Posting Detector",
              image: "/assets/icons/fakejob.jpeg",
              description:
                "An AI-powered web application that detects and flags fake job postings using machine learning.",
              github: "https://github.com/hemalathabora/fake-job-posting-detector",
              live: "https://fake-job-posting-detector-aq5lnbvbqsp2uh5ztg4mtl.streamlit.app/"
            },
            {
              title: "NeuroMate – AI-Based Autism Screening Assistant",
              image: "/assets/icons/asd.jpeg",
              description:
                "An AI-driven adaptive autism screening assistant that provides logical assessment, severity analysis, and downloadable medical-style reports.",
              github: "https://github.com/hemalathabora/NeuroMate-ASD",
              live: ""
            },
            {
              title: "Instant Blood Donors",
              image: "/assets/icons/ibd.jpg",
              description:
                "A location-based platform that instantly connects patients with nearby eligible blood donors.",
              github: "https://github.com/hemalathabora/InstantBloodDonors",
              live: ""
            },
            {
              title: "MediCare",
              image: "/assets/icons/medicare.png",
              description:
                "A comprehensive healthcare management system streamlining patient records, appointments, and telemedicine services.",
              github: "https://github.com/hemalathabora/MediCare",
              live: ""
            },
            {
              title: "SkyCast",
              image: "/assets/icons/skycast.jpg",
              description:
                "A weather forecasting web app delivering precise and timely updates using ML and satellite data.",
              github: "https://github.com/hemalathabora/Weather_Forecast",
              live: "https://weather-forecast-app.vercel.app"
            },
            {
              title: "Meme Factory",
              image: "/assets/icons/meme.jpg",
              description:
                "A creative meme generation app allowing users to create, share, and explore trending memes.",
              github: "https://github.com/hemalathabora/MemeFactory",
              live: "https://meme-factory-actc.onrender.com"
            },
            {
              title: "CineFinder",
              image: "/assets/icons/cinefinder.jpg",
              description:
                "A movie recommendation system that suggests films based on user mood and viewing history.",
              github: "https://github.com/hemalathabora/CineFinder",
              live: "https://movie-search-app-inky-five.vercel.app/"
            }
          ].map((proj, idx) => (
            <ProjectCard key={idx} {...proj} />
          ))}
        </div>
      </section>


      {/* Skills Section */}
      <SkillsSection />
      
      {/* Competitive Coding Section */}
      <CompetitiveCoding />
      
      {/* Contact Section */}
      <ContactForm />
      
      {/* Footer / Social Links */}
      <SocialLinks />
    </>  );
}

export default App;