import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer Intern</h4>
                <h5>Navodita Infotech</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Contributed to real-world frontend projects using HTML, JavaScript,
              React and modern CSS frameworks. Built and styled 2+ responsive
              web pages, improving mobile usability by 30%. Developed a Blog
              Website from scratch.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer Intern</h4>
                <h5>CodSoft</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Developed a Project Management Tool with features including
              project creation, task assignment, deadline setting, and progress
              tracking. Built using React for frontend and Node.js for backend
              with MongoDB for database management.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science</h4>
                <h5>Shivajirao Kadam Group of Institutes, Indore</h5>
              </div>
              <h3>2022 - 2026</h3>
            </div>
            <p>
              Pursuing Bachelor of Technology in Computer Science with a CGPA of
              7.0. Actively building projects and exploring modern web
              technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
