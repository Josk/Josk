import { useState } from 'react'
import './App.css'
import portfolioData from './data/portfolio.json'
import CompanySection from './components/CompanySection'

import { resolvePath } from './utils'

function App() {
  return (
    <div className="app-container">
      <header className="main-header">
        <img src={resolvePath('/profile/profile_pic.jpeg')} alt="Romain Pedra" className="profile-pic" />
        <h1>Romain Pedra</h1>
        <p className="intro-text">
          12 years Game Developer & UI Programmer. Passionate about UI development and creating immersive experiences.
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
