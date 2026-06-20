import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft, ArrowRight, ArrowUpRight, Lock, CheckCircle2, Target,
  BookOpen, GraduationCap, Database, Workflow, Users, Gauge,
} from 'lucide-react'
import { competences, competenceBySlug } from '../data/competences'
import { echelleEvaluation } from '../data/demarche'
import Reveal from '../components/Reveal'

const ICONS = { c4: Database, c5: Workflow, c6: Users }

export default function CompetenceDetail() {
  const { slug } = useParams()
  const c = competenceBySlug(slug)
  if (!c) return <Navigate to="/competences" replace />

  const Icon = ICONS[c.id] || Database
  const idx = competences.findIndex((x) => x.id === c.id)
  const next = competences[(idx + 1) % competences.length]
  const prev = competences[(idx - 1 + competences.length) % competences.length]

  // Chips colorées (AC / CE)
  const RefChip = ({ code }) => (
    <span
      className="rounded-md px-1.5 py-0.5 text-xs font-bold"
      style={{ color: c.color, background: `${c.color}1a` }}
    >
      {code}
    </span>
  )

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
            <span className="font-display text-sm font-bold" style={{ color: c.color }}>
              Compétence {c.code.replace('C', '')} · Niveau Confirmé
            </span>
            <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">{c.titre}</h1>
          </div>
        </div>
        <p className="mt-4 max-w-3xl text-lg text-muted">{c.tagline}</p>
      </motion.header>

      {/* Définition + situations pro */}
      <section className="mt-10 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <Reveal>
          <div className="card h-full p-6">
            <h2 className="flex items-center gap-2 font-display text-base font-semibold text-ink">
              <BookOpen size={18} style={{ color: c.color }} /> Niveau Confirmé
            </h2>
            <p className="mt-1 text-sm font-medium" style={{ color: c.color }}>{c.niveau3}</p>
            <p className="mt-4 text-muted">{c.definition}</p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="card h-full p-6">
            <h2 className="font-display text-base font-semibold text-ink">Situations professionnelles</h2>
            <ul className="mt-4 space-y-2">
              {c.situationsPro.map((s) => (
                <li key={s} className="flex gap-2 text-sm text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full" style={{ background: c.color }} />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* Auto-positionnement */}
      <Reveal className="mt-6">
        <div className="card p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-surface-2" style={{ color: c.color }}>
              <Gauge size={20} />
            </span>
            <h2 className="font-display text-lg font-semibold text-ink">Mon auto-positionnement</h2>
            <span className="chip" style={{ color: c.color, borderColor: `${c.color}55` }}>
              <CheckCircle2 size={14} /> {c.autoPositionnement.intitule}
            </span>
          </div>

          {/* barre échelle */}
          <div className="mt-6 grid grid-cols-4 gap-1.5">
            {echelleEvaluation.map((e) => {
              const isCurrent = e.plage.replace(/\s/g, '') === c.autoPositionnement.plage.replace(/\s/g, '')
              const isVers = c.autoPositionnement.vers && e.plage.replace(/\s/g, '') === c.autoPositionnement.vers.replace(/\s/g, '')
              return (
                <div key={e.plage} className="text-center">
                  <div
                    className="h-2 rounded-full transition-all"
                    style={{
                      background: isCurrent ? c.color : isVers ? `${c.color}66` : 'rgba(148,163,184,0.18)',
                    }}
                  />
                  <span className={`mt-1.5 block text-[11px] ${isCurrent ? 'font-bold text-ink' : 'text-muted'}`}>
                    {e.plage}
                  </span>
                </div>
              )
            })}
          </div>

          <p className="mt-5 text-muted">{c.autoPositionnement.argument}</p>
        </div>
      </Reveal>

      {/* Composantes essentielles */}
      <section className="mt-16">
        <h2 className="font-display text-2xl font-bold text-ink">Composantes essentielles</h2>
        <p className="mt-2 text-muted">Les critères qualité indissociables de la compétence — chacun doit être validé.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {c.composantesEssentielles.map((ce, i) => (
            <Reveal key={ce.code} delay={i * 0.05}>
              <div className="card flex items-start gap-3 p-5">
                <span className="rounded-md px-2 py-1 text-xs font-bold" style={{ color: c.color, background: `${c.color}1a` }}>
                  {ce.code}
                </span>
                <p className="text-sm text-muted">{ce.texte}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Apprentissages critiques */}
      <section className="mt-16">
        <h2 className="font-display text-2xl font-bold text-ink">Apprentissages critiques</h2>
        <p className="mt-2 text-muted">Les seuils d'apprentissage qui définissent le niveau Confirmé.</p>
        <div className="mt-6 space-y-3">
          {c.apprentissagesCritiques.map((ac, i) => (
            <Reveal key={ac.code} delay={i * 0.05}>
              <div className="card flex items-start gap-4 p-5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg font-display text-xs font-bold" style={{ color: c.color, background: `${c.color}1a` }}>
                  {ac.code}
                </span>
                <p className="text-ink/90">{ac.texte}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Traces / preuves */}
      <section className="mt-16">
        <h2 className="font-display text-2xl font-bold text-ink">Traces & analyse réflexive</h2>
        <p className="mt-2 max-w-3xl text-muted">
          Les preuves concrètes de ma montée en compétence, analysées au regard des apprentissages
          critiques (AC) et des composantes essentielles (CE).
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

                {/* références AC / CE */}
                <div className="mt-4 flex flex-wrap items-center gap-1.5">
                  {t.ac.map((code) => <RefChip key={code} code={code} />)}
                  {t.ce.map((code) => (
                    <span key={code} className="rounded-md border px-1.5 py-0.5 text-xs font-bold" style={{ color: c.color, borderColor: `${c.color}40` }}>
                      {code}
                    </span>
                  ))}
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

      {/* Ressources & SAÉ */}
      <section className="mt-16 grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="card h-full p-6">
            <h2 className="flex items-center gap-2 font-display text-base font-semibold text-ink">
              <BookOpen size={18} style={{ color: c.color }} /> Ressources mobilisées
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {c.ressources.map((r) => (
                <span key={r} className="chip">{r}</span>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="card h-full p-6">
            <h2 className="flex items-center gap-2 font-display text-base font-semibold text-ink">
              <GraduationCap size={18} style={{ color: c.color }} /> Projets & mises en situation
            </h2>
            <ul className="mt-4 space-y-2">
              {c.saes.map((s) => (
                <li key={s} className="flex gap-2 text-sm text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full" style={{ background: c.color }} />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* Bilan & pistes */}
      <section className="mt-16 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="card h-full p-6">
            <h2 className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
              <CheckCircle2 size={18} style={{ color: c.color }} /> Bilan réflexif
            </h2>
            <p className="mt-3 text-muted">{c.bilan}</p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="card h-full p-6">
            <h2 className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
              <Target size={18} style={{ color: c.color }} /> Pistes d'amélioration
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
