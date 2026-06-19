import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronRight, ChevronDown, ArrowRight, Database, Workflow, Users } from 'lucide-react'
import { profil } from '../data/site'
import { competences } from '../data/competences'
import Reveal from '../components/Reveal'

const ICONS = { c4: Database, c5: Workflow, c6: Users }

export default function Home() {
  // Active le scroll-snap uniquement sur l'accueil
  useEffect(() => {
    document.documentElement.classList.add('snap')
    return () => document.documentElement.classList.remove('snap')
  }, [])

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
      {/* ===================== ÉCRAN 1 — HERO ===================== */}
      <section
        ref={heroRef}
        className="snap-section relative flex min-h-screen items-center justify-center overflow-hidden"
      >
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

      {/* ===================== ÉCRANS 2-4 — COMPÉTENCES ===================== */}
      {competences.map((c, i) => {
        const Icon = ICONS[c.id] || Database
        return (
          <section
            key={c.id}
            className="snap-section relative flex min-h-screen items-center justify-center overflow-hidden"
            style={{ background: i % 2 === 0 ? '#ffffff' : 'var(--color-surface-2)' }}
          >
            {/* filigrane code */}
            <span
              className="pointer-events-none absolute select-none text-[34vw] font-bold leading-none tracking-tighter sm:text-[24vw]"
              style={{ color: c.color, opacity: 0.05 }}
              aria-hidden="true"
            >
              {c.code}
            </span>
            {/* teinte radiale */}
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{ background: `radial-gradient(circle, ${c.color}14 0%, transparent 60%)` }}
            />

            <div className="container-px relative z-10 text-center">
              <Reveal>
                <span
                  className="mx-auto grid h-16 w-16 place-items-center rounded-2xl"
                  style={{ background: `${c.color}1a`, color: c.color }}
                >
                  <Icon size={30} />
                </span>
                <p className="mt-6 text-sm font-semibold tracking-wide" style={{ color: c.color }}>
                  Compétence {c.code.replace('C', '')} · Niveau Confirmé
                </p>
                <h2 className="mx-auto mt-3 max-w-4xl text-[40px] font-semibold leading-[1.06] tracking-tight text-ink sm:text-[64px] lg:text-[76px]">
                  {c.titre}
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl">{c.tagline}</p>
                <p className="mt-5 text-sm text-muted">
                  {c.apprentissagesCritiques.length} apprentissages critiques ·{' '}
                  {c.composantesEssentielles.length} composantes essentielles
                </p>
                <Link
                  to={`/competences/${c.slug}`}
                  className="btn mt-9 text-white"
                  style={{ background: c.color }}
                >
                  Explorer la compétence <ChevronRight size={17} />
                </Link>
              </Reveal>
            </div>
          </section>
        )
      })}

      {/* ===================== ÉCRAN 5 — FIL ROUGE RATP (sombre) ===================== */}
      <section className="snap-section relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">
        <div
          className="absolute inset-0 opacity-70"
          style={{ background: 'radial-gradient(120% 80% at 50% 0%, #0a2540 0%, #000 60%)' }}
        />
        <div className="container-px relative z-10 text-center">
          <Reveal>
            <p className="eyebrow text-white/60">Le fil rouge</p>
            <h2 className="mx-auto mt-4 max-w-4xl text-[36px] font-semibold leading-[1.08] tracking-tight sm:text-[64px]">
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

      {/* ===================== ÉCRAN 6 — CTA ===================== */}
      <section className="snap-section relative flex min-h-screen items-center justify-center bg-white">
        <div className="container-px text-center">
          <Reveal>
            <p className="eyebrow">Démarche réflexive · niveau Confirmé</p>
            <h2 className="mx-auto mt-4 max-w-3xl text-[40px] font-semibold tracking-tight text-ink sm:text-[64px]">
              Échangeons.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
              Une question sur mon parcours, mon alternance ou une opportunité ?
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact" className="btn btn-primary">
                Me contacter <ArrowRight size={17} />
              </Link>
              <Link to="/profil" className="link-arrow text-[17px]">
                En savoir plus sur moi <ChevronRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
