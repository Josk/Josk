import { useState } from 'react'
import ImageGallery from './ImageGallery'
import { resolvePath } from '../utils'
import './GameCard.css'

const GameCard = ({ game }) => {
    const [showGallery, setShowGallery] = useState(false)
    const [initialGalleryIndex, setInitialGalleryIndex] = useState(0)

    // Resolve all screenshot paths
    const screenshots = game.screenshots ? game.screenshots.map(resolvePath) : []

    const openGallery = (index) => {
        setInitialGalleryIndex(index)
        setShowGallery(true)
    }

    return (
        <article className="game-card">
            <div className="game-content">
                <div className="game-header">
                    <h3>{game.title}</h3>
                    <span className="game-role">{game.role}</span>
                </div>

                <p className="game-description">{game.description}</p>

                <div className="game-tags">
                    {game.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                    ))}
                </div>
            </div>

            {screenshots.length > 0 && (
                <div className="game-screenshots">
                    {screenshots.slice(0, 3).map((shot, idx) => (
                        <div
                            key={idx}
                            className="screenshot-preview"
                            onClick={() => openGallery(idx)}
                        >
                            <img src={shot} alt={`${game.title} screenshot ${idx + 1}`} />
                            {idx === 2 && screenshots.length > 3 && (
                                <div className="more-overlay">+{screenshots.length - 3}</div>
                            )}
                        </div>
                    ))}
                </div>
            )}

            {showGallery && (
                <ImageGallery
                    images={screenshots}
                    initialIndex={initialGalleryIndex}
                    onClose={() => setShowGallery(false)}
                />
            )}
        </article>
    )
}

export default GameCard
