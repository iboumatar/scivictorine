import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import ProjectFeature from '@/components/ProjectFeature'
import Services from '@/components/Services'
import Partners from '@/components/Partners'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <ProjectFeature />
      <Services />
      <Partners />
      <Contact />
    </main>
  )
}