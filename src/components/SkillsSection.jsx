import './SkillsSection.css';

const skills = [
  { name: 'HTML5', icon: '/assets/icons/html5.svg' },
  { name: 'CSS3', icon: '/assets/icons/css.svg' },
  { name: 'JavaScript', icon: '/assets/icons/javascript.svg' },
  { name: 'Bootstrap', icon: '/assets/icons/bootstrap.svg' },
  { name: 'React', icon: '/assets/icons/react.svg' },
  { name: 'Node.js', icon: '/assets/icons/nodedotjs.svg' },
  { name: 'Django', icon: '/assets/icons/django.svg' },
  { name: 'Flask', icon: '/assets/icons/flask.svg' },
  { name: 'Git', icon: '/assets/icons/github.svg' },
  { name: 'Python', icon: '/assets/icons/python.svg' },
  { name: 'C', icon: '/assets/icons/c.svg' },
  { name: 'C++', icon: '/assets/icons/cplusplus.svg' },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="skills-section container section">
      <h2>Skills</h2>
      <div className="skills-scroll">
        {skills.map((skill, index) => (
          <a
            href={skill.url}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="skill-item"
          >
            <img src={skill.icon} alt={skill.name} />
            <p>{skill.name}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
