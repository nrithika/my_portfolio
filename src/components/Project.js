import React from 'react';
import './Project.css';

const projects = [
  {
    title: 'TradeThrill',
    description: 'Spearheaded the development of a campus-centric E-commerce platform facilitating the buying and selling of used goods. Crafted the frontend interface using HTML, CSS, JavaScript & ReactJS. Implemented FastAPI with PostgreSQL, incorporating logic & model classes for backend operations and database management. Integrated backend and frontend using Postman, hosting them on Netlify & Azure servers, & securing HTTPS connections. Prepared comprehensive documentation including SRS, design & implementation documents.',
    link: 'https://github.com/amruta1625/SystemCrash'
  },
  {
    title: 'Car Rental System',
    description: 'Developed a car rental system using Object Oriented Programming in C++ through Command Line Interface (CLI). Employed inheritance with user as base class & customer, employee & manager subclasses to manage role-specific functionalities. Provided various functionalities to different users to search, rent/return cars, add/update/delete cars & users or to pay fines. Implemented a secure login feature and ensured no security breaches by efficiently utilizing private and public variables.',
    link: 'https://github.com/nrithika/CS253_Car_Rental'
  },
  {
    title: 'Portfolio',
    description: 'Designed a personal portfolio to showcase my projects, skills, and passion for technology—where innovation meets creativity. Developed a website designing frontend using HTML, CSS, JavaScript and ReactJS.',
    link: 'https://github.com/nrithika/ACA3'
  },
  {
    title: 'Calculator',
    description: 'Developed a user-friendly calculator and implemented basic arithmetic operations using HTML, CSS and JavaScript. Explored floating-point imprecision across languages and implemented strategies to mitigate imprecision.',
    link: 'https://github.com/nrithika/CalciACA'
  }
];

const Project = () => {
  return (
    <div className="project-container">
      <h1 className="project-header">My Projects</h1>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-box">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
