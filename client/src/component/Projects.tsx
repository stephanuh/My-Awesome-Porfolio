import { useState } from 'react';
import '../Projects.css';
import { Project } from '../types/Project';

const Projects = () => {
  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'A fully responsive e-commerce platform with product filtering, cart functionality, and secure payment processing.',
      image: '/images/project1.jpg',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      liveLink: 'https://example.com/project1',
      codeLink: 'https://github.com/yourusername/project1',
      category: 'fullstack'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A task management application with drag-and-drop interface, user authentication, and team collaboration features.',
      image: '/images/project2.jpg',
      technologies: ['React', 'Firebase', 'Material UI'],
      liveLink: 'https://example.com/project2',
      codeLink: 'https://github.com/yourusername/project2',
      category: 'frontend'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my projects and skills with responsive design (this one!).',
      image: '/images/project3.jpg',
      technologies: ['React', 'TypeScript', 'Node.js'],
      liveLink: '#',
      codeLink: 'https://github.com/yourusername/portfolio',
      category: 'fullstack'
    }
  ]);

  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Recent work</p>
        </div>
        
        <div className="project-filter">
          <button 
            className={filter === 'all' ? 'active' : ''} 
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={filter === 'frontend' ? 'active' : ''} 
            onClick={() => setFilter('frontend')}
          >
            Frontend
          </button>
          <button 
            className={filter === 'backend' ? 'active' : ''} 
            onClick={() => setFilter('backend')}
          >
            Backend
          </button>
          <button 
            className={filter === 'fullstack' ? 'active' : ''} 
            onClick={() => setFilter('fullstack')}
          >
            Full Stack
          </button>
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.liveLink && (
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                    )}
                    {project.codeLink && (
                      <a 
                        href={project.codeLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;