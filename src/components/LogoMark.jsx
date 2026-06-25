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
      {/* aile déployée : 4 plumes pleines */}
      <g fill="#fff">
        <path d="M12 13.4 C16.6 13 21.4 14 25.8 16.6 C21 15.4 16.4 15.2 12.2 15.4 Z" />
        <path d="M12 15.2 C16.8 15.2 21.6 16.6 26 19.6 C21 18 16.4 17.4 12.1 17.3 Z" />
        <path d="M12 17 C16.4 17.6 20.8 19.6 24.6 23 C20 20.8 15.8 19.8 12 19.4 Z" />
        <path d="M12 18.8 C15.6 19.8 18.8 22 21.4 25.4 C17.8 23 14.2 21.6 11.9 21.2 Z" />
      </g>
    </svg>
  )
}
