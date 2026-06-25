import { useMemo } from 'react'

// Pluie : fines gouttes qui tombent (keyframe `rainfall`, cf. index.css).
// Rendu uniquement quand `active` est vrai pour ne rien animer inutilement.
export default function Rain({ active = false, count = 60 }) {
  const drops = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        left: Math.random() * 100,
        delay: Math.random() * 2,
        dur: 0.55 + Math.random() * 0.6,
        h: 42 + Math.random() * 52,
        o: 0.24 + Math.random() * 0.3,
      })),
    [count],
  )

  if (!active) return null

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {drops.map((d, i) => (
        <span
          key={i}
          className="absolute top-0"
          style={{
            left: `${d.left}%`,
            width: '1.5px',
            height: `${d.h}px`,
            opacity: d.o,
            background:
              'linear-gradient(to bottom, rgba(96,116,148,0), rgba(96,116,148,0.75))',
            animation: `rainfall ${d.dur}s linear ${d.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}
