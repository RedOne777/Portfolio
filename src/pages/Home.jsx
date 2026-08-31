import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { ChevronRight, ChevronDown, ArrowRight } from 'lucide-react'
import { profil } from '../data/site'
import Reveal from '../components/Reveal'
import RevealText from '../components/RevealText'
import SkyScene, { Cloud } from '../components/SkyScene'
import { useWeather, useWeatherName } from '../components/WeatherContext'
import Magnetic from '../components/Magnetic'
import TokenPill from '../components/TokenPill'
import HorizontalCompetences from '../components/HorizontalCompetences'

// Index de domaines — bandeau éditorial statique (remplace le marquee)
const DOMAINES = [
  'Données', 'Décisionnel', 'SQL', 'Power BI', 'Neo4j', 'PostGIS', 'Python', 'RATP',
]

export default function Home() {
  const heroRef = useRef(null)
  const weather = useWeather()
  const weatherName = useWeatherName()
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0])

  return (
    <>
      {/* ===================== HERO (thème ciel — inchangé) ===================== */}
      <section
        ref={heroRef}
        className="relative flex min-h-screen items-end overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #a6c8fb 0%, #cfe0fa 38%, #e9eff8 72%, #eef1f7 100%)' }}
      >
        {/* ciel : fondu enchaîné entre les météos */}
        <AnimatePresence initial={false}>
          <motion.div
            key={weatherName}
            className="absolute inset-0"
            style={{ background: weather.sky }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, ease: 'easeInOut' }}
          />
        </AnimatePresence>

        {/* décor : ciel, nuages, oiseaux, montgolfière, météo */}
        <SkyScene />

        {/* dégradé pour lisibilité du texte à gauche */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg/65 via-bg/15 to-transparent" />

        {/* indicateur météo (élément du thème ciel) */}
        <motion.div
          className="pointer-events-none absolute right-[7%] top-[20%] hidden lg:block"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, -10, 0] }}
          transition={{ opacity: { duration: 0.6, delay: 0.8 }, y: { duration: 6.5, repeat: Infinity, ease: 'easeInOut' } }}
        >
          <TokenPill label={`météo · ${weatherName}`} color="#2563eb" />
        </motion.div>

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="container-wide relative z-10 pb-24 pt-28"
        >
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-xs uppercase tracking-[0.24em] text-muted"
            >
              Portfolio · Données &amp; systèmes d'information
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-6 font-medium leading-[0.94] tracking-[-0.02em] text-ink"
            >
              <span className="block text-[clamp(2.7rem,7.6vw,5.4rem)]">{profil.prenom}</span>
              <span className="block text-[clamp(2.7rem,7.6vw,5.4rem)] italic">{profil.nom}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="mt-6 text-xl text-ink-soft sm:text-2xl"
            >
              {profil.titre}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.62 }}
              className="mt-1 text-lg text-muted sm:text-xl"
            >
              {profil.sousTitre}
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
                <Link to="/realisations" className="link-arrow text-[17px]">
                  Voir mes réalisations <ChevronRight size={16} />
                </Link>
              </Magnetic>
            </motion.div>
          </div>
        </motion.div>

        {/* nuage de premier plan : le nom se fond derrière */}
        <Cloud className="left-[0%] bottom-[34%] z-20 h-32 w-[26rem]" opacity={0.55} blur={22} dur={34} />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2 text-muted"
        >
          <motion.div animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
            <ChevronDown size={22} />
          </motion.div>
        </motion.div>
      </section>

      {/* ===================== INDEX DE DOMAINES (statique, éditorial) ===================== */}
      <div className="border-y border-line bg-surface-2/60">
        <div className="container-wide flex flex-wrap items-center gap-x-3 gap-y-2 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
          {DOMAINES.map((d, i) => (
            <span key={d} className="flex items-center gap-3">
              {i > 0 && <span aria-hidden className="text-line">/</span>}
              {d}
            </span>
          ))}
        </div>
      </div>

      {/* ===================== COMPÉTENCES (scroll horizontal) ===================== */}
      <HorizontalCompetences />

      {/* ===================== FIL ROUGE RATP (sombre, éditorial) ===================== */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-bg-dark text-white">
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(120% 90% at 12% 22%, rgba(37,99,235,0.28) 0%, #0a1330 62%)' }}
        />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <RevealText>
              <p className="text-xs uppercase tracking-[0.24em] text-white/55">Le fil rouge</p>
            </RevealText>
            <RevealText delay={0.08}>
              <h2 className="mt-5 text-[clamp(2.4rem,6.4vw,4.6rem)] leading-[1.02]">
                Deux ans chez RATP Infrastructure.
              </h2>
            </RevealText>
            <Reveal delay={0.2}>
              <p className="mt-7 max-w-2xl text-lg text-white/70 sm:text-xl">
                De l'analyse de bases de données en production à la modernisation d'un système
                d'archivage critique : un cas réel qui relie mes trois compétences.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Magnetic>
                  <Link to="/realisations#ratp" className="btn btn-tesla bg-white text-black hover:bg-white/90">
                    Voir la mission RATP
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

      {/* ===================== CTA (éditorial, épuré) ===================== */}
      <section className="relative flex min-h-[64vh] items-center overflow-hidden bg-bg py-28">
        <div className="container-wide relative z-10">
          <div className="max-w-2xl">
            <RevealText>
              <h2 className="text-[clamp(2.8rem,7vw,4.8rem)] leading-[1.0] text-ink">
                Échangeons.
              </h2>
            </RevealText>
            <Reveal delay={0.15}>
              <p className="mt-6 text-xl text-ink-soft">
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
