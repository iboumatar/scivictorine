'use client'

export default function AboutPage() {
  return (
    <main>

      {/* HERO */}
      <section style={{position:'relative',height:'380px',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,backgroundImage:"url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80')",backgroundSize:'cover',backgroundPosition:'center',filter:'brightness(0.35)'}}/>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(to right, rgba(192,57,43,0.7), rgba(0,0,0,0.2))'}}/>
        <div style={{position:'relative',zIndex:2,height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',padding:'0 4rem'}}>
          <div style={{fontSize:'10px',letterSpacing:'4px',textTransform:'uppercase',color:'rgba(255,255,255,0.6)',marginBottom:'12px'}}>SCI Victorine Immo</div>
          <div style={{width:'40px',height:'3px',background:'#c0392b',marginBottom:'16px'}}/>
          <h1 style={{fontSize:'48px',fontWeight:'900',color:'#fff',lineHeight:'1.1',marginBottom:'12px'}}>À propos<br/>de <span style={{color:'#e74c3c'}}>nous</span></h1>
          <p style={{fontSize:'15px',color:'rgba(255,255,255,0.7)',maxWidth:'500px',lineHeight:'1.8'}}>Un acteur de référence pour des opérations foncières encadrées et fiables au Sénégal.</p>
        </div>
      </section>

      {/* QUI SOMMES NOUS */}
      <section style={{padding:'5rem 4rem',background:'#fff'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'4rem',alignItems:'center'}}>
          <div style={{position:'relative'}}>
            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80" alt="équipe" style={{width:'90%',height:'360px',objectFit:'cover',display:'block'}}/>
            <div style={{position:'absolute',bottom:'-15px',right:0,background:'#c0392b',color:'#fff',padding:'1.2rem 1.5rem',textAlign:'center'}}>
              <div style={{fontSize:'26px',fontWeight:'900'}}>30+</div>
              <div style={{fontSize:'9px',letterSpacing:'2px',textTransform:'uppercase',opacity:0.8}}>Ans d'expérience</div>
            </div>
          </div>
          <div>
            <div style={{fontSize:'10px',letterSpacing:'4px',textTransform:'uppercase',color:'#c0392b',marginBottom:'10px'}}>Notre histoire</div>
            <h2 style={{fontSize:'30px',fontWeight:'900',color:'#1a1a1a',marginBottom:'16px'}}>Qui sommes-nous ?</h2>
            <div style={{width:'40px',height:'2px',background:'#c0392b',marginBottom:'20px'}}/>
            <p style={{fontSize:'14px',color:'#666',lineHeight:'2',marginBottom:'1.2rem'}}>La SCI Victorine Immo est née de l'initiative de deux cadres supérieurs expérimentés, issus respectivement du secteur privé et du secteur public.</p>
            <p style={{fontSize:'14px',color:'#666',lineHeight:'2',marginBottom:'1.5rem'}}>Forts de plus de 30 années d'expertise dans les domaines fonciers, ils ont uni leurs compétences pour créer une structure fiable, tournée vers la qualité, la rigueur et l'accompagnement sur mesure des projets immobiliers.</p>
            <div style={{display:'flex',flexDirection:'column',gap:'12px'}}>
              {['Accompagnement personnalisé de A à Z','Projets livrés dans les délais','Service client réactif et disponible'].map((item,i)=>(
                <div key={i} style={{display:'flex',alignItems:'center',gap:'12px'}}>
                  <span style={{color:'#c0392b',fontSize:'16px',fontWeight:'900'}}>→</span>
                  <span style={{fontSize:'14px',fontWeight:'700',color:'#1a1a1a'}}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NOTRE APPROCHE */}
      <section style={{padding:'5rem 4rem',background:'#fdf1f0',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,background:'#fdecea',clipPath:'polygon(0 0, 100% 0, 100% 45%, 0 70%)',zIndex:0}}/>
        <div style={{position:'absolute',inset:0,background:'#f5bbb5',clipPath:'polygon(0 0, 100% 0, 100% 5%, 0 18%)',zIndex:0}}/>
        <div style={{position:'relative',zIndex:1,maxWidth:'1100px',margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'4rem',alignItems:'center'}}>
          <div>
            <div style={{fontSize:'10px',letterSpacing:'4px',textTransform:'uppercase',color:'#c0392b',marginBottom:'10px'}}>Notre méthode</div>
            <h2 style={{fontSize:'30px',fontWeight:'900',color:'#1a1a1a',marginBottom:'16px'}}>Notre Approche</h2>
            <div style={{width:'40px',height:'2px',background:'#c0392b',marginBottom:'20px'}}/>
            <p style={{fontSize:'14px',color:'#666',lineHeight:'2'}}>Nous adoptons une approche globale et personnalisée. Chaque projet est unique, c'est pourquoi nous proposons des solutions sur mesure adaptées à vos besoins.</p>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:'1px'}}>
            {[
              {num:'1',title:'Analyse approfondie de votre besoin',desc:"Écoute attentive et étude détaillée de votre projet immobilier."},
              {num:'2',title:'Conseil stratégique avant tout engagement',desc:"Recommandations claires pour maximiser la valeur de votre investissement."},
              {num:'3',title:'Accompagnement complet',desc:"Suivi technique, financier et juridique tout au long du projet."},
              {num:'4',title:"Suivi rigoureux jusqu'à la livraison",desc:"Contrôle qualité et respect des délais jusqu'à la remise des clés."},
            ].map((s,i)=>(
              <div key={i} style={{background:'rgba(255,255,255,0.95)',padding:'1.2rem 1.5rem',display:'flex',alignItems:'flex-start',gap:'1rem',boxShadow:'0 4px 15px rgba(192,57,43,0.06)',marginBottom:'4px'}}>
                <div style={{width:'32px',height:'32px',borderRadius:'50%',background:'#c0392b',color:'#fff',fontSize:'12px',fontWeight:'900',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>{s.num}</div>
                <div>
                  <div style={{fontSize:'13px',fontWeight:'700',color:'#1a1a1a',marginBottom:'3px'}}>{s.title}</div>
                  <div style={{fontSize:'12px',color:'#888',lineHeight:'1.6'}}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTENAIRES */}
      <section style={{padding:'5rem 4rem',background:'#fff'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto'}}>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'4rem',alignItems:'center',marginBottom:'3rem'}}>
            <div>
              <div style={{fontSize:'10px',letterSpacing:'4px',textTransform:'uppercase',color:'#c0392b',marginBottom:'10px'}}>Un réseau solide</div>
              <h2 style={{fontSize:'30px',fontWeight:'900',color:'#1a1a1a',marginBottom:'16px'}}>Nos Partenaires</h2>
              <div style={{width:'40px',height:'2px',background:'#c0392b',marginBottom:'20px'}}/>
              <p style={{fontSize:'14px',color:'#666',lineHeight:'2'}}>Nous travaillons en collaboration avec des acteurs clés pour vous offrir un service complet et fiable. Ce réseau nous permet de couvrir tous les aspects de votre projet immobilier.</p>
            </div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
              <div style={{border:'2px solid #eee',borderRadius:'4px',padding:'2rem',textAlign:'center',maxWidth:'260px'}}>
                <div style={{fontSize:'11px',color:'#c0392b',letterSpacing:'3px',textTransform:'uppercase',marginBottom:'8px'}}>Notre réseau</div>
                <div style={{fontSize:'36px',fontWeight:'900',color:'#1a1a1a',marginBottom:'4px'}}>6</div>
                <div style={{fontSize:'12px',color:'#888',lineHeight:'1.6'}}>Partenaires de confiance</div>
              </div>
            </div>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(6,1fr)',gap:'1px',background:'#eee',border:'1px solid #eee'}}>
            {[
              {name:'BHS Sénégal',desc:'Banque · Financement',logo:'/logos/bhs.png'},
              {name:'AMSA Assurances',desc:'Assurance · Garanties',logo:'/logos/amsa.png'},
              {name:'Étienne Diène',desc:'Architecture · Design',logo:'/logos/etienne.png'},
              {name:'SCAT Internationale',desc:'Construction · BTP',logo:'/logos/scat.jpeg'},
              {name:'BET-PLUS Sa',desc:"Bureau d'Études Techniques",logo:'/logos/betplus.png'},
              {name:'Dima Groupe',desc:'Immobilier · Promotion',logo:'/logos/dima.png'},
            ].map((p,i)=>(
              <div key={i} style={{background:'#fff',padding:'1.5rem 1rem',textAlign:'center',cursor:'pointer',transition:'background 0.2s'}}
                onMouseEnter={e=>e.currentTarget.style.background='#fdecea'}
                onMouseLeave={e=>e.currentTarget.style.background='#fff'}>
                <div style={{height:'60px',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'12px'}}>
                  <img src={p.logo} alt={p.name} style={{maxWidth:'110px',maxHeight:'50px',objectFit:'contain'}}/>
                </div>
                <div style={{width:'24px',height:'1px',background:'#e0b0ad',margin:'0 auto 10px'}}/>
                <div style={{fontSize:'11px',fontWeight:'700',color:'#1a1a1a',marginBottom:'4px'}}>{p.name}</div>
                <div style={{fontSize:'10px',color:'#aaa',letterSpacing:'1px'}}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POURQUOI NOUS */}
      <section style={{padding:'5rem 4rem',background:'#1a0000'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto'}}>
          <div style={{textAlign:'center',marginBottom:'3rem'}}>
            <div style={{fontSize:'10px',letterSpacing:'4px',textTransform:'uppercase',color:'#c0392b',marginBottom:'10px'}}>Nos avantages</div>
            <h2 style={{fontSize:'30px',fontWeight:'900',color:'#fff',marginBottom:'10px'}}>Pourquoi nous choisir ?</h2>
            <div style={{width:'40px',height:'2px',background:'#c0392b',margin:'0 auto'}}/>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:'1px',background:'#c0392b22',border:'1px solid #c0392b22'}}>
            {[
              {title:'Expertise du marché sénégalais',icon:<svg viewBox="0 0 24 24" fill="none" stroke="#c0392b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>},
              {title:'Accompagnement de A à Z',icon:<svg viewBox="0 0 24 24" fill="none" stroke="#c0392b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>},
              {title:'Transparence totale',icon:<svg viewBox="0 0 24 24" fill="none" stroke="#c0392b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>},
              {title:'Solutions adaptées à votre budget',icon:<svg viewBox="0 0 24 24" fill="none" stroke="#c0392b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>},
              {title:'Gain de temps et réduction des risques',icon:<svg viewBox="0 0 24 24" fill="none" stroke="#c0392b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><polyline points="20 6 9 17 4 12"/></svg>},
            ].map((w,i)=>(
              <div key={i} style={{background:'#150000',padding:'2rem 1.5rem',textAlign:'center'}}>
                <div style={{width:'48px',height:'48px',borderRadius:'50%',background:'rgba(192,57,43,0.15)',border:'1px solid #c0392b33',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 1rem'}}>{w.icon}</div>
                <div style={{fontSize:'12px',fontWeight:'700',color:'#fff',letterSpacing:'1px',lineHeight:'1.5'}}>{w.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ÉQUIPE */}
      <section style={{padding:'5rem 4rem',background:'#fff'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto'}}>
          <div style={{textAlign:'center',marginBottom:'3rem'}}>
            <div style={{fontSize:'10px',letterSpacing:'4px',textTransform:'uppercase',color:'#c0392b',marginBottom:'10px'}}>Les fondateurs</div>
            <h2 style={{fontSize:'30px',fontWeight:'900',color:'#1a1a1a'}}>Notre Équipe</h2>
            <div style={{width:'40px',height:'2px',background:'#c0392b',margin:'14px auto'}}/>
            <p style={{fontSize:'14px',color:'#888',maxWidth:'500px',margin:'0 auto',lineHeight:'1.8'}}>Deux cadres supérieurs unis par une même vision : offrir un service immobilier d'excellence au Sénégal.</p>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'2rem',maxWidth:'700px',margin:'0 auto'}}>
            {[
              {initials:'VD',name:'Victorine Diallo',role:'Co-fondatrice · Secteur Privé',desc:"Cadre supérieure avec plus de 30 ans d'expertise dans les domaines fonciers et immobiliers du secteur privé."},
              {initials:'MD',name:'Moussa Diop',role:'Co-fondateur · Secteur Public',desc:"Ancien cadre du secteur public, expert en gestion foncière, urbanisme et accompagnement fiscal."},
            ].map((m,i)=>(
              <div key={i} style={{border:'1px solid #eee',borderRadius:'4px',overflow:'hidden',textAlign:'center'}}>
                <div style={{height:'180px',background:'#f5f5f5',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <div style={{width:'80px',height:'80px',borderRadius:'50%',background:'#c0392b22',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'24px',fontWeight:'900',color:'#c0392b'}}>{m.initials}</div>
                </div>
                <div style={{padding:'1.5rem'}}>
                  <div style={{fontSize:'16px',fontWeight:'900',color:'#1a1a1a',marginBottom:'4px'}}>{m.name}</div>
                  <div style={{fontSize:'10px',letterSpacing:'2px',textTransform:'uppercase',color:'#c0392b',marginBottom:'10px'}}>{m.role}</div>
                  <div style={{fontSize:'12px',color:'#888',lineHeight:'1.7'}}>{m.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{background:'#c0392b',padding:'4rem',textAlign:'center'}}>
        <h2 style={{fontSize:'28px',fontWeight:'900',color:'#fff',marginBottom:'12px'}}>Prêt à concrétiser votre projet ?</h2>
        <p style={{fontSize:'14px',color:'rgba(255,255,255,0.75)',marginBottom:'2rem'}}>Notre équipe est disponible pour vous accompagner à chaque étape.</p>
        <button style={{background:'#fff',color:'#c0392b',border:'none',fontSize:'11px',fontWeight:'700',letterSpacing:'2px',textTransform:'uppercase',padding:'14px 32px',cursor:'pointer',margin:'0 8px'}}>Prendre rendez-vous</button>
        <button style={{background:'transparent',color:'#fff',border:'1px solid rgba(255,255,255,0.4)',fontSize:'11px',fontWeight:'700',letterSpacing:'2px',textTransform:'uppercase',padding:'14px 32px',cursor:'pointer',margin:'0 8px'}}>Voir nos projets</button>
      </section>

    </main>
  )
}