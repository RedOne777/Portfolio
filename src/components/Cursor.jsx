import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// Curseur signature : point précis + anneau à inertie.
// - mix-blend-mode: difference → l'anneau s'inverse sur le fond, donc lisible
//   aussi bien sur la section claire que sur la section bleu nuit.
// - Aimantation magnétique : au survol d'un élément interactif, l'anneau se cale
//   sur son centre (avec un léger "give" vers la souris).
// - Label contextuel via [data-cursor-label]. Pulse au clic.
// Masqué sur écrans tactiles ; le curseur natif est conservé (ergonomie).
export default function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [label, setLabel] = useState('')
  const targetRef = useRef(null)

  // Position brute de la souris (le point la suit au plus près).
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)

  // Cible de l'anneau : souris, ou centre de l'élément survolé (aimantation).
  const rx = useMotionValue(-100)
  const ry = useMotionValue(-100)

  const dotX = useSpring(x, { stiffness: 900, damping: 40, mass: 0.2 })
  const dotY = useSpring(y, { stiffness: 900, damping: 40, mass: 0.2 })
  const ringX = useSpring(rx, { stiffness: 220, damping: 26, mass: 0.5 })
  const ringY = useSpring(ry, { stiffness: 220, damping: 26, mass: 0.5 })

  const scale = useSpring(1, { stiffness: 500, damping: 24 })

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    setEnabled(true)

    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)

      // Aimantation : si on survole une cible, l'anneau vise son centre,
      // avec un léger décalage vers la souris pour garder de la vie.
      const t = targetRef.current
      if (t) {
        const r = t.getBoundingClientRect()
        const cx = r.left + r.width / 2
        const cy = r.top + r.height / 2
        rx.set(cx + (e.clientX - cx) * 0.28)
        ry.set(cy + (e.clientY - cy) * 0.28)
      } else {
        rx.set(e.clientX)
        ry.set(e.clientY)
      }
    }

    const over = (e) => {
      const t = e.target.closest('a, button, [data-cursor], [data-cursor-label]')
      targetRef.current = t || null
      setHovering(!!t)
      setLabel(t?.getAttribute('data-cursor-label') || '')
    }

    const down = () => scale.set(0.7)
    const up = () => scale.set(1)

    window.addEventListener('pointermove', move)
    window.addEventListener('pointerover', over)
    window.addEventListener('pointerdown', down)
    window.addEventListener('pointerup', up)
    return () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerover', over)
      window.removeEventListener('pointerdown', down)
      window.removeEventListener('pointerup', up)
    }
  }, [x, y, rx, ry, scale])

  if (!enabled) return null

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[60] hidden md:block">
      {/* Anneau à inertie (aimanté), en blend difference */}
      <motion.div
        className="absolute left-0 top-0"
        style={{ x: ringX, y: ringY, scale, mixBlendMode: 'difference' }}
      >
        <motion.div
          className="rounded-full border border-white"
          animate={{
            width: hovering ? 60 : 30,
            height: hovering ? 60 : 30,
            backgroundColor: hovering ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0)',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 24 }}
          style={{ translateX: '-50%', translateY: '-50%' }}
        />
      </motion.div>

      {/* Point précis, en blend difference */}
      <motion.div
        className="absolute left-0 top-0 rounded-full bg-white"
        style={{ x: dotX, y: dotY, mixBlendMode: 'difference' }}
      >
        <motion.div
          className="rounded-full bg-white"
          animate={{
            width: hovering ? 5 : 7,
            height: hovering ? 5 : 7,
            opacity: hovering ? 0.6 : 1,
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 26 }}
          style={{ translateX: '-50%', translateY: '-50%' }}
        />
      </motion.div>

      {/* Label contextuel (suit l'anneau) */}
      <motion.div
        className="absolute left-0 top-0"
        style={{ x: ringX, y: ringY }}
        animate={{ opacity: label ? 1 : 0, scale: label ? 1 : 0.8 }}
        transition={{ duration: 0.18 }}
      >
        {label && (
          <span
            className="block whitespace-nowrap rounded-full bg-[var(--color-ink)] px-3 py-1 text-xs font-medium text-white shadow-lg"
            style={{ transform: 'translate(-50%, 44px)' }}
          >
            {label}
          </span>
        )}
      </motion.div>
    </div>
  )
}
