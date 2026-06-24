// Décor de ciel : halo, nuages doux (dérive lente), cubes flottants,
// phrase fondue dans le ciel et lignes de grille. 100% CSS, sans image externe.

export function Cloud({ className = '', opacity = 0.85, blur = 24, dur = 30, delay = 0 }) {
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

function Box({ className = '', dur = 11, delay = 0 }) {
  return (
    <div
      className={`absolute rounded-2xl ${className}`}
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #d7e1f3 100%)',
        boxShadow: '0 18px 34px -14px rgba(20,24,40,0.35), inset 0 1px 0 rgba(255,255,255,0.85)',
        animation: `float ${dur}s ease-in-out ${delay}s infinite alternate`,
      }}
    />
  )
}

export default function SkyScene() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* halo solaire */}
      <div
        className="absolute right-[12%] top-[7%] h-56 w-56 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0) 66%)' }}
      />

      {/* lignes de grille (repères) */}
      <div className="absolute inset-y-0 left-1/4 hidden w-px bg-line sm:block" />
      <div className="absolute inset-y-0 left-1/2 hidden w-px bg-line sm:block" />
      <div className="absolute inset-y-0 left-3/4 hidden w-px bg-line sm:block" />

      {/* nuages */}
      <Cloud className="left-[0%] top-[8%] h-44 w-[30rem]" opacity={0.95} blur={20} dur={28} />
      <Cloud className="right-[1%] top-[16%] h-56 w-[40rem]" opacity={0.9} blur={26} dur={36} delay={2} />
      <Cloud className="left-[20%] top-[5%] h-40 w-[34rem]" opacity={0.7} blur={24} dur={32} delay={1} />
      <Cloud className="left-[10%] top-[30%] h-36 w-[28rem]" opacity={0.6} blur={26} dur={30} delay={3} />
      <Cloud className="left-[34%] bottom-[10%] h-48 w-[46rem]" opacity={0.6} blur={30} dur={42} delay={1} />
      <Cloud className="right-[14%] bottom-[24%] h-36 w-[26rem]" opacity={0.5} blur={26} dur={38} delay={3} />

      {/* cubes flottants (façon design system) */}
      <Box className="right-[24%] top-[26%] hidden h-16 w-16 lg:block" dur={12} />
      <Box className="right-[8%] top-[52%] hidden h-12 w-12 md:block" dur={9} delay={1.5} />
      <Box className="right-[34%] bottom-[28%] hidden h-20 w-20 lg:block" dur={14} delay={0.6} />

      {/* phrase fondue dans le ciel */}
      <p
        className="absolute inset-x-0 bottom-[15%] text-center font-semibold leading-none text-white"
        style={{ fontSize: 'clamp(2.5rem, 10vw, 9rem)', mixBlendMode: 'soft-light', opacity: 0.92 }}
      >
        de la donnée à la décision
      </p>
    </div>
  )
}
