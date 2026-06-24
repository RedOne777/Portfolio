import { Lock, ArrowUpRight } from 'lucide-react'
import { Github } from './BrandIcons'
import { competences } from '../data/competences'

const codeOf = (id) => competences.find((c) => c.id === id)

export default function ProjectCard({ projet: p }) {
  return (
    <article className="flex h-full flex-col rounded-[18px] border border-line bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_-20px_rgba(20,24,40,0.25)]">
      <div className="flex items-center justify-between gap-3">
        <span className="chip">{p.categorie}</span>
        <span className="text-[13px] text-muted">{p.periode}</span>
      </div>

      <h3 className="mt-5 text-[21px] font-semibold tracking-tight text-ink">{p.titre}</h3>
      <p className="text-[14px] font-medium text-brand">{p.sousTitre}</p>
      <p className="mt-3 text-[15px] leading-relaxed text-muted">{p.description}</p>

      <ul className="mt-4 space-y-2">
        {p.points.slice(0, 3).map((pt) => (
          <li key={pt} className="flex gap-2.5 text-[14px] text-ink-soft">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
            {pt}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <span key={s} className="rounded-md bg-surface-2 px-2 py-1 text-[12px] text-ink-soft">
            {s}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between border-t border-line pt-4">
        <div className="flex flex-wrap gap-1.5 pt-4">
          {p.competences.map((id) => {
            const c = codeOf(id)
            if (!c) return null
            return (
              <span
                key={id}
                title={c.titre}
                className="rounded-md px-1.5 py-0.5 text-[12px] font-semibold"
                style={{ color: c.color, background: `${c.color}14` }}
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
            className="inline-flex items-center gap-1 pt-4 text-[14px] font-medium text-muted transition-colors hover:text-ink"
          >
            <Github size={15} /> Code <ArrowUpRight size={14} />
          </a>
        ) : (
          <span className="inline-flex items-center gap-1 pt-4 text-[13px] text-muted">
            <Lock size={13} /> Confidentiel
          </span>
        )}
      </div>
    </article>
  )
}
