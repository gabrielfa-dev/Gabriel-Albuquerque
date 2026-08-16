import { Link } from 'react-router-dom'
import './App.css'

function Sobre() {
  return (
    <div className="page-wrapper">
      {/* Top Navbar */}
      <header className="navbar-header">
        <nav className="nav-container">
          <div className="nav-logo">
            <Link to="/">Gabriel Albuquerque</Link>
          </div>
          
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/sobre" className="nav-link active">About</Link>
            <Link to="/portfolio" className="nav-link">Portfolio</Link>
          </div>

          <div className="nav-placeholder"></div>
        </nav>
      </header>

      <main className="content-container">
        {/* Cabeçalho da Página */}
        <div className="page-header">
          <h1 className="page-title">About me.</h1>
          <p className="page-description">
            Learn a little more about my journey, what I study, and where I want to go.
          </p>
        </div>

        {/* Trajetória Acadêmica */}
        <section className="about-block">
          <h3 className="section-subtitle">[ Academic Background ]</h3>
          <div className="about-content">
            <p>
              I am an undergraduate student in <strong>Information Systems</strong> at the Center for Informatics of the Federal University of Pernambuco (CIn/UFPE), starting in 2026.
            </p>
            <p>
              My academic background is focused on the intersection between solving business problems and applying solid technologies. During my studies, I have been developing a strong foundation in programming logic, data analysis, and software engineering, always seeking to apply academic knowledge in real-world scenarios.
            </p>
          </div>
        </section>

        {/* Interesses em Tecnologia */}
        <section className="about-block">
          <h3 className="section-subtitle">[ Tech Interests ]</h3>
          <div className="about-content">
            <p>
              I am fascinated by discovering how technology can optimize processes and build scalable products. Currently, my main areas of study and interest are:
            </p>
            <ul className="interest-list">
              <li><strong>Artificial Intelligence & Machine Learning:</strong> Exploring how data models can automate decisions.</li>
              <li><strong>Process Automation:</strong> Building scripts and tools to eliminate repetitive tasks.</li>
              <li><strong>Software Engineering:</strong> Architecting clean, maintainable, and efficient systems.</li>
              <li><strong>Data Science:</strong> Extracting valuable insights from raw data.</li>
            </ul>
          </div>
        </section>

        {/* Habilidades Técnicas */}
        <section className="about-block">
          <h3 className="section-subtitle">[ Technical Skills ]</h3>
          <div className="about-content">
            <p>Some of the languages and tools I have affinity with and have been developing:</p>
            
            <div className="skills-grid">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">Git / GitHub</span>
              <span className="skill-tag">Data Structures</span>
              <span className="skill-tag">n8n</span>
            </div>
          </div>
        </section>

        {/* Objetivos Profissionais */}
        <section className="about-block">
          <h3 className="section-subtitle">[ Professional Goals ]</h3>
          <div className="about-content">
            <p>
              My short-term goal is to enter the tech market through an internship in software development or data analysis, where I can collaborate with experienced teams and deliver real value.
            </p>
            <p>
              In the long term, I aspire to become a Software Engineer or Data Scientist capable of leading highly complex technological projects that positively impact society and businesses.
            </p>
          </div>
        </section>

      </main>

      <footer className="footer-credits">
        <p>© 2026 Gabriel Albuquerque. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Sobre