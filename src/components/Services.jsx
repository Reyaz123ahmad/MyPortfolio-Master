// components/Services.js
import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaServer, FaPlug, FaReact, FaSyncAlt } from 'react-icons/fa';
import './Services.css'

const Services = () => {
  const services = [
    { icon: <FaLaptopCode />, title: 'Web Development', description: 'Building responsive websites and web applications using HTML, CSS, JavaScript and modern frameworks.' },
    { icon: <FaMobileAlt />, title: 'Responsive Design', description: 'Creating websites that work seamlessly across all devices from mobile phones to desktop computers.' },
    { icon: <FaServer />, title: 'Backend Development', description: 'Building robust server-side applications with Node.js, Express, and MongoDB database integration.' },
    { icon: <FaPlug />, title: 'API Development', description: 'Designing and implementing RESTful APIs for web and mobile applications with proper documentation.' },
    { icon: <FaReact />, title: 'React Applications', description: 'Developing dynamic single-page applications using React.js with state management and routing.' },
    { icon: <FaSyncAlt />, title: 'Full Stack Solutions', description: 'End-to-end web application development from frontend UI to backend services and database.' }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-title">
          <h2>My Services</h2>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
