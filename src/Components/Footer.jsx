import './Footer.css';

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL || '#';
const LINKEDIN_URL = import.meta.env.VITE_LINKEDIN_URL || '#';
const TWITTER_URL = import.meta.env.VITE_TWITTER_URL || '#';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Portfolio</h3>
            <p>Creating beautiful web experiences</p>
            <p>I'm a passionate developer with a love for creating elegant solutions to complex problems. 
              With expertise in modern web technologies, I help businesses bring their ideas to life through 
              clean, scalable code.</p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Social</h3>
            <ul>
              <li><a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href={TWITTER_URL} target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
