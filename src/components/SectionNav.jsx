import { useEffect, useState } from 'react'

// Navigation "scroll-spy" : suit la section visible et permet d'y sauter.
// Desktop large (xl) : rail vertical fixe à droite. Sinon : barre de chips sticky.
export default function SectionNav({ sections, accent = '#3b8cff' }) {
  const [active, setActive] = useState(sections[0]?.id)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [sections])

  return (
    <>
      {/* Rail vertical (grands écrans) */}
      <nav className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 xl:block">
        <ul className="space-y-3">
          {sections.map((s) => {
            const on = active === s.id
            return (
              <li key={s.id}>
                <a href={`#${s.id}`} className="group flex items-center justify-end gap-2.5">
                  <span
                    className={`text-xs font-medium transition-all duration-300 ${
                      on ? 'translate-x-0 text-ink opacity-100' : 'translate-x-1 text-muted opacity-0 group-hover:opacity-100'
                    }`}
                  >
                    {s.label}
                  </span>
                  <span
                    className="h-2.5 w-2.5 rounded-full transition-all duration-300"
                    style={{
                      background: on ? accent : 'transparent',
                      border: `1.5px solid ${on ? accent : 'rgba(20,24,40,0.30)'}`,
                      transform: on ? 'scale(1.3)' : 'scale(1)',
                      boxShadow: on ? `0 0 10px ${accent}` : 'none',
                    }}
                  />
                </a>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Barre de chips sticky (mobile / tablette / desktop moyen) */}
      <div className="sticky top-16 z-30 -mx-[22px] mb-10 border-y border-line bg-bg/85 backdrop-blur-md xl:hidden">
        <div className="hide-scrollbar flex gap-2 overflow-x-auto px-[22px] py-3">
          {sections.map((s) => {
            const on = active === s.id
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors"
                style={
                  on
                    ? { background: accent, borderColor: accent, color: '#04121f' }
                    : { borderColor: 'var(--color-line)', color: 'var(--color-muted)' }
                }
              >
                {s.label}
              </a>
            )
          })}
        </div>
      </div>
    </>
  )
}
