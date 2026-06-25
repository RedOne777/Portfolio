import { useId } from 'react'

// Monogramme « R-aile » : le R prend son envol, sa jambe se déploie en aile
// d'oiseau (clin d'œil au ciel du site et à AeroWise). Tuile dégradée,
// lettre + aile en blanc plein. 100% SVG, net à toutes les tailles.
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
      {/* R (avec contre-forme évidée) */}
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M10.5 7 H17 C21.6 7 21.6 17 17 17 H13.5 V25 H10.5 Z M13.5 9.7 H16.4 C18.8 9.7 18.8 14.3 16.4 14.3 H13.5 Z"
      />
      {/* aile : la jambe du R déployée */}
      <path fill="#fff" d="M12.8 16 C18 15.8 22.6 18 25 24 C20.6 22 16 21.2 12.8 20 Z" />
    </svg>
  )
}
