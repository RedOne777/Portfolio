import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronRight, ChevronDown, ArrowRight } from 'lucide-react'
import { profil, chiffresCles } from '../data/site'
import { competences } from '../data/competences'
import { projets } from '../data/projets'
import CompetenceCard from '../components/CompetenceCard'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

export default function Home() {
  const vedettes = projets.filter((p) => p.vedette)
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 140])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95])

  return (
    <>
      {/* ===================== HERO plein écran ===================== */}
      <section ref={heroRef} className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* fond clair très subtil */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white to-surface-2" />
        <div
          className="absolute left-1/2 top-1/3 -z-10 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(circle, #0071e3 0%, transparent 60%)' }}
        />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
          className="container-px py-28 text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="eyebrow"
          >
            Portfolio de fin de parcours · BUT3 Informatique
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-4 max-w-4xl text-[44px] font-semibold leading-[1.04] tracking-[-0.03em] text-ink sm:text-[72px] lg:text-[88px]"
          >
            {profil.prenom} {profil.nom}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-5 max-w-2xl text-xl text-ink-soft sm:text-2xl"
          >
            {profil.titre}. <span className="text-muted">{profil.sousTitre}.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-wrap items-center justify-center gap-4"
          >
            <Link to="/competences" className="btn btn-primary">
              Découvrir mes compétences <ChevronRight size={17} />
            </Link>
            <Link to="/demarche" className="link-arrow text-[17px]">
              La démarche portfolio <ChevronRight size={16} />
            </Link>
          </motion.div>
        </motion.div>

        {/* indicateur de défilement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
        >
          <motion.div animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
            <ChevronDown size={22} />
          </motion.div>
        </motion.div>
      </section>

      {/* ===================== STATEMENT ===================== */}
      <section className="bg-white py-28 sm:py-36">
        <div className="container-px">
          <Reveal>
            <p className="mx-auto max-w-4xl text-center text-[30px] font-semibold leading-[1.18] tracking-tight text-ink sm:text-[46px]">
              La donnée, <span className="text-muted">du modèle à la décision.</span> Un portfolio qui
              ne se contente pas de montrer&nbsp;— il <span className="text-brand">démontre</span>.
            </p>
          </Reveal>

          {/* chiffres clés */}
          <Reveal delay={0.1}>
            <dl className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-[18px] border border-line bg-line sm:grid-cols-4">
              {chiffresCles.map((c) => (
                <div key={c.label} className="bg-white p-6 text-center">
                  <dt className="text-[32px] font-semibold tracking-tight text-ink">{c.valeur}</dt>
                  <dd className="mt-1 text-[13px] text-muted">{c.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ===================== COMPÉTENCES (tuiles) ===================== */}
      <section className="bg-surface-2 py-24 sm:py-32">
        <div className="container-wide">
          <SectionHeading
            center
            eyebrow="Les 3 compétences · Niveau Confirmé"
            title="Une expertise centrée sur la donnée"
            description="Le parcours AGED développe trois compétences au plus haut niveau du BUT. Chaque page démontre, traces à l'appui, l'acquisition du niveau Confirmé."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {competences.map((c, i) => (
              <Reveal key={c.id} delay={i * 0.1}>
                <CompetenceCard competence={c} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FIL ROUGE (section sombre cinématique) ===================== */}
      <section className="relative overflow-hidden bg-black py-32 text-white sm:py-44">
        <div
          className="absolute inset-0 -z-0 opacity-60"
          style={{ background: 'radial-gradient(120% 80% at 50% 0%, #0a2540 0%, #000 60%)' }}
        />
        <div className="container-px relative text-center">
          <Reveal>
            <p className="eyebrow text-white/60">Le fil rouge</p>
            <h2 className="mx-auto mt-4 max-w-4xl text-[34px] font-semibold leading-[1.08] tracking-tight sm:text-[60px]">
              Deux ans chez <span className="text-white">RATP Infrastructure</span>.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70 sm:text-xl">
              De l'analyse de bases de données en production à la modernisation d'un système
              d'archivage critique : un cas réel qui relie mes trois compétences.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link to="/realisations" className="btn btn-tesla bg-white text-black hover:bg-white/90">
                Voir les réalisations
              </Link>
              <Link to="/parcours" className="btn btn-tesla border border-white/40 text-white hover:bg-white/10">
                Mon parcours
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== DÉMARCHE (feature claire) ===================== */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container-px text-center">
          <Reveal>
            <p className="eyebrow">Démarche portfolio</p>
            <h2 className="mx-auto mt-4 max-w-3xl text-[30px] font-semibold leading-[1.12] tracking-tight text-ink sm:text-[44px]">
              Un portfolio, ce n'est pas une vitrine. C'est une preuve.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">
              Conformément à l'Approche Par Compétences, ce site adopte une posture réflexive :
              collectionner des traces, puis les analyser au regard des composantes essentielles et
              des apprentissages critiques du référentiel.
            </p>
            <Link to="/demarche" className="link-arrow mt-7 inline-flex text-[17px]">
              Comprendre la démarche et l'évaluation <ChevronRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ===================== RÉALISATIONS ===================== */}
      <section className="bg-surface-2 py-24 sm:py-32">
        <div className="container-wide">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Réalisations"
              title="Des projets qui font preuve"
              description="Les traces concrètes mobilisées dans mon analyse réflexive."
            />
            <Link to="/realisations" className="link-arrow hidden text-[15px] sm:inline-flex">
              Tout voir <ChevronRight size={16} />
            </Link>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {vedettes.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.1}>
                <ProjectCard projet={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="bg-white py-28 sm:py-36">
        <div className="container-px text-center">
          <Reveal>
            <h2 className="mx-auto max-w-3xl text-[34px] font-semibold tracking-tight text-ink sm:text-[52px]">
              Échangeons.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
              Une question sur mon parcours, mon alternance ou une opportunité ?
            </p>
            <Link to="/contact" className="btn btn-primary mt-8">
              Me contacter <ArrowRight size={17} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
