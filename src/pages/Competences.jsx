import { competences } from '../data/competences'
import CompetenceCard from '../components/CompetenceCard'
import Reveal from '../components/Reveal'

export default function Competences() {
  return (
    <div className="container-px pt-32 pb-10">
      <section className="max-w-3xl">
        <span className="chip">Parcours AGED · Niveau Confirmé</span>
        <h1 className="mt-5 font-display text-4xl font-bold text-ink sm:text-5xl">
          Les trois compétences
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          En BUT3, le parcours AGED — Administration, Gestion et Exploitation des Données — porte trois
          des six compétences du référentiel à leur niveau le plus élevé. Voici la démonstration,
          traces à l'appui, de l'acquisition du niveau <strong className="text-ink">Confirmé</strong>.
        </p>
      </section>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {competences.map((c, i) => (
          <Reveal key={c.id} delay={i * 0.08}>
            <CompetenceCard competence={c} index={i} />
          </Reveal>
        ))}
      </div>

      {/* Synthèse pédagogique */}
      <Reveal className="mt-14">
        <div className="card p-6 sm:p-8">
          <h2 className="font-display text-lg font-semibold text-ink">Une cohérence d'ensemble</h2>
          <p className="mt-3 text-muted">
            Ces trois compétences ne sont pas cloisonnées : je <strong className="text-ink">gère les données</strong> (C4)
            au sein de <strong className="text-ink">projets système d'information</strong> (C5) que je mène
            <strong className="text-ink"> en équipe</strong> (C6). L'alternance chez RATP Infrastructure constitue le
            fil rouge qui les relie autour d'un même cas réel : la modernisation d'un système d'archivage.
          </p>
        </div>
      </Reveal>
    </div>
  )
}
