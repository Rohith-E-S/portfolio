import React from 'react';
import { certifications, education, training, skills } from '../data';

function Resume() {
  return (
    <div className="page fade-in">
      <div className="resume-header reveal">
        <h1 className="page-title" style={{ marginTop: 0, marginBottom: 0 }}>Curriculum Vitae</h1>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
          Open PDF
        </a>
      </div>

      <div className="resume-sections">

        {/* Education Section */}
        <section className="resume-section reveal">
          <h2 className="resume-section-title">Education</h2>
          <div className="timeline">
            {education.map((edu, index) => (
              <div className="timeline-item" key={index}>
                <span className="timeline-date">{edu.period}</span>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>{edu.degree}</h3>
                  </div>
                  <p className="timeline-subtitle">{edu.institution} &bull; {edu.location}</p>
                  <p className="text-muted">{edu.grade}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Training Section */}
        <section className="resume-section reveal">
          <h2 className="resume-section-title">Training & Experience</h2>
          <div className="timeline">
            {training.map((item, index) => (
              <div className="timeline-item" key={index}>
                <span className="timeline-date">{item.period}</span>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>{item.title}</h3>
                  </div>
                  <p className="timeline-subtitle">{item.organization}</p>
                  <ul className="timeline-list">
                    {item.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="resume-section reveal">
          <h2 className="resume-section-title">Technical Capabilities</h2>
          <div className="skills-container">
            <div className="skill-group">
              <h3 className="skill-category">Languages</h3>
              <div className="skill-tags">
                {skills.languages.map(s => <span key={s} className="tag-solid">{s}</span>)}
              </div>
            </div>
            <div className="skill-group">
              <h3 className="skill-category">Frameworks & Tools</h3>
              <div className="skill-tags">
                {skills.frameworks.map(s => <span key={s} className="tag-solid">{s}</span>)}
              </div>
            </div>
            <div className="skill-group">
              <h3 className="skill-category">Domain Expertise</h3>
              <div className="skill-tags">
                {skills.domains.map(s => <span key={s} className="tag-solid">{s}</span>)}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="resume-section reveal">
          <h2 className="resume-section-title">Certifications</h2>
          <div className="certificates-container">
            {certifications.map(cert => (
              <div className="certificate-card" key={cert.title}>
                <div className="certificate-info">
                  <h3 className="certificate-title">{cert.title}</h3>
                  <p className="certificate-org">{cert.organization}</p>
                </div>
                <span className="certificate-date">{cert.date}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Resume;
