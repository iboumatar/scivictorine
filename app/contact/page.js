'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ nom: '', email: '', telephone: '', sujet: '', message: '' })
  const [sent, setSent] = useState(false)
  const whatsappLink = `https://wa.me/+33612345678?text=${encodeURIComponent("Bonjour, je souhaite vous contacter.")}`

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main>

      {/* HERO */}
      <section style={{position:'relative',height:'clamp(280px, 60vh, 360px)',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,backgroundImage:"url('/images/contact/hero.jpg')",backgroundSize:'cover',backgroundPosition:'center'}}/>
        <div style={{position:'relative',zIndex:2,height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',padding:'clamp(1rem, 5vw, 4rem)'}}>
          <div style={{fontSize:'clamp(10px, 2vw, 12px)',letterSpacing:'4px',textTransform:'uppercase',color:'#fff',marginBottom:'12px',textShadow:'0 1px 6px rgba(0,0,0,0.8)'}}>SCI Victorine Immo</div>
          <div style={{width:'40px',height:'3px',background:'#c0392b',marginBottom:'16px'}}/>
          <h1 style={{fontSize:'clamp(28px, 8vw, 48px)',fontWeight:'900',color:'#fff',lineHeight:'1.1',marginBottom:'12px',textShadow:'0 2px 12px rgba(0,0,0,0.8)'}}>Nous <span style={{color:'#e74c3c'}}>contacter</span></h1>
          <p style={{fontSize:'clamp(15px, 3.5vw, 17px)',color:'#fff',maxWidth:'500px',lineHeight:'1.8',textShadow:'0 1px 6px rgba(0,0,0,0.9)'}}>Notre équipe est disponible pour répondre à toutes vos questions et vous accompagner dans vos projets.</p>
        </div>
      </section>

      {/* INFOS + FORMULAIRE */}
      <section style={{padding:'clamp(3rem, 8vw, 5rem) clamp(1rem, 5vw, 4rem)',background:'#fff'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))',gap:'clamp(2rem, 6vw, 5rem)'}}>

          {/* Infos contact */}
          <div>
            <div style={{fontSize:'12px',letterSpacing:'4px',textTransform:'uppercase',color:'#c0392b',marginBottom:'10px'}}>Coordonnées</div>
            <h2 style={{fontSize:'clamp(20px, 5vw, 28px)',fontWeight:'900',color:'#1a1a1a',marginBottom:'16px'}}>Parlons de votre projet</h2>
            <div style={{width:'40px',height:'2px',background:'#c0392b',marginBottom:'2rem'}}/>

            {/* Infos */}
            <div style={{display:'flex',flexDirection:'column',gap:'1.8rem',marginBottom:'2.5rem'}}>
              {[
                {icon:'📍',label:'Adresse',value:'Stèle Mermoz, Dakar — Sénégal'},
                {icon:'📱',label:'Mobile',value:'78 210 90 90'},
                {icon:'📞',label:'Fixe',value:'33 824 66 68'},
                {icon:'✉️',label:'Email',value:'diallohawa@ceris.sn'},
                {icon:'🕐',label:'Horaires',value:'Lun – Ven : 08h00 – 17h00'},
              ].map((item,i)=>(
                <div key={i} style={{display:'flex',gap:'1rem',alignItems:'flex-start'}}>
                  <div style={{width:'44px',height:'44px',borderRadius:'50%',background:'#fff0ef',border:'1px solid #eee',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'18px',flexShrink:0}}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{fontSize:'11px',letterSpacing:'3px',textTransform:'uppercase',color:'#c0392b',marginBottom:'4px'}}>{item.label}</div>
                    <div style={{fontSize:'16px',color:'#1a1a1a',fontWeight:'700'}}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp */}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
              style={{display:'flex',alignItems:'center',gap:'10px',background:'#25D366',color:'#fff',padding:'14px 20px',fontSize:'13px',fontWeight:'700',letterSpacing:'2px',textTransform:'uppercase',textDecoration:'none',marginBottom:'2rem'}}>
              💬 Contacter sur WhatsApp
            </a>

            {/* Carte */}
            <div style={{overflow:'hidden',border:'1px solid #eee'}}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.5!2d-17.4833!3d14.7167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172f5b3c5b8d9%3A0x0!2sSt%C3%A8le+Mermoz%2C+Dakar!5e0!3m2!1sfr!2ssn!4v1"
                width="100%" height="220"
                style={{border:0,display:'block'}}
                allowFullScreen="" loading="lazy"
              />
            </div>
          </div>

          {/* Formulaire */}
          <div>
            <div style={{fontSize:'12px',letterSpacing:'4px',textTransform:'uppercase',color:'#c0392b',marginBottom:'10px'}}>Formulaire</div>
            <h2 style={{fontSize:'28px',fontWeight:'900',color:'#1a1a1a',marginBottom:'16px'}}>Envoyez-nous un message</h2>
            <div style={{width:'40px',height:'2px',background:'#c0392b',marginBottom:'2rem'}}/>

            {sent ? (
              <div style={{background:'#f0fdf4',border:'1px solid #86efac',borderRadius:'4px',padding:'2rem',textAlign:'center'}}>
                <div style={{fontSize:'32px',marginBottom:'12px'}}>✅</div>
                <div style={{fontSize:'18px',fontWeight:'900',color:'#15803d',marginBottom:'8px'}}>Message envoyé !</div>
                <div style={{fontSize:'16px',color:'#166534'}}>Nous vous répondrons dans les plus brefs délais.</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',gap:'1.2rem'}}>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1.2rem'}}>
                  <div>
                    <div style={{fontSize:'11px',letterSpacing:'3px',textTransform:'uppercase',color:'#888',marginBottom:'6px'}}>Nom complet *</div>
                    <input required type="text" placeholder="Votre nom" value={form.nom}
                      onChange={e=>setForm({...form,nom:e.target.value})}
                      style={{width:'100%',background:'#f9f9f9',border:'1px solid #eee',color:'#1a1a1a',padding:'12px 16px',fontSize:'15px',outline:'none',transition:'border-color 0.2s'}}
                      onFocus={e=>e.target.style.borderColor='#c0392b'}
                      onBlur={e=>e.target.style.borderColor='#eee'}
                    />
                  </div>
                  <div>
                    <div style={{fontSize:'11px',letterSpacing:'3px',textTransform:'uppercase',color:'#888',marginBottom:'6px'}}>Email *</div>
                    <input required type="email" placeholder="votre@email.com" value={form.email}
                      onChange={e=>setForm({...form,email:e.target.value})}
                      style={{width:'100%',background:'#f9f9f9',border:'1px solid #eee',color:'#1a1a1a',padding:'12px 16px',fontSize:'15px',outline:'none',transition:'border-color 0.2s'}}
                      onFocus={e=>e.target.style.borderColor='#c0392b'}
                      onBlur={e=>e.target.style.borderColor='#eee'}
                    />
                  </div>
                </div>

                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1.2rem'}}>
                  <div>
                    <div style={{fontSize:'11px',letterSpacing:'3px',textTransform:'uppercase',color:'#888',marginBottom:'6px'}}>Téléphone</div>
                    <input type="tel" placeholder="+221 XX XXX XX XX" value={form.telephone}
                      onChange={e=>setForm({...form,telephone:e.target.value})}
                      style={{width:'100%',background:'#f9f9f9',border:'1px solid #eee',color:'#1a1a1a',padding:'12px 16px',fontSize:'15px',outline:'none',transition:'border-color 0.2s'}}
                      onFocus={e=>e.target.style.borderColor='#c0392b'}
                      onBlur={e=>e.target.style.borderColor='#eee'}
                    />
                  </div>
                  <div>
                    <div style={{fontSize:'11px',letterSpacing:'3px',textTransform:'uppercase',color:'#888',marginBottom:'6px'}}>Sujet *</div>
                    <select required value={form.sujet}
                      onChange={e=>setForm({...form,sujet:e.target.value})}
                      style={{width:'100%',background:'#f9f9f9',border:'1px solid #eee',color:form.sujet?'#1a1a1a':'#aaa',padding:'12px 16px',fontSize:'15px',outline:'none',appearance:'none',transition:'border-color 0.2s'}}
                      onFocus={e=>e.target.style.borderColor='#c0392b'}
                      onBlur={e=>e.target.style.borderColor='#eee'}>
                      <option value="">Choisir un sujet</option>
                      <option value="construction">Construction d'immeuble</option>
                      <option value="appartement">Achat d'appartement</option>
                      <option value="terrain">Achat de terrain</option>
                      <option value="lotissement">Lotissement</option>
                      <option value="financement">Financement</option>
                      <option value="fiscal">Encadrement fiscal</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <div style={{fontSize:'11px',letterSpacing:'3px',textTransform:'uppercase',color:'#888',marginBottom:'6px'}}>Message *</div>
                  <textarea required placeholder="Décrivez votre projet ou votre demande..." value={form.message}
                    onChange={e=>setForm({...form,message:e.target.value})}
                    rows={6}
                    style={{width:'100%',background:'#f9f9f9',border:'1px solid #eee',color:'#1a1a1a',padding:'12px 16px',fontSize:'15px',outline:'none',resize:'none',transition:'border-color 0.2s'}}
                    onFocus={e=>e.target.style.borderColor='#c0392b'}
                    onBlur={e=>e.target.style.borderColor='#eee'}
                  />
                </div>

                <button type="submit"
                  style={{background:'#c0392b',color:'#fff',border:'none',padding:'16px',fontSize:'14px',fontWeight:'700',letterSpacing:'2px',textTransform:'uppercase',cursor:'pointer',transition:'opacity 0.2s'}}
                  onMouseEnter={e=>e.currentTarget.style.opacity='0.9'}
                  onMouseLeave={e=>e.currentTarget.style.opacity='1'}>
                  Envoyer le message →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* BLOC INFOS BAS */}
      <section style={{background:'#f9f9f9',borderTop:'1px solid #eee',padding:'4rem'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1px',background:'#eee',border:'1px solid #eee'}}>
          {[
            {icon:'📍',title:'Notre adresse',desc:'Stèle Mermoz, Dakar\nSénégal'},
            {icon:'📞',title:'Appelez-nous',desc:'78 210 90 90 / 33 824 66 68\nLun – Ven : 8h – 17h'},
            {icon:'✉️',title:'Écrivez-nous',desc:'diallohawa@ceris.sn\nRéponse sous 24h'},
          ].map((item,i)=>(
            <div key={i} style={{background:'#fff',padding:'2.5rem',textAlign:'center'}}>
              <div style={{fontSize:'28px',marginBottom:'1rem'}}>{item.icon}</div>
              <div style={{fontSize:'15px',fontWeight:'900',color:'#1a1a1a',letterSpacing:'1px',textTransform:'uppercase',marginBottom:'10px'}}>{item.title}</div>
              <div style={{width:'24px',height:'2px',background:'#c0392b',margin:'0 auto 12px'}}/>
              <div style={{fontSize:'15px',color:'#888',lineHeight:'1.9',whiteSpace:'pre-line'}}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{background:'#c0392b',padding:'4rem',textAlign:'center'}}>
        <h2 style={{fontSize:'28px',fontWeight:'900',color:'#fff',marginBottom:'12px'}}>Vous préférez être rappelé ?</h2>
        <p style={{fontSize:'16px',color:'rgba(255,255,255,0.75)',marginBottom:'2rem'}}>Laissez-nous vos coordonnées et nous vous recontactons dans les plus brefs délais.</p>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
          style={{display:'inline-flex',alignItems:'center',gap:'10px',background:'#25D366',color:'#fff',padding:'14px 32px',fontSize:'14px',fontWeight:'700',letterSpacing:'2px',textTransform:'uppercase',textDecoration:'none',margin:'0 8px'}}>
          💬 WhatsApp
        </a>
        <button style={{background:'#fff',color:'#c0392b',border:'none',fontSize:'14px',fontWeight:'700',letterSpacing:'2px',textTransform:'uppercase',padding:'14px 32px',cursor:'pointer',margin:'0 8px'}}>
          📞 Nous appeler
        </button>
      </section>

    </main>
  )
}