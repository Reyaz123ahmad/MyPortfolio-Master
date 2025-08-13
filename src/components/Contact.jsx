


import React, { useEffect, useState } from 'react';
import { FaPhone, FaWhatsapp, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [isSubmit, setIsSubmit] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  
  function changeHandler(event) {
    setFormData(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  }
 
  async function submitHandler(event) {
    event.preventDefault();
    setIsSubmit(true);
    
    try {
      // Simulate API call
      const response = await fetch(`${baseUrl}/api/v1/createForm`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok){
        throw new Error('Network response was not ok')
      }
      
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      
      toast.success('Response submitted successfully');
      setIsSubmitted(true);
      
      // Reset success state after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
      
    } catch(error) {
      console.error(error);
      toast.error('Failed to submit the form');
    } finally {
      setIsSubmit(false);
    }
  }
  
  return (
    <div className='contact-container' id='contact'>
      <div className='contact-wrapper'>
        <div className='contact-header'>
          <h1 className='contact-head'>Get In Touch</h1>
          <p className='contact-subhead'>We'd love to hear from you. Reach out through any of these channels.</p>
        </div>
        
        <div className='contact-content'>
          <div className='contact-info'>
            <div className='contact-info-card'>
              <div className='contact-icon'>
                <FaPhone />
              </div>
              <div className='contact-details'>
                <h3>Phone</h3>
                <Link to='tel:‪+91 9661440544‬' className='contact-link'>
                  ‪+91 9661440544‬
                </Link>
              </div>
            </div>
            
            <div className='contact-info-card'>
              <div className='contact-icon'>
                <MdEmail />
              </div>
              <div className='contact-details'>
                <h3>Email</h3>
                <Link to='mailto:ejazahmad96614@gamil.com' className='contact-link'>
                  reyazahmad40544@gamil.com
                </Link>
              </div>
            </div>
            
            <div className='contact-info-card'>
              <div className='contact-icon'>
                <FaWhatsapp />
              </div>
              <div className='contact-details'>
                <h3>WhatsApp</h3>
                <Link to='https://wa.me/qr/HQMRINKQRIKTB1' className='contact-link'>
                  ‪+91 9661440544‬
                </Link>
              </div>
            </div>
            
            <div className='contact-info-card'>
              <div className='contact-icon'>
                <MdLocationOn />
              </div>
              <div className='contact-details'>
                <h3>Location</h3>
                <p className='contact-link'>
                  New Delhi, India
                </p>
              </div>
            </div>
          </div>
          
          <div className='contact-form-section'>
            <form onSubmit={submitHandler} className='contact-form'>
              <div className='form-group'>
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  value={formData.name} 
                  onChange={changeHandler} 
                  className='form-input'
                  placeholder='Enter your name'
                  required
                />
              </div>
              
              <div className='form-group'>
                <label htmlFor="phone">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone" 
                  id="phone" 
                  value={formData.phone} 
                  onChange={changeHandler} 
                  className='form-input'
                  placeholder='Enter your phone number'
                  required
                />
              </div>
              
              <div className='form-group'>
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  value={formData.email} 
                  onChange={changeHandler} 
                  className='form-input'
                  placeholder='Enter your email'
                  required
                />
              </div>
              
              <div className='form-group'>
                <label htmlFor="message">Your Message</label>
                <textarea 
                  name="message" 
                  id="message" 
                  value={formData.message} 
                  onChange={changeHandler}
                  className='form-textarea'
                  placeholder='How can we help you?'
                  rows="5"
                />
              </div>
              
              <button 
                className={`form-btn ${isSubmit ? 'submitting' : ''} ${isSubmitted ? 'submitted' : ''}`}
                disabled={isSubmit}
              >
                {isSubmitted ? (
                  <><FaCheckCircle /> Submitted</>
                ) : isSubmit ? (
                  "Submitting..."
                ) : (
                  <><FaPaperPlane /> Send Message</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;

