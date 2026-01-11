import { useEffect, useRef, useState } from "react";
import "./AboutTimeLine.css";

export default function AboutTimeline() {
  const [visible, setVisible] = useState({});
  const refs = useRef({});

  const journeyData = [
    {
      title: "Foundation in Computer Engineering",
      description:
        "Started my journey by building strong fundamentals in programming, computer systems, and logical problem-solving."
    },
    {
      title: "Full-Stack Web Development",
      description:
        "Developed modern web applications using the MERN stack, focusing on frontend–backend integration and clean architecture."
    },
    {
      title: "Backend Development & APIs",
      description:
        "Worked with Django and Flask to design RESTful APIs, manage databases, and understand server-side systems."
    },
    {
      title: "B.Tech in Computer Science (CSE)",
      description:
        "Expanded into software engineering principles while working on machine learning projects and data-driven solutions."
    },
    {
      title: "Current Focus: NLP & Large Language Models",
      description:
        "Exploring natural language processing and large language models, building practical AI-powered applications."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((prev) => ({
              ...prev,
              [entry.target.dataset.index]: true
            }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    Object.values(refs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="journey-section">
      <h2 className="journey-title">My Journey</h2>

      <div className="journey-list">
        {journeyData.map((item, index) => (
          <div
            key={index}
            ref={(el) => (refs.current[index] = el)}
            data-index={index}
            className={`journey-card ${visible[index] ? "show" : ""}`}
          >
            <h3 className="journey-heading">{item.title}</h3>
            <p className="journey-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
