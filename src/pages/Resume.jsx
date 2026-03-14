import React from 'react';
import { certifications } from '../data';

function Resume() {
  return (
    <div className="page fade-in">
      <div className="resume-header">
        <h1 className="page-title" style={{ marginTop: 0, marginBottom: 0 }}>Curriculum Vitae</h1>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
          Open PDF
        </a>
      </div>

      <div className="resume-sections">

        {/* Education Section */}
        <section className="resume-section">
          <h2 className="resume-section-title">Education</h2>
          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-date">2023 - Present</span>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>B.Tech in Computer Science and Engineering</h3>
                </div>
                <p className="timeline-subtitle">Lovely Professional University &bull; Jalandhar, Punjab</p>
                <p className="text-muted">CGPA: 7.45</p>
              </div>
            </div>

            <div className="timeline-item">
              <span className="timeline-date">2022 - 2023</span>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>Higher Secondary (12th)</h3>
                </div>
                <p className="timeline-subtitle">Bharathi Vidyalaya HSS &bull; Erode, TamilNadu</p>
                <p className="text-muted">Percentage: 87%</p>
              </div>
            </div>

            <div className="timeline-item">
              <span className="timeline-date">2020 - 2021</span>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>Secondary (10th)</h3>
                </div>
                <p className="timeline-subtitle">Shree Vidyalaya HSS &bull; Erode, TamilNadu</p>
                <p className="text-muted">Percentage: 85%</p>
              </div>
            </div>
          </div>
        </section>

        {/* Training Section */}
        <section className="resume-section">
          <h2 className="resume-section-title">Training & Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-date">Jun 2025 – Aug 2025</span>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>Full Stack (MERN) with Gen AI</h3>
                </div>
                <p className="timeline-subtitle">W3Grads</p>
                <ul className="timeline-list">
                  <li>Mastered integration of AI APIs into modern web architectures.</li>
                  <li>Engineered a scalable full-stack web application infused with AI-driven features.</li>
                  <li>Executed full SDLC resulting in a production build deployed on Netlify.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="resume-section">
          <h2 className="resume-section-title">Technical Capabilities</h2>
          <div className="skills-container">
            <div className="skill-group">
              <h3 className="skill-category">Languages</h3>
              <div className="skill-tags">
                {['C', 'C++', 'Java', 'JavaScript', 'PHP', 'Python', 'Kotlin'].map(s => <span key={s} className="tag-solid">{s}</span>)}
              </div>
            </div>
            <div className="skill-group">
              <h3 className="skill-category">Frameworks & Tools</h3>
              <div className="skill-tags">
                {['React JS', 'Node JS', 'Android App Dev', 'MySQL', 'MongoDB'].map(s => <span key={s} className="tag-solid">{s}</span>)}
              </div>
            </div>
            <div className="skill-group">
              <h3 className="skill-category">Domain Expertise</h3>
              <div className="skill-tags">
                {['Data Structures', 'Responsive Design', 'Git', 'OS', 'Computer Networks'].map(s => <span key={s} className="tag-solid">{s}</span>)}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="resume-section">
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
