import { Link } from 'react-router-dom'
import { Database, Workflow, Users, ChevronRight } from 'lucide-react'

const ICONS = { c4: Database, c5: Workflow, c6: Users }

export default function CompetenceCard({ competence: c }) {
  const Icon = ICONS[c.id] || Database
  return (
    <Link
      to={`/competences/${c.slug}`}
      className="group flex h-full flex-col rounded-[18px] border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgba(0,0,0,0.22)]"
    >
      <div className="flex items-center justify-between">
        <span
          className="grid h-12 w-12 place-items-center rounded-2xl"
          style={{ background: `${c.color}14`, color: c.color }}
        >
          <Icon size={22} />
        </span>
        <span className="text-[13px] font-semibold" style={{ color: c.color }}>
          {c.code}
        </span>
      </div>

      <h3 className="mt-6 text-[22px] font-semibold tracking-tight text-ink">{c.titre}</h3>
      <p className="mt-1 text-[14px] font-medium" style={{ color: c.color }}>
        Niveau Confirmé
      </p>
      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">{c.tagline}</p>

      <span className="link-arrow mt-6 text-[15px]">
        En savoir plus
        <ChevronRight size={17} className="transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  )
}
