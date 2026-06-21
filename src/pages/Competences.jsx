import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { competences, toutesLesCompetences } from '../data/competences'
import CompetenceCard from '../components/CompetenceCard'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

// Petit indicateur de niveau (3 paliers : Novice / Intermédiaire / Confirmé)
function NiveauMeter({ niveauNum, color }) {
  return (
    <div className="flex items-center gap-1.5" title={`Niveau ${niveauNum} sur 3`}>
      {[1, 2, 3].map((n) => (
        <span
          key={n}
          className="h-1.5 w-6 rounded-full"
          style={{ background: n <= niveauNum ? color : 'var(--color-line)' }}
        />
      ))}
    </div>
  )
}

function OverviewItem({ c }) {
  const inner = (
    <>
      <div className="flex items-center justify-between">
        <span className="font-mono text-sm font-bold" style={{ color: c.color }}>{c.code}</span>
        <span
          className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
          style={{ color: c.color, background: `${c.color}1a` }}
        >
          {c.niveau}
        </span>
      </div>
      <h3 className="mt-3 text-lg font-semibold text-ink">{c.titre}</h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">{c.plain}</p>
      <div className="mt-4 flex items-center justify-between">
        <NiveauMeter niveauNum={c.niveauNum} color={c.color} />
        {c.focus && (
          <span className="inline-flex items-center gap-0.5 text-sm font-medium" style={{ color: c.color }}>
            Détail <ChevronRight size={15} />
          </span>
        )}
      </div>
    </>
  )

  const base = 'flex h-full flex-col rounded-[18px] border border-line p-6 transition-all duration-300'
  return c.focus ? (
    <Link to={`/competences/${c.slug}`} className={`${base} bg-surface hover:-translate-y-1 hover:border-white/25`}>
      {inner}
    </Link>
  ) : (
    <div className={`${base} bg-surface/50`}>{inner}</div>
  )
}

export default function Competences() {
  return (
    <div className="container-px pt-32 pb-10">
      <section className="max-w-3xl">
        <span className="chip">Mes compétences expliquées simplement</span>
        <h1 className="mt-5 font-display text-4xl font-bold text-ink sm:text-5xl">
          Ce que je sais faire
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          Ma formation est organisée autour de <strong className="text-ink">compétences</strong> : des
          savoir-faire concrets que l'on développe sur 3 ans, en montant en niveau année après année.
          J'en ai acquis <strong className="text-ink">six</strong>. Cette dernière année, <strong className="text-ink">trois</strong> sont
          montées au niveau le plus avancé (« Confirmé ») : ce sont celles que je démontre en détail,
          preuves à l'appui.
        </p>
      </section>

      {/* Vue d'ensemble des 6 compétences */}
      <section className="mt-14">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">Vue d'ensemble — mes 6 compétences</h2>
          <p className="text-sm text-muted">3 paliers : Novice · Intermédiaire · Confirmé</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {toutesLesCompetences.map((c, i) => (
            <Reveal key={c.code} delay={(i % 3) * 0.06}>
              <OverviewItem c={c} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Les 3 compétences détaillées */}
      <section className="mt-20">
        <SectionHeading
          eyebrow="Niveau Confirmé · démonstration détaillée"
          title="Les 3 compétences de cette année"
          description="Pour chacune : ce qu'elle recouvre, comment je l'ai mise en œuvre, et les preuves concrètes."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {competences.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.08}>
              <CompetenceCard competence={c} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Synthèse */}
      <Reveal className="mt-14">
        <div className="card-soft p-6 sm:p-8">
          <h2 className="font-display text-lg font-semibold text-ink">Une cohérence d'ensemble</h2>
          <p className="mt-3 text-muted">
            Ces compétences ne sont pas cloisonnées : je <strong className="text-ink">gère les données</strong>
            au sein de <strong className="text-ink">projets informatiques</strong> que je mène
            <strong className="text-ink"> en équipe</strong>. Mon apprentissage chez RATP Infrastructure
            est le fil rouge qui les relie autour d'un même cas réel : la modernisation d'un système d'archivage.
          </p>
        </div>
      </Reveal>
    </div>
  )
}
