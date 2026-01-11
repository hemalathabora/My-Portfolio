import { useEffect, useRef, useState } from 'react';
import './CompetitiveCoding.css';

const profiles = [
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/HemalathaBora/",
    icon: "/assets/icons/leetcode.svg"
  },
  {
    name: "CodeChef",
    url: "https://www.codechef.com/users/hemalatha_27",
    icon: "/assets/icons/codechef.svg"
  },
  {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/profile/hemalathbpzw",
    icon: "/assets/icons/geeksforgeeks.svg"
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/profile/hemalathabora9",
    icon: "/assets/icons/hackerrank.svg"
  },
];

export default function CompetitiveCoding() {
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
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="competitive-coding" className="coding-section">
      <div className="coding-container">
        <h2>Competitive Coding</h2>
        
        <div className="coding-icons">
          {profiles.map((profile, index) => (
            <a
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`coding-icon-link ${visibleItems[index] ? 'reveal' : ''}`}
              title={profile.name}
              aria-label={`Visit my ${profile.name} profile`}
              style={{
                animationDelay: `${index * 0.08}s`
              }}
            >
              <img src={profile.icon} alt={profile.name} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
