'use client'
import { useState } from 'react'

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
  '/images/projet/photo-13.jpg'
]

export default function ProjectFeature() {
  const [lightbox, setLightbox] = useState(null)
  const [showVideo, setShowVideo] = useState(false)
  const whatsappLink = `https://wa.me/+33612345678?text=${encodeURIComponent("Bonjour, je suis intéressé par la Résidence Victorine.")}`

  const prev = () => setLightbox(l => (l - 1 + photos.length) % photos.length)
  const next = () => setLightbox(l => (l + 1) % photos.length)

  return (
    <section style={{padding:'5rem 3rem',background:'#fff',borderTop:'1px solid #eee'}}>
      <div style={{maxWidth:'1100px',margin:'0 auto'}}>

        {/* Header */}
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:'2rem',flexWrap:'wrap',gap:'1rem'}}>
          <div>
            <div style={{fontSize:'10px',letterSpacing:'4px',textTransform:'uppercase',color:'#c0392b',marginBottom:'8px'}}>À la une</div>
            <h2 style={{fontSize:'28px',fontWeight:'400',color:'#1a1a1a',letterSpacing:'2px'}}>Projet Vedette</h2>
            <div style={{width:'40px',height:'2px',background:'#c0392b',marginTop:'14px'}}/>
          </div>
          <span style={{display:'inline-block',background:'#c0392b',color:'#fff',fontSize:'9px',letterSpacing:'3px',textTransform:'uppercase',padding:'8px 18px'}}>
            En cours de commercialisation
          </span>
        </div>

        {/* Layout principal */}
        <div style={{display:'grid',gridTemplateColumns:'1.3fr 0.7fr',gap:'2rem',alignItems:'start'}}>

          {/* Gauche — galerie */}
          <div>
            {/* Photo principale avec bouton vidéo */}
            <div style={{position:'relative',overflow:'hidden',marginBottom:'4px',cursor:'pointer'}} onClick={()=>setLightbox(0)}>
              <img src={photos[0]} alt="principale" style={{width:'100%',height:'420px',objectFit:'cover',display:'block',transition:'transform 0.4s'}}
                onMouseEnter={e=>e.currentTarget.style.transform='scale(1.02)'}
                onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'}
              />
              <div style={{position:'absolute',inset:0,background:'rgba(0,0,0,0.15)'}}/>
              <div onClick={e=>{e.stopPropagation();setShowVideo(true)}}
                style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',zIndex:2,display:'flex',flexDirection:'column',alignItems:'center',gap:'8px',cursor:'pointer'}}>
                <div style={{width:'60px',height:'60px',borderRadius:'50%',background:'rgba(192,57,43,0.9)',display:'flex',alignItems:'center',justifyContent:'center',border:'3px solid rgba(255,255,255,0.4)',transition:'transform 0.2s'}}
                  onMouseEnter={e=>e.currentTarget.style.transform='scale(1.1)'}
                  onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'}>
                  <span style={{color:'#fff',fontSize:'20px',marginLeft:'3px'}}>▶</span>
                </div>
                <span style={{fontSize:'9px',color:'rgba(255,255,255,0.9)',letterSpacing:'3px',textTransform:'uppercase',background:'rgba(0,0,0,0.4)',padding:'3px 10px'}}>Voir la vidéo</span>
              </div>
            </div>

            {/* Miniatures */}
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'4px'}}>
            {photos.slice(1, 4).map((p,i)=>( 
                <div key={i} style={{position:'relative',overflow:'hidden',cursor:'pointer'}} onClick={()=>setLightbox(i+1)}>
                  <img src={p} alt={`photo ${i+2}`} style={{width:'100%',height:'110px',objectFit:'cover',display:'block',transition:'transform 0.3s'}}
                    onMouseEnter={e=>e.currentTarget.style.transform='scale(1.06)'}
                    onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'}
                  />
                  {i === 2 && (
                    <div style={{position:'absolute',inset:0,background:'rgba(0,0,0,0.55)',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'4px'}}>
                      <span style={{fontSize:'24px',color:'#fff',fontWeight:'300'}}>+9</span>
                      <span style={{fontSize:'9px',color:'rgba(255,255,255,0.85)',letterSpacing:'2px',textTransform:'uppercase'}}>Voir toutes les photos</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Droite — infos */}
          <div style={{position:'sticky',top:'2rem'}}>
            <div style={{fontSize:'24px',fontWeight:'400',color:'#1a1a1a',letterSpacing:'2px',marginBottom:'6px'}}>Résidence Victorine</div>
            <div style={{fontSize:'11px',color:'#c0392b',letterSpacing:'2px',textTransform:'uppercase',marginBottom:'1.2rem'}}>📍 Stèle Mermoz, Dakar — Sénégal</div>
            <div style={{fontSize:'13px',color:'#777',lineHeight:'1.9',marginBottom:'1.5rem',borderLeft:'2px solid #e0b0ad',paddingLeft:'1rem'}}>
              Un immeuble résidentiel haut de gamme offrant des appartements spacieux avec finitions premium et prestations de standing.
            </div>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1px',background:'#eee',border:'1px solid #eee',marginBottom:'1.5rem'}}>
              {[
                {label:'Superficie',value:'150',unit:'m²'},
                {label:'Appartements',value:'7',unit:'unités'},
                {label:'Étages',value:'R+7',unit:''},
                {label:'Livraison',value:'2025',unit:'T1'},
                {label:'Prix à partir de',value:'200M',unit:'FCFA'},
                {label:'Disponibles',value:'1',unit:'restants'},
              ].map((s,i)=>(
                <div key={i} style={{background:'#f9f9f9',padding:'0.9rem 1rem'}}>
                  <div style={{fontSize:'8px',color:'#aaa',letterSpacing:'2px',textTransform:'uppercase',marginBottom:'4px'}}>{s.label}</div>
                  <div style={{fontSize:'16px',fontWeight:'500',color:'#1a1a1a'}}>{s.value} <span style={{fontSize:'10px',color:'#c0392b'}}>{s.unit}</span></div>
                </div>
              ))}
            </div>
            <div style={{marginBottom:'1.2rem',overflow:'hidden',border:'1px solid #eee'}}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.5!2d-17.4833!3d14.7167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172f5b3c5b8d9%3A0x0!2sSt%C3%A8le+Mermoz%2C+Dakar!5e0!3m2!1sfr!2ssn!4v1"
                width="100%" height="150" style={{border:0,display:'block'}} allowFullScreen="" loading="lazy"/>
            </div>
            <div style={{display:'flex',gap:'8px'}}>
              <button style={{flex:1,background:'#c0392b',color:'#fff',border:'none',padding:'14px',fontSize:'10px',letterSpacing:'2px',textTransform:'uppercase',cursor:'pointer'}}>Demander une visite</button>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
                style={{flex:1,background:'#25D366',color:'#fff',padding:'14px',fontSize:'10px',letterSpacing:'2px',textTransform:'uppercase',textDecoration:'none',display:'flex',alignItems:'center',justifyContent:'center',gap:'6px'}}>
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* LIGHTBOX PHOTOS */}
      {lightbox !== null && (
        <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.95)',zIndex:1000,display:'flex',alignItems:'center',justifyContent:'center'}}
          onClick={()=>setLightbox(null)}>
          <button onClick={e=>{e.stopPropagation();prev()}}
            style={{position:'absolute',left:'2rem',top:'50%',transform:'translateY(-50%)',background:'rgba(255,255,255,0.1)',border:'1px solid rgba(255,255,255,0.2)',color:'#fff',width:'50px',height:'50px',borderRadius:'50%',fontSize:'18px',cursor:'pointer'}}>←</button>
          <img src={photos[lightbox]} alt="lightbox"
            style={{maxWidth:'90vw',maxHeight:'90vh',objectFit:'contain'}}
            onClick={e=>e.stopPropagation()}/>
          <button onClick={e=>{e.stopPropagation();next()}}
            style={{position:'absolute',right:'2rem',top:'50%',transform:'translateY(-50%)',background:'rgba(255,255,255,0.1)',border:'1px solid rgba(255,255,255,0.2)',color:'#fff',width:'50px',height:'50px',borderRadius:'50%',fontSize:'18px',cursor:'pointer'}}>→</button>
          <button onClick={()=>setLightbox(null)}
            style={{position:'absolute',top:'1.5rem',right:'1.5rem',background:'transparent',border:'none',color:'#fff',fontSize:'28px',cursor:'pointer'}}>✕</button>
          <div style={{position:'absolute',bottom:'1.5rem',left:'50%',transform:'translateX(-50%)',fontSize:'12px',color:'rgba(255,255,255,0.5)',letterSpacing:'2px'}}>
            {lightbox+1} / {photos.length}
          </div>
        </div>
      )}

      {/* LIGHTBOX VIDEO */}
      {showVideo && (
        <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.95)',zIndex:1000,display:'flex',alignItems:'center',justifyContent:'center'}}
          onClick={()=>setShowVideo(false)}>
          <video controls autoPlay style={{width:'80vw',maxWidth:'900px',aspectRatio:'16/9'}}
            onClick={e=>e.stopPropagation()}>
            <source src="/videos/residence-victorine.mp4" type="video/mp4"/>
          </video>
          <button onClick={()=>setShowVideo(false)}
            style={{position:'absolute',top:'1.5rem',right:'1.5rem',background:'transparent',border:'none',color:'#fff',fontSize:'28px',cursor:'pointer'}}>✕</button>
        </div>
      )}
    </section>
  )
}