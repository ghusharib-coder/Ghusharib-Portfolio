import { useState } from 'react';
import './Contact.css';

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL || '#';
const LINKEDIN_URL = import.meta.env.VITE_LINKEDIN_URL || '#';
const TWITTER_URL = import.meta.env.VITE_TWITTER_URL || '#';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-subtitle">Have a project in mind? Let's talk about it!</p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <h3>Email</h3>
              <p><a href="mailto:your.email@example.com">ghusharibs@gmail.com</a></p>
            </div>
            <div className="info-item">
              <h3>Phone</h3>
              <p><a href="tel:+1234567890">+92 326 6374634</a></p>
            </div>
            <div className="info-item">
              <h3>Location</h3>
              <p>Lahore, Pakistan</p>
            </div>
            <div className="info-item">
              <h3>Social</h3>
              <div className="social-links">
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href={TWITTER_URL} target="_blank" rel="noopener noreferrer">Twitter</a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>

            {submitted && (
              <div className="success-message">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
