'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const photos = [
  '/images/projet/principale.jpg',
  '/images/projet/photo-2.jpg',
  '/images/projet/photo-3.jpg',
  '/images/projet/photo-4.jpg',
  '/images/projet/photo-5.jpg',
  '/images/projet/photo-6.jpg',
  '/images/projet/photo-7.jpg',
  '/images/projet/photo-8.jpg',
  '/images/projet/photo-9.jpg',
  '/images/projet/photo-10.jpg',
  '/images/projet/photo-11.jpg',
  '/images/projet/photo-12.jpg',
  '/images/projet/photo-13.jpg',
  '/images/projet/photo-14.jpg',
  '/images/projet/photo-15.jpg',
  '/images/projet/photo-16.jpg'
]

export default function ProjectFeature() {
  const [lightbox, setLightbox] = useState(null)
  const [showVideo, setShowVideo] = useState(false)
  const router = useRouter()

  const whatsappLink = `https://wa.me/+33612345678?text=${encodeURIComponent(
    'Bonjour, je suis intéressé par la Résidence Victorine.'
  )}`

  const prev = () => setLightbox(l => (l - 1 + photos.length) % photos.length)
  const next = () => setLightbox(l => (l + 1) % photos.length)

  const stats = [
    { label: 'Superficie', value: '240', unit: 'm²' },
    { label: 'Appartements', value: '7', unit: 'unités' },
    { label: 'Étages', value: 'R+7', unit: '' },
    { label: 'Livraison', value: '2025', unit: '' },
    { label: 'Prix à partir de', value: '195M', unit: 'FCFA' },
    { label: 'Disponibles', value: '5', unit: 'restants' },
  ]

  return (
    <section className="project-section">
      <div className="bg-shape shape-one" />
      <div className="bg-shape shape-two" />

      <div className="container">
        <div className="header">
          <div>
            <span className="eyebrow">À la une</span>
            <h2>Projet Vedette</h2>
          </div>

          <div className="status">En cours de commercialisation</div>
        </div>

        <div className="project-card">
          <div className="gallery">
            <div className="main-image" onClick={() => setLightbox(0)}>
              <img src={photos[0]} alt="Résidence Victorine" />

              <div className="image-overlay" />

              <button
                className="video-button"
                onClick={e => {
                  e.stopPropagation()
                  setShowVideo(true)
                }}
              >
                <span className="play">▶</span>
                <span>Voir la vidéo</span>
              </button>

              <div className="project-label">
                Résidence Victorine
              </div>
            </div>

            <div className="thumbs">
              {photos.slice(1, 4).map((photo, index) => (
                <button
                  key={index}
                  className="thumb"
                  onClick={() => setLightbox(index + 1)}
                >
                  <img src={photo} alt={`Photo ${index + 2}`} />

                  {index === 2 && (
                    <div className="more">
                      <strong>+{photos.length - 4}</strong>
                      <span>Voir toutes les photos</span>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          <aside className="info-card">
            <div className="info-top">
              <span className="tag">Haut standing</span>
              <h3>Résidence Victorine</h3>
              <p className="location">📍 Stèle Mermoz, Dakar — Sénégal</p>
            </div>

            <p className="description">
              Un immeuble résidentiel haut de gamme offrant des appartements spacieux
              avec finitions premium et prestations de standing.
            </p>

            <div className="stats-grid">
              {stats.map((item, index) => (
                <div className="stat" key={index}>
                  <span>{item.label}</span>
                  <strong>
                    {item.value} <small>{item.unit}</small>
                  </strong>
                </div>
              ))}
            </div>

            <div className="map">
  <iframe
    src="https://maps.google.com/maps?q=14.706449,-17.475609&z=18&output=embed"
    width="100%"
    height="150"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>
<a
  href="https://www.google.com/maps?q=14.706449,-17.475609"
  target="_blank"
  rel="noopener noreferrer"
  className="map-link"
>
  📍 Voir l'emplacement exact
</a>
            <div className="actions">
              <button onClick={() => router.push('/contact')}>
                Demander une visite
              </button>

              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                💬 WhatsApp
              </a>
            </div>
          </aside>
        </div>
      </div>

      {lightbox !== null && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button
            className="nav prev"
            onClick={e => {
              e.stopPropagation()
              prev()
            }}
          >
            ←
          </button>

          <img
            src={photos[lightbox]}
            alt="Agrandissement"
            onClick={e => e.stopPropagation()}
          />

          <button
            className="nav next"
            onClick={e => {
              e.stopPropagation()
              next()
            }}
          >
            →
          </button>

          <button className="close" onClick={() => setLightbox(null)}>
            ✕
          </button>

          <div className="counter">
            {lightbox + 1} / {photos.length}
          </div>
        </div>
      )}

      {showVideo && (
        <div className="lightbox" onClick={() => setShowVideo(false)}>
          <video
            controls
            autoPlay
            onClick={e => e.stopPropagation()}
          >
            <source src="/videos/residence-victorine.mp4" type="video/mp4" />
          </video>

          <button className="close" onClick={() => setShowVideo(false)}>
            ✕
          </button>
        </div>
      )}

      <style jsx>{`
        .project-section {
          position: relative;
          overflow: hidden;
          padding: 6rem 3rem;
          background: linear-gradient(135deg, #fff 0%, #fff6f5 100%);
          border-top: 1px solid #f1e2df;
        }

        .bg-shape {
          position: absolute;
          z-index: 0;
          pointer-events: none;
        }

        .shape-one {
          width: 420px;
          height: 420px;
          right: -120px;
          top: -120px;
          border-radius: 50%;
          background: rgba(192, 57, 43, 0.08);
        }

        .shape-two {
          width: 280px;
          height: 280px;
          left: -100px;
          bottom: -100px;
          border-radius: 50%;
          background: rgba(245, 187, 181, 0.28);
        }

        .container {
          position: relative;
          z-index: 1;
          max-width: 1180px;
          margin: 0 auto;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 2rem;
          margin-bottom: 2.5rem;
        }

        .eyebrow {
          display: block;
          margin-bottom: 0.7rem;
          color: #c0392b;
          font-size: 15px;
          font-weight: 800;
          letter-spacing: 4px;
          text-transform: uppercase;
        }

        h2 {
          margin: 0;
          color: #151515;
          font-size: clamp(2.4rem, 4.8vw, 3.84rem);
          font-weight: 800;
          letter-spacing: -1px;
        }

        .status {
          background: #c0392b;
          color: #fff;
          padding: 12px 26px;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          box-shadow: 0 12px 30px rgba(192, 57, 43, 0.22);
        }

        .project-card {
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: 2rem;
          align-items: stretch;
        }

        .gallery {
          min-width: 0;
        }

        .main-image {
          position: relative;
          height: 520px;
          overflow: hidden;
          cursor: pointer;
          border-radius: 28px 28px 8px 8px;
          box-shadow: 0 30px 70px rgba(0, 0, 0, 0.12);
        }

        .main-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .main-image:hover img {
          transform: scale(1.04);
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.05),
            rgba(0, 0, 0, 0.42)
          );
        }

        .project-label {
          position: absolute;
          left: 1.6rem;
          bottom: 1.4rem;
          color: #fff;
          font-size: 18px;
          font-weight: 800;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .video-button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          gap: 12px;
          border: 1px solid rgba(255, 255, 255, 0.35);
          border-radius: 999px;
          padding: 10px 18px 10px 10px;
          background: rgba(255, 255, 255, 0.16);
          backdrop-filter: blur(12px);
          color: #fff;
          cursor: pointer;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          transition: all 0.3s ease;
        }

        .video-button:hover {
          background: rgba(192, 57, 43, 0.9);
          transform: translate(-50%, -50%) scale(1.04);
        }

        .play {
          width: 46px;
          height: 46px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #c0392b;
          color: white;
          font-size: 19px;
          padding-left: 3px;
        }

        .thumbs {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-top: 10px;
        }

        .thumb {
          position: relative;
          height: 130px;
          overflow: hidden;
          border: none;
          padding: 0;
          cursor: pointer;
          border-radius: 8px 8px 22px 22px;
          background: #eee;
        }

        .thumb img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: transform 0.35s ease;
        }

        .thumb:hover img {
          transform: scale(1.08);
        }

        .more {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.58);
          color: #fff;
          text-align: center;
        }

        .more strong {
          font-size: 36px;
          font-weight: 400;
        }

        .more span {
          margin-top: 4px;
          font-size: 13px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .info-card {
          position: sticky;
          top: 2rem;
          align-self: start;
          padding: 2rem;
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.88);
          border: 1px solid rgba(192, 57, 43, 0.1);
          box-shadow: 0 30px 80px rgba(192, 57, 43, 0.12);
          backdrop-filter: blur(12px);
        }

        .tag {
          display: inline-block;
          margin-bottom: 1rem;
          padding: 8px 14px;
          border-radius: 999px;
          background: #fff0ef;
          color: #c0392b;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .info-card h3 {
          margin: 0;
          color: #151515;
          font-size: 36px;
          font-weight: 800;
          letter-spacing: -0.5px;
        }

        .location {
          margin: 0.6rem 0 1.4rem;
          color: #c0392b;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .description {
          margin: 0 0 1.6rem;
          padding-left: 1rem;
          border-left: 3px solid #e0b0ad;
          color: #696969;
          font-size: 19px;
          line-height: 1.9;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          margin-bottom: 1.4rem;
        }

        .stat {
          padding: 1rem;
          border-radius: 16px;
          background: linear-gradient(135deg, #fff 0%, #fff3f2 100%);
          border: 1px solid rgba(192, 57, 43, 0.08);
        }

        .stat span {
          display: block;
          margin-bottom: 6px;
          color: #a9a9a9;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .stat strong {
          color: #151515;
          font-size: 24px;
          font-weight: 700;
        }

        .stat small {
          color: #c0392b;
          font-size: 14px;
          font-weight: 700;
        }

        .map {
          overflow: hidden;
          border-radius: 18px;
          border: 1px solid #eee;
          margin-bottom: 1.3rem;
        }

        .map iframe {
          display: block;
        }
          .map-link {
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 1.3rem;
  padding: 12px;

  border-radius: 12px;

  background: #fff3f2;

  color: #c0392b;
  text-decoration: none;

  font-size: 15px;
  font-weight: 800;

  letter-spacing: 2px;
  text-transform: uppercase;

  transition: all .3s ease;
}

.map-link:hover {
  background: #c0392b;
  color: white;
}

        .actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .actions button,
        .actions a {
          min-height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          text-decoration: none;
          color: #fff;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .actions button {
          background: #c0392b;
        }

        .actions a {
          background: #25d366;
        }

        .actions button:hover,
        .actions a:hover {
          transform: translateY(-3px);
          filter: brightness(0.96);
        }

        .lightbox {
          position: fixed;
          inset: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.95);
        }

        .lightbox img {
          max-width: 90vw;
          max-height: 90vh;
          object-fit: contain;
        }

        .lightbox video {
          width: 80vw;
          max-width: 900px;
          aspect-ratio: 16 / 9;
        }

        .nav,
        .close {
          position: absolute;
          border: none;
          color: #fff;
          cursor: pointer;
        }

        .nav {
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          font-size: 22px;
        }

        .prev {
          left: 2rem;
        }

        .next {
          right: 2rem;
        }

        .close {
          top: 1.5rem;
          right: 1.5rem;
          background: transparent;
          font-size: 34px;
        }

        .counter {
          position: absolute;
          bottom: 1.5rem;
          left: 50%;
          transform: translateX(-50%);
          color: rgba(255, 255, 255, 0.55);
          font-size: 16px;
          letter-spacing: 2px;
        }

        @media (max-width: 980px) {
          .project-card {
            grid-template-columns: 1fr;
          }

          .info-card {
            position: relative;
            top: auto;
          }

          .main-image {
            height: 440px;
          }
        }

        @media (max-width: 640px) {
          .project-section {
            padding: 4rem 1rem;
          }

          .header {
            align-items: flex-start;
            flex-direction: column;
          }

          .status {
            width: 100%;
            text-align: center;
          }

          .main-image {
            height: 330px;
            border-radius: 22px 22px 8px 8px;
          }

          .thumb {
            height: 95px;
          }

          .info-card {
            padding: 1.4rem;
          }

          .stats-grid,
          .actions {
            grid-template-columns: 1fr;
          }

          .video-button {
            flex-direction: column;
            padding: 10px;
          }

          .video-button span:last-child {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}