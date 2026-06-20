'use client'
import { useState, useEffect } from 'react'

const partners = [
  { src: '/logos/bhs.png', name: 'BHS Sénégal' },
  { src: '/logos/scat.jpeg', name: 'SCAT Internationale' },
  { src: '/logos/dima.png', name: 'Dima Groupe' },
  { src: '/logos/etienne.png', name: 'Etienne Diène' },
  { src: '/logos/betplus.png', name: 'BET-PLUS Sa' },
  { src: '/logos/amsa.png', name: 'AMSA Assurances' },
]

const VISIBLE = 4
const looped = [...partners, ...partners]

export default function Partners() {
  const [cur, setCur] = useState(0)
  const [hovPrev, setHovPrev] = useState(false)
  const [hovNext, setHovNext] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setCur(c => {
        if (c >= partners.length) {
          setIsTransitioning(false)
          setTimeout(() => {
            setCur(0)
            setIsTransitioning(true)
          }, 50)
          return c
        }
        return c + 1
      })
    }, 2500)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCur(c => {
    if (c === 0) return partners.length - 1
    return c - 1
  })

  const next = () => setCur(c => {
    if (c >= partners.length) return 0
    return c + 1
  })

  return (
    <section style={{padding:'5rem 3rem',background:'#fff',borderTop:'1px solid #eee'}}>
      <div style={{textAlign:'center',marginBottom:'3rem',position:'relative',overflow:'hidden'}}>
  <div style={{fontSize:'96px',fontWeight:'900',color:'#f0f0f0',letterSpacing:'8px',textTransform:'uppercase',lineHeight:1,marginBottom:'-15px',userSelect:'none'}}>
    PARTENAIRES
  </div>
  <h2 style={{fontSize:'29px',fontWeight:'700',color:'#1a1a1a',position:'relative',zIndex:1,marginBottom:'16px'}}>
    Nous collaborons avec les <span style={{color:'#c0392b'}}>meilleurs</span>
  </h2>
  <div style={{width:'40px',height:'2px',background:'#c0392b',margin:'0 auto 16px'}}/>
  <p style={{fontSize:'18px',color:'#aaa',maxWidth:'420px',margin:'0 auto',lineHeight:'1.8',letterSpacing:'2px',textTransform:'uppercase'}}>
    Banque · Assurance · Architecture · Bureau d'études
  </p>
</div>

      <div style={{display:'flex',alignItems:'center',gap:'1rem',maxWidth:'1000px',margin:'0 auto'}}>

        {/* Flèche gauche */}
        <button
          onClick={prev}
          onMouseEnter={()=>setHovPrev(true)}
          onMouseLeave={()=>setHovPrev(false)}
          style={{width:'40px',height:'40px',borderRadius:'50%',border:`1px solid ${hovPrev?'#c0392b':'#ddd'}`,background:hovPrev?'#fff0ef':'#fff',color:hovPrev?'#c0392b':'#999',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer',flexShrink:0,fontSize:'17px',transition:'all 0.2s'}}>
          ←
        </button>

        {/* Carrousel */}
        <div style={{flex:1,overflow:'hidden'}}>
          <div style={{
            display:'flex',
            transition: isTransitioning ? 'transform 0.6s ease' : 'none',
            transform:`translateX(-${cur * (100/VISIBLE)}%)`
          }}>
            {looped.map((p,i)=>(
              <div key={i} style={{minWidth:`${100/VISIBLE}%`,padding:'1.5rem 2rem',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'1rem',borderRight:'1px solid #eee'}}>
                <div style={{height:'70px',display:'flex',alignItems:'center',justifyContent:'center',width:'100%'}}>
                  <img src={p.src} alt={p.name} style={{maxWidth:'140px',maxHeight:'60px',objectFit:'contain'}}/>
                </div>
                <div style={{fontSize:'15px',color:'#aaa',letterSpacing:'1px',textAlign:'center'}}>{p.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Flèche droite */}
        <button
          onClick={next}
          onMouseEnter={()=>setHovNext(true)}
          onMouseLeave={()=>setHovNext(false)}
          style={{width:'40px',height:'40px',borderRadius:'50%',border:`1px solid ${hovNext?'#c0392b':'#ddd'}`,background:hovNext?'#fff0ef':'#fff',color:hovNext?'#c0392b':'#999',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer',flexShrink:0,fontSize:'17px',transition:'all 0.2s'}}>
          →
        </button>

      </div>
    </section>
  )
}