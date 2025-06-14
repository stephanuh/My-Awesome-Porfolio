import { useState } from 'react';
import '../styles/Projects.css';
import { Project } from '../types/Project';

const Projects = () => {
  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: 'Book Search App',
      description: 'A react-based book search engine powered by GraphQL & Apollo. Search, save, and manage your favorite books with authentication and sleek UI!📚',
      image: '/images/Book-Collections.PNG',
      technologies: ['MongoDB','Express','React', 'Node.js'],
      liveLink: 'https://book-collections.onrender.com/',
      codeLink: 'https://github.com/stephanuh/Book-Search',
      category: 'fullstack'
    },
    {
      id: 2,
      title: 'Weather Dashboard',
      description: 'A task management application with drag-and-drop interface, user authentication, and team collaboration features.',
      image: '/images/Weather-Project.PNG',
      technologies: ['Apis', 'CRUD', 'Insomnia', 'JavaScript'],
      liveLink: 'https://weather-dashboard-challenge-52kv.onrender.com/',
      codeLink: 'https://github.com/stephanuh/Weather-Dashboard-Challenge',
      category: 'backend'
    },
    {
      id: 3,
      title: 'My Awesome Portfolio',
      description: 'A personal portfolio website showcasing my projects and skills with responsive design (this one!).',
      image: '/images/My-Logo.png',
      technologies: ['Express.js', 'React', 'TypeScript', 'Node.js'],
      liveLink: '#',
      codeLink: 'https://github.com/stephanuh/My-Awesome-Porfolio',
      category: 'frontend'
    },
    {
      id: 4,
      title: 'Brain Dead Buddies',
      description: 'A Zombie Apocalypse blog site where users can create checklists, read blog, update their healthbar when comleted task, and delete posts.',
      image: '/images/brain-dead-buddies.PNG',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'GraphQL', 'Apollo'],
      liveLink: 'https://brain-dead-buddies.onrender.com/',
      codeLink: 'https://github.com/NickDavis07/brain-dead-buddies',
      category: 'fullstack'
    },
    {
      id: 5,
      title: 'Restaurant Take out Menu',
      description: 'The Generic Take Out Restaurant is a command-line application that allows users to browse a menu, place orders, and receive a summary of their purchase.',
      image: '/images/python-order.PNG',
      technologies: ['python'],
      //liveLink: '#', //Will make video link later
        codeLink: 'https://github.com/stephanuh/python-order',
        category: 'backend'
      },
      {
        id: 6,
        title: 'Meal-Planner',
        description: "This simple app provides a meal & grocery planner to simplify user's busy schedule.",
        image: '/images/meal-planner.PNG',
        technologies: ['html', 'css', 'javascript'],
        //liveLink: '#', //Will make video link later
        codeLink: 'https://github.com/stephanuh/meal-planner',
        category: 'frontend'
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