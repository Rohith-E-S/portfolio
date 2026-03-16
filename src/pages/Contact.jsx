import React from 'react';

function Contact() {
  return (
    <div className="page fade-in">
      <div className="page-header reveal">
        <h1 className="page-title">Directory.</h1>
        <p className="page-subtitle">Open for discussions regarding architecture, engineering, and new opportunities.</p>
      </div>

      <div className="contact-grid">
        <a href="tel:+916380446699" className="contact-card reveal">
          <div className="contact-card-content">
            <h3>Phone</h3>
            <p>+91 6380 446 699</p>
          </div>
        </a>

        <a href="mailto:vidaarohith@gmail.com" className="contact-card reveal">
          <div className="contact-card-content">
            <h3>Email</h3>
            <p>vidaarohith@gmail.com</p>
          </div>
        </a>

        <div className="contact-card reveal" style={{ cursor: 'default' }}>
          <div className="contact-card-content">
            <h3>Location</h3>
            <p>Erode, Tamil Nadu</p>
          </div>
        </div>

        <a href="https://www.linkedin.com/in/rohith-es" target="_blank" rel="noopener noreferrer" className="contact-card reveal">
          <div className="contact-card-content">
            <h3>Network</h3>
            <p>LinkedIn</p>
          </div>
        </a>

        <a href="https://github.com/Rohith-E-S" target="_blank" rel="noopener noreferrer" className="contact-card reveal">
          <div className="contact-card-content">
            <h3>Code</h3>
            <p>GitHub</p>
          </div>
        </a>

        <a href="https://leetcode.com/u/lB3ShTo4iG" target="_blank" rel="noopener noreferrer" className="contact-card reveal">
          <div className="contact-card-content">
            <h3>Algorithms</h3>
            <p>LeetCode</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Contact;
