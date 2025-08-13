





import React from 'react';
import './Project.css';

const Projects = () => {
  const projects = [
    { 
      title: 'Hospital Management System', 
      description: 'A role-based hospital management platform with secure authentication, appointment scheduling, and admin controls.',
      achievements: [
        'Implemented OTP-based signup for enhanced security',
        'Developed role-specific dashboards (Admin, Doctor, Patient)',
        'Created comprehensive appointment lifecycle management',
        'Designed secure authentication using JWT tokens'
      ],
      tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT'],
      link: 'https://hospital-management-forntend.vercel.app/'
    },
    { 
      title: 'StudyNotion', 
      description: 'Full-stack e-learning platform with secure user authentication and role-based access control.',
      achievements: [
        'Secure authentication with JWT tokens and OTP validation',
        'Role-based access control (admin, instructor, student)',
        'RESTful APIs with Express.js for CRUD operations',
        'MongoDB for scalable data storage'
      ],
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'] 
    },
    { 
      title: 'Note Master', 
      description: 'Note management app with CRUD operations and search/filter functionality',
      achievements: [
        'Reduced UI latency by 40% through React memoization',
        'Responsive design supporting all device sizes',
        'Optimized performance using React techniques'
      ],
      tags: ['React', 'Tailwind CSS', 'LocalStorage'],
      link: 'https://paste-app-ws2x.vercel.app/' 
    },
    { 
      title: 'Coffee Shop E-Commerce', 
      description: 'Responsive coffee shop application with intuitive navigation',
      achievements: [
        'Built responsive UI using React and Tailwind CSS',
        'Intuitive navigation for seamless user interactions',
        'Optimized for all device sizes'
      ],
      tags: ['React', 'Tailwind CSS', 'Responsive UI'],
      link: 'https://coffee-shopop-reyaz.vercel.app/' 
    },
    { 
      title: 'Dentalist Healthcare Portal', 
      description: 'Appointment scheduling system for medical specialities',
      achievements: [
        'Reduced data entry errors by 40% through form validation',
        'Responsive patient dashboard with treatment history',
        'Enabled faster insurance approvals'
      ],
      tags: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://hospitality-landing-page-ten.vercel.app/' 
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-title">
          <h2>Project Portfolio</h2>
          <p className="section-subtitle">Showcasing my technical implementations and solutions</p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-header">
                <div className="project-number">{index + 1}</div>
                <div>
                  <h3>{project.title}</h3>
                  <div className="project-tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span className="project-tag" key={tagIndex}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <p className="project-description">{project.description}</p>
                
                {project.achievements.length > 0 && (
                  <div className="project-achievements">
                    <ul>
                      {project.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              <div className="project-footer">
                <a href={project.link} className="btn-outline">View Details</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
