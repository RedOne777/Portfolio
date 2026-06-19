import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'

// Grain (bruit) encodé en SVG — donne une texture premium qui casse le "plat".
const NOISE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

/**
 * Décor technique subtil pour une section (grille de points, repères, grain,
 * lignes guides et petits points flottants). Accent = couleur de la section.
 */
export default function TechBackdrop({ accent = '#0071e3', dark = false }) {
  const dot = dark ? 'rgba(255,255,255,0.10)' : 'rgba(15,23,42,0.07)'
  const guide = dark ? 'rgba(255,255,255,0.07)' : 'rgba(15,23,42,0.06)'
  const cross = dark ? 'rgba(255,255,255,0.18)' : 'rgba(15,23,42,0.16)'

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Grille de points, estompée vers les bords */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, ${dot} 1px, transparent 1.6px)`,
          backgroundSize: '26px 26px',
          maskImage: 'radial-gradient(ellipse 75% 65% at 50% 45%, #000 25%, transparent 78%)',
          WebkitMaskImage: 'radial-gradient(ellipse 75% 65% at 50% 45%, #000 25%, transparent 78%)',
        }}
      />

      {/* Champ radial teinté par l'accent */}
      <div
        className="absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: `radial-gradient(circle, ${accent}1f 0%, transparent 62%)` }}
      />

      {/* Lignes guides verticales (façon marges d'épure) */}
      <div className="absolute inset-y-0 left-[10%] w-px" style={{ background: guide }} />
      <div className="absolute inset-y-0 right-[10%] w-px" style={{ background: guide }} />

      {/* Repères "+" aux intersections */}
      <Plus size={16} className="absolute left-[10%] top-24 -translate-x-1/2" style={{ color: cross }} />
      <Plus size={16} className="absolute right-[10%] top-24 translate-x-1/2" style={{ color: cross }} />
      <Plus size={16} className="absolute left-[10%] bottom-24 -translate-x-1/2" style={{ color: cross }} />
      <Plus size={16} className="absolute right-[10%] bottom-24 translate-x-1/2" style={{ color: cross }} />

      {/* Petits points flottants (accent) */}
      {[
        { left: '16%', top: '30%', d: 5 },
        { left: '82%', top: '38%', d: 6.5 },
        { left: '24%', top: '70%', d: 7.5 },
        { left: '76%', top: '66%', d: 5.5 },
      ].map((p, i) => (
        <motion.span
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full"
          style={{ left: p.left, top: p.top, background: accent, opacity: 0.5 }}
          animate={{ y: [0, -16, 0], opacity: [0.25, 0.6, 0.25] }}
          transition={{ duration: p.d, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}
        />
      ))}

      {/* Grain */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: NOISE,
          opacity: dark ? 0.06 : 0.04,
          mixBlendMode: dark ? 'screen' : 'multiply',
        }}
      />
    </div>
  )
}
