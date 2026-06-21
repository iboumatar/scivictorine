'use client'
import { useState, useEffect } from 'react'

export default function ServicesPage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 300)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main>

      {/* HERO */}
      <section style={{position:'relative',height:'440px',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:'-5%',backgroundImage:"url('/images/services/hero-services.jpg')",backgroundSize:'110%',backgroundPosition:'center 30%'}}/>
        <div style={{position:'relative',zIndex:2,height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',padding:'0 4rem'}}>
          <div style={{fontSize:'14px',letterSpacing:'4px',textTransform:'uppercase',color:'#fff',marginBottom:'12px',textShadow:'0 1px 6px rgba(0,0,0,0.8)'}}>SCI Victorine Immo</div>
          <div style={{width:'40px',height:'3px',background:'#c0392b',marginBottom:'16px'}}/>
          <h1 style={{fontSize:'58px',fontWeight:'900',color:'#fff',lineHeight:'1.1',marginBottom:'12px',textShadow:'0 2px 12px rgba(0,0,0,0.8)'}}>Nos <span style={{color:'#e74c3c'}}>Services</span></h1>
          <p style={{fontSize:'20px',color:'#fff',maxWidth:'500px',lineHeight:'1.8',textShadow:'0 1px 6px rgba(0,0,0,0.9)'}}>Des solutions immobilières complètes et personnalisées pour tous vos projets au Sénégal.</p>
        </div>
      </section>

      {/* NAV STICKY */}
      <div style={{
        background: scrolled ? '#1a0000' : '#fff',
        borderBottom: scrolled ? '1px solid #c0392b33' : '1px solid #eee',
        padding:'0 4rem',
        display:'flex',
        gap:0,
        overflowX:'auto',
        position:'sticky',
        top:'84px',
        zIndex:10,
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.2)' : '0 2px 10px rgba(0,0,0,0.06)',
        transition:'all 0.3s ease'
      }}>
        {['Construction','Appartements','Terrains & Lotissement','Financement','Fiscal','Conseil juridique'].map((item,i)=>(
          <a key={i} href={`#service-${i+1}`} style={{
            padding:'1.2rem 1.5rem',
            fontSize:'15px',
            fontWeight:'700',
            letterSpacing:'2px',
            textTransform:'uppercase',
            color: scrolled ? 'rgba(255,255,255,0.6)' : '#888',
            textDecoration:'none',
            borderBottom:'3px solid transparent',
            whiteSpace:'nowrap',
            transition:'all 0.2s'
          }}
            onMouseEnter={e=>{e.currentTarget.style.color='#c0392b';e.currentTarget.style.borderBottomColor='#c0392b'}}
            onMouseLeave={e=>{e.currentTarget.style.color=scrolled?'rgba(255,255,255,0.6)':'#888';e.currentTarget.style.borderBottomColor='transparent'}}>
            {item}
          </a>
        ))}
      </div>

      {/* SERVICE 1 */}
      <section id="service-1" style={{padding:'5rem 4rem',background:'#fff'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'4rem',alignItems:'center'}}>
          <img src="/images/services/construction.jpg" alt="Construction" style={{height:'340px',objectFit:'cover',width:'100%'}}/>
          <div>
            <div style={{fontSize:'96px',fontWeight:'900',color:'#f5f5f5',lineHeight:1,marginBottom:'-20px'}}>01</div>
            <div style={{fontSize:'14px',letterSpacing:'4px',textTransform:'uppercase',color:'#c0392b',marginBottom:'10px'}}>Notre expertise</div>
            <h2 style={{fontSize:'34px',fontWeight:'900',color:'#1a1a1a',marginBottom:'16px'}}>Construction d'immeubles</h2>
            <div style={{width:'40px',height:'2px',background:'#c0392b',marginBottom:'20px'}}/>
            <p style={{fontSize:'19px',color:'#666',lineHeight:'2',marginBottom:'1.2rem'}}>SCI Victorine Immo prend en charge la conception et la réalisation complète de vos projets de construction. De l'étude de faisabilité à la livraison, nous assurons un suivi rigoureux à chaque étape.</p>
            <p style={{fontSize:'19px',color:'#666',lineHeight:'2',marginBottom:'1.5rem'}}>Nous travaillons avec des architectes et des entreprises BTP de référence pour garantir des constructions aux standards internationaux.</p>
            <div style={{display:'flex',flexDirection:'column',gap:'10px',marginBottom:'2rem'}}>
              {['Études de faisabilité et plans architecturaux','Sélection et coordination des entreprises BTP','Suivi de chantier et contrôle qualité','Respect des délais et du budget'].map((p,i)=>(
                <div key={i} style={{display:'flex',alignItems:'center',gap:'10px'}}>
                  <div style={{width:'6px',height:'6px',borderRadius:'50%',background:'#c0392b',flexShrink:0}}/>
                  <span style={{fontSize:'18px',color:'#444'}}>{p}</span>
                </div>
              ))}
            </div>
            <button style={{background:'#c0392b',color:'#fff',border:'none',fontSize:'15px',fontWeight:'700',letterSpacing:'2px',textTransform:'uppercase',padding:'12px 28px',cursor:'pointer'}}>Demander un devis</button>
          </div>
        </div>
      </section>

      <hr style={{border:'none',borderTop:'1px solid #eee',margin:'0 4rem'}}/>

      {/* SERVICE 2 */}
      <section id="service-2" style={{padding:'5rem 4rem',background:'#fafafa'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'4rem',alignItems:'center'}}>
          <div>
            <div style={{fontSize:'96px',fontWeight:'900',color:'#f0f0f0',lineHeight:1,marginBottom:'-20px'}}>02</div>
            <div style={{fontSize:'14px',letterSpacing:'4px',textTransform:'uppercase',color:'#c0392b',marginBottom:'10px'}}>Résidentiel</div>
            <h2 style={{fontSize:'34px',fontWeight:'900',color:'#1a1a1a',marginBottom:'16px'}}>Vente d'appartements</h2>
            <div style={{width:'40px',height:'2px',background:'#c0392b',marginBottom:'20px'}}/>
            <p style={{fontSize:'19px',color:'#666',lineHeight:'2',marginBottom:'1.2rem'}}>Nous proposons une large gamme d'appartements modernes et fonctionnels dans les quartiers les plus prisés de Dakar et des principales villes du Sénégal.</p>
            <p style={{fontSize:'19px',color:'#666',lineHeight:'2',marginBottom:'1.5rem'}}>Chaque appartement est conçu pour offrir confort, qualité et praticité, avec des prestations adaptées à tous les profils et budgets.</p>
            <div style={{display:'flex',flexDirection:'column',gap:'10px',marginBottom:'2rem'}}>
              {['Studios, F2, F3, F4 et duplex disponibles','Finitions premium et matériaux de qualité','Localisation dans des quartiers stratégiques','Accompagnement pour le financement bancaire'].map((p,i)=>(
                <div key={i} style={{display:'flex',alignItems:'center',gap:'10px'}}>
                  <div style={{width:'6px',height:'6px',borderRadius:'50%',background:'#c0392b',flexShrink:0}}/>
                  <span style={{fontSize:'18px',color:'#444'}}>{p}</span>
                </div>
              ))}
            </div>
            <button style={{background:'#c0392b',color:'#fff',border:'none',fontSize:'15px',fontWeight:'700',letterSpacing:'2px',textTransform:'uppercase',padding:'12px 28px',cursor:'pointer'}}>Voir les biens</button>
          </div>
          <img src="/images/services/appartement.jpg" alt="Appartements" style={{height:'340px',objectFit:'cover',width:'100%'}}/>
        </div>
      </section>

      <hr style={{border:'none',borderTop:'1px solid #eee',margin:'0 4rem'}}/>

      {/* SERVICE 3 */}
      <section id="service-3" style={{padding:'5rem 4rem',background:'#fff'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'4rem',alignItems:'center'}}>
          <img src="/images/services/terrain.jpg" alt="Terrains & Lotissement" style={{height:'340px',objectFit:'cover',width:'100%'}}/>
          <div>
            <div style={{fontSize:'96px',fontWeight:'900',color:'#f5f5f5',lineHeight:1,marginBottom:'-20px'}}>03</div>
            <div style={{fontSize:'14px',letterSpacing:'4px',textTransform:'uppercase',color:'#c0392b',marginBottom:'10px'}}>Foncier & Aménagement</div>
            <h2 style={{fontSize:'34px',fontWeight:'900',color:'#1a1a1a',marginBottom:'16px'}}>Terrains & Lotissement</h2>
            <div style={{width:'40px',height:'2px',background:'#c0392b',marginBottom:'20px'}}/>
            <p style={{fontSize:'19px',color:'#666',lineHeight:'2',marginBottom:'1.2rem'}}>Nous disposons d'un large portefeuille de terrains viabilisés dans les zones à fort potentiel de croissance au Sénégal, et réalisons des opérations de lotissement conformes aux normes urbanistiques en vigueur, de l'acquisition foncière à la viabilisation des lots.</p>
            <p style={{fontSize:'19px',color:'#666',lineHeight:'2',marginBottom:'1.5rem'}}>Tous nos terrains et lots sont sécurisés juridiquement avec des titres fonciers en règle pour vous garantir une transaction sans risque.</p>
            <div style={{display:'flex',flexDirection:'column',gap:'10px',marginBottom:'2rem'}}>
              {['Terrains viabilisés et titrés','Lotissements conformes aux normes d\'urbanisme','Sécurisation juridique complète','Accompagnement notarial inclus'].map((p,i)=>(
                <div key={i} style={{display:'flex',alignItems:'center',gap:'10px'}}>
                  <div style={{width:'6px',height:'6px',borderRadius:'50%',background:'#c0392b',flexShrink:0}}/>
                  <span style={{fontSize:'18px',color:'#444'}}>{p}</span>
                </div>
              ))}
            </div>
            <button style={{background:'#c0392b',color:'#fff',border:'none',fontSize:'15px',fontWeight:'700',letterSpacing:'2px',textTransform:'uppercase',padding:'12px 28px',cursor:'pointer'}}>Voir les terrains</button>
          </div>
        </div>
      </section>

      <hr style={{border:'none',borderTop:'1px solid #eee',margin:'0 4rem'}}/>

      {/* SERVICE 4 */}
      <section id="service-4" style={{padding:'5rem 4rem',background:'#fafafa'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'4rem',alignItems:'center'}}>
          <div>
            <div style={{fontSize:'96px',fontWeight:'900',color:'#f0f0f0',lineHeight:1,marginBottom:'-20px'}}>04</div>
            <div style={{fontSize:'14px',letterSpacing:'4px',textTransform:'uppercase',color:'#c0392b',marginBottom:'10px'}}>Accompagnement</div>
            <h2 style={{fontSize:'34px',fontWeight:'900',color:'#1a1a1a',marginBottom:'16px'}}>Recherche de financement</h2>
            <div style={{width:'40px',height:'2px',background:'#c0392b',marginBottom:'20px'}}/>
            <p style={{fontSize:'19px',color:'#666',lineHeight:'2',marginBottom:'1.2rem'}}>Nous accompagnons nos clients dans la recherche et le montage de leurs dossiers de financement immobilier. Grâce à notre réseau de partenaires bancaires, nous facilitons l'accès au crédit.</p>
            <p style={{fontSize:'19px',color:'#666',lineHeight:'2',marginBottom:'1.5rem'}}>Notre équipe vous guide à travers les différentes options de financement disponibles pour trouver la solution la plus adaptée à votre situation.</p>
            <div style={{display:'flex',flexDirection:'column',gap:'10px',marginBottom:'2rem'}}>
              {["Analyse de votre capacité de financement","Montage et optimisation du dossier bancaire","Mise en relation avec nos partenaires bancaires","Suivi jusqu'à l'obtention du prêt"].map((p,i)=>(
                <div key={i} style={{display:'flex',alignItems:'center',gap:'10px'}}>
                  <div style={{width:'6px',height:'6px',borderRadius:'50%',background:'#c0392b',flexShrink:0}}/>
                  <span style={{fontSize:'18px',color:'#444'}}>{p}</span>
                </div>
              ))}
            </div>
            <button style={{background:'#c0392b',color:'#fff',border:'none',fontSize:'15px',fontWeight:'700',letterSpacing:'2px',textTransform:'uppercase',padding:'12px 28px',cursor:'pointer'}}>Prendre RDV</button>
          </div>
          <img src="/images/services/financement.jpg" alt="Financement" style={{height:'340px',objectFit:'cover',width:'100%'}}/>
        </div>
      </section>

      <hr style={{border:'none',borderTop:'1px solid #eee',margin:'0 4rem'}}/>

      {/* SERVICE 5 */}
      <section id="service-5" style={{padding:'5rem 4rem',background:'#fff'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'4rem',alignItems:'center'}}>
          <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=700&q=80" alt="Fiscal" style={{height:'340px',objectFit:'cover',width:'100%'}}/>
          <div>
            <div style={{fontSize:'96px',fontWeight:'900',color:'#f5f5f5',lineHeight:1,marginBottom:'-20px'}}>05</div>
            <div style={{fontSize:'14px',letterSpacing:'4px',textTransform:'uppercase',color:'#c0392b',marginBottom:'10px'}}>Fiscal</div>
            <h2 style={{fontSize:'34px',fontWeight:'900',color:'#1a1a1a',marginBottom:'16px'}}>Encadrement fiscal</h2>
            <div style={{width:'40px',height:'2px',background:'#c0392b',marginBottom:'20px'}}/>
            <p style={{fontSize:'19px',color:'#666',lineHeight:'2',marginBottom:'1.2rem'}}>Notre service d'encadrement fiscal vous accompagne dans la gestion et l'optimisation fiscale de vos investissements immobiliers. Nous vous aidons à comprendre et respecter vos obligations fiscales.</p>
            <p style={{fontSize:'19px',color:'#666',lineHeight:'2',marginBottom:'1.5rem'}}>En partenariat avec des notaires et experts fiscaux, nous sécurisons chaque transaction pour vous offrir une tranquillité d'esprit totale.</p>
            <div style={{display:'flex',flexDirection:'column',gap:'10px',marginBottom:'2rem'}}>
              {["Conseil en optimisation fiscale immobilière","Accompagnement dans les démarches administratives","Déclarations et obligations fiscales sécurisées","Partenariat avec experts fiscaux agréés"].map((p,i)=>(
                <div key={i} style={{display:'flex',alignItems:'center',gap:'10px'}}>
                  <div style={{width:'6px',height:'6px',borderRadius:'50%',background:'#c0392b',flexShrink:0}}/>
                  <span style={{fontSize:'18px',color:'#444'}}>{p}</span>
                </div>
              ))}
            </div>
            <button style={{background:'#c0392b',color:'#fff',border:'none',fontSize:'15px',fontWeight:'700',letterSpacing:'2px',textTransform:'uppercase',padding:'12px 28px',cursor:'pointer'}}>Nous contacter</button>
          </div>
        </div>
      </section>

      <hr style={{border:'none',borderTop:'1px solid #eee',margin:'0 4rem'}}/>

      {/* SERVICE 6 */}
      <section id="service-6" style={{padding:'5rem 4rem',background:'#fafafa'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'4rem',alignItems:'center'}}>
          <div>
            <div style={{fontSize:'96px',fontWeight:'900',color:'#f0f0f0',lineHeight:1,marginBottom:'-20px'}}>06</div>
            <div style={{fontSize:'14px',letterSpacing:'4px',textTransform:'uppercase',color:'#c0392b',marginBottom:'10px'}}>Juridique</div>
            <h2 style={{fontSize:'34px',fontWeight:'900',color:'#1a1a1a',marginBottom:'16px'}}>Conseil et veille juridique</h2>
            <div style={{width:'40px',height:'2px',background:'#c0392b',marginBottom:'20px'}}/>
            <p style={{fontSize:'19px',color:'#666',lineHeight:'2',marginBottom:'1.2rem'}}>Notre service de conseil juridique accompagne vos opérations immobilières à chaque étape, en assurant un suivi réglementaire rigoureux et une veille juridique constante.</p>
            <p style={{fontSize:'19px',color:'#666',lineHeight:'2',marginBottom:'1.5rem'}}>Nous anticipons les risques liés à vos transactions pour vous garantir des opérations parfaitement sécurisées sur le plan juridique.</p>
            <div style={{display:'flex',flexDirection:'column',gap:'10px',marginBottom:'2rem'}}>
              {["Conseil juridique sur vos opérations immobilières","Veille réglementaire et anticipation des risques","Sécurisation juridique des transactions","Accompagnement par des juristes spécialisés"].map((p,i)=>(
                <div key={i} style={{display:'flex',alignItems:'center',gap:'10px'}}>
                  <div style={{width:'6px',height:'6px',borderRadius:'50%',background:'#c0392b',flexShrink:0}}/>
                  <span style={{fontSize:'18px',color:'#444'}}>{p}</span>
                </div>
              ))}
            </div>
            <button style={{background:'#c0392b',color:'#fff',border:'none',fontSize:'15px',fontWeight:'700',letterSpacing:'2px',textTransform:'uppercase',padding:'12px 28px',cursor:'pointer'}}>Nous contacter</button>
          </div>
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&q=80" alt="Conseil juridique" style={{height:'340px',objectFit:'cover',width:'100%'}}/>
        </div>
      </section>

      {/* CTA */}
      <section style={{background:'#c0392b',padding:'4rem',textAlign:'center'}}>
        <h2 style={{fontSize:'34px',fontWeight:'900',color:'#fff',marginBottom:'12px'}}>Vous avez un projet immobilier ?</h2>
        <p style={{fontSize:'19px',color:'rgba(255,255,255,0.75)',marginBottom:'2rem'}}>Contactez-nous pour un accompagnement personnalisé et gratuit.</p>
        <button style={{background:'#fff',color:'#c0392b',border:'none',fontSize:'15px',fontWeight:'700',letterSpacing:'2px',textTransform:'uppercase',padding:'14px 32px',cursor:'pointer'}}>Prendre rendez-vous</button>
      </section>

    </main>
  )
}