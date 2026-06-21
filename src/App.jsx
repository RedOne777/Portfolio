import { useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import ScrollProgress from './components/ScrollProgress'
import Home from './pages/Home'
import Profil from './pages/Profil'
import Demarche from './pages/Demarche'
import Competences from './pages/Competences'
import CompetenceDetail from './pages/CompetenceDetail'
import Realisations from './pages/Realisations'
import Parcours from './pages/Parcours'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  const location = useLocation()
  const lenisRef = useRef(null)

  // Défilement fluide (inertie) — desktop ; tactile natif sur mobile.
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true })
    lenisRef.current = lenis
    let raf
    const loop = (t) => { lenis.raf(t); raf = requestAnimationFrame(loop) }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  // Remonter en haut à chaque changement de page.
  useEffect(() => {
    if (lenisRef.current) lenisRef.current.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="relative flex min-h-screen flex-col">
      <ScrollProgress />
      <Cursor />
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/profil" element={<Profil />} />
              <Route path="/demarche" element={<Demarche />} />
              <Route path="/competences" element={<Competences />} />
              <Route path="/competences/:slug" element={<CompetenceDetail />} />
              <Route path="/realisations" element={<Realisations />} />
              <Route path="/parcours" element={<Parcours />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      {/* Espace pour le dock mobile flottant */}
      <div className="h-24 lg:hidden" />
    </div>
  )
}
