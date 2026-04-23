'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [hovered, setHovered] = useState(null)
  const [hovContact, setHovContact] = useState(false)

  const linkStyle = (id) => ({
    color: hovered === id ? '#c0392b' : '#666',
    textDecoration: 'none',
    fontSize: '11px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    fontWeight: '900',
    paddingBottom: '4px',
    borderBottom: hovered === id ? '3px solid #c0392b' : '3px solid transparent',
    transition: 'all 0.2s',
  })

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1.2rem 3rem',
      background: '#fff',
      borderBottom: '1px solid #eee',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>

      {/* Logo cliquable → accueil */}
      <Link href="/">
        <img
          src="/logos/logo-sci.png"
          alt="SCI Victorine Immo"
          style={{ height: '60px', width: 'auto', objectFit: 'contain', cursor: 'pointer' }}
        />
      </Link>

      {/* Liens navigation */}
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
        {[
          { id: 'accueil', href: '/', label: 'Accueil' },
          { id: 'services', href: '/services', label: 'Services' },
          { id: 'projets', href: '/projets', label: 'Réalisations' },
          { id: 'about', href: '/about', label: 'À propos' },
          { id: 'contact', href: '/contact', label: 'Contact' },
        ].map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              style={linkStyle(item.id)}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Bouton Nous contacter avec effet */}
      <Link href="/contact" style={{textDecoration:'none'}}>
        <button
          onMouseEnter={() => setHovContact(true)}
          onMouseLeave={() => setHovContact(false)}
          style={{
            background: hovContact ? '#fff' : '#c0392b',
            color: hovContact ? '#c0392b' : '#fff',
            border: '2px solid #c0392b',
            padding: '10px 22px',
            fontSize: '10px',
            fontWeight: '700',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'all 0.25s ease',
            transform: hovContact ? 'translateY(-2px)' : 'translateY(0)',
            boxShadow: hovContact ? '0 6px 20px rgba(192,57,43,0.25)' : 'none',
          }}>
          Nous contacter
        </button>
      </Link>

    </nav>
  )
}