import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
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
  return (
    <div className="relative flex min-h-screen flex-col">
      {/* Décor global */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="glow left-[-10%] top-[-10%] h-[36rem] w-[36rem]" style={{ background: '#1d4ed8' }} />
        <div className="glow right-[-10%] top-[20%] h-[30rem] w-[30rem]" style={{ background: '#7c3aed', opacity: 0.3 }} />
      </div>

      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
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
      </main>
      <Footer />
    </div>
  )
}
