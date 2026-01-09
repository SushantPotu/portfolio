import React from "react";
import experienceData from "../../content/sections/experience/experience.json"; 
import "../styles/experience.css"; 

export default function ExperienceSection({ sectionId, heading }) {
  return (
    <section id={sectionId} className="experience-section">
      <h2>{heading}</h2>
      <div className="experience-list">
        {experienceData.map((job, index) => (
          <div key={index} className="experience-card">
            <h3>{job.role} @ {job.company}</h3>
            <p><em>{job.date}</em></p>
            <p>{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
