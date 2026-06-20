import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import { Github, Linkedin } from './BrandIcons'
import { profil, contact, navLinks } from '../data/site'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-line bg-surface-2">
      <div className="container-wide py-12">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-ink text-[11px] font-semibold text-white">
                {profil.initiales}
              </span>
              <span className="text-[15px] font-semibold tracking-tight text-ink">
                {profil.nomComplet}
              </span>
            </div>
            <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-muted">
              Portfolio de fin de parcours — BUT3 Informatique, parcours AGED. Démonstration
              auto-réflexive du niveau Confirmé des trois compétences.
            </p>
          </div>

          <div>
            <h3 className="text-[13px] font-semibold text-ink">Navigation</h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-[13px] text-muted transition-colors hover:text-ink">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[13px] font-semibold text-ink">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-2 text-[13px] text-muted transition-colors hover:text-ink">
                  <Mail size={15} /> {contact.email}
                </a>
              </li>
              <li>
                <a href={contact.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[13px] text-muted transition-colors hover:text-ink">
                  <Linkedin size={15} /> LinkedIn
                </a>
              </li>
              <li>
                <a href={contact.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[13px] text-muted transition-colors hover:text-ink">
                  <Github size={15} /> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-line pt-6 text-[12px] text-muted">
          © {year} {profil.nomComplet}. Portfolio BUT Informatique — IUT de Créteil-Vitry.
        </div>
      </div>
    </footer>
  )
}
