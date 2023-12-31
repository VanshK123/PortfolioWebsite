// In your React component file

import React from "react";
import "./Projects.css"; // Replace with your actual CSS file path

const projects = [
  {
    id: 1,
    name: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: 'https://example.com/project1',
    image: 'https://example.com/project1-image.jpg',
    technologies: ['React', 'Node.js', 'MongoDB'], // Add the technologies used
  },
  {
    id: 2,
    name: 'Project 2',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: 'https://example.com/project2',
    image: 'https://example.com/project2-image.jpg',
    technologies: ['Vue.js', 'Express', 'MySQL'], // Add the technologies used
  },
  {
    id: 3,
    name: 'Project 3',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    link: 'https://example.com/project3',
    image: 'https://example.com/project3-image.jpg',
    technologies: ['Angular', 'Django', 'PostgreSQL'], // Add the technologies used
  },
  {
    id: 4,
    name: 'Project 4',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    link: 'https://example.com/project4',
    image: 'https://example.com/project4-image.jpg',
    technologies: ['React', 'Node.js', 'MongoDB'], // Add the technologies used
  },
  {
    id: 5,
    name: 'Project 5',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    link: 'https://example.com/project5',
    image: 'https://example.com/project5-image.jpg',
    technologies: ['Vue.js', 'Express', 'MySQL'], // Add the technologies used
  },

  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className='projects'>
      <h2>Projects</h2>
      <div className='projects-container'>
        {projects.map((project) => (
          <div className='project' key={project.id}>
            <img src={project.image} alt={project.name} className='project-image' />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className='technologies'>
              {project.technologies.map((tech, index) => (
                <span key={index} className='technology'>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
