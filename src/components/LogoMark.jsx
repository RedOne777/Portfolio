import { useId } from 'react'

// Monogramme "R" stylisé : R en monospace dégradé (clin d'œil au thème data/code)
// + un "nœud" relié, écho au réseau de données. Tuile à bordure dégradée.
export default function LogoMark({ size = 30, className = '' }) {
  const gid = `lm-${useId().replace(/:/g, '')}`
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={className}
      role="img"
      aria-label="Logo Ridwan"
    >
      <defs>
        <linearGradient id={gid} x1="4" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3b8cff" />
          <stop offset="1" stopColor="#8b7bff" />
        </linearGradient>
      </defs>
      <rect
        x="1.1"
        y="1.1"
        width="29.8"
        height="29.8"
        rx="9.5"
        fill="#1e2027"
        stroke={`url(#${gid})`}
        strokeOpacity="0.55"
        strokeWidth="1.4"
      />
      <line x1="18" y1="19.5" x2="22.4" y2="22.6" stroke="#3b8cff" strokeWidth="1.3" strokeOpacity="0.7" />
      <text
        x="14"
        y="16.6"
        dominantBaseline="central"
        textAnchor="middle"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        fontSize="17"
        fontWeight="700"
        fill={`url(#${gid})`}
      >
        R
      </text>
      <circle cx="23" cy="23" r="2.3" fill="#3b8cff" />
    </svg>
  )
}
