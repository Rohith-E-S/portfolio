import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data';

function Home() {
  const featuredProjects = projects.slice(0, 2);

  return (
    <div className="page fade-in">
      <section className="hero reveal">
        <h1 className="hero-title">
          Hi, I'm <span>Rohith</span>
        </h1>
        <p className="hero-subtitle">
          Software engineer focused on high-performance web applications and artificial intelligence integration.
        </p>
        <div className="hero-actions">
          <Link to="/projects" className="btn btn-primary">Selected Work</Link>
          <Link to="/contact" className="btn btn-secondary">Get in Touch</Link>
        </div>
        
        <div className="hero-image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=1200&q=80" 
            alt="Rohith" 
            className="hero-image"
          />
        </div>
      </section>

      <section id="about" className="about-section reveal">
        <div className="section-header">
          <h2 className="section-title">Background</h2>
        </div>
        <div className="about-content">
          <p>
            I am a Computer Science and Engineering student at Lovely Professional University. I focus on building clean, fast, and accessible applications, specializing in the MERN stack with a strong emphasis on architectural rigor.
          </p>
          <p>
            My recent work explores the intersection of traditional application development and AI integration, creating intelligent, context-aware experiences without sacrificing performance or semantic design.
          </p>
        </div>
      </section>

      <section className="featured-projects reveal">
        <div className="section-header">
          <h2 className="section-title">Index</h2>
          <Link to="/projects" className="view-all-link">View Archive</Link>
        </div>
        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              <div className="project-details">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.summary}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 'auto', gap: '1rem' }}>
                  <div className="project-tags" style={{ marginBottom: 0 }}>
                    {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                  </div>
                  <div className="project-actions" style={{ marginTop: 0 }}>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-small">
                      Source
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
