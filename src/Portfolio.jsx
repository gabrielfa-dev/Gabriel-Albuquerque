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
          <h1 className="page-title">Portfolio</h1>
          <p className="page-description">
            Academic and personal projects developed during the Information Systems program.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          
          {/* PROJECT 01 */}
          <article className="project-card">
            
            {/* Nome do Projeto */}
            <h3 className="project-title">FiscRecife</h3>

            {/* Breve Descrição */}
            <p className="project-description">
              A web platform built using Lovable for the CAD course aimed at increasing transparency and efficiency in the management and monitoring of public works across the city of Recife.
            </p>

            {/* Objetivo do Sistema / Solução Proposta */}
            <div className="project-section">
              <h4 className="project-section-title">System Objective</h4>
              <p className="project-section-text">
                To enhance citizen oversight and public administration efficiency by providing an intuitive platform where citizens can track the status, budgets, and timelines of ongoing public infrastructure projects in Recife.
              </p>
            </div>

            {/* Stack de Tecnologias */}
            <div className="skills-grid">
              <span className="skill-tag">Lovable</span>
            </div>

            {/* Link do Site no Lovable */}
            <div className="project-links">
              <a 
                href="https://fisc-recife.lovable.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link"
              >
                Visit Website &rarr;
              </a>
            </div>
          </article>


          {/* PROJECT 02 */}
          <article className="project-card">
            
            

            {/* Nome do Projeto */}
            <h3 className="project-title">PacIp</h3>

            {/* Breve Descrição */}
            <p className="project-description">
              A remake of the classic Pac-Man game developed in Python using the Pygame library for the Introduction to Programming course.
            </p>

            {/* Objetivo do Sistema / Solução Proposta */}
            <div className="project-section">
              <h4 className="project-section-title">System Objective</h4>
              <p className="project-section-text">
                To recreate classic arcade game mechanics, ghost movements, collision logic, and scoring systems while applying fundamental programming logic and algorithms in Python.
              </p>
            </div>

            {/* Stack de Tecnologias */}
            <div className="skills-grid">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Pygame</span>
            </div>

            {/* Link do Repositório GitHub */}
            <div className="project-links">
              <a 
                href="https://github.com/ericsalmeida/projetoIP" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link"
              >
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