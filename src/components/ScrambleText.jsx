import { useEffect, useRef, useState } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&/<>{}[]'

// Texte qui se "décode" (scramble) lettre par lettre lorsqu'il entre à l'écran.
export default function ScrambleText({ text, className = '', speed = 28, as: Tag = 'span' }) {
  const [out, setOut] = useState(text)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true
            run()
          }
        })
      },
      { threshold: 0.35 }
    )
    io.observe(el)
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text])

  const run = () => {
    const final = text
    const len = final.length
    let frame = 0
    const id = setInterval(() => {
      frame++
      let s = ''
      for (let i = 0; i < len; i++) {
        if (final[i] === ' ') { s += ' '; continue }
        if (frame > i * 1.3 + 3) s += final[i]
        else s += CHARS[Math.floor(Math.random() * CHARS.length)]
      }
      setOut(s)
      if (frame > len * 1.3 + 6) { clearInterval(id); setOut(final) }
    }, speed)
  }

  return <Tag ref={ref} className={className}>{out}</Tag>
}
