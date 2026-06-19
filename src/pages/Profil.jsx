import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Target, Languages as LangIcon, Sparkle, MapPin, ArrowRight } from 'lucide-react'
import { profil, competencesTechniques, atouts, langues } from '../data/site'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

export default function Profil() {
  return (
    <div className="container-px pt-32 pb-10">
      {/* En-tête */}
      <section className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="chip"><MapPin size={14} className="text-brand" /> {profil.localisation}</span>
          <h1 className="mt-5 font-display text-4xl font-bold text-ink sm:text-5xl">Profil</h1>
          <p className="mt-3 text-lg font-medium text-ink/90">{profil.titre}</p>
          <p className="text-brand">{profil.sousTitre}</p>
          <div className="mt-6 max-w-2xl space-y-4 text-muted">
            {profil.bio.map((p, i) => (
              <p key={i} className="leading-relaxed">{p}</p>
            ))}
          </div>
        </motion.div>

        {/* Avatar (déposez une photo dans public/ et remplacez ce bloc si besoin) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto"
        >
          <div className="relative grid h-44 w-44 place-items-center rounded-3xl border border-line bg-surface-2 sm:h-52 sm:w-52">
            <div className="glow inset-0 h-full w-full" style={{ background: '#38bdf8', opacity: 0.25 }} />
            <span className="relative font-display text-6xl font-bold text-gradient">{profil.initiales}</span>
          </div>
        </motion.div>
      </section>

      {/* Objectif */}
      <Reveal className="mt-12">
        <div className="card flex items-start gap-4 p-6">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-surface-2 text-brand">
            <Target size={20} />
          </span>
          <div>
            <h2 className="font-display text-lg font-semibold text-ink">Objectif professionnel</h2>
            <p className="mt-1 text-muted">{profil.objectif}</p>
          </div>
        </div>
      </Reveal>

      {/* Compétences techniques */}
      <section className="mt-20">
        <SectionHeading eyebrow="Boîte à outils" title="Compétences techniques" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {competencesTechniques.map((g, i) => (
            <Reveal key={g.famille} delay={i * 0.06}>
              <div className="card h-full p-6">
                <h3 className="font-display text-base font-semibold text-ink">{g.famille}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span key={it} className="chip text-ink">{it}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Atouts + Langues */}
      <section className="mt-16 grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="card h-full p-6">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-surface-2 text-brand"><Sparkle size={18} /></span>
              <h2 className="font-display text-lg font-semibold text-ink">Atouts</h2>
            </div>
            <ul className="mt-5 space-y-3">
              {atouts.map((a) => (
                <li key={a} className="flex gap-3 text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="card h-full p-6">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-surface-2 text-brand"><LangIcon size={18} /></span>
              <h2 className="font-display text-lg font-semibold text-ink">Langues</h2>
            </div>
            <ul className="mt-5 space-y-5">
              {langues.map((l) => (
                <li key={l.langue}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-ink">{l.langue}</span>
                    <span className="text-muted">{l.niveau}</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
                    <div className="h-full rounded-full bg-gradient-to-r from-brand to-brand-2" style={{ width: `${l.valeur}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <Reveal className="mt-16">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-line bg-surface-2/40 p-6">
          <p className="text-muted">Découvrez la démonstration de mes trois compétences.</p>
          <Link to="/competences" className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-[#04121f]">
            Voir les compétences <ArrowRight size={16} />
          </Link>
        </div>
      </Reveal>
    </div>
  )
}
