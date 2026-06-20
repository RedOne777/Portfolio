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
import HorizontalCompetences from '../components/HorizontalCompetences'

const KEYWORDS = [
  'Données', 'Décisionnel', 'Big Data', 'SQL', 'Power BI', 'Neo4j',
  'Qdrant', 'PostGIS', 'Data mining', 'RATP', 'AGED', 'BUT3',
]

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0])

  return (
    <>
      {/* ===================== HERO ===================== */}
      <section
        ref={heroRef}
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white"
      >
        {/* Réseau de données interactif */}
        <div className="pointer-events-none absolute inset-0">
          <NetworkCanvas nodeColor="#0071e3" lineColor="rgba(15,23,42,0.13)" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white" />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="container-px relative z-10 py-28 text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="eyebrow"
          >
            Portfolio de fin de parcours · BUT3 Informatique
          </motion.p>

          <ScrambleText
            as="h1"
            text={`${profil.prenom} ${profil.nom}`}
            className="mx-auto mt-4 block max-w-5xl text-[46px] font-semibold leading-[1.02] tracking-[-0.03em] text-ink sm:text-[78px] lg:text-[96px]"
          />

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="mx-auto mt-6 max-w-2xl text-xl text-ink-soft sm:text-2xl"
          >
            {profil.titre}. <span className="text-muted">{profil.sousTitre}.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-4"
          >
            <Magnetic>
              <Link to="/competences" className="btn btn-primary">
                Découvrir mes compétences <ChevronRight size={17} />
              </Link>
            </Magnetic>
            <Magnetic strength={0.2}>
              <Link to="/demarche" className="link-arrow text-[17px]">
                La démarche portfolio <ChevronRight size={16} />
              </Link>
            </Magnetic>
          </motion.div>
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
      <div className="border-y border-ink bg-ink py-5 text-white">
        <Marquee
          items={KEYWORDS}
          duration={32}
          className="text-2xl font-semibold uppercase tracking-tight sm:text-3xl"
        />
      </div>

      {/* ===================== COMPÉTENCES (scroll horizontal) ===================== */}
      <HorizontalCompetences />

      {/* ===================== FIL ROUGE RATP (sombre) ===================== */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">
        <div className="pointer-events-none absolute inset-0">
          <NetworkCanvas nodeColor="#38bdf8" lineColor="rgba(255,255,255,0.10)" density={0.00008} />
        </div>
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(120% 80% at 50% 30%, rgba(10,37,64,0.6) 0%, #000 65%)' }}
        />
        <div className="container-px relative z-10 text-center">
          <RevealText>
            <p className="eyebrow text-white/60">Le fil rouge</p>
          </RevealText>
          <RevealText delay={0.08}>
            <h2 className="mx-auto mt-4 max-w-4xl text-[36px] font-semibold leading-[1.08] tracking-tight sm:text-[64px]">
              Deux ans chez <span className="text-white">RATP Infrastructure</span>.
            </h2>
          </RevealText>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70 sm:text-xl">
              De l'analyse de bases de données en production à la modernisation d'un système
              d'archivage critique : un cas réel qui relie mes trois compétences.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
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
      </section>

      {/* ===================== CTA ===================== */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-white py-28">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <NetworkCanvas nodeColor="#1d9d74" lineColor="rgba(15,23,42,0.10)" density={0.00007} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white" />
        <div className="container-px relative z-10 text-center">
          <RevealText>
            <h2 className="mx-auto max-w-3xl text-[44px] font-semibold tracking-tight text-ink sm:text-[72px]">
              <ScrambleText text="Échangeons." />
            </h2>
          </RevealText>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
              Une question sur mon parcours, mon alternance ou une opportunité ?
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
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
      </section>
    </>
  )
}
