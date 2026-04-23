'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const slides = [
  {
    image: '/images/hero/slide-1.jpg',
    badge: 'Construction de prestige',
    title: 'Construire votre',
    highlight: 'avenir',
    suite: 'au Sénégal',
    description: "Conception et réalisation d'immeubles résidentiels et commerciaux aux standards internationaux.",
    btn1: { label: 'Nos projets', href: '/projets' },
    btn2: { label: 'En savoir plus', href: '/services' },
  },
  {
    image: '/images/hero/slide-2.jpg',
    badge: "Vente d'appartements",
    title: 'Des appartements',
    highlight: "d'exception",
    suite: '',
    description: "Un large choix d'appartements modernes dans les quartiers les plus prisés de Dakar.",
    btn1: { label: 'Voir les biens', href: '/projets' },
    btn2: { label: 'Nous contacter', href: '/contact' },
  },
  {
    image: '/images/hero/slide-3.jpg',
    badge: 'Vente de terrains',
    title: 'Investissez dans',
    highlight: 'la terre',
    suite: '',
    description: 'Des terrains viabilisés dans les zones à fort potentiel de croissance.',
    btn1: { label: 'Voir les terrains', href: '/projets' },
    btn2: { label: 'En savoir plus', href: '/services' },
  },
  {
    image: '/images/hero/slide-4.jpg',
    badge: 'Financement & Fiscal',
    title: 'Votre projet',
    highlight: 'financé',
    suite: 'et sécurisé',
    description: 'Recherche de financement, montage de dossiers et encadrement fiscal complet.',
    btn1: { label: 'Prendre RDV', href: '/contact' },
    btn2: { label: 'En savoir plus', href: '/services' },
  },
]

export default function Hero() {
  const [cur, setCur] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const timer = setInterval(() => {
      setCur(prev => (prev + 1) % slides.length)
    }, 5500)
    return () => clearInterval(timer)
  }, [])

  const goTo = (n) => setCur((n + slides.length) % slides.length)

  return (
    <section style={{ position: 'relative', height: '580px', overflow: 'hidden' }}>
      {slides.map((slide, i) => (
        <div key={i} style={{
          position: 'absolute', inset: 0,
          opacity: i === cur ? 1 : 0,
          transition: 'opacity 0.9s ease',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, rgba(255,255,255,0.85) 32%, rgba(255,255,255,0.2) 58%, rgba(255,255,255,0.0) 100%)',          }} />
          <div style={{
            position: 'relative', zIndex: 2,
            height: '100%', display: 'flex',
            flexDirection: 'column', justifyContent: 'center',
            padding: '0 4rem 0 8rem', maxWidth: '620px',
          }}>
            <div style={{ width: '40px', height: '2px', background: '#c0392b', marginBottom: '1.2rem' }} />
            <div style={{ fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', color: '#c0392b', marginBottom: '1rem' }}>
              {slide.badge}
            </div>
            <h1 style={{ fontSize: '38px', fontWeight: '700', color: '#1a1a1a', letterSpacing: '2px', lineHeight: '1.2', marginBottom: '1rem' }}>
              {slide.title}<br />
              <span style={{ color: '#c0392b' }}>{slide.highlight}</span>
              {slide.suite ? ` ${slide.suite}` : ''}
            </h1>
            <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.9', marginBottom: '2rem' }}>
              {slide.description}
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                onClick={() => router.push(slide.btn1.href)}
                style={{ background: '#c0392b', color: '#fff', border: 'none', padding: '13px 30px', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', cursor: 'pointer', transition: 'opacity 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                {slide.btn1.label}
              </button>
              <button
                onClick={() => router.push(slide.btn2.href)}
                style={{ background: 'transparent', color: '#1a1a1a', border: '1px solid #ccc', padding: '13px 30px', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#c0392b'; e.currentTarget.style.color = '#c0392b' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#ccc'; e.currentTarget.style.color = '#1a1a1a' }}
              >
                {slide.btn2.label}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Flèche gauche */}
      <button
        onClick={() => goTo(cur - 1)}
        style={{ position: 'absolute', left: '2rem', top: '40%', transform: 'translateY(-50%)', zIndex: 10, background: '#fff', border: '1px solid #ddd', color: '#c0392b', width: '46px', height: '46px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '16px', transition: 'all 0.2s' }}
        onMouseEnter={e => { e.currentTarget.style.background = '#c0392b'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#c0392b' }}
        onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#c0392b'; e.currentTarget.style.borderColor = '#ddd' }}
      >←</button>

      {/* Flèche droite */}
      <button
        onClick={() => goTo(cur + 1)}
        style={{ position: 'absolute', right: '2rem', top: '40%', transform: 'translateY(-50%)', zIndex: 10, background: '#fff', border: '1px solid #ddd', color: '#c0392b', width: '46px', height: '46px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '16px', transition: 'all 0.2s' }}
        onMouseEnter={e => { e.currentTarget.style.background = '#c0392b'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#c0392b' }}
        onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#c0392b'; e.currentTarget.style.borderColor = '#ddd' }}
      >→</button>

      {/* Dots */}
      <div style={{ position: 'absolute', bottom: '2rem', left: '4rem', display: 'flex', gap: '8px', zIndex: 10 }}>
        {slides.map((_, i) => (
          <div key={i} onClick={() => goTo(i)} style={{
            width: i === cur ? '42px' : '24px', height: '2px',
            background: i === cur ? '#c0392b' : '#ccc',
            cursor: 'pointer', transition: 'all 0.3s'
          }} />
        ))}
      </div>

      {/* Compteur */}
      <div style={{ position: 'absolute', bottom: '2rem', right: '2rem', fontSize: '11px', color: '#bbb', letterSpacing: '3px', zIndex: 10 }}>
        <span style={{ color: '#c0392b' }}>{String(cur + 1).padStart(2, '0')}</span> / {String(slides.length).padStart(2, '0')}
      </div>
    </section>
  )
}