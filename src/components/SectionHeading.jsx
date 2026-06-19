import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, description, center = false }) {
  return (
    <Reveal className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold text-ink sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-lg text-muted">{description}</p>}
    </Reveal>
  )
}
