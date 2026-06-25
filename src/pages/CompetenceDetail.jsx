import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft, ArrowRight, ArrowUpRight, Lock, CheckCircle2, Target,
  Database, Workflow, Users,
} from 'lucide-react'
import { competences, competenceBySlug } from '../data/competences'
import Reveal from '../components/Reveal'
import SectionNav from '../components/SectionNav'

const SECTIONS = [
  { id: 'apercu', label: 'Aperçu' },
  { id: 'savoir-faire', label: 'Savoir-faire' },
  { id: 'projets', label: 'Projets' },
  { id: 'bilan', label: 'Bilan' },
]

const ICONS = { c4: Database, c5: Workflow, c6: Users }

export default function CompetenceDetail() {
  const { slug } = useParams()
  const c = competenceBySlug(slug)
  if (!c) return <Navigate to="/competences" replace />

  const Icon = ICONS[c.id] || Database
  const idx = competences.findIndex((x) => x.id === c.id)
  const next = competences[(idx + 1) % competences.length]
  const prev = competences[(idx - 1 + competences.length) % competences.length]

  return (
    <div className="container-px pt-28 pb-10">
      {/* bandeau de teinte douce en haut de page */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80"
        style={{ background: `linear-gradient(180deg, ${c.color}14 0%, transparent 100%)` }}
      />

      <Link to="/competences" className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink">
        <ArrowLeft size={16} /> Toutes les compétences
      </Link>

      {/* En-tête */}
      <motion.header
        id="apercu"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-6"
      >
        <div className="flex items-center gap-4">
          <span
            className="grid h-14 w-14 place-items-center rounded-2xl border"
            style={{ borderColor: `${c.color}55`, background: `${c.color}1a`, color: c.color }}
          >
            <Icon size={26} />
          </span>
          <div>
            <span className="font-display text-sm font-bold uppercase tracking-wide" style={{ color: c.color }}>
              Compétence clé
            </span>
            <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">{c.titre}</h1>
          </div>
        </div>
        <p className="mt-4 max-w-3xl text-lg text-muted">{c.tagline}</p>
      </motion.header>

      <SectionNav sections={SECTIONS} accent={c.color} />

      {/* Définition + cas d'usage */}
      <section className="mt-10 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <Reveal>
          <div className="card h-full p-6">
            <h2 className="font-display text-base font-semibold text-ink">En quoi ça consiste</h2>
            <p className="mt-1 text-sm font-medium" style={{ color: c.color }}>{c.resume}</p>
            <p className="mt-4 text-muted">{c.definition}</p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="card h-full p-6">
            <h2 className="font-display text-base font-semibold text-ink">Cas d'usage</h2>
            <ul className="mt-4 space-y-2">
              {c.casUsage.map((s) => (
                <li key={s} className="flex gap-2 text-sm text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full" style={{ background: c.color }} />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* Savoir-faire */}
      <section id="savoir-faire" className="mt-16">
        <h2 className="font-display text-2xl font-bold text-ink">Ce que je sais faire</h2>
        <p className="mt-2 text-muted">Les savoir-faire concrets que je mobilise sur cette compétence.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {c.savoirFaire.map((s, i) => (
            <Reveal key={s} delay={i * 0.05}>
              <div className="card flex items-start gap-3 p-5">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color: c.color }} />
                <p className="text-sm text-ink-soft">{s}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Projets & réalisations */}
      <section id="projets" className="mt-16">
        <h2 className="font-display text-2xl font-bold text-ink">Projets & réalisations</h2>
        <p className="mt-2 max-w-3xl text-muted">
          Les preuves concrètes, avec une courte analyse : ce que j'ai fait, ce que j'en ai tiré,
          et ce que j'améliorerais.
        </p>
        <div className="mt-8 space-y-6">
          {c.traces.map((t, i) => (
            <Reveal key={t.titre} delay={i * 0.05}>
              <article className="card overflow-hidden p-6 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-ink">{t.titre}</h3>
                    <p className="mt-1 text-sm text-muted">{t.contexte}</p>
                  </div>
                  <span className="chip shrink-0">
                    {t.confidentiel && <Lock size={13} />} {t.type}
                  </span>
                </div>

                <p className="mt-4 leading-relaxed text-muted">{t.analyse}</p>

                {/* stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {t.stack.map((s) => (
                    <span key={s} className="rounded-md border border-line bg-surface-2/60 px-2 py-1 text-xs text-muted">{s}</span>
                  ))}
                </div>

                {/* preuves */}
                {t.preuves?.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-3 border-t border-line pt-4">
                    {t.preuves.map((pr) =>
                      pr.url ? (
                        <a key={pr.label} href={pr.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-ink" style={{ color: c.color }}>
                          {pr.label} <ArrowUpRight size={14} />
                        </a>
                      ) : (
                        <span key={pr.label} className="inline-flex items-center gap-1.5 text-sm text-muted">
                          <Lock size={14} /> {pr.label}
                        </span>
                      )
                    )}
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Bilan & prochaines étapes */}
      <section id="bilan" className="mt-16 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="card h-full p-6">
            <h2 className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
              <CheckCircle2 size={18} style={{ color: c.color }} /> Ce que j'en retire
            </h2>
            <p className="mt-3 text-muted">{c.bilan}</p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="card h-full p-6">
            <h2 className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
              <Target size={18} style={{ color: c.color }} /> Prochaines étapes
            </h2>
            <ul className="mt-3 space-y-2.5">
              {c.pistes.map((p) => (
                <li key={p} className="flex gap-3 text-muted">
                  <ArrowRight size={16} className="mt-1 shrink-0" style={{ color: c.color }} />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* Navigation prev/next */}
      <nav className="mt-16 grid gap-4 sm:grid-cols-2">
        <Link to={`/competences/${prev.slug}`} className="card group flex items-center gap-3 p-5 transition-colors hover:bg-surface-2">
          <ArrowLeft size={18} className="text-muted transition-transform group-hover:-translate-x-1" />
          <div>
            <p className="text-xs text-muted">Précédent</p>
            <p className="font-semibold text-ink" style={{ color: prev.color }}>{prev.titre}</p>
          </div>
        </Link>
        <Link to={`/competences/${next.slug}`} className="card group flex items-center justify-end gap-3 p-5 text-right transition-colors hover:bg-surface-2">
          <div>
            <p className="text-xs text-muted">Suivant</p>
            <p className="font-semibold" style={{ color: next.color }}>{next.titre}</p>
          </div>
          <ArrowRight size={18} className="text-muted transition-transform group-hover:translate-x-1" />
        </Link>
      </nav>
    </div>
  )
}
