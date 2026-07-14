import './Hero.css';
import { useEffect, useState } from 'react';

const ROLES = ['Full-Stack Developer', 'UI/UX Craftsman', 'React Specialist', 'Problem Solver'];

function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const GITHUB_URL = import.meta.env.VITE_GITHUB_URL || '#';
  const LINKEDIN_URL = import.meta.env.VITE_LINKEDIN_URL || '#';
  const TWITTER_URL = import.meta.env.VITE_TWITTER_URL || '#';
  // Multi-role typewriter
  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;

    if (!deleting) {
      if (displayText.length < current.length) {
        timeout = setTimeout(() => setDisplayText(current.substring(0, displayText.length + 1)), 90);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => setDisplayText(current.substring(0, displayText.length - 1)), 45);
      } else {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, deleting, roleIndex]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      {/* Background layers */}
      <div className="bg-mesh" />
      <div className="grid-overlay" />

      {/* Ambient orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Corner brackets */}
      <div className="corner corner-tl" />
      <div className="corner corner-br" />

      {/* Particles */}
      <div className="particle-container">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>

      <div className="hero-content">
        {/* Status badge */}
        <div className="hero-badge">
          <span className="badge-dot" />
          Available for work
        </div>

        {/* Title */}
        <h1 className="hero-title">
          <span className="title-line-1">
            <div>Hi, I'm </div>
            <span className="gradient-name">Ghusharib Sarfraz</span>
          </span>
        </h1>

        {/* Typewriter role */}
        <div className="role-line">
          <span className="typing-wrapper">
            <span className="typing-text">{displayText}</span>
            <span className="cursor" />
          </span>
        </div>

        {/* Subtitle */}
        <p className="hero-subtitle">
          Crafting immersive digital experiences where elegant code meets thoughtful
          design — one pixel-perfect component at a time.
        </p>

        {/* Stats */}
        
        {/* CTA buttons */}
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
            <span className="btn-icon">→</span> View My Work
          </button>
          <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
            <span className="btn-icon">✉</span> Get In Touch
          </button>
        </div>

        {/* Social links */}
        <div className="hero-socials">
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-link">
            <span className="social-dot gh" /> GitHub
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
            <span className="social-dot li" /> LinkedIn
          </a>
          <a href={TWITTER_URL} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-link">
            <span className="social-dot tw" /> Twitter
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
      </div>
    </section>
  );
}

export default Hero;