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
  '/images/projet/photo-13.jpg',
  '/images/projet/photo-14.jpg',
  '/images/projet/photo-15.jpg',
  '/images/projet/photo-16.jpg'
]

export default function ProjetsPage() {
  const [lightbox, setLightbox] = useState(null)
  const [showVideo, setShowVideo] = useState(false)

  const prev = () => setLightbox(l => (l - 1 + photos.length) % photos.length)
  const next = () => setLightbox(l => (l + 1) % photos.length)

  return (
    <main>

      {/* HERO */}
      <section style={{position:'relative',height:'440px',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:'-5%',backgroundImage:"url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1400&q=80')",backgroundSize:'110%',backgroundPosition:'center'}}/>
        <div style={{position:'relative',zIndex:2,height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',padding:'0 4rem'}}>
          <div style={{fontSize:'14px',letterSpacing:'4px',textTransform:'uppercase',color:'#fff',marginBottom:'12px',textShadow:'0 1px 6px rgba(0,0,0,0.8)'}}>SCI Victorine Immo</div>
          <div style={{width:'40px',height:'3px',background:'#c0392b',marginBottom:'16px'}}/>
          <h1 style={{fontSize:'58px',fontWeight:'900',color:'#fff',lineHeight:'1.1',marginBottom:'12px',textShadow:'0 2px 12px rgba(0,0,0,0.8)'}}>Nos <span style={{color:'#e74c3c'}}>Réalisations</span></h1>
          <p style={{fontSize:'20px',color:'#fff',maxWidth:'500px',lineHeight:'1.8',textShadow:'0 1px 6px rgba(0,0,0,0.9)'}}>Découvrez nos projets immobiliers de standing au Sénégal.</p>
        </div>
      </section>

      {/* PROJET HEADER */}
      <section style={{padding:'4rem 4rem 2rem',background:'#fff',maxWidth:'1100px',margin:'0 auto'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',flexWrap:'wrap',gap:'1rem'}}>
          <div>
            <div style={{fontSize:'14px',letterSpacing:'4px',textTransform:'uppercase',color:'#c0392b',marginBottom:'8px'}}>Projet en cours</div>
            <h2 style={{fontSize:'43px',fontWeight:'900',color:'#1a1a1a',marginBottom:'8px'}}>Résidence Victorine</h2>
            <div style={{width:'40px',height:'2px',background:'#c0392b',marginTop:'8px'}}/>
          </div>
          <span style={{background:'#c0392b',color:'#fff',fontSize:'13px',letterSpacing:'3px',textTransform:'uppercase',padding:'8px 18px'}}>
            En cours de commercialisation
          </span>
        </div>
      </section>

      {/* GALERIE */}
      <section style={{padding:'0 4rem 4rem',background:'#fff'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto'}}>

          {/* Photo principale */}
          <div style={{position:'relative',overflow:'hidden',marginBottom:'4px',cursor:'pointer'}} onClick={()=>setLightbox(0)}>
            <img src={photos[0]} alt="Résidence Victorine" style={{width:'100%',height:'500px',objectFit:'cover',display:'block',transition:'transform 0.4s'}}
              onMouseEnter={e=>e.currentTarget.style.transform='scale(1.02)'}
              onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'}
            />
            <div style={{position:'absolute',inset:0,background:'rgba(0,0,0,0.1)'}}/>
            {/* Bouton vidéo */}
            <div onClick={e=>{e.stopPropagation();setShowVideo(true)}}
              style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',zIndex:2,display:'flex',flexDirection:'column',alignItems:'center',gap:'8px',cursor:'pointer'}}>
              <div style={{width:'64px',height:'64px',borderRadius:'50%',background:'rgba(192,57,43,0.9)',display:'flex',alignItems:'center',justifyContent:'center',border:'3px solid rgba(255,255,255,0.4)'}}
                onMouseEnter={e=>e.currentTarget.style.transform='scale(1.1)'}
                onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'}>
                <span style={{color:'#fff',fontSize:'26px',marginLeft:'3px'}}>▶</span>
              </div>
              <span style={{fontSize:'14px',color:'rgba(255,255,255,0.9)',letterSpacing:'3px',textTransform:'uppercase',background:'rgba(0,0,0,0.4)',padding:'3px 12px'}}>Voir la vidéo</span>
            </div>
          </div>

          {/* Miniatures */}
          <div style={{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:'4px'}}>
          {photos.slice(1, 5).map((p,i)=>(
              <div key={i} style={{position:'relative',overflow:'hidden',cursor:'pointer'}} onClick={()=>setLightbox(i+1)}>
                <img src={p} alt={`photo ${i+2}`} style={{width:'100%',height:'130px',objectFit:'cover',display:'block',transition:'transform 0.3s'}}
                  onMouseEnter={e=>e.currentTarget.style.transform='scale(1.06)'}
                  onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'}
                />
                {i === 3 && (
                  <div style={{position:'absolute',inset:0,background:'rgba(0,0,0,0.55)',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'4px'}}>
                    <span style={{fontSize:'29px',color:'#fff',fontWeight:'300'}}>+{photos.length - 5}</span>
                    <span style={{fontSize:'13px',color:'rgba(255,255,255,0.85)',letterSpacing:'2px',textTransform:'uppercase'}}>Voir toutes</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INFOS PROJET */}
      <section style={{padding:'2rem 4rem 5rem',background:'#fff'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto',display:'grid',gridTemplateColumns:'1.3fr 0.7fr',gap:'4rem'}}>

          {/* Description */}
          <div>
            <div style={{fontSize:'14px',letterSpacing:'4px',textTransform:'uppercase',color:'#c0392b',marginBottom:'10px'}}>Description du projet</div>
            <h3 style={{fontSize:'26px',fontWeight:'900',color:'#1a1a1a',marginBottom:'16px'}}>Un immeuble résidentiel d'exception</h3>
            <div style={{width:'40px',height:'2px',background:'#c0392b',marginBottom:'20px'}}/>
            <p style={{fontSize:'19px',color:'#666',lineHeight:'2',marginBottom:'1.2rem'}}>
              La Résidence Victorine est un immeuble résidentiel haut de gamme situé au cœur du quartier prisé de Stèle Mermoz à Dakar. Ce projet emblématique de SCI Victorine Immo incarne notre vision d'un immobilier de qualité, alliant esthétique contemporaine et fonctionnalité.
            </p>
            <p style={{fontSize:'19px',color:'#666',lineHeight:'2',marginBottom:'1.2rem'}}>
              Chaque appartement a été conçu avec soin pour offrir des espaces de vie lumineux, des finitions premium et des équipements modernes. La résidence dispose également d'espaces communs soignés et d'un parking sécurisé.
            </p>
            <p style={{fontSize:'19px',color:'#666',lineHeight:'2',marginBottom:'2rem'}}>
              Idéalement situé à proximité des principales artères de Dakar, ce projet offre un accès facile aux commerces, écoles et transports, tout en bénéficiant d'un environnement calme et résidentiel.
            </p>

            {/* Points forts */}
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem',marginBottom:'2rem'}}>
              {[
                'Appartements spacieux et lumineux',
                'Finitions haut de gamme',
                'Parking sécurisé',
                'Espaces communs aménagés',
                'Sécurité 24h/24',
                'Vue dégagée',
              ].map((item,i)=>(
                <div key={i} style={{display:'flex',alignItems:'center',gap:'10px'}}>
                  <div style={{width:'6px',height:'6px',borderRadius:'50%',background:'#c0392b',flexShrink:0}}/>
                  <span style={{fontSize:'18px',color:'#444'}}>{item}</span>
                </div>
              ))}
            </div>

            {/* Localisation */}
            <div style={{marginBottom:'1.5rem'}}>
              <div style={{fontSize:'14px',letterSpacing:'4px',textTransform:'uppercase',color:'#c0392b',marginBottom:'12px'}}>Localisation</div>
              <div style={{position:'relative',overflow:'hidden',border:'1px solid #eee'}}>
                <iframe
                  src="https://maps.google.com/maps?q=14.706449,-17.475609&z=18&output=embed"
                  width="100%" height="250"
                  style={{border:0,display:'block',pointerEvents:'none'}}
                  allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  href="https://www.google.com/maps?q=14.706449,-17.475609"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ouvrir l'emplacement dans Google Maps"
                  style={{position:'absolute',inset:0,zIndex:1,cursor:'pointer'}}
                />
              </div>
              <a
                href="https://www.google.com/maps?q=14.706449,-17.475609"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'center',
                  marginTop:'10px',
                  padding:'12px',
                  background:'#fff3f2',
                  color:'#c0392b',
                  textDecoration:'none',
                  fontSize:'15px',
                  fontWeight:'800',
                  letterSpacing:'2px',
                  textTransform:'uppercase',
                }}
              >
                📍 Voir l'emplacement exact
              </a>
            </div>
          </div>

          {/* Fiche technique */}
          <div>
            <div style={{fontSize:'14px',letterSpacing:'4px',textTransform:'uppercase',color:'#c0392b',marginBottom:'12px'}}>Fiche technique</div>
            <div style={{display:'grid',gridTemplateColumns:'1fr',gap:'1px',background:'#eee',border:'1px solid #eee',marginBottom:'1.5rem'}}>
              {[
                {label:'Localisation',value:'Stèle Mermoz, Dakar'},
                {label:'Superficie',value:'240 m²'},
                {label:'Appartements',value:'7 unités'},
                {label:'Étages',value:'R+7'},
                {label:'Livraison',value:'2025'},
                {label:'Prix à partir de',value:'195M FCFA'},
                {label:'Disponibilité',value:'5 restants'},
                {label:'Statut',value:'En commercialisation'},
              ].map((s,i)=>(
                <div key={i} style={{background:'#f9f9f9',padding:'1rem 1.2rem',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                  <div style={{fontSize:'14px',color:'#aaa',letterSpacing:'2px',textTransform:'uppercase'}}>{s.label}</div>
                  <div style={{fontSize:'18px',fontWeight:'700',color:'#1a1a1a',textAlign:'right'}}>{s.value}</div>
                </div>
              ))}
            </div>

            {/* Boutons */}
            <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
              <button style={{background:'#c0392b',color:'#fff',border:'none',padding:'14px',fontSize:'15px',fontWeight:'700',letterSpacing:'2px',textTransform:'uppercase',cursor:'pointer',width:'100%'}}>
                Demander une visite
              </button>
              <a href={`https://wa.me/+33612345678?text=${encodeURIComponent("Bonjour, je suis intéressé par la Résidence Victorine.")}`}
                target="_blank" rel="noopener noreferrer"
                style={{background:'#25D366',color:'#fff',padding:'14px',fontSize:'15px',fontWeight:'700',letterSpacing:'2px',textTransform:'uppercase',textDecoration:'none',display:'flex',alignItems:'center',justifyContent:'center',gap:'8px',width:'100%',boxSizing:'border-box'}}>
                💬 Contacter sur WhatsApp
              </a>
              <button style={{background:'transparent',color:'#c0392b',border:'1px solid #e0b0ad',padding:'14px',fontSize:'15px',fontWeight:'700',letterSpacing:'2px',textTransform:'uppercase',cursor:'pointer',width:'100%'}}>
                Télécharger la brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{background:'#c0392b',padding:'4rem',textAlign:'center'}}>
        <h2 style={{fontSize:'34px',fontWeight:'900',color:'#fff',marginBottom:'12px'}}>Intéressé par ce projet ?</h2>
        <p style={{fontSize:'19px',color:'rgba(255,255,255,0.75)',marginBottom:'2rem'}}>Contactez-nous dès maintenant pour plus d'informations ou pour planifier une visite.</p>
        <button style={{background:'#fff',color:'#c0392b',border:'none',fontSize:'15px',fontWeight:'700',letterSpacing:'2px',textTransform:'uppercase',padding:'14px 32px',cursor:'pointer',margin:'0 8px'}}>
          Prendre rendez-vous
        </button>
      </section>

      {/* LIGHTBOX PHOTOS */}
      {lightbox !== null && (
        <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.95)',zIndex:1000,display:'flex',alignItems:'center',justifyContent:'center'}}
          onClick={()=>setLightbox(null)}>
          <button onClick={e=>{e.stopPropagation();prev()}}
            style={{position:'absolute',left:'2rem',top:'50%',transform:'translateY(-50%)',background:'rgba(255,255,255,0.1)',border:'1px solid rgba(255,255,255,0.2)',color:'#fff',width:'50px',height:'50px',borderRadius:'50%',fontSize:'22px',cursor:'pointer'}}>←</button>
          <img src={photos[lightbox]} alt="lightbox"
            style={{maxWidth:'90vw',maxHeight:'90vh',objectFit:'contain'}}
            onClick={e=>e.stopPropagation()}/>
          <button onClick={e=>{e.stopPropagation();next()}}
            style={{position:'absolute',right:'2rem',top:'50%',transform:'translateY(-50%)',background:'rgba(255,255,255,0.1)',border:'1px solid rgba(255,255,255,0.2)',color:'#fff',width:'50px',height:'50px',borderRadius:'50%',fontSize:'22px',cursor:'pointer'}}>→</button>
          <button onClick={()=>setLightbox(null)}
            style={{position:'absolute',top:'1.5rem',right:'1.5rem',background:'transparent',border:'none',color:'#fff',fontSize:'34px',cursor:'pointer'}}>✕</button>
          <div style={{position:'absolute',bottom:'1.5rem',left:'50%',transform:'translateX(-50%)',fontSize:'16px',color:'rgba(255,255,255,0.5)',letterSpacing:'2px'}}>
            {lightbox+1} / {photos.length}
          </div>
        </div>
      )}

      {/* LIGHTBOX VIDEO */}
      {showVideo && (
        <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.95)',zIndex:1000,display:'flex',alignItems:'center',justifyContent:'center'}}
          onClick={()=>setShowVideo(false)}>
          <div style={{width:'80vw',maxWidth:'900px',aspectRatio:'16/9',background:'#111',display:'flex',alignItems:'center',justifyContent:'center'}}
            onClick={e=>e.stopPropagation()}>
            <p style={{color:'#666',fontSize:'19px',letterSpacing:'2px',textTransform:'uppercase'}}>Vidéo de présentation</p>
          </div>
          <button onClick={()=>setShowVideo(false)}
            style={{position:'absolute',top:'1.5rem',right:'1.5rem',background:'transparent',border:'none',color:'#fff',fontSize:'34px',cursor:'pointer'}}>✕</button>
        </div>
      )}

    </main>
  )
}