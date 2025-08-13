


// components/Hero.js
import React from 'react';
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1>Hi, I'm <span>Full Stack Developer</span></h1>
          <p>I create responsive websites and web applications using modern technologies. Specializing in MERN stack development with a focus on clean code and user experience.</p>
          <div className="hero-btns">
            <a href="#projects" className="btn">View My Work</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

