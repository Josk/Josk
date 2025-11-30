import GameCard from './GameCard'
import './CompanySection.css'

import { resolvePath } from '../utils'

const CompanySection = ({ company }) => {
    return (
        <section className="company-section">
            <div className="company-header">
                {company.logo && <img src={resolvePath(company.logo)} alt={`${company.name} logo`} className="company-logo" />}
                <div className="company-info">
                    <h2>{company.name}</h2>
                    <p className="company-description">{company.description}</p>
                </div>
            </div>

            <div className="games-grid">
                {company.games.map(game => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>
        </section>
    )
}

export default CompanySection
