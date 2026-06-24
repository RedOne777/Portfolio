import { motion } from 'framer-motion'

// Montgolfière : enveloppe rayée + nacelle, légère oscillation et dérive douce.
export default function Balloon({ className = '', dur = 15, delay = 0, scale = 1 }) {
  const w = 64 * scale
  const h = 92 * scale
  return (
    <motion.div
      className={`pointer-events-none absolute ${className}`}
      animate={{ y: [0, -18, 0], x: [0, 9, 0], rotate: [-2.5, 2.5, -2.5] }}
      transition={{ duration: dur, repeat: Infinity, ease: 'easeInOut', delay }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 64 92" width={w} height={h} fill="none">
        <defs>
          <radialGradient id="balloon-env" cx="38%" cy="30%" r="75%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="45%" stopColor="#cfe0fa" />
            <stop offset="100%" stopColor="#9ab8ee" />
          </radialGradient>
        </defs>
        {/* enveloppe */}
        <path
          d="M32 2 C50 2 60 16 60 32 C60 48 46 58 38 64 L26 64 C18 58 4 48 4 32 C4 16 14 2 32 2 Z"
          fill="url(#balloon-env)"
          stroke="rgba(20,24,40,0.12)"
          strokeWidth="1"
        />
        {/* bandes colorées suivant la courbure */}
        <path d="M32 2 C40 18 40 48 35 64 L29 64 C24 48 24 18 32 2 Z" fill="#2563eb" opacity="0.85" />
        <path d="M18 6 C16 24 18 50 26 64 L22 64 C14 50 12 24 18 6 Z" fill="#7c3aed" opacity="0.65" />
        <path d="M46 6 C48 24 46 50 38 64 L42 64 C50 50 52 24 46 6 Z" fill="#0ea5e9" opacity="0.65" />
        {/* cordes */}
        <line x1="27" y1="64" x2="29" y2="76" stroke="rgba(20,24,40,0.4)" strokeWidth="1" />
        <line x1="37" y1="64" x2="35" y2="76" stroke="rgba(20,24,40,0.4)" strokeWidth="1" />
        {/* nacelle */}
        <path d="M28 76 L36 76 L35 84 L29 84 Z" fill="#8a5a2b" />
      </svg>
    </motion.div>
  )
}
