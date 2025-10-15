import { useState, useEffect, useRef } from 'react';
import profilePic from '../assets/naga.jpg';
import '../CSS/Portfolio.css';
import { MdEmail, MdPhoneAndroid, MdLocationOn, MdMenu, MdClose } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";

const Portfolio = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    const sectionRefs = {
        home: homeRef,
        about : aboutRef,
        projects: projectsRef,
        contact: contactRef,
    };


    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;

            for (const [key, ref] of Object.entries(sectionRefs)) {
                const element = ref.current;
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(key);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
    };

    const skills = {
        languages: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'SQL'],
        web: ['HTML', 'CSS', 'React.js', 'Node.js', 'Express.js', 'MongoDB'],
        tools: ['Git', 'GitHub', 'VS Code', 'Android Studio'],
    };

    const projects = [
        {
            title: 'Financial Calculator App',
            description:
                'An Android app offering a range of financial calculators for loans, investments, and more with precise results.',
            tech: ['Android', 'Java', 'XML'],
        },
        {
            title: 'Farmasite - Agricultural Portal',
            description:
                'A web platform empowering farmers to sell their produce directly to consumers and launch online businesses.',
            tech: ['HTML', 'CSS', 'JavaScript', 'MongoDB'],
        },
        {
            title: 'Brightview - React Frontend App',
            description:
                'A React-based web app featuring smooth animations and reusable components with a clean UI.',
            tech: ['React.js', 'CSS', 'JavaScript'],
            github: 'https://github.com/NagarajuKolar/Brightview',
        },
        {
            title: 'AECON-INFRA - Company Website',
            description:
                'A responsive company website highlighting infrastructure projects and services.',
            tech: ['React.js', 'CSS', 'JavaScript'],
            github: 'https://github.com/NagarajuKolar/AECON-INFRA',
        },
    ];

    return (
        <div className="portfolio-wrapper">
            <nav className="portfolio-navbar">
                <div className="navbar-container">
                    <div className="navbar-logo">NK</div>


                    <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
                    </div>

                    <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
                        {Object.entries(sectionRefs).map(([key, ref]) => (
                            <li key={key}>
                                <a href={`#${key}`}
                                    className={`navbar-link ${activeSection === key ? 'active' : ''}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(ref);
                                    }}>
                                    {key.charAt(0).toUpperCase() + key.slice(1)}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            <section ref={homeRef} id="home" className="portfolio-section home-section">
                <div className="section-container">
                    <div className="home-content">
                        <div className="home-text">
                            <h1>
                                Hi, I'm <span className="gradient-text">Nagaraju Kolar</span>
                            </h1>
                            <h2>Frontend Developer</h2>
                            <p>
                                Passionate about creating beautiful, responsive web applications with modern technologies.
                                Currently working at VBLP Tech Solutions, building innovative solutions that make a difference.
                            </p>
                            <div className="home-buttons">
                                <button className="btn btn-primary" onClick={() => scrollToSection(projectsRef)}>
                                    View My Work
                                </button>
                                <button className="btn btn-secondary" onClick={() => scrollToSection(contactRef)}>
                                    Get In Touch
                                </button>
                                <button className="btn btn-success download-btn">
                                    <a href="/NagarajuKolar.pdf" download >
                                        <FaDownload  className="download-icon"  />
                                        Download Resume
                                    </a>
                                </button>
                            </div>
                        </div>
                        <div className="home-image">
                            <img src={profilePic} alt="Nagaraju Kolar" className="profile-pic" />
                        </div>
                    </div>
                </div>
            </section>

            <section ref={aboutRef} id="about" className="portfolio-section about-section">
                <div className="section-container">
                    <h2 className="section-title gradient-text">About Me</h2>
                    <div className="about-content">
                        <p className="about-text">
                            I'm a passionate Frontend Developer with a strong foundation in web technologies and a keen eye for design.
                            I graduated from VNR Vignanajyothi Institute of Engineering & Technology with a B.Tech in Information Technology,
                            achieving a CGPA of 8.0/10. I believe in writing clean, maintainable code and creating user experiences that
                            are both beautiful and functional. My expertise lies in building responsive, modern web applications using
                            React.js and other cutting-edge technologies.I’m constantly exploring new tools and practices to enhance both
                            my skills and the projects I work on.
                        </p>

                        <h3 className="section-title" style={{ fontSize: '2rem', marginTop: '2.5rem' }}>
                            Skills & Technologies
                        </h3>
                        <div className="skills-grid">
                            {Object.entries(skills).map(([category, items]) => (
                                <div key={category} className="skill-category">
                                    <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                                    <div className="skill-tags">
                                        {items.map((skill, index) => (
                                            <span key={index} className="skill-tag">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h3 className="section-title" style={{ fontSize: '2rem', marginTop: '3rem' }}>
                            Work Experience
                        </h3>
                        <div className="experience-timeline">
                            <div className="experience-item">
                                <h3>Frontend Developer</h3>
                                <h4>VBLP Tech Solutions</h4>
                                <p className="experience-date">June 2024 - Present</p>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                    Developing responsive, user-friendly web applications using React.js and collaborating with
                                    cross-functional teams to deliver high-quality solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section ref={projectsRef} id="projects" className="portfolio-section projects-section">
                <div className="section-container">
                    <h2 className="section-title gradient-text">My Projects</h2>
                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <div key={index} className="project-card">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((tech, techIndex) => (
                                        <span key={techIndex} className="tech-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                {project.github && (
                                    <div className="project-links">
                                        <a
                                            href={project.github} target="_blank" className="project-link">
                                            GitHub →
                                        </a>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/*  Contact Section */}
            <section ref={contactRef} id="contact" className="portfolio-section contact-section">
                <h2 className="contact-title">Get In Touch</h2>
                <p className="contact-subtitle">
                    Feel free to reach out for collaborations or just a friendly chat
                </p>

                <div className="contact-container">
                    <div className="contact-card">
                        <MdEmail className="contact-icon" />
                        <h3>Email</h3>
                        <p><a href="mailto:kolarnagaraju@gmail.com">kolarnagaraju@gmail.com</a></p>
                    </div>

                    <div className="contact-card">
                        <MdPhoneAndroid className="contact-icon" />
                        <h3>Phone</h3>
                        <p><a href="tel:+918074936711" target="_blank"></a>+91 8074936711</p>
                    </div>

                    <div className="contact-card">
                        <MdLocationOn className="contact-icon" />
                        <h3>Location</h3>
                        <p><a href="https://www.google.com/maps?q=MADGI,+Sangareddy,+Telangana" target="_blank"></a>MADGI, Sangareddy, Telangana</p>
                    </div>

                    <div className="contact-card">
                        <FaLinkedin className="contact-icon" />
                        <h3>LinkedIn</h3>
                        <p>
                            <a href='https://www.linkedin.com/in/nagaraju-kolar-aab683234/' target="_blank" >
                                Connect with me
                            </a>
                        </p>
                    </div>

                    <div className="contact-card">
                        <FaGithub className="contact-icon" />
                        <h3>GitHub</h3>
                        <p>
                            <a href='https://github.com/NagarajuKolar' target="_blank" >
                                View My Projects
                            </a>
                        </p>
                    </div>
                </div>

                <footer className="contact-footer">
                    © 2024 Nagaraju Kolar. All rights reserved.
                </footer>
            </section>
        </div>
    );
};

export default Portfolio;
