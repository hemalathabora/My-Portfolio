// src/components/ProjectCard.jsx
import './ProjectCard.css';

export default function ProjectCard({ title, image, description, link }) {
  return (
    <div className="project-card">
      <div className="card-inner">
        <div className="card-front">
          <img src={image} alt={title} className="project-image" />
          <h3>{title}</h3>
        </div>
        <div className="card-back">
          <p>{description}</p>
          <a href={link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}
