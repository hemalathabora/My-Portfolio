import './AboutTimeline.css';

export default function AboutTimeline() {
  const timelineData = [
  {
    year: "2021",
    title: "Started Diploma in Computer Science",
    description: "Began my diploma journey in Computer Science, exploring the basics of programming and technology."
  },
  {
    year: "2022",
    title: "Built My First Web Project",
    description: "Designed and developed my first web project, discovering a strong interest in frontend and UI/UX design."
  },
  {
    year: "2023",
    title: "Internship & Flask Development",
    description: "Completed an internship where I built backend services using Flask, strengthening my full-stack capabilities."
  },
  {
    year: "2024",
    title: "Started B.Tech in Computer Science",
    description: "Joined B.Tech to deepen my technical skills and work on larger-scale projects in software development."
  },
  {
    year: "Now",
    title: "Focusing on Technical Goals",
    description: "Continuing to master Django, React, and participate in hackathons while preparing and focusing on my technical goals."
  }
];

  return (
    <section id="about" className="timeline-section">
      <h2 className="timeline-title">My Journey</h2>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <span className="timeline-year">{item.year}</span>
              <h3 className="timeline-heading">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
