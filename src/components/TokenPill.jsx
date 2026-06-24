// Étiquette "design token" en monospace (façon bg.cloud.primary) — identité
// "design system", clin d'œil aux références.
export default function TokenPill({ label, color = '#3b8cff', className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-line bg-surface/55 px-3 py-1.5 font-mono text-xs text-ink-soft backdrop-blur-md ${className}`}
    >
      <span
        className="h-1.5 w-1.5 shrink-0 rounded-full"
        style={{ background: color, boxShadow: `0 0 8px ${color}` }}
      />
      {label}
    </span>
  )
}
