import { Link } from 'react-router-dom'
import './App.css'

function Portfolio() {
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
            <Link to="/sobre" className="nav-link">About</Link>
            <Link to="/portfolio" className="nav-link active">Portfolio</Link>
          </div>

          <div className="nav-placeholder"></div>
        </nav>
      </header>

      <main className="content-container">
        {/* Page Header */}
        <div className="page-header">
          <h1 className="page-title">Portfolio.</h1>
          <p className="page-description">
            Academic and personal projects developed during the Information Systems program.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          
          {/* PROJECT 01 */}
          <article className="project-card">
            
            {/* Disciplina / Course Tag */}
            <div className="project-meta">
              <span className="project-number">01</span>
              <span className="discipline-badge">Course: Web Development</span>
            </div>

            {/* Nome do Projeto */}
            <h3 className="project-title">Academic Management System</h3>

            {/* Breve Descrição */}
            <p className="project-description">
              A full-stack web application designed to help university students manage schedules, assignments, and academic performance in one centralized platform.
            </p>

            {/* Objetivo do Sistema / Solução Proposta */}
            <div className="project-section">
              <h4 className="project-section-title">System Objective</h4>
              <p className="project-section-text">
                To streamline student workflow by replacing fragmented spreadsheet tracking with an integrated web system that automates deadline notifications and visualizes grade averages.
              </p>
            </div>

            {/* Imagem do Protótipo / Interface */}
            <div className="project-image-wrapper">
              <img 
                src="/project1-preview.png" 
                alt="Academic Management System Interface Prototype" 
                className="project-image"
              />
            </div>

            {/* Stack de Tecnologias */}
            <div className="skills-grid">
              <span className="skill-tag">React</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">CSS Modules</span>
            </div>

            {/* Links do Projeto */}
            <div className="project-links">
              <a href="kink do github pra eu colocar dps" target="_blank" rel="noopener noreferrer" className="project-link">
                GitHub Repository &rarr;
              </a>
            </div>
          </article>


          {/* PROJECT 02 */}
          <article className="project-card">
            
            {/* Disciplina / Course Tag */}
            <div className="project-meta">
              <span className="project-number">02</span>
              <span className="discipline-badge">Course: Database Systems</span>
            </div>

            {/* Nome do Projeto */}
            <h3 className="project-title">Automated Data Pipeline & Analytics</h3>

            {/* Breve Descrição */}
            <p className="project-description">
              An automated ETL (Extract, Transform, Load) pipeline that aggregates, processes, and displays real-time operational data for business decision-making.
            </p>

            {/* Objetivo do Sistema / Solução Proposta */}
            <div className="project-section">
              <h4 className="project-section-title">System Objective</h4>
              <p className="project-section-text">
                To automate the extraction of unstructured datasets, transform them via Python scripts, and store clean records into a relational database to provide actionable business dashboards.
              </p>
            </div>

            {/* Imagem do Protótipo / Interface */}
            <div className="project-image-wrapper">
              <img 
                src="/project2-preview.png" 
                alt="Automated Data Pipeline Dashboard Prototype" 
                className="project-image"
              />
            </div>

            {/* Stack de Tecnologias */}
            <div className="skills-grid">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">n8n</span>
              <span className="skill-tag">SQL</span>
            </div>

            {/* Links do Projeto */}
            <div className="project-links">
              <a href="https://vou colocar aqui depoissssss aaaaaaaaaa" target="_blank" rel="noopener noreferrer" className="project-link">
                GitHub Repository &rarr;
              </a>
            </div>
          </article>

        </div>
      </main>

      <footer className="footer-credits">
        <p>© 2026 Gabriel Albuquerque. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Portfolio