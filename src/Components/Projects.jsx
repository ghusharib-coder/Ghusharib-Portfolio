import "./Projects.css";

function Projects() {
  const normalizeUrl = (url) => {
    if (!url || !url.trim()) return "#";
    const value = url.trim();
    if (/^https?:\/\//i.test(value)) return value;
    return `https://${value}`;
  };

  const projectsData = [
    {
      id: 1,
      title: "FrescoE-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include product catalog, shopping cart, and payment integration.",
      tags: [
        "React",
        "Node.js",
        "MongoDB",
        "Easypaisa Payment",
        "API Integration",
        "REST APIs",
      ],
      link: normalizeUrl(import.meta.env.VITE_FRESCO_PROJECT_URL),
    },
    {
      id: 2,
      title: "SkillSellers Freelancing Website",
      description:
        "SkillSellers is a MERN-based freelance marketplace that connects clients with skilled freelancers for secure project collaboration and payments.",
      tags: [
        "React",
        "Node.js",
        "MongoDB",
        "Bootstrap CSS",
        " Stripe Payment",
        " Socket.io",
        "REST APIs",
      ],
      link: normalizeUrl(import.meta.env.VITE_SKILLSELLERS_PROJECT_URL),
    },
    {
      id: 3,
      title: "GMZ Motors Car Rental Platform",
      description:
        "Rentify is a modern car rental platform that allows users to browse, book, and manage rental vehicles easily through a seamless online experience.",
      tags: ["React", "MongoDB", "Node.js", "Tailwind CSS", "REST APIs"],
      link: normalizeUrl(import.meta.env.VITE_GMZ_MOTORS_PROJECT_URL),
    },
    {
      id: 4,
      title: "M&M Advocates Intellectual Property Platform",
      description:
        "M&M Advocates is a professional legal services platform designed to provide expert solutions for intellectual property disputes and legal consultations.",
      tags: [
        "React",
        "D3.js",
        "Express",
        "Node js",
        "Tailwind CSS",
        "Email Js",
      ],
      link: "https://m-m-advocates.vercel.app",
    },
    {
      id: 5,
      title: "My-Porfolio Website",
      description:
        "My portfolio website showcases my skills, experience, and projects in a user-friendly and visually appealing way. It is built using React, Next.js, Tailwind CSS, and Framer Motion. It also includes a contact form powered by Email Js.",
      tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Email Js"],
      link: normalizeUrl(import.meta.env.VITE_PORTFOLIO_PROJECT_URL),
    },
    {
      id: 6,
      title: "Portfolio Generator",
      description:
        "AI-powered tool that generates professional portfolio websites from minimal user input using templates and customization.",
      tags: ["React", "AI/ML", "Next.js", "Tailwind"],
      link: normalizeUrl(import.meta.env.VITE_PORTFOLIO_GENERATOR_URL),
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Here are some of my recent works</p>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
