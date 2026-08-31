import { Plane } from 'lucide-react'

// Logo du site : un avion — clin d'œil au ciel du portfolio (et à AeroWise).
export default function LogoMark({ size = 30, className = '' }) {
  return (
    <Plane
      size={size}
      strokeWidth={2}
      className={className}
      style={{ color: 'var(--color-brand)' }}
      role="img"
      aria-label="Logo"
    />
  )
}
