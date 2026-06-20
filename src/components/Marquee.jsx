// Bandeau de texte défilant en continu (typographie kinétique).
export default function Marquee({ items, duration = 30, reverse = false, className = '' }) {
  const row = [...items, ...items]
  return (
    <div className={`group relative flex overflow-hidden ${className}`}>
      <div
        className="flex shrink-0 animate-marquee items-center"
        style={{ '--mq': `${duration}s`, animationDirection: reverse ? 'reverse' : 'normal' }}
      >
        {row.map((it, i) => (
          <span key={i} className="flex items-center">
            <span className="mx-6 whitespace-nowrap">{it}</span>
            <span className="opacity-40">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
