import { Lock, ArrowUpRight } from 'lucide-react'
import { Github } from './BrandIcons'
import { competences } from '../data/competences'

const codeOf = (id) => competences.find((c) => c.id === id)

export default function ProjectCard({ projet: p }) {
  return (
    <article className="card group flex flex-col p-6 transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center justify-between gap-3">
        <span className="chip">{p.categorie}</span>
        <span className="text-xs text-muted">{p.periode}</span>
      </div>

      <h3 className="mt-4 text-lg font-bold text-ink">{p.titre}</h3>
      <p className="text-sm font-medium text-brand">{p.sousTitre}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted">{p.description}</p>

      <ul className="mt-4 space-y-1.5">
        {p.points.slice(0, 3).map((pt) => (
          <li key={pt} className="flex gap-2 text-sm text-muted">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
            {pt}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <span key={s} className="rounded-md border border-line bg-surface-2/60 px-2 py-1 text-xs text-muted">
            {s}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
        <div className="flex flex-wrap gap-1.5">
          {p.competences.map((id) => {
            const c = codeOf(id)
            if (!c) return null
            return (
              <span
                key={id}
                title={c.titre}
                className="rounded-md px-1.5 py-0.5 text-xs font-bold"
                style={{ color: c.color, background: `${c.color}1a` }}
              >
                {c.code}
              </span>
            )
          })}
        </div>

        {p.lien?.github ? (
          <a
            href={p.lien.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-muted transition-colors hover:text-ink"
          >
            <Github size={16} /> Code <ArrowUpRight size={14} />
          </a>
        ) : (
          <span className="inline-flex items-center gap-1 text-xs text-muted">
            <Lock size={14} /> Confidentiel
          </span>
        )}
      </div>
    </article>
  )
}
