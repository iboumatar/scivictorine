'use client'
import { useRouter } from 'next/navigation'

const infos = [
  { icon: '📞', label: 'Téléphone', value: '+221 XX XXX XX XX' },
  { icon: '✉️', label: 'Email', value: 'contact@scivictorine.sn' },
  { icon: '📍', label: 'Adresse', value: 'Sicap Rue 10 x Villa 21, Dakar' },
  { icon: '🕐', label: 'Horaires', value: 'Lun – Ven : 8h00 – 18h00' },
]

export default function Contact() {
  const router = useRouter()
  const whatsappLink = 'https://wa.me/221771234567?text=' + encodeURIComponent('Bonjour, je souhaite obtenir des informations concernant mon projet immobilier.')

  return (
    <section style={{
      background: '#c0392b',
      padding: '5rem 4rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{position:'absolute',top:'-80px',right:'-80px',width:'300px',height:'300px',borderRadius:'50%',background:'rgba(255,255,255,0.06)'}} />
      <div style={{position:'absolute',bottom:'-100px',left:'-60px',width:'350px',height:'350px',borderRadius:'50%',background:'rgba(255,255,255,0.04)'}} />
      <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:'500px',height:'500px',borderRadius:'50%',background:'rgba(255,255,255,0.02)'}} />

      <div style={{maxWidth:'1100px',margin:'0 auto',position:'relative',zIndex:1}}>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'5rem',alignItems:'center'}}>

          <div>
            <div style={{fontSize:'9px',letterSpacing:'4px',textTransform:'uppercase',color:'rgba(255,255,255,0.6)',marginBottom:'12px',fontWeight:'700'}}>
              Parlons de votre projet
            </div>
            <h2 style={{fontSize:'34px',fontWeight:'900',color:'#fff',lineHeight:'1.2',marginBottom:'12px'}}>
              Réalisons ensemble<br />vos projets immobiliers
            </h2>
            <div style={{width:'40px',height:'2px',background:'rgba(255,255,255,0.4)',marginBottom:'20px'}} />
            <p style={{fontSize:'15px',color:'rgba(255,255,255,0.75)',lineHeight:'1.9',marginBottom:'2.5rem',maxWidth:'420px'}}>
              Promotion immobilière, acquisition, investissement, construction ou financement. Notre équipe vous accompagne à chaque étape.
            </p>
            <div style={{display:'flex',gap:'12px',flexWrap:'wrap'}}>
              <button
                onClick={() => router.push('/contact')}
                style={{background:'#fff',color:'#c0392b',border:'none',padding:'14px 28px',fontSize:'11px',fontWeight:'900',letterSpacing:'2px',textTransform:'uppercase',cursor:'pointer'}}>
                Prendre rendez-vous
              </button>
              <button
                onClick={() => window.open(whatsappLink, '_blank')}
                style={{background:'#25D366',color:'#fff',border:'none',padding:'14px 28px',fontSize:'11px',fontWeight:'700',letterSpacing:'2px',textTransform:'uppercase',display:'flex',alignItems:'center',gap:'8px',cursor:'pointer'}}>
                💬 WhatsApp
              </button>
            </div>
          </div>

          <div style={{display:'flex',flexDirection:'column',gap:'2rem'}}>
            {infos.map((item, i) => (
              <div key={i} style={{display:'flex',alignItems:'center',gap:'16px'}}>
                <div style={{width:'50px',height:'50px',borderRadius:'50%',background:'rgba(255,255,255,0.15)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'20px',flexShrink:0}}>
                  {item.icon}
                </div>
                <div>
                  <div style={{fontSize:'9px',letterSpacing:'3px',textTransform:'uppercase',color:'rgba(255,255,255,0.55)',marginBottom:'4px',fontWeight:'700'}}>
                    {item.label}
                  </div>
                  <div style={{fontSize:'15px',fontWeight:'700',color:'#fff'}}>
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}