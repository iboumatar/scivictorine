'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [hovered, setHovered] = useState(null)
  const [hovContact, setHovContact] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const linkStyle = (id) => ({
    color: hovered === id ? '#c0392b' : '#666',
    textDecoration: 'none',
    fontSize:'15px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    fontWeight: '900',
    paddingBottom: '4px',
    borderBottom: hovered === id ? '3px solid #c0392b' : '3px solid transparent',
    transition: 'all 0.2s',
  })

  const navItems = [
    { id: 'accueil', href: '/', label: 'Accueil' },
    { id: 'services', href: '/services', label: 'Services' },
    { id: 'projets', href: '/projets', label: 'Réalisations' },
    { id: 'about', href: '/about', label: 'À propos' },
    { id: 'contact', href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <style jsx>{`
        .navbar-desktop {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .navbar-hamburger {
          background: transparent;
          border: none;
          font-size: 28px;
          cursor: pointer;
          color: #666;
          padding: 0;
          margin-left: auto;
        }

        .navbar-contact-desktop {
          display: block;
          text-decoration: none;
        }

        @media (max-width: 1023px) {
          .navbar-desktop {
            display: none !important;
          }

          .navbar-contact-desktop {
            display: none !important;
            visibility: hidden !important;
            width: 0 !important;
            height: 0 !important;
            overflow: hidden !important;
          }

          .navbar-hamburger {
            display: block;
            margin-left: auto;
          }
        }

        @media (min-width: 1024px) {
          .navbar-desktop {
            display: flex;
          }

          .navbar-contact-desktop {
            display: block;
            visibility: visible;
          }

          .navbar-hamburger {
            display: none;
          }
        }
      `}</style>

      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 'clamp(0.8rem, 3vw, 1.2rem) clamp(1rem, 5vw, 3rem)',
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
            style={{ height: 'clamp(40px, 8vw, 60px)', width: 'auto', objectFit: 'contain', cursor: 'pointer' }}
          />
        </Link>

        {/* Liens navigation - Desktop */}
        <ul className="navbar-desktop">
          {navItems.map((item) => (
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

        {/* Bouton Nous contacter - Desktop */}
        <Link href="/contact" className="navbar-contact-desktop">
          <button
            onMouseEnter={() => setHovContact(true)}
            onMouseLeave={() => setHovContact(false)}
            style={{
              background: hovContact ? '#fff' : '#c0392b',
              color: hovContact ? '#c0392b' : '#fff',
              border: '2px solid #c0392b',
              padding: '10px 22px',
              fontSize:'14px',
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

        {/* Menu hamburger - Mobile */}
        <button
          className="navbar-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Menu mobile */}
        {menuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: '#fff',
            borderBottom: '1px solid #eee',
            display: 'flex',
            flexDirection: 'column',
            gap: 0,
            padding: '1rem',
            zIndex: 99,
          }}>
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  padding: '12px 0',
                  color: '#666',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: '700',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  borderBottom: '1px solid #f0f0f0',
                }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              style={{
                padding: '12px 0',
                textDecoration: 'none',
                marginTop: '8px',
              }}
            >
              <button style={{
                background: '#c0392b',
                color: '#fff',
                border: '2px solid #c0392b',
                padding: '10px 22px',
                fontSize: '14px',
                fontWeight: '700',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                width: '100%',
              }}>
                Nous contacter
              </button>
            </Link>
          </div>
        )}

      </nav>
    </>
  )
}