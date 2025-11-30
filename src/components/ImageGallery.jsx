import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import './ImageGallery.css'

const ImageGallery = ({ images, initialIndex, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex)

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose()
            if (e.key === 'ArrowLeft') showPrev()
            if (e.key === 'ArrowRight') showNext()
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [currentIndex])

    const showNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
    }

    const showPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    return createPortal(
        <div className="gallery-overlay" onClick={onClose}>
            <div className="gallery-content" onClick={e => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>&times;</button>

                <div className="main-image-container">
                    <button className="nav-btn prev" onClick={showPrev}>&#10094;</button>
                    <img src={images[currentIndex]} alt={`Screenshot ${currentIndex + 1}`} className="main-image" />
                    <button className="nav-btn next" onClick={showNext}>&#10095;</button>
                </div>

                <div className="thumbnails">
                    {images.map((img, idx) => (
                        <img
                            key={idx}
                            src={img}
                            alt={`Thumbnail ${idx + 1}`}
                            className={`thumbnail ${idx === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(idx)}
                        />
                    ))}
                </div>
            </div>
        </div>,
        document.body
    )
}

export default ImageGallery
