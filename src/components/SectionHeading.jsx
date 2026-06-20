import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, description, center = false }) {
  return (
    <Reveal className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-[32px] font-semibold tracking-tight text-ink sm:text-[44px]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-muted sm:text-xl">{description}</p>
      )}
    </Reveal>
  )
}
