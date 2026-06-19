import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="container-px grid min-h-[70vh] place-items-center pt-32 pb-10 text-center">
      <div>
        <p className="font-display text-7xl font-bold text-gradient">404</p>
        <h1 className="mt-4 text-2xl font-bold text-ink">Page introuvable</h1>
        <p className="mt-2 text-muted">Cette page n'existe pas ou a été déplacée.</p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-[#04121f]"
        >
          <Home size={18} /> Retour à l'accueil
        </Link>
      </div>
    </div>
  )
}
