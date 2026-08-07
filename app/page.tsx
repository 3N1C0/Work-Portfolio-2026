import Navbar from '@/components/Navbar'
import ScrollProgress from '@/components/ScrollProgress'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Conferences from '@/components/sections/Conferences'
import Academics from '@/components/sections/Academics'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="relative bg-[#171717]">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Conferences />
      <Projects />
      <Academics />
      <Skills />
      <Contact />
    </main>
  )
}
