import { motion } from 'framer-motion'

// Un oiseau : silhouette en "M" qui bat des ailes et traverse le ciel.
function Bird({ top = '20%', dur = 28, delay = 0, scale = 1, dir = 1, color = '#2b3445' }) {
  return (
    <motion.svg
      className="absolute"
      style={{ top, width: 26 * scale, height: 14 * scale }}
      viewBox="0 0 26 14"
      initial={{ x: dir > 0 ? '-12vw' : '112vw' }}
      animate={{ x: dir > 0 ? '112vw' : '-12vw', y: [0, -14, 0, 10, 0] }}
      transition={{
        x: { duration: dur, repeat: Infinity, ease: 'linear', delay },
        y: { duration: dur / 3.5, repeat: Infinity, ease: 'easeInOut' },
      }}
      aria-hidden="true"
    >
      <motion.path
        fill="none"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ d: 'M1 8 Q7 1 13 7 Q19 1 25 8' }}
        animate={{ d: ['M1 8 Q7 1 13 7 Q19 1 25 8', 'M1 6 Q7 6 13 4 Q19 6 25 6'] }}
        transition={{ duration: 0.45, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      />
    </motion.svg>
  )
}

// Une volée d'oiseaux. `dense` = un peu plus nombreux (hero).
export default function Birds({ dense = false }) {
  const flock = dense
    ? [
        { top: '14%', dur: 26, delay: 0, scale: 1 },
        { top: '20%', dur: 30, delay: 3, scale: 0.8 },
        { top: '26%', dur: 24, delay: 7, scale: 1.1 },
        { top: '10%', dur: 34, delay: 12, scale: 0.7, dir: -1 },
        { top: '32%', dur: 28, delay: 18, scale: 0.9 },
      ]
    : [
        { top: '12%', dur: 34, delay: 2, scale: 0.8 },
        { top: '18%', dur: 40, delay: 14, scale: 0.7, dir: -1 },
        { top: '8%', dur: 30, delay: 24, scale: 0.9 },
      ]
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {flock.map((b, i) => (
        <Bird key={i} {...b} />
      ))}
    </div>
  )
}
