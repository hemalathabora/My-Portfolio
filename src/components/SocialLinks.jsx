import React from 'react';

const socialProfiles = [
  {
    name: "GitHub",
    url: "https://github.com/hemalathabora",
    icon: "/assets/icons/github.svg",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/hemalatha-bora-693012283/",
    icon: "/assets/icons/linkedin.png",
    
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/hema_reddy_bora_/",
    icon: "/assets/icons/instagram.svg",
  },
  // Add more if needed
];

export default function SocialLinks() {
  return (
    <section id="follow" className="container section">
      <h2>Follow Me</h2>
      <p>Let’s connect and grow together!</p>
      <div className="social-icons">
        {socialProfiles.map(({ name, url, icon }) => (
          <a 
            key={name} 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link"
            title={`Follow on ${name}`}
          >
            <img src={icon} alt={`${name} icon`} className="social-icon" />
          </a>
        ))}
      </div>
    </section>
  );
}
