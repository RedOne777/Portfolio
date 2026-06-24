// Décor de ciel : nuages doux (dérive lente), phrase "gravée" fondue dans le
// ciel (mix-blend) et lignes de grille. Tout en CSS, sans image externe.

export function Cloud({ className = '', opacity = 0.85, blur = 28, dur = 30, delay = 0 }) {
  return (
    <div
      className={`pointer-events-none absolute rounded-full ${className}`}
      style={{
        opacity,
        filter: `blur(${blur}px)`,
        background:
          'radial-gradient(55% 52% at 50% 50%, #ffffff 0%, rgba(255,255,255,0.92) 34%, rgba(255,255,255,0) 70%)',
        animation: `drift ${dur}s ease-in-out ${delay}s infinite alternate`,
      }}
    />
  )
}

export default function SkyScene() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* lignes de grille (repères) */}
      <div className="absolute inset-y-0 left-1/4 hidden w-px bg-line sm:block" />
      <div className="absolute inset-y-0 left-1/2 hidden w-px bg-line sm:block" />
      <div className="absolute inset-y-0 left-3/4 hidden w-px bg-line sm:block" />

      {/* nuages */}
      <Cloud className="left-[0%] top-[9%] h-44 w-[30rem]" opacity={0.95} blur={20} dur={28} />
      <Cloud className="right-[2%] top-[18%] h-56 w-[40rem]" opacity={0.88} blur={26} dur={36} delay={2} />
      <Cloud className="left-[22%] top-[6%] h-40 w-[34rem]" opacity={0.7} blur={24} dur={32} delay={1} />
      <Cloud className="left-[34%] bottom-[12%] h-48 w-[46rem]" opacity={0.62} blur={30} dur={42} delay={1} />
      <Cloud className="right-[16%] bottom-[22%] h-36 w-[26rem]" opacity={0.5} blur={26} dur={38} delay={3} />

      {/* phrase "gravée" dans le ciel */}
      <p
        className="absolute inset-x-0 bottom-[15%] text-center font-serif italic leading-none text-white"
        style={{ fontSize: 'clamp(2.5rem, 10vw, 9rem)', mixBlendMode: 'soft-light', opacity: 0.92 }}
      >
        de la donnée à la décision
      </p>
    </div>
  )
}
