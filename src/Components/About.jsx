import './About.css';
import './Hero.css';
import profileImage from '../Images/ghusharib.jpeg';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate developer with a love for creating elegant solutions to complex problems. 
              With expertise in modern web technologies, I help businesses bring their ideas to life through 
              clean, scalable code.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the developer community.
            </p>
           <div className="stats-row">
          <div className="stat">
            <span className="stat-num">2+</span>
            <span className="stat-label">Years Exp.</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">12</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">10+</span>
            <span className="stat-label">Clients</span>
          </div>
        </div>

          </div>
          
          <div className="about-image">
            <img src={profileImage} alt="Profile" className="profile-photo" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
