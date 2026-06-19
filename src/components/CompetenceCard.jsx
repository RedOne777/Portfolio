import { Link } from 'react-router-dom'
import { Database, Workflow, Users, ArrowRight } from 'lucide-react'

const ICONS = { c4: Database, c5: Workflow, c6: Users }

export default function CompetenceCard({ competence: c }) {
  const Icon = ICONS[c.id] || Database
  return (
    <Link
      to={`/competences/${c.slug}`}
      className="card group relative flex flex-col overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1"
      style={{ boxShadow: '0 1px 0 rgba(255,255,255,0.02) inset' }}
    >
      {/* halo coloré */}
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-20 blur-2xl transition-opacity duration-300 group-hover:opacity-40"
        style={{ background: c.color }}
      />
      <div className="flex items-center justify-between">
        <span
          className="grid h-12 w-12 place-items-center rounded-xl border"
          style={{ borderColor: `${c.color}55`, background: `${c.color}1a`, color: c.color }}
        >
          <Icon size={22} />
        </span>
        <span
          className="font-display text-sm font-bold"
          style={{ color: c.color }}
        >
          {c.code}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-bold text-ink">{c.titre}</h3>
      <p className="mt-1 text-sm font-medium" style={{ color: c.color }}>
        Niveau Confirmé
      </p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{c.tagline}</p>

      <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
        <span className="text-xs text-muted">
          {c.apprentissagesCritiques.length} apprentissages critiques
        </span>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-ink">
          Explorer
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}
