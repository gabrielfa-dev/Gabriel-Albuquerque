import { Link } from 'react-router-dom' 
import './App.css'

function App() {
  return (
    <div className="page-wrapper">
      {/* Top Navbar */}
      <header className="navbar-header">
        <nav className="nav-container">
          <div className="nav-logo">
            <Link to="/">Gabriel Albuquerque</Link>
          </div>
          
          <div className="nav-links">
            <Link to="/" className="nav-link active">Home</Link>
            <Link to="/sobre" className="nav-link">About</Link>
            <Link to="/portfolio" className="nav-link">Portfolio</Link>
          </div>

          <div className="nav-placeholder"></div>
        </nav>
      </header>

      <main className="content-container">
        {/* Hero Section */}
        <section className="hero-section">
          
          <div className="hero-text-column">
            <h1 className="hero-hello">Hello world !</h1>
            <h2 className="hero-name">I am Gabriel Freitas de Albuquerque</h2>
            
            <div className="hero-role">
              &lt; / Information Systems Student &gt;
            </div>
            
            <p className="hero-bio">
              An undergraduate student at CIn/UFPE, passionate about technology and dedicated to developing solid technical and analytical skills.
            </p>
            
            {/* Caixa de Contato & Redes Sociais */}
            <div className="contact-card">
              <div className="contact-card-header">
                <span className="contact-card-title"> CONTACT </span>
              </div>
              
              <div className="contact-card-body">
                <div className="contact-item">
                  <span className="contact-label" style={{ color: '#ffffff' }}>email:</span>
                  <span className="contact-value" style={{ color: '#ffffff', cursor: 'default' }}>
                    gabrielfa.dev@gmail.com
                  </span>
                </div>
                
                <div className="contact-divider"></div>

                <div className="social-links-grid">
                  <a 
                    href="https://www.linkedin.com/in/gabriel-albuquerque-025419428/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-box-link"
                  >
                    LinkedIn <span>&rarr;</span>
                  </a>
                  <a 
                    href="https://github.com/gabrielfa-dev" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-box-link"
                  >
                    GitHub <span>&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-image-column">
          </div>

        </section>

        {/* Education */}
        <section className="section-block">
          <h3 className="section-subtitle">[ Education ]</h3>
          <div className="square-card">
            <h4 className="card-title">Information Systems</h4>
            <p className="card-details">CIn / UFPE — Center for Informatics</p>
            <span className="date-tag">2026 – Present</span>
          </div>
        </section>

        {/* Interests */}
        <section className="section-block">
          <h3 className="section-subtitle">[ Interests ]</h3>
          <div className="square-grid">
            <div className="square-item">
              <div className="item-title">Process Automation</div>
            </div>
            <div className="square-item">
              <div className="item-title">Artificial Intelligence</div>
            </div>
            <div className="square-item">
              <div className="item-title">Software Engineering</div>
            </div>
            <div className="square-item">
              <div className="item-title">Data Science</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer-credits">
        <p>© 2026 Gabriel Albuquerque. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App