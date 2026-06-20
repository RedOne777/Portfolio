import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Déplace doucement son contenu en fonction du scroll (effet de profondeur).
// `speed` positif = le contenu monte plus vite que la page.
export default function Parallax({ children, speed = 0.15, className = '' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [`${speed * 100}%`, `${-speed * 100}%`])
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}
