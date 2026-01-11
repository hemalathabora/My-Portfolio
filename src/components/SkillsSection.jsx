import { useEffect, useRef, useState } from 'react';
import './SkillsSection.css';

const skillCategories = [
  {
    category: 'Problem Solving & Core CS',
    skills: ['Data Structures & Algorithms', 'Problem Solving (LeetCode)', 'Algorithmic Thinking', 'Time & Space Complexity', 'Debugging & Optimization']
  },
  {
    category: 'Web Development',
    skills: ['HTML5 & CSS3', 'JavaScript', 'React', 'REST APIs', 'Responsive Design', 'MERN Stack', 'Django / Flask']
  },
  {
    category: 'Machine Learning & AI',
    skills: ['Python for ML', 'Data Preprocessing', 'Model Training & Evaluation', 'NLP (Natural Language Processing)', 'Working with Datasets', 'Large Language Models (LLMs)']
  },
  {
    category: 'Data Analysis & Visualization',
    skills: ['Power BI', 'Data Cleaning', 'Data Visualization', 'Analytics & Insights', 'Structured Datasets']
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git & GitHub', 'VS Code', 'Postman', 'Linux Basics', 'Deployment (Vercel/Render)']
  }
];

export default function SkillsSection() {
  const itemRefs = useRef([]);
  const [visibleItems, setVisibleItems] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.indexOf(entry.target);
            setVisibleItems((prev) => ({ ...prev, [index]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <center><h2>Skills</h2> </center>
        <center><p className="skills-subtitle">A snapshot of technologies and tools I work with regularly.</p>
        </center>
        <div className="skills-grid">
          {skillCategories.map((group, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`skill-card ${visibleItems[index] ? 'reveal' : ''}`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <h3 className="skill-category">{group.category}</h3>
              <ul className="skill-list">
                {group.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="skill-item">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
