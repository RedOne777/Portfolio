import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { projets } from '../data/projets'
import { competences } from '../data/competences'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'

export default function Realisations() {
  const [filtre, setFiltre] = useState('all')
  const { hash } = useLocation()

  // Arrivée via un lien profond (#ratp…) : on défile jusqu'au projet ciblé,
  // une fois la transition de page terminée.
  useEffect(() => {
    if (!hash) return
    const id = decodeURIComponent(hash.slice(1))
    setFiltre('all')
    const t = setTimeout(() => {
      const el = document.getElementById(id)
      if (!el) return
      if (window.__lenis) window.__lenis.scrollTo(el, { offset: -110 })
      else el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      el.classList.add('is-target')
      setTimeout(() => el.classList.remove('is-target'), 2600)
    }, 450)
    return () => clearTimeout(t)
  }, [hash])

  const filtres = [
    { id: 'all', label: 'Tous', color: '#38bdf8' },
    ...competences.map((c) => ({ id: c.id, label: c.verbe, color: c.color, titre: c.titre })),
  ]

  const liste =
    filtre === 'all' ? projets : projets.filter((p) => p.competences.includes(filtre))

  return (
    <div className="container-px pt-32 pb-10">
      <section className="max-w-3xl">
        <span className="chip">Traces & preuves</span>
        <h1 className="mt-5 font-display text-4xl font-bold text-ink sm:text-5xl">Réalisations</h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          Les projets universitaires et missions professionnelles qui alimentent l'analyse réflexive
          de mes compétences. Filtrez par compétence pour voir les traces associées.
        </p>
      </section>

      {/* Filtres */}
      <div className="mt-8 flex flex-wrap gap-2">
        {filtres.map((f) => {
          const active = filtre === f.id
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => setFiltre(f.id)}
              title={f.titre || 'Tous les projets'}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                active ? 'text-white' : 'text-muted hover:text-ink'
              }`}
              style={
                active
                  ? { background: f.color, borderColor: f.color }
                  : { borderColor: 'var(--color-line)' }
              }
            >
              {f.label}
            </button>
          )
        })}
      </div>

      {/* Grille */}
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {liste.map((p, i) => (
          <Reveal key={p.id} delay={(i % 3) * 0.06}>
            <ProjectCard projet={p} />
          </Reveal>
        ))}
      </div>

      {liste.length === 0 && (
        <p className="mt-12 text-center text-muted">Aucun projet pour ce filtre.</p>
      )}
    </div>
  )
}
