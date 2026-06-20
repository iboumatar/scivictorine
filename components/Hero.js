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
    <section style={{ position: 'relative', minHeight: 'calc(100vh - 96px)', height: 'calc(100vh - 96px)', overflow: 'hidden' }}>
      {slides.map((slide, i) => (
        <div key={i} style={{
          position: 'absolute', inset: 0,
          opacity: i === cur ? 1 : 0,
          transition: 'opacity 0.9s ease',
        }}>
          {/* Photo sans aucun filtre */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} />

          {/* Texte directement sur la photo avec ombres */}
          <div style={{
            position: 'relative', zIndex: 2,
            height: '100%', display: 'flex',
            flexDirection: 'column', justifyContent: 'center',
            padding: '0 4rem 0 8rem', maxWidth: '580px',
          }}>
            <div style={{
              width: '40px', height: '2px', background: '#c0392b',
              marginBottom: '1.2rem',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))'
            }} />
            <div style={{
  fontSize:'18px', letterSpacing: '4px',
  textTransform: 'uppercase', color: '#fff',
  marginBottom: '1rem', fontWeight: '900',
  background: '#c0392b',
  display: 'inline-block',
  padding: '4px 12px',
}}>
  {slide.badge}
</div>

            <h1 style={{
              fontSize:'46px', fontWeight: '900', color: '#fff',
              letterSpacing: '2px', lineHeight: '1.2', marginBottom: '1rem',
              textShadow: '0 2px 12px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,0.9)',
            }}>
              {slide.title}<br />
              <span style={{ color: '#e74c3c' }}>{slide.highlight}</span>
              {slide.suite ? ` ${slide.suite}` : ''}
            </h1>
            <p style={{
              fontSize:'19px', color: '#fff',
              lineHeight: '1.9', marginBottom: '2rem',
              textShadow: '0 1px 6px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.8)',
              fontWeight: '700',
            }}>
              {slide.description}
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                onClick={() => router.push(slide.btn1.href)}
                style={{ background: '#c0392b', color: '#fff', border: 'none', padding: '13px 30px', fontSize:'15px', letterSpacing: '2px', textTransform: 'uppercase', cursor: 'pointer', transition: 'opacity 0.2s', boxShadow: '0 4px 15px rgba(0,0,0,0.4)' }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                {slide.btn1.label}
              </button>
              <button
                onClick={() => router.push(slide.btn2.href)}
                style={{ background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.8)', padding: '13px 30px', fontSize:'15px', letterSpacing: '2px', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.2s', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#c0392b'; e.currentTarget.style.background = '#c0392b' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.8)'; e.currentTarget.style.background = 'transparent' }}
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
        style={{ position: 'absolute', left: '2rem', top: '50%', transform: 'translateY(-50%)', zIndex: 10, background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', width: '46px', height: '46px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize:'19px', transition: 'all 0.2s' }}
        onMouseEnter={e => { e.currentTarget.style.background = '#c0392b'; e.currentTarget.style.borderColor = '#c0392b' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)' }}
      >←</button>

      {/* Flèche droite */}
      <button
        onClick={() => goTo(cur + 1)}
        style={{ position: 'absolute', right: '2rem', top: '50%', transform: 'translateY(-50%)', zIndex: 10, background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', width: '46px', height: '46px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize:'19px', transition: 'all 0.2s' }}
        onMouseEnter={e => { e.currentTarget.style.background = '#c0392b'; e.currentTarget.style.borderColor = '#c0392b' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)' }}
      >→</button>

      {/* Dots */}
      <div style={{ position: 'absolute', bottom: '2rem', left: '4rem', display: 'flex', gap: '8px', zIndex: 10 }}>
        {slides.map((_, i) => (
          <div key={i} onClick={() => goTo(i)} style={{
            width: i === cur ? '42px' : '24px', height: '2px',
            background: i === cur ? '#c0392b' : 'rgba(255,255,255,0.5)',
            cursor: 'pointer', transition: 'all 0.3s'
          }} />
        ))}
      </div>

      {/* Compteur */}
      <div style={{ position: 'absolute', bottom: '2rem', right: '2rem', fontSize:'15px', color: 'rgba(255,255,255,0.8)', letterSpacing: '3px', zIndex: 10 }}>
        <span style={{ color: '#e74c3c' }}>{String(cur + 1).padStart(2, '0')}</span> / {String(slides.length).padStart(2, '0')}
      </div>
    </section>
  )
}