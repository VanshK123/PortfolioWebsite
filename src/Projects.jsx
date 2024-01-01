import React from "react";
import "./Projects.css"; 

import serverIMG from "./images/MultiThreaded.png";
import OSIMG from "./images/operating-system.png";
import emsIMG from "./images/ems.png";
import MovieFinder from "./images/IMDB_Logo_2016.svg";
import compilerIMG from "./images/compiler.png";

const projects = [
  {
    id: 1,
    name: 'Multi threaded C++ Server',
    description: 'Created a high-performance, stable C++ multi-threaded server with efficient TCP communication for concurrent client request handling through advanced programming and rigorous testing.',
    image: serverIMG,
    technologies: ['C++', 'Multi-threading', 'TCP', 'OOP'], 
  },
  {
    id: 2,
    name: 'Developed a Linux distro',
    description: 'Optimized memory with one and two-level paging, implemented multi-threading and dynamic task scheduling, integrated trap handling mechanisms, and developed a comprehensive file system module for efficient data management and system responsiveness.',
    image: OSIMG,
    technologies: ['C', 'Paging', 'Scheduling', 'Traps', 'File system'],
  },
  {
    id: 3,
    name: 'Employee Information Management System',
    description: 'Designed and deployed a comprehensive Employee Information Management System, demonstrating proficiency in React for the frontend, Java for the backend API, MySQL for database management, and integration of RESTful endpoints for real-time updates.',
    image: emsIMG,
    technologies: ['React', 'Java', 'MySQL', 'RESTful API'], 
  },
  {
    id: 4,
    name: 'Movie finder web app ',
    description: 'Developed a dynamic Movie Finder web app, showcasing expertise in Angular for the frontend, Node.js for the backend, and integration of external APIs like IMDB for real-time movie data.',
    image: MovieFinder,
    technologies: ['Angular', 'Node.js', 'APIs'],
  },
  {
    id: 5,
    name: 'Compiler ',
    description: 'Developed a compiler with a highly efficient scanner and lexer, a robust Abstract Syntax Trees (ASTs) framework, versatile code generation engine, comprehensive control structure handling, function management, advanced register allocation algorithm, and extended capabilities for pointers and arrays, along with robust error handling.',
    image: compilerIMG,
    technologies: ['Java', 'ASTs', 'CodeGeneration', 'Optimization','Parsing'],
  },

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
