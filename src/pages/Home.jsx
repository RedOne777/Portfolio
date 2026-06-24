import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronRight, ChevronDown, ArrowRight } from 'lucide-react'
import { profil } from '../data/site'
import Reveal from '../components/Reveal'
import RevealText from '../components/RevealText'
import ScrambleText from '../components/ScrambleText'
import NetworkCanvas from '../components/NetworkCanvas'
import Marquee from '../components/Marquee'
import Magnetic from '../components/Magnetic'
import TokenPill from '../components/TokenPill'
import HorizontalCompetences from '../components/HorizontalCompetences'

const KEYWORDS = [
  'Données', 'Décisionnel', 'Big Data', 'SQL', 'Power BI', 'Neo4j',
  'Qdrant', 'PostGIS', 'Data mining', 'Python', 'Cartographie', 'RATP',
]

// Étiquettes "tokens" flottantes (façon design system) — côté droit du hero
const PILLS = [
  { label: 'role = "apprenti.data"', color: '#3b8cff', cls: 'right-[8%] top-[20%]', d: 6 },
  { label: 'skill.data = "confirmé"', color: '#38bdf8', cls: 'right-[14%] top-[40%]', d: 7.5 },
  { label: 'stack = [sql, python, neo4j]', color: '#a78bfa', cls: 'right-[6%] top-[60%]', d: 6.8 },
  { label: 'org = "ratp.infra"', color: '#34d399', cls: 'right-[18%] top-[78%]', d: 8 },
]

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0])

  return (
    <>
      {/* ===================== HERO (ancré à gauche) ===================== */}
      <section ref={heroRef} className="relative flex min-h-screen items-center overflow-hidden bg-bg">
        {/* réseau de données (atténué) */}
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <NetworkCanvas nodeColor="#3b8cff" lineColor="rgba(255,255,255,0.09)" density={0.00009} />
        </div>

        {/* lignes de grille (repères) */}
        <div className="pointer-events-none absolute inset-0 hidden sm:block">
          <div className="absolute inset-y-0 left-1/4 w-px bg-line" />
          <div className="absolute inset-y-0 left-1/2 w-px bg-line" />
          <div className="absolute inset-y-0 left-3/4 w-px bg-line" />
        </div>

        {/* dégradé pour lisibilité du texte à gauche */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/85 to-bg/30" />

        {/* tokens flottants (desktop) */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          {PILLS.map((p) => (
            <motion.div
              key={p.label}
              className={`absolute ${p.cls}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: [0, -12, 0] }}
              transition={{
                opacity: { duration: 0.6, delay: 0.8 },
                y: { duration: p.d, repeat: Infinity, ease: 'easeInOut' },
              }}
            >
              <TokenPill label={p.label} color={p.color} />
            </motion.div>
          ))}
        </div>

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="container-wide relative z-10"
        >
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-mono text-xs uppercase tracking-[0.22em] text-muted"
            >
              Portfolio de fin d'études · 2023—2026
            </motion.p>

            <h1 className="mt-5 font-semibold leading-[0.92] tracking-[-0.035em] text-ink">
              <ScrambleText
                as="span"
                text={profil.prenom}
                className="block text-[clamp(3.2rem,12vw,8.5rem)]"
              />
              <ScrambleText
                as="span"
                text={profil.nom}
                className="block text-[clamp(3.2rem,12vw,8.5rem)]"
              />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="mt-6 font-serif text-[clamp(1.5rem,4vw,2.6rem)] italic leading-tight text-ink-soft"
            >
              Étudiant en informatique, apprenti en data.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.62 }}
              className="mt-2 font-mono text-sm text-muted"
            >
              {'> '}RATP Infrastructure
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.75 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Magnetic>
                <Link to="/competences" className="btn btn-primary">
                  Découvrir mes compétences <ChevronRight size={17} />
                </Link>
              </Magnetic>
              <Magnetic strength={0.2}>
                <Link to="/demarche" className="link-arrow text-[17px]">
                  Comment lire ce site <ChevronRight size={16} />
                </Link>
              </Magnetic>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted"
        >
          <motion.div animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
            <ChevronDown size={22} />
          </motion.div>
        </motion.div>
      </section>

      {/* ===================== BANDEAU KINÉTIQUE ===================== */}
      <div className="border-y border-line bg-surface-2 py-5 text-ink">
        <Marquee
          items={KEYWORDS}
          duration={32}
          className="text-2xl font-semibold uppercase tracking-tight sm:text-3xl"
        />
      </div>

      {/* ===================== COMPÉTENCES (scroll horizontal) ===================== */}
      <HorizontalCompetences />

      {/* ===================== FIL ROUGE RATP (sombre, ancré à gauche) ===================== */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-bg-dark text-white">
        <div className="pointer-events-none absolute inset-0">
          <NetworkCanvas nodeColor="#38bdf8" lineColor="rgba(255,255,255,0.09)" density={0.00008} />
        </div>
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(120% 90% at 10% 30%, rgba(10,37,64,0.55) 0%, #0a0b0f 60%)' }}
        />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <RevealText>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/55">Le fil rouge</p>
            </RevealText>
            <RevealText delay={0.08}>
              <h2 className="mt-4 text-[clamp(2.2rem,6vw,4.2rem)] font-semibold leading-[1.05] tracking-tight">
                Deux ans chez <span className="font-serif italic">RATP Infrastructure</span>.
              </h2>
            </RevealText>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-2xl text-lg text-white/70 sm:text-xl">
                De l'analyse de bases de données en production à la modernisation d'un système
                d'archivage critique : un cas réel qui relie mes trois compétences.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Magnetic>
                  <Link to="/realisations" className="btn btn-tesla bg-white text-black hover:bg-white/90">
                    Voir les réalisations
                  </Link>
                </Magnetic>
                <Magnetic>
                  <Link to="/parcours" className="btn btn-tesla border border-white/40 text-white hover:bg-white/10">
                    Mon parcours
                  </Link>
                </Magnetic>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== CTA (ancré à gauche) ===================== */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-bg py-28">
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <NetworkCanvas nodeColor="#34d399" lineColor="rgba(255,255,255,0.08)" density={0.00007} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/85 to-bg/30" />
        <div className="container-wide relative z-10">
          <div className="max-w-2xl">
            <RevealText>
              <h2 className="text-[clamp(2.6rem,7vw,4.5rem)] font-semibold tracking-tight text-ink">
                <ScrambleText text="Échangeons." />
              </h2>
            </RevealText>
            <Reveal delay={0.15}>
              <p className="mt-5 font-serif text-xl italic text-ink-soft">
                Une question sur mon parcours, mon apprentissage ou une opportunité ?
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Magnetic>
                  <Link to="/contact" className="btn btn-primary">
                    Me contacter <ArrowRight size={17} />
                  </Link>
                </Magnetic>
                <Link to="/profil" className="link-arrow text-[17px]">
                  En savoir plus sur moi <ChevronRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
