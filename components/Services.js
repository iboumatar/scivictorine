'use client'
import { useRouter } from 'next/navigation'

const services = [
  { title: "Construction d'immeubles", href: '/services#service-1', desc: "Conception et réalisation de bâtiments résidentiels et commerciaux aux standards internationaux.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg> },
  { title: "Vente d'appartements", href: '/services#service-2', desc: "Des appartements modernes et fonctionnels adaptés à tous les profils et budgets.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-4 0v2"/></svg> },
  { title: "Vente de terrains", href: '/services#service-3', desc: "Un large portefeuille de terrains viabilisés dans les zones les plus prisées du Sénégal.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
  { title: "Lotissement", href: '/services#service-4', desc: "Aménagement et viabilisation de terrains en lots constructibles selon les normes urbanistiques.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg> },
  { title: "Recherche de financement", href: '/services#service-5', desc: "Montage de dossiers et mise en relation avec les partenaires bancaires les mieux adaptés.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg> },
  { title: "Encadrement fiscal", href: '/services#service-6', desc: "Accompagnement fiscal et juridique pour sécuriser et optimiser vos investissements.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg> },
]

export default function Services() {
  const router = useRouter()

  return (
    <section style={{padding:'5rem 3rem',position:'relative',overflow:'hidden',background:'#fdf1f0'}}>

      {/* Couches géométriques */}
      <div style={{position:'absolute',inset:0,background:'#fdecea',clipPath:'polygon(0 0, 100% 0, 100% 45%, 0 70%)',zIndex:0}}/>
      <div style={{position:'absolute',inset:0,background:'#fad5d1',clipPath:'polygon(0 0, 100% 0, 100% 20%, 0 40%)',zIndex:0}}/>
      <div style={{position:'absolute',inset:0,background:'#f5bbb5',clipPath:'polygon(0 0, 100% 0, 100% 5%, 0 18%)',zIndex:0}}/>

      {/* Contenu */}
      <div style={{position:'relative',zIndex:1}}>
        <div style={{textAlign:'center',marginBottom:'4rem'}}>
          <div style={{fontSize:'10px',letterSpacing:'4px',textTransform:'uppercase',color:'#c0392b',marginBottom:'10px'}}>Ce que nous faisons</div>
          <h2 style={{fontSize:'28px',fontWeight:'700',color:'#1a1a1a',letterSpacing:'2px'}}>Nos Services</h2>
          <div style={{width:'40px',height:'2px',background:'#c0392b',margin:'14px auto 0'}}/>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1.5rem',maxWidth:'960px',margin:'0 auto'}}>
          {services.map((s,i)=>(
            <div key={i} style={{marginTop:'1.5rem'}}
              onClick={()=>router.push(s.href)}
              onMouseEnter={e=>{
                e.currentTarget.querySelector('.ci').style.background='rgba(255,255,255,0.2)'
                e.currentTarget.querySelector('.ci').style.borderColor='rgba(255,255,255,0.3)'
                e.currentTarget.querySelector('.ci').style.color='#fff'
                e.currentTarget.querySelector('.ct').style.color='#fff'
                e.currentTarget.querySelector('.cd').style.color='rgba(255,255,255,0.75)'
                e.currentTarget.querySelector('.cb').style.background='rgba(255,255,255,0.15)'
                e.currentTarget.querySelector('.cb').style.borderColor='rgba(255,255,255,0.4)'
                e.currentTarget.querySelector('.cb').style.color='#fff'
                e.currentTarget.querySelector('.card-wrap').style.background='#c0392b'
                e.currentTarget.querySelector('.card-wrap').style.borderColor='#c0392b'
                e.currentTarget.querySelector('.card-wrap').style.transform='translateY(-6px)'
                e.currentTarget.querySelector('.card-wrap').style.boxShadow='0 20px 60px rgba(192,57,43,0.25), 0 8px 20px rgba(0,0,0,0.08)'
              }}
              onMouseLeave={e=>{
                e.currentTarget.querySelector('.ci').style.background='#fff0ef'
                e.currentTarget.querySelector('.ci').style.borderColor='#eee'
                e.currentTarget.querySelector('.ci').style.color='#c0392b'
                e.currentTarget.querySelector('.ct').style.color='#1a1a1a'
                e.currentTarget.querySelector('.cd').style.color='#888'
                e.currentTarget.querySelector('.cb').style.background='transparent'
                e.currentTarget.querySelector('.cb').style.borderColor='#e0b0ad'
                e.currentTarget.querySelector('.cb').style.color='#c0392b'
                e.currentTarget.querySelector('.card-wrap').style.background='rgba(255,255,255,0.95)'
                e.currentTarget.querySelector('.card-wrap').style.borderColor='rgba(192,57,43,0.08)'
                e.currentTarget.querySelector('.card-wrap').style.transform='translateY(0)'
                e.currentTarget.querySelector('.card-wrap').style.boxShadow='0 8px 30px rgba(192,57,43,0.08), 0 2px 8px rgba(0,0,0,0.04)'
              }}>
              <div className="card-wrap" style={{
                background:'rgba(255,255,255,0.95)',
                border:'1px solid rgba(192,57,43,0.08)',
                borderRadius:'8px',
                padding:'2.5rem 2rem',
                transition:'all 0.35s ease',
                cursor:'pointer',
                boxShadow:'0 8px 30px rgba(192,57,43,0.08), 0 2px 8px rgba(0,0,0,0.04)',
                textAlign:'center',
              }}>
                <div className="ci" style={{
                  width:'64px',
                  height:'64px',
                  border:'1px solid #eee',
                  borderRadius:'50%',
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'center',
                  background:'#fff0ef',
                  color:'#c0392b',
                  transition:'all 0.35s',
                  margin:'0 auto 1.5rem',
                }}>
                  {s.icon}
                </div>
                <h3 className="ct" style={{
                  fontSize:'15px',
                  fontWeight:'700',
                  color:'#1a1a1a',
                  letterSpacing:'1px',
                  textTransform:'uppercase',
                  marginBottom:'12px',
                  transition:'color 0.35s',
                }}>{s.title}</h3>
                <p className="cd" style={{
                  fontSize:'13px',
                  color:'#888',
                  lineHeight:'1.8',
                  marginBottom:'1.5rem',
                  transition:'color 0.35s',
                }}>{s.desc}</p>
                <span className="cb" style={{
                  display:'inline-block',
                  border:'1px solid #e0b0ad',
                  color:'#c0392b',
                  fontSize:'10px',
                  letterSpacing:'2px',
                  textTransform:'uppercase',
                  padding:'8px 20px',
                  transition:'all 0.35s',
                  background:'transparent',
                }}>En savoir plus</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}