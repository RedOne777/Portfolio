import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import { Github, Linkedin } from './BrandIcons'
import { profil, contact, navLinks } from '../data/site'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-24 border-t border-line">
      <div className="container-px py-12">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-xl border border-line bg-surface-2 font-display text-sm font-bold text-gradient">
                {profil.initiales}
              </span>
              <span className="font-display font-semibold text-ink">{profil.nomComplet}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted">
              Portfolio de fin de parcours — BUT3 Informatique, parcours AGED. Démonstration
              auto-réflexive du niveau Confirmé des trois compétences.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink">Navigation</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-muted transition-colors hover:text-ink">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink">
                  <Mail size={16} /> {contact.email}
                </a>
              </li>
              <li>
                <a href={contact.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink">
                  <Linkedin size={16} /> LinkedIn
                </a>
              </li>
              <li>
                <a href={contact.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink">
                  <Github size={16} /> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-line pt-6 text-center text-xs text-muted">
          © {year} {profil.nomComplet} — Conçu avec React, Vite & Tailwind CSS.
        </div>
      </div>
    </footer>
  )
}
