import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./ProjectCard.css";

export default function ProjectCard({
  title,
  image,
  description,
  github,
  live,
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`project-card ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="card-inner">
        {/* FRONT */}
        <div className="card-front">
          <img src={image} alt={title} className="project-image" />
          <h3 className="project-title">{title}</h3>
          <span className="flip-hint">Click to view details</span>
        </div>

        {/* BACK */}
        <div className="card-back">
          <p className="project-description">{description}</p>

          <div className="project-links">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            )}

            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label="Live Demo"
              >
                <FaExternalLinkAlt />
              </a>
            )}
          </div>

          <span className="flip-hint">Click to go back</span>
        </div>
      </div>
    </div>
  );
}
