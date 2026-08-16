import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Importando as páginas
import App from './App.jsx'
import Sobre from './Sobre.jsx'
import Portfolio from './Portfolio.jsx'

// Importando o CSS global
import './App.css' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Rota para a página inicial */}
        <Route path="/" element={<App />} />
        
        {/* Rota para a página About */}
        <Route path="/sobre" element={<Sobre />} />

        {/* Rota para a página Portfolio */}
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)