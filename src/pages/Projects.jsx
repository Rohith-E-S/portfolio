import React from 'react';
import { projects } from '../data';

function Projects() {
  return (
    <div className="page fade-in">
      <div className="page-header reveal">
        <h1 className="page-title">Archive.</h1>
        <p className="page-subtitle">Selected open-source tools and applications emphasizing performance and architecture.</p>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <article className="project-card-horizontal reveal" key={project.id}>
            <div className="project-image-large">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-details-large">
              <div>
                <h3>{project.title}</h3>
                <div className="project-tags">
                  {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
                <p className="project-description-large">{project.description}</p>
              </div>
              <div className="project-actions">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-small">
                  View Repository
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Projects;
