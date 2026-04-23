'use client'
import { useState, useEffect, useRef } from 'react'

const stats = [
  { num: 30, suffix: '+', label: "Années d'expérience" },
  { num: 120, suffix: '+', label: 'Projets réalisés' },
  { num: 200, suffix: '+', label: 'Clients satisfaits' },
  { num: 10, suffix: '+', label: 'Villes couvertes' },
]

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 2000
          const steps = 60
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref} style={{fontSize:'36px',fontWeight:'500',color:'#fff'}}>
      {count}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',background:'#c0392b'}}>
      {stats.map((s,i)=>(
        <div key={i} style={{padding:'2rem',textAlign:'center',borderRight:i < stats.length-1 ? '1px solid rgba(255,255,255,0.15)' : 'none'}}>
          <Counter target={s.num} suffix={s.suffix} />
          <div style={{fontSize:'10px',color:'rgba(255,255,255,0.75)',letterSpacing:'2px',textTransform:'uppercase',marginTop:'6px'}}>{s.label}</div>
        </div>
      ))}
    </div>
  )
}