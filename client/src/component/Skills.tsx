import { useState } from 'react';
import '../Skills.css';
import { SkillCategory } from '../types/Skill';

const Skills = () => {
  const [skills] = useState<SkillCategory[]>([
    {
      id: 'frontend',
      title: 'Frontend Development',
      skills: [
        {
          id: 'html',
          name: 'HTML5',
          icon: 'fab fa-html5',
          level: 90
        },
        {
          id: 'css',
          name: 'CSS3',
          icon: 'fab fa-css3-alt',
          level: 85
        },
        {
          id: 'javascript',
          name: 'JavaScript',
          icon: 'fab fa-js',
          level: 80
        },
        {
          id: 'react',
          name: 'React',
          icon: 'fab fa-react',
          level: 75
        },
        {
          id: 'typescript',
          name: 'TypeScript',
          icon: 'fas fa-code',
          level: 70
        }
      ]
    },
    {
      id: 'backend',
      title: 'Backend Development',
      skills: [
        {
          id: 'nodejs',
          name: 'Node.js',
          icon: 'fab fa-node-js',
          level: 75
        },
        {
          id: 'express',
          name: 'Express',
          icon: 'fas fa-server',
          level: 70
        },
        {
          id: 'mongodb',
          name: 'MongoDB',
          icon: 'fas fa-leaf',
          level: 65
        },
        {
          id: 'sql',
          name: 'SQL',
          icon: 'fas fa-database',
          level: 60
        },
        {
          id: 'python',
          name: 'Python',
          icon: 'fab fa-python',
          level: 70
        }
      ]
    },
    {
      id: 'tools',
      title: 'Tools & Others',
      skills: [
        {
          id: 'git',
          name: 'Git',
          icon: 'fab fa-git-alt',
          level: 80
        },
        {
          id: 'github',
          name: 'GitHub',
          icon: 'fab fa-github',
          level: 85
        },
        {
          id: 'npm',
          name: 'NPM',
          icon: 'fab fa-npm',
          level: 75
        }
      ]
    }
  ]);

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">What I can do</p>
        </div>
        
        <div className="skills-container">
          {skills.map((category) => (
            <div className="skill-category" key={category.id}>
              <h3>{category.title}</h3>
              <div className="skill-list">
                {category.skills.map((skill) => (
                  <div className="skill-item" key={skill.id}>
                    <div className="skill-icon">
                      <i className={skill.icon}></i>
                    </div>
                    <div className="skill-info">
                      <h4>{skill.name}</h4>
                      <div className="skill-progress">
                        <div 
                          className="skill-progress-bar" 
                          style={{ width: `${skill.level}%` }}
                        >
                          <span className="skill-percentage">{skill.level}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;