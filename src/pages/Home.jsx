import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Compass, Sparkles, Database } from 'lucide-react'
import { Github, Linkedin } from '../components/BrandIcons'
import { profil, contact, chiffresCles } from '../data/site'
import { competences } from '../data/competences'
import { projets } from '../data/projets'
import CompetenceCard from '../components/CompetenceCard'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

export default function Home() {
  const vedettes = projets.filter((p) => p.vedette)

  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
        <div className="absolute inset-0 -z-10 grid-bg" />
        <div className="container-px">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <span className="chip">
              <Sparkles size={14} className="text-brand" />
              Portfolio de fin de parcours · BUT3 Informatique
            </span>

            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] text-ink sm:text-6xl">
              {profil.prenom} <span className="text-gradient">{profil.nom}</span>
            </h1>
            <p className="mt-4 text-xl font-medium text-ink/90">{profil.titre}</p>
            <p className="text-lg text-brand">{profil.sousTitre}</p>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              {profil.accroche}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/competences"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-[#04121f] transition-transform hover:scale-[1.03]"
              >
                Découvrir mes compétences
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/demarche"
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-surface-2"
              >
                <Compass size={18} /> La démarche
              </Link>
              <div className="ml-1 flex items-center gap-2">
                <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-11 w-11 place-items-center rounded-full border border-line text-muted transition-colors hover:text-ink">
                  <Github size={18} />
                </a>
                <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full border border-line text-muted transition-colors hover:text-ink">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Chiffres clés */}
          <motion.dl
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {chiffresCles.map((c) => (
              <div key={c.label} className="card p-5">
                <dt className="font-display text-2xl font-bold text-gradient sm:text-3xl">{c.valeur}</dt>
                <dd className="mt-1 text-sm text-muted">{c.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </section>

      {/* ===================== COMPÉTENCES ===================== */}
      <section className="container-px py-20">
        <SectionHeading
          eyebrow="Les 3 compétences · Niveau Confirmé"
          title="Une expertise centrée sur la donnée"
          description="Le parcours AGED développe trois compétences au plus haut niveau du BUT. Chaque page démontre, traces à l'appui, l'acquisition du niveau Confirmé."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {competences.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.08}>
              <CompetenceCard competence={c} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===================== DÉMARCHE (teaser) ===================== */}
      <section className="container-px py-10">
        <Reveal>
          <div className="card relative overflow-hidden p-8 sm:p-12">
            <div className="glow right-0 top-0 h-64 w-64" style={{ background: '#38bdf8' }} />
            <div className="relative max-w-2xl">
              <span className="chip"><Database size={14} className="text-brand" /> Démarche portfolio</span>
              <h2 className="mt-5 text-2xl font-bold text-ink sm:text-3xl">
                Un portfolio, ce n'est pas une vitrine : c'est une preuve.
              </h2>
              <p className="mt-4 text-muted">
                Conformément à l'Approche Par Compétences, ce site adopte une posture réflexive et critique :
                il collectionne des traces issues de mes mises en situation, puis les analyse au regard des
                composantes essentielles et des apprentissages critiques du référentiel.
              </p>
              <Link
                to="/demarche"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand link-underline"
              >
                Comprendre la démarche et l'évaluation <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ===================== RÉALISATIONS ===================== */}
      <section className="container-px py-20">
        <div className="flex items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Réalisations"
            title="Des projets qui font preuve"
            description="Les traces concrètes mobilisées dans mon analyse réflexive."
          />
          <Link to="/realisations" className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-brand link-underline sm:inline-flex">
            Tout voir <ArrowRight size={16} />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {vedettes.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <ProjectCard projet={p} />
            </Reveal>
          ))}
        </div>
        <div className="mt-8 sm:hidden">
          <Link to="/realisations" className="inline-flex items-center gap-1 text-sm font-semibold text-brand">
            Toutes les réalisations <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="container-px pb-10">
        <Reveal>
          <div className="card flex flex-col items-center gap-5 p-10 text-center sm:p-14">
            <h2 className="max-w-2xl text-2xl font-bold text-ink sm:text-3xl">
              Envie d'échanger sur la donnée, l'alternance ou mon parcours ?
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-[#04121f] transition-transform hover:scale-[1.03]"
            >
              Me contacter <ArrowRight size={18} />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
