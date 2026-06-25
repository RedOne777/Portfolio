import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, User, Layers, Briefcase, GraduationCap, Mail, X, LayoutGrid } from 'lucide-react'
import { profil } from '../data/site'
import LogoMark from './LogoMark'

const NAV = [
  { to: '/', label: 'Accueil', icon: Home },
  { to: '/profil', label: 'Profil', icon: User },
  { to: '/competences', label: 'Compétences', icon: Layers },
  { to: '/realisations', label: 'Réalisations', icon: Briefcase },
  { to: '/parcours', label: 'Parcours', icon: GraduationCap },
  { to: '/contact', label: 'Contact', icon: Mail },
]
// Liens du centre (desktop) : tout sauf Accueil (le logo y renvoie) et Contact (bouton)
const CENTER = NAV.slice(1, 5)
// Dock mobile : 4 raccourcis + bouton Menu
const DOCK = [NAV[0], NAV[2], NAV[3], NAV[5]]

const Logo = () => (
  <Link to="/" className="flex items-center gap-2.5">
    <LogoMark size={30} />
    <span className="text-[15px] font-semibold tracking-tight text-ink">{profil.nomComplet}</span>
  </Link>
)

export default function Navbar() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      {/* ===================== DESKTOP — pilule flottante ===================== */}
      <header className="fixed inset-x-0 top-4 z-50 hidden px-4 lg:block">
        <div className="container-wide">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center rounded-full border border-line bg-bg/70 px-4 py-2 shadow-lg shadow-black/30 backdrop-blur-xl">
            <Logo />
            <nav className="flex items-center gap-1">
              {CENTER.map((l) => {
                const active = pathname === l.to
                return (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="relative rounded-full px-3.5 py-1.5 text-[13px] font-medium"
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full bg-surface-2"
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      />
                    )}
                    <span className={`relative ${active ? 'text-ink' : 'text-muted hover:text-ink'}`}>
                      {l.label}
                    </span>
                  </Link>
                )
              })}
            </nav>
            <div className="flex justify-end">
              <Link
                to="/contact"
                className="rounded-full bg-brand px-4 py-1.5 text-[13px] font-semibold text-white transition-transform hover:scale-[1.03]"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ===================== MOBILE — barre haute (logo) ===================== */}
      <header className="glass fixed inset-x-0 top-0 z-50 lg:hidden">
        <div className="flex h-14 items-center justify-between px-5">
          <Logo />
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Ouvrir le menu"
            className="grid h-10 w-10 place-items-center rounded-xl border border-line text-ink"
          >
            <LayoutGrid size={18} />
          </button>
        </div>
      </header>

      {/* ===================== MOBILE — dock bas ===================== */}
      <nav className="fixed inset-x-3 bottom-3 z-50 lg:hidden">
        <div className="flex items-center justify-around rounded-2xl border border-line bg-bg/80 px-2 py-2 shadow-xl shadow-black/40 backdrop-blur-xl">
          {DOCK.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `flex flex-1 flex-col items-center gap-1 rounded-xl py-1.5 text-[10px] font-medium ${
                  isActive ? 'text-brand' : 'text-muted'
                }`
              }
            >
              <l.icon size={20} />
              {l.label}
            </NavLink>
          ))}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex flex-1 flex-col items-center gap-1 rounded-xl py-1.5 text-[10px] font-medium text-muted"
          >
            <LayoutGrid size={20} />
            Menu
          </button>
        </div>
      </nav>

      {/* ===================== MOBILE — menu plein écran ===================== */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-bg/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex h-14 items-center justify-between px-5">
              <Logo />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fermer le menu"
                className="grid h-10 w-10 place-items-center rounded-xl border border-line text-ink"
              >
                <X size={18} />
              </button>
            </div>
            <nav className="px-5 pt-6">
              {NAV.map((l, i) => {
                const active = pathname === l.to
                return (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                  >
                    <Link
                      to={l.to}
                      className={`flex items-center gap-4 border-b border-line py-5 text-2xl font-semibold tracking-tight ${
                        active ? 'text-brand' : 'text-ink'
                      }`}
                    >
                      <l.icon size={22} className={active ? 'text-brand' : 'text-muted'} />
                      {l.label}
                    </Link>
                  </motion.div>
                )
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
