import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./SocialLinks.css";

const socialProfiles = [
  {
    name: "GitHub",
    url: "https://github.com/hemalathabora",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/hemalatha-bora-693012283/",
    icon: FaLinkedin,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/hema_reddy_bora_/",
    icon: FaInstagram,
  },
];

export default function SocialLinks() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer id="social" className="social-section" ref={containerRef}>
      <div className="social-container">
        <div className={`social-content ${isVisible ? "reveal" : ""}`}>
          <h2>Let’s Connect</h2>
          <p>
            I'm always interested in meaningful projects and thoughtful
            collaborations. Feel free to reach out anytime.
          </p>
        </div>

        <div className={`social-links ${isVisible ? "reveal" : ""}`}>
          {socialProfiles.map(({ name, url, icon: Icon }, index) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label={name}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Icon className="social-icon" />
            </a>
          ))}
        </div>

        <div className={`social-footer ${isVisible ? "reveal" : ""}`}>
          <p>© 2026 Hemalatha Bora · Built with thoughtfulness</p>
        </div>
      </div>
    </footer>
  );
}
