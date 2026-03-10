import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProjectsSection from './components/ProjectsSection'
import { projects } from './data/projects'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-blue-50 to-cyan-50 text-slate-900">
      <Header />

      <main className="mx-auto flex w-full max-w-5xl flex-col gap-20 px-6 py-14">
        <HeroSection />
        <AboutSection />
        <ProjectsSection projects={projects} />
        <ContactSection />
      </main>
    </div>
  )
}

export default App
