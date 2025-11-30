import { useState } from 'react'
import './App.css'
import portfolioData from './data/portfolio.json'
import CompanySection from './components/CompanySection'

function App() {
  return (
    <div className="app-container">
      <header className="main-header">
        <h1>Romain Pedra</h1>
        <p className="intro-text">
          Game Developer & UI Programmer. Passionate about creating immersive experiences.
        </p>
      </header>

      <main>
        {portfolioData.map((company) => (
          <CompanySection key={company.id} company={company} />
        ))}
      </main>

      <footer>
        <p>© {new Date().getFullYear()} - Built with React & Vite</p>
      </footer>
    </div>
  )
}

export default App
