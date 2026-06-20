import { useRef, useEffect } from 'react'

const TOKENS = ['0', '1', '01', '10', '11', '00', '{ }', '%', 'SQL', 'df', '</>', 'Σ', 'Δ', 'µ', '101']

// Réseau de données animé : nœuds = petits chiffres / symboles (thème data),
// reliés par des lignes et réagissant au curseur.
export default function NetworkCanvas({
  nodeColor = '#2997ff',
  lineColor = 'rgba(255,255,255,0.10)',
  density = 0.00010,
  linkDist = 140,
}) {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const DPR = Math.min(window.devicePixelRatio || 1, 2)
    let raf, w = 0, h = 0, nodes = []
    const mouse = { x: -9999, y: -9999 }
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const resize = () => {
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * DPR
      canvas.height = h * DPR
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
      const count = Math.min(110, Math.max(26, Math.floor(w * h * density)))
      nodes = Array.from({ length: count }, () => {
        const isToken = Math.random() < 0.5
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.32,
          vy: (Math.random() - 0.5) * 0.32,
          r: Math.random() * 1.6 + 0.7,
          token: isToken ? TOKENS[(Math.random() * TOKENS.length) | 0] : null,
          fs: (Math.random() * 5 + 10) | 0,
        }
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy
        if (n.x < 0 || n.x > w) n.vx *= -1
        if (n.y < 0 || n.y > h) n.vy *= -1
      }
      // Lignes
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const dx = a.x - b.x, dy = a.y - b.y
          const d = Math.hypot(dx, dy)
          if (d < linkDist) {
            ctx.strokeStyle = lineColor
            ctx.globalAlpha = 1 - d / linkDist
            ctx.lineWidth = 0.6
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke()
          }
        }
        const md = Math.hypot(a.x - mouse.x, a.y - mouse.y)
        if (md < 190) {
          ctx.strokeStyle = nodeColor
          ctx.globalAlpha = (1 - md / 190) * 0.6
          ctx.lineWidth = 0.8
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke()
        }
      }
      // Nœuds (chiffres/symboles ou points)
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      for (const n of nodes) {
        if (n.token) {
          ctx.globalAlpha = 0.5
          ctx.fillStyle = nodeColor
          ctx.font = `${n.fs}px ui-monospace, SFMono-Regular, Menlo, monospace`
          ctx.fillText(n.token, n.x, n.y)
        } else {
          ctx.globalAlpha = 0.85
          ctx.fillStyle = nodeColor
          ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill()
        }
      }
      ctx.globalAlpha = 1
      raf = requestAnimationFrame(draw)
    }

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect()
      mouse.x = e.clientX - r.left
      mouse.y = e.clientY - r.top
    }
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999 }

    resize()
    draw()
    if (reduce) cancelAnimationFrame(raf)
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerout', onLeave)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerout', onLeave)
    }
  }, [nodeColor, lineColor, density, linkDist])

  return <canvas ref={ref} className="h-full w-full" />
}
