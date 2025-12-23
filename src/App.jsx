import './App.css'
import portfolioData from './data/portfolio.json'
import profileInfo from './data/profile_info.json'
import CompanySection from './components/CompanySection'
import ProfileSkillItem from './components/ProfileSkillItem'

import { resolvePath } from './utils'
import ProfileLinkItem from './components/ProfileLinkItem'

function App() {
  return (
    <div className="app-container">
      <header className="main-header">
        <img src={resolvePath(profileInfo.profile_picture)} alt={profileInfo.name} className="profile-pic" />
        <h1>{profileInfo.name}</h1>
        <div className="links-container">
        {profileInfo.links.map((link) => (
          <ProfileLinkItem key={link} link={link} />
        ))}
        </div>
        <p className="intro-text">
          {profileInfo.description}
        </p>
        <div className="skills-container">
        {profileInfo.skills.map((skill) => (
          <ProfileSkillItem key={skill} skill={skill} />
        ))}
        </div>
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
