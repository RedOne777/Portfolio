import { useId } from 'react'

// Monogramme « R-aile » : une aile d'oiseau déployée (4 plumes) qui prend
// son envol depuis un R en retrait (trait fin). Clin d'œil au ciel du site
// et à AeroWise. 100% SVG, net à toutes les tailles.
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
        <linearGradient id={gid} x1="3" y1="2" x2="29" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3b8cff" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="30" height="30" rx="9.5" fill={`url(#${gid})`} />
      {/* R en retrait (trait fin) */}
      <path
        fill="none"
        stroke="#fff"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.9"
        d="M9.6 7 V25 M9.6 7 H14.6 C18 7 18 15 14.6 15 H9.6"
      />
      {/* aile repliée : la jambe du R déployée en plumes */}
      <path
        fill="#fff"
        d="M13 15.4 Q20.5 13.6 26.2 21.6 L22.51 28.02 Q23.86 22.57 21.43 24.89 Q21.9 20 20.07 22.34 Q19.72 18.13 18.36 20.4 Q17.31 16.99 16.24 19.1 Q14.65 16.6 13.69 18.53 Z"
      />
    </svg>
  )
}
