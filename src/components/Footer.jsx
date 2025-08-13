




import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaTelegram, FaTwitter, FaHeart, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-section">
            <h3 className="footer-heading">Social Networks</h3>
            <div className="social-links">
              <a href="https://github.com/Ejaz786Ahmad" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub className="social-icon" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/ejaz-ahmad-1691a9321" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin className="social-icon" /> LinkedIn
              </a>
              <a href="https://www.instagram.com/ejaz_ahmad" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaInstagram className="social-icon" /> Instagram
              </a>
              <a href="https://www.facebook.com/share/19Ja8PxyFN" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaFacebook className="social-icon" /> Facebook
              </a>
              <a href="https://telegram.org/dl" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaTelegram className="social-icon" /> Telegram
              </a>
              <a href="/" className="social-link">
                <FaTwitter className="social-icon" /> Twitter
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">Legal</h3>
            <ul className="footer-links">
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/security">Security</a></li>
              <li><a href="/cookies">Cookie Policy</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/support">Support</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">Newsletter</h3>
            <p className="newsletter-text">Subscribe to receive updates and exclusive offers</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {year} Reyaz Ahmad. All Rights Reserved.</p>
            <p className="made-with">Made with <FaHeart className="heart-icon" /> in India</p>
          </div>
          
          <div className="back-to-top" onClick={scrollToTop}>
            <FaArrowUp className="arrow-icon" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
