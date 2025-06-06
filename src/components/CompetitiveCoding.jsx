import React from 'react';

const profiles = [
  {
    name: "CodeChef",
    url: "https://www.codechef.com/users/hemalatha_27",
    icon: "/assets/icons/codechef.svg",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/HemalathaBora/",
    icon: "/assets/icons/leetcode.svg",
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/profile/hemalathabora9",
    icon: "/assets/icons/hackerrank.svg",
  },
  // Add more platforms if you want
];

export default function CompetitiveCoding() {
  return (
    <section id="competitive-coding" className="container section">
      <h2>Competitive Coding</h2>
      <p>Check out my profiles and coding stats on these platforms.</p>
      <div className="coding-profiles">
        {profiles.map(({ name, url, icon }) => (
          <a 
            key={name} 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="coding-link"
            title={`Visit my ${name} profile`}
          >
            <img src={icon} alt={`${name} icon`} className="coding-icon" />
            <span>{name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
