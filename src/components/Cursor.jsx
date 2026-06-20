import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// Curseur d'accent (anneau) qui suit la souris — masqué sur écrans tactiles.
// Le curseur natif reste visible (pas de perte d'ergonomie).
export default function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 350, damping: 28, mass: 0.3 })
  const sy = useSpring(y, { stiffness: 350, damping: 28, mass: 0.3 })

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    setEnabled(true)
    const move = (e) => { x.set(e.clientX); y.set(e.clientY) }
    const over = (e) => {
      setHovering(!!e.target.closest('a, button, [data-cursor]'))
    }
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerover', over)
    return () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerover', over)
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden md:block"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        className="rounded-full border"
        animate={{
          width: hovering ? 56 : 26,
          height: hovering ? 56 : 26,
          borderColor: hovering ? 'rgba(0,113,227,0.9)' : 'rgba(15,23,42,0.35)',
          backgroundColor: hovering ? 'rgba(0,113,227,0.08)' : 'rgba(0,113,227,0)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
        style={{ translateX: '-50%', translateY: '-50%' }}
      />
    </motion.div>
  )
}
