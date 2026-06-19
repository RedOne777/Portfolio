import { Briefcase, GraduationCap } from 'lucide-react'
import { formation, experiences } from '../data/parcours'
import Reveal from '../components/Reveal'

function Timeline({ items, accent }) {
  return (
    <ol className="relative ml-3 border-l border-line">
      {items.map((it, i) => (
        <Reveal key={i} delay={i * 0.06}>
          <li className="relative ml-6 pb-9 last:pb-0">
            <span
              className="absolute -left-[1.95rem] top-1 grid h-4 w-4 place-items-center rounded-full border-2 bg-bg"
              style={{ borderColor: accent }}
            >
              {it.actuel && <span className="h-1.5 w-1.5 rounded-full" style={{ background: accent }} />}
            </span>
            <div className="card p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: accent }}>
                  {it.periode}
                </span>
                {it.type && <span className="chip">{it.type}</span>}
              </div>
              <h3 className="mt-2 font-display text-lg font-semibold text-ink">{it.titre}</h3>
              <p className="text-sm text-muted">{it.lieu}</p>
              {it.description && <p className="mt-2 text-sm text-muted">{it.description}</p>}
              {it.points && (
                <ul className="mt-3 space-y-1.5">
                  {it.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full" style={{ background: accent }} />
                      {p}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        </Reveal>
      ))}
    </ol>
  )
}

export default function Parcours() {
  return (
    <div className="container-px pt-32 pb-10">
      <section className="max-w-3xl">
        <span className="chip">Mon itinéraire</span>
        <h1 className="mt-5 font-display text-4xl font-bold text-ink sm:text-5xl">Parcours</h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          Une formation tournée vers la donnée, renforcée par une alternance et un stage dans un
          environnement industriel exigeant.
        </p>
      </section>

      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="mb-6 flex items-center gap-3 font-display text-xl font-bold text-ink">
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-surface-2 text-brand">
              <Briefcase size={18} />
            </span>
            Expériences professionnelles
          </h2>
          <Timeline items={experiences} accent="#38bdf8" />
        </div>

        <div>
          <h2 className="mb-6 flex items-center gap-3 font-display text-xl font-bold text-ink">
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-surface-2 text-brand">
              <GraduationCap size={18} />
            </span>
            Formation
          </h2>
          <Timeline items={formation} accent="#a78bfa" />
        </div>
      </div>
    </div>
  )
}
