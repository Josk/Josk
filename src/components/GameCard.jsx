import { useState } from 'react'
import ImageGallery from './ImageGallery'
import { resolvePath } from '../utils'
import './GameCard.css'

const GameCard = ({ game }) => {
    const [showGallery, setShowGallery] = useState(false)
    const [initialGalleryIndex, setInitialGalleryIndex] = useState(0)

    // Resolve all screenshot paths
    const screenshots = Array.isArray(game.screenshots)
        ? game.screenshots.map(resolvePath).filter(Boolean)
        : []

    const openGallery = (index) => {
        setInitialGalleryIndex(index)
        setShowGallery(true)
    }

    const getYoutubeVideoId = (url) => {
        if (!url) return null
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]*).*/
        const match = url.match(regExp)
        return (match && match[2].length === 11) ? match[2] : null
    }

    const videoId = getYoutubeVideoId(game.youtube)

    return (
        <article className="game-card">
            <div className="game-content">
                {game.logo && <img src={resolvePath(game.logo)} alt={`${game.title} logo`} className="game-logo" />}
                <div className="game-info">
                    <div className="game-header">
                        <h3>{game.title}</h3>
                        <span className="game-role">{game.role}</span>
                    </div>

                    <p className="game-description">{game.description}</p>

                    <div className="game-tags">
                        {game.tags.map(tag => (
                            <span key={tag.label} className="tag">
                                {tag.icon && <img src={resolvePath(tag.icon)} alt="" className="tag-icon" />}
                                {tag.label}
                            </span>
                        ))}
                    </div>
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

            {videoId && (
                <div className="game-video">
                    <iframe
                        width="100%"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
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
