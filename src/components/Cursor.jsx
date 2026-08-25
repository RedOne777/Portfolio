import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'

// Curseur sur-mesure : un point net et précis (le curseur natif est masqué),
// qui se transforme en anneau sur les éléments interactifs et affiche une
// étiquette contextuelle sur les éléments porteurs d'un attribut data-cursor.
// Désactivé sur tactile et petits écrans — le curseur natif y reste.
export default function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const [variant, setVariant] = useState('default') // default | link | label | text
  const [label, setLabel] = useState('')

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 800, damping: 40, mass: 0.3 })
  const sy = useSpring(y, { stiffness: 800, damping: 40, mass: 0.3 })

  useEffect(() => {
    if (!window.matchMedia('(min-width: 768px) and (pointer: fine)').matches) return
    setEnabled(true)
    document.documentElement.classList.add('has-cursor')

    const move = (e) => { x.set(e.clientX); y.set(e.clientY) }
    const detect = (e) => {
      const t = e.target
      if (!t?.closest) return
      if (t.closest('input, textarea, select, [contenteditable="true"]')) { setVariant('text'); return }
      const lab = t.closest('[data-cursor]')
      if (lab) { setLabel(lab.getAttribute('data-cursor') || ''); setVariant('label'); return }
      if (t.closest('a, button, [role="button"], .btn-primary, .btn-ghost, label')) { setVariant('link'); return }
      setVariant('default')
    }
    // Réafficher le point quand la souris quitte la fenêtre puis revient
    const leave = () => { x.set(-100); y.set(-100) }

    window.addEventListener('pointermove', move, { passive: true })
    window.addEventListener('pointerover', detect, { passive: true })
    document.addEventListener('mouseleave', leave)
    return () => {
      document.documentElement.classList.remove('has-cursor')
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerover', detect)
      document.removeEventListener('mouseleave', leave)
    }
  }, [x, y])

  if (!enabled) return null

  const isText = variant === 'text'
  const isLink = variant === 'link'
  const isLabel = variant === 'label'

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100]"
      style={{ x: sx, y: sy }}
      animate={{ opacity: isText ? 0 : 1 }}
      transition={{ duration: 0.15 }}
    >
      {/* Anneau — sur les éléments interactifs */}
      <motion.span
        className="absolute block rounded-full border"
        style={{ borderColor: 'var(--color-brand)', translateX: '-50%', translateY: '-50%' }}
        animate={{
          width: isLink ? 42 : 0,
          height: isLink ? 42 : 0,
          opacity: isLink ? 0.9 : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      />

      {/* Point central — précis */}
      <motion.span
        className="absolute block rounded-full"
        style={{ background: 'var(--color-brand)', translateX: '-50%', translateY: '-50%' }}
        animate={{
          width: isLabel ? 6 : isLink ? 4 : 9,
          height: isLabel ? 6 : isLink ? 4 : 9,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />

      {/* Étiquette contextuelle */}
      <AnimatePresence mode="wait">
        {isLabel && label && (
          <motion.span
            key={label}
            initial={{ opacity: 0, scale: 0.7, x: 12, y: 12 }}
            animate={{ opacity: 1, scale: 1, x: 14, y: 14 }}
            exit={{ opacity: 0, scale: 0.7, x: 12, y: 12 }}
            transition={{ type: 'spring', stiffness: 420, damping: 26 }}
            className="absolute block whitespace-nowrap rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide shadow-lg"
            style={{ background: 'var(--color-ink)', color: 'var(--color-bg)' }}
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
