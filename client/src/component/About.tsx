import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>
        
        <div className="about-content">
          <div className="about-image">
            <div className="about-img-container">
              <img src="/images/My-Profile.jpg" alt="My-image" />
            </div>
          </div>
          
          <div className="about-text">
            <h3>I'm a <span className="highlight">Full Stack Developer</span> with a passion for creating responsive, user-friendly applications</h3>
            
            <p>
              I recently transitioned into full-stack web development, combining my eye for design with technical problem-solving skills. 
              I'm passionate about creating seamless user experiences through clean code and thoughtful design.
            </p>
            
            <p>
              My journey in web development started with front-end design, and I've been expanding my skills to include back-end technologies. I'm constantly learning and improving my craft through projects and courses.
            </p>
            {/* //add digital artist and graphic designer */}
            
            <div className="about-details">
              <div className="about-detail">
                <span>Name:</span> Stephanie Sosa Alonzo
              </div>
              <div className="about-detail">
                <span>Email:</span> stephaniesosa02@gmail.com
              </div>
              <div className="about-detail">
                <span>Location:</span> Glendale, AZ
              </div>
              <div className="about-detail">
                <span>Availability:</span> Available for freelance or full-time opportunities
              </div>
            </div>
            
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;