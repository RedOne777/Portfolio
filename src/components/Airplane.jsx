import { motion } from 'framer-motion'
import { Plane } from 'lucide-react'

// Avion qui traverse le ciel en laissant une traînée de condensation.
// `dir` = 1 (gauche→droite) ou -1 (droite→gauche).
export default function Airplane({
  top = '18%',
  dur = 28,
  delay = 4,
  repeatDelay = 16,
  scale = 1,
  dir = 1,
  color = '#3c4350',
}) {
  return (
    <motion.div
      className="pointer-events-none absolute"
      style={{ top }}
      initial={{ x: dir > 0 ? '-16vw' : '116vw' }}
      animate={{ x: dir > 0 ? '116vw' : '-16vw' }}
      transition={{ duration: dur, repeat: Infinity, repeatDelay, ease: 'linear', delay }}
      aria-hidden="true"
    >
      <div className="flex items-center" style={{ transform: dir > 0 ? 'none' : 'scaleX(-1)' }}>
        {/* traînée de condensation (s'estompe vers l'arrière) */}
        <div
          style={{
            width: `${130 * scale}px`,
            height: '2px',
            borderRadius: '2px',
            background:
              'linear-gradient(to left, rgba(255,255,255,0.9), rgba(255,255,255,0))',
          }}
        />
        <Plane
          size={18 * scale}
          color={color}
          strokeWidth={2}
          style={{ transform: 'rotate(45deg)', marginLeft: -2 }}
        />
      </div>
    </motion.div>
  )
}
