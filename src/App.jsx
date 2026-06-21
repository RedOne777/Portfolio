import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Cursor from './components/Cursor'
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
      <Cursor />
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
      {/* Espace pour le dock mobile flottant */}
      <div className="h-24 lg:hidden" />
    </div>
  )
}
