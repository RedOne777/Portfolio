import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { Database, Workflow, Users, ArrowRight } from 'lucide-react'
import { competences } from '../data/competences'

const ICONS = { c4: Database, c5: Workflow, c6: Users }

function Panel({ c }) {
  const Icon = ICONS[c.id] || Database
  const n = c.code.replace('C', '')
  return (
    <div className="relative flex h-full w-screen shrink-0 items-center">
      <div className="container-wide grid w-full items-center gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-14">
        {/* Bloc accent audacieux */}
        <div
          className="relative hidden aspect-square max-h-[60vh] items-end overflow-hidden rounded-[28px] p-8 md:flex"
          style={{ background: c.color }}
        >
          <span className="absolute -right-6 -top-12 select-none text-[18rem] font-bold leading-none text-white/15">
            {c.code}
          </span>
          <Icon size={64} className="text-white" strokeWidth={1.4} />
          <span className="absolute left-8 top-8 text-sm font-semibold uppercase tracking-widest text-white/80">
            {c.verbe}
          </span>
        </div>

        {/* Contenu */}
        <div>
          <p className="text-sm font-semibold tracking-widest" style={{ color: c.color }}>
            COMPÉTENCE {n}
          </p>
          <h3 className="mt-2 text-[34px] font-semibold leading-[1.05] tracking-tight text-ink sm:text-[52px]">
            {c.titre}
          </h3>
          <p className="mt-4 max-w-xl text-lg text-muted">{c.tagline}</p>

          <ul className="mt-6 grid max-w-xl gap-2.5">
            {c.savoirFaire.slice(0, 4).map((s, i) => (
              <li key={s} className="flex gap-3 text-[15px] text-ink-soft">
                <span className="font-mono text-sm font-semibold" style={{ color: c.color }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>{s}</span>
              </li>
            ))}
          </ul>

          <Link to={`/competences/${c.slug}`} className="btn mt-8 text-white" style={{ background: c.color }}>
            Explorer la compétence <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function HorizontalCompetences() {
  const ref = useRef(null)
  const n = competences.length
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const x = useTransform(scrollYProgress, [0, 1], ['0vw', `-${(n - 1) * 100}vw`])
  const barW = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const [active, setActive] = useState(0)
  useMotionValueEvent(scrollYProgress, 'change', (v) =>
    setActive(Math.min(n - 1, Math.max(0, Math.round(v * (n - 1)))))
  )

  return (
    <>
      {/* Desktop : scroll horizontal épinglé */}
      <section ref={ref} className="relative hidden md:block" style={{ height: `${n * 100}vh` }}>
        <div className="sticky top-0 h-screen overflow-hidden bg-bg">
          {/* En-tête fixe */}
          <div className="container-wide absolute left-1/2 top-16 z-10 -translate-x-1/2">
            <div className="flex items-end justify-between">
              <p className="eyebrow">Les 3 compétences · défilez →</p>
              <p className="font-mono text-sm text-muted">
                0{active + 1} / 0{n}
              </p>
            </div>
            <div className="mt-3 h-px w-full bg-line">
              <motion.div className="h-px bg-ink" style={{ width: barW }} />
            </div>
          </div>

          <motion.div style={{ x }} className="flex h-full" >
            {competences.map((c) => (
              <Panel key={c.id} c={c} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mobile : repli vertical */}
      <section className="md:hidden">
        {competences.map((c) => {
          const Icon = ICONS[c.id] || Database
          return (
            <div key={c.id} className="border-b border-line px-5 py-14">
              <span className="grid h-14 w-14 place-items-center rounded-2xl" style={{ background: c.color, color: '#fff' }}>
                <Icon size={26} />
              </span>
              <p className="mt-5 text-sm font-semibold tracking-widest" style={{ color: c.color }}>
                COMPÉTENCE {c.code.replace('C', '')}
              </p>
              <h3 className="mt-1 text-[30px] font-semibold leading-tight tracking-tight text-ink">{c.titre}</h3>
              <p className="mt-3 text-muted">{c.tagline}</p>
              <Link to={`/competences/${c.slug}`} className="btn mt-6 text-white" style={{ background: c.color }}>
                Explorer <ArrowRight size={16} />
              </Link>
            </div>
          )
        })}
      </section>
    </>
  )
}
