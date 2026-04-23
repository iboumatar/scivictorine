'use client'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ nom: '', email: '', telephone: '', message: '' })
  const whatsappLink = `https://wa.me/+33612345678?text=${encodeURIComponent("Bonjour, je souhaite vous contacter.")}`

  return (
    <section style={{background:'#1a1a1a',padding:'5rem 3rem',borderTop:'1px solid #c0392b22'}}>
      <div style={{textAlign:'center',marginBottom:'4rem'}}>
        <div style={{fontSize:'10px',letterSpacing:'4px',textTransform:'uppercase',color:'#c0392b',marginBottom:'10px'}}>Travaillons ensemble</div>
        <h2 style={{fontSize:'28px',fontWeight:'400',color:'#fff',letterSpacing:'2px'}}>Parlons de votre projet</h2>
        <div style={{width:'40px',height:'2px',background:'#c0392b',margin:'14px auto 0'}}/>
      </div>

      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'4rem',maxWidth:'1000px',margin:'0 auto'}}>

        {/* Infos contact */}
        <div>
          <p style={{fontSize:'14px',color:'#888',lineHeight:'1.9',marginBottom:'2.5rem'}}>
            Notre équipe est disponible pour vous accompagner dans tous vos projets immobiliers au Sénégal.
          </p>
          <div style={{display:'flex',flexDirection:'column',gap:'1.5rem',marginBottom:'2.5rem'}}>
            {[
              { label: 'Téléphone', value: '+221 XX XXX XX XX' },
              { label: 'Email', value: 'contact@scivictorine.sn' },
              { label: 'Adresse', value: 'Stèle Mermoz, Dakar — Sénégal' },
              { label: 'Horaires', value: 'Lun – Ven : 8h00 – 18h00' },
            ].map((item,i)=>(
              <div key={i} style={{display:'flex',gap:'1rem',alignItems:'flex-start'}}>
                <div style={{width:'2px',height:'40px',background:'#c0392b',flexShrink:0,marginTop:'2px'}}/>
                <div>
                  <div style={{fontSize:'9px',letterSpacing:'3px',textTransform:'uppercase',color:'#c0392b',marginBottom:'4px'}}>{item.label}</div>
                  <div style={{fontSize:'14px',color:'#ccc'}}>{item.value}</div>
                </div>
              </div>
            ))}
          </div>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
            style={{display:'inline-flex',alignItems:'center',gap:'10px',background:'#25D366',color:'#fff',padding:'14px 28px',fontSize:'11px',letterSpacing:'2px',textTransform:'uppercase',textDecoration:'none'}}>
            💬 Contacter sur WhatsApp
          </a>
        </div>

        {/* Formulaire */}
        <div style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
          {[
            { key: 'nom', label: 'Nom complet', type: 'text', placeholder: 'Votre nom' },
            { key: 'email', label: 'Email', type: 'email', placeholder: 'votre@email.com' },
            { key: 'telephone', label: 'Téléphone', type: 'tel', placeholder: '+221 XX XXX XX XX' },
          ].map((field)=>(
            <div key={field.key}>
              <div style={{fontSize:'9px',letterSpacing:'3px',textTransform:'uppercase',color:'#888',marginBottom:'6px'}}>{field.label}</div>
              <input
                type={field.type}
                placeholder={field.placeholder}
                value={form[field.key]}
                onChange={e=>setForm({...form,[field.key]:e.target.value})}
                style={{width:'100%',background:'#2a2a2a',border:'1px solid #444',color:'#fff',padding:'12px 16px',fontSize:'13px',outline:'none'}}
              />
            </div>
          ))}
          <div>
            <div style={{fontSize:'9px',letterSpacing:'3px',textTransform:'uppercase',color:'#888',marginBottom:'6px'}}>Message</div>
            <textarea
              placeholder="Décrivez votre projet..."
              value={form.message}
              onChange={e=>setForm({...form,message:e.target.value})}
              rows={4}
              style={{width:'100%',background:'#250000',border:'1px solid #c0392b33',color:'#fff',padding:'12px 16px',fontSize:'13px',outline:'none',resize:'none'}}
            />
          </div>
          <button style={{background:'#c0392b',color:'#fff',border:'none',padding:'14px',fontSize:'11px',letterSpacing:'2px',textTransform:'uppercase',cursor:'pointer',marginTop:'0.5rem'}}>
            Envoyer le message
          </button>
        </div>
      </div>

      {/* Footer bas */}
      <div style={{borderTop:'1px solid #c0392b22',marginTop:'4rem',paddingTop:'2rem',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:'1rem'}}>
        <div style={{fontSize:'16px',letterSpacing:'3px',color:'#fff'}}>SCI <span style={{color:'#c0392b'}}>VICTORINE</span></div>
        <p style={{fontSize:'11px',color:'#444',letterSpacing:'1px'}}>© 2024 SCI Victorine · Tous droits réservés</p>
        <p style={{fontSize:'11px',color:'#444'}}>Dakar, Sénégal</p>
      </div>
    </section>
  )
}