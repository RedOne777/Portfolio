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
      {/* aile planée : plumes superposées déployées depuis la jambe du R */}
      <g fill="#fff">
        <path d="M13.76 16.47 Q17.44 15.77 20.33 14.35 Q17.16 13.79 13.44 14.13 Z" />
        <path d="M15.18 16.65 Q19.37 16.62 22.82 15.74 Q19.44 14.62 15.27 14.3 Z" />
        <path d="M16.6 16.8 Q21.16 17.59 25.07 17.4 Q21.58 15.63 17.1 14.5 Z" />
        <path d="M18.03 16.92 Q22.79 18.65 27.01 19.27 Q23.54 16.79 18.92 14.73 Z" />
        <path d="M19.47 17 Q24.23 19.77 28.58 21.3 Q25.3 18.06 20.73 15 Z" />
      </g>
    </svg>
  )
}
