import './Skills.css';

function Skills() {
  const skillsData = [
    {
      category: 'Frontend',
      skills: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind CSS', 'Vue.js']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'Django', 'MongoDB', 'PostgreSQL']
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'Docker', 'AWS', 'Firebase', 'Figma', 'VS Code']
    },
    {
      category: 'Soft Skills',
      skills: ['Problem Solving', 'Team Collaboration', 'Communication', 'Project Management', 'Mentoring']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="skills-grid">
          {skillsData.map((skillGroup, index) => (
            <div key={index} className="skill-category">
              <h3>{skillGroup.category}</h3>
              <div className="skill-items">
                {skillGroup.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="proficiency-section">
          <h3>Proficiency Level</h3>
          <div className="proficiency-items">
            <div className="proficiency-item">
              <div className="proficiency-label">
                <span>React & Frontend</span>
                <span>95%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div className="proficiency-item">
              <div className="proficiency-label">
                <span>Backend Development</span>
                <span>85%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="proficiency-item">
              <div className="proficiency-label">
                <span>UI/UX Design</span>
                <span>80%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="proficiency-item">
              <div className="proficiency-label">
                <span>DevOps & Deployment</span>
                <span>75%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
