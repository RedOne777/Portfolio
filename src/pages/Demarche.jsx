import { Quote, Layers, Gauge, HelpCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  definitionCompetence,
  definitionPortfolio,
  ressourcesCompetence,
  niveaux,
  chaineStructurante,
  echelleEvaluation,
  questionnementReflexif,
} from '../data/demarche'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

export default function Demarche() {
  return (
    <div className="container-px pt-32 pb-10">
      {/* Intro */}
      <section className="max-w-3xl">
        <span className="chip">Approche Par Compétences</span>
        <h1 className="mt-5 font-display text-4xl font-bold text-ink sm:text-5xl">
          La démarche portfolio
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          Le BUT repose sur l'Approche Par Compétences. Le portfolio en est la clé de voûte : une
          démarche réflexive où je démontre, par des preuves, le développement de mes compétences —
          et non un simple catalogue de réalisations.
        </p>
      </section>

      {/* Citations */}
      <section className="mt-12 grid gap-6 md:grid-cols-2">
        {[definitionCompetence, definitionPortfolio].map((d, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <figure className="card h-full p-6">
              <Quote className="text-brand" size={22} />
              <blockquote className="mt-3 text-ink/90">« {d.citation} »</blockquote>
              <figcaption className="mt-3 text-sm text-muted">— {d.auteur}</figcaption>
            </figure>
          </Reveal>
        ))}
      </section>

      {/* Les 3 ressources */}
      <section className="mt-20">
        <SectionHeading
          eyebrow="Combinaison de ressources"
          title="Une compétence : un savoir-agir complexe"
          description="Mobiliser et combiner efficacement des ressources de trois natures."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {ressourcesCompetence.map((r, i) => (
            <Reveal key={r.titre} delay={i * 0.06}>
              <div className="card h-full p-6">
                <span className="font-display text-sm font-bold text-brand">0{i + 1}</span>
                <h3 className="mt-2 text-lg font-semibold text-ink">{r.titre}</h3>
                <p className="mt-2 text-sm text-muted">{r.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Chaîne structurante */}
      <section className="mt-20">
        <SectionHeading
          eyebrow="Vocabulaire du référentiel"
          title="De la compétence à la trace"
          description="Comment le référentiel articule chaque concept."
        />
        <div className="mt-10 card overflow-hidden">
          {chaineStructurante.map((row, i) => (
            <Reveal key={row.cle} delay={i * 0.04}>
              <div className="flex flex-col gap-1 border-b border-line p-5 last:border-b-0 sm:flex-row sm:items-center sm:gap-6">
                <div className="flex items-center gap-3 sm:w-72 sm:shrink-0">
                  <Layers size={16} className="text-brand" />
                  <span className="font-display font-semibold text-ink">{row.cle}</span>
                </div>
                <span className="text-muted">{row.valeur}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Les niveaux */}
      <section className="mt-20">
        <SectionHeading
          eyebrow="3 ans, 3 niveaux"
          title="Acquisition progressive des compétences"
          description="Un niveau est validé (ou non) au bout de chaque année. Je démontre ici le niveau de fin de parcours."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {niveaux.map((n, i) => (
            <Reveal key={n.numero} delay={i * 0.08}>
              <div
                className={`card relative h-full overflow-hidden p-6 ${
                  n.actuel ? 'ring-1 ring-brand' : ''
                }`}
              >
                {n.actuel && (
                  <span className="absolute right-4 top-4 rounded-full bg-brand px-2.5 py-0.5 text-xs font-bold text-white">
                    Mon niveau
                  </span>
                )}
                <p className="font-display text-5xl font-bold text-surface-2" style={{ WebkitTextStroke: '1px rgba(148,163,184,0.3)' }}>
                  {n.numero}
                </p>
                <h3 className="mt-2 text-xl font-bold text-ink">{n.nom}</h3>
                <p className="text-sm font-medium text-brand">{n.annee}</p>
                <p className="mt-3 text-sm text-muted">{n.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Échelle d'évaluation */}
      <section className="mt-20">
        <SectionHeading
          eyebrow="Échelle descriptive analytique"
          title="Comment se juge la qualité d'une démonstration"
          description="L'évaluation va de la simple présence de traces jusqu'à une vision systémique régulée en continu. Je m'auto-positionne sur cette échelle pour chaque compétence."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {echelleEvaluation.map((e, i) => (
            <Reveal key={e.plage} delay={i * 0.06}>
              <div className="card h-full overflow-hidden p-5">
                <div className="flex items-center gap-2">
                  <Gauge size={16} style={{ color: e.couleur }} />
                  <span className="font-display text-lg font-bold" style={{ color: e.couleur }}>
                    {e.plage}
                  </span>
                </div>
                <h3 className="mt-3 font-semibold text-ink">{e.titre}</h3>
                <p className="mt-2 text-sm text-muted">{e.detail}</p>
                <div className="mt-4 h-1.5 w-full rounded-full" style={{ background: e.couleur, opacity: 0.7 }} />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Questionnement réflexif */}
      <section className="mt-20">
        <SectionHeading
          eyebrow="Méthode"
          title="Le questionnement appliqué à chaque trace"
          description="Chaque preuve de ce portfolio a été passée au crible de ces six questions."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {questionnementReflexif.map((q, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="card flex items-start gap-4 p-5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line bg-surface-2 font-display text-sm font-bold text-brand">
                  {i + 1}
                </span>
                <p className="text-sm text-muted">{q}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Comment lire */}
      <Reveal className="mt-20">
        <div className="card-soft relative overflow-hidden p-8 sm:p-10">
          <div className="relative max-w-2xl">
            <span className="chip"><HelpCircle size={14} className="text-brand" /> Mode d'emploi</span>
            <h2 className="mt-4 text-2xl font-bold text-ink">Comment lire ce portfolio</h2>
            <p className="mt-3 text-muted">
              Chaque page de compétence présente sa définition, ses composantes essentielles et ses
              apprentissages critiques de niveau Confirmé, puis mon auto-positionnement et des traces
              analysées de façon réflexive (ce qu'elles montrent, ce qu'elles prouvent, ce que
              j'améliorerais).
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/competences" className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white">
                Explorer les compétences <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  )
}
