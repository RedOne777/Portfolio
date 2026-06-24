import { Cloud } from './SkyScene'
import Birds from './Birds'

// Fond commun à toutes les pages : une continuité discrète du ciel de l'accueil
// (léger dégradé en haut, nuages estompés, grille, oiseaux). Fixe, derrière le contenu.
export default function GlobalBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* voile de ciel en haut */}
      <div
        className="absolute inset-x-0 top-0 h-[70vh]"
        style={{
          background:
            'linear-gradient(180deg, rgba(150,189,249,0.40) 0%, rgba(200,219,248,0.20) 38%, rgba(230,235,243,0) 100%)',
        }}
      />
      {/* lignes de grille */}
      <div className="absolute inset-y-0 left-1/4 hidden w-px bg-line lg:block" />
      <div className="absolute inset-y-0 left-1/2 hidden w-px bg-line lg:block" />
      <div className="absolute inset-y-0 left-3/4 hidden w-px bg-line lg:block" />
      {/* nuages estompés */}
      <Cloud className="left-[1%] top-[4%] h-40 w-[30rem]" opacity={0.45} blur={30} dur={46} />
      <Cloud className="right-[3%] top-[12%] h-44 w-[36rem]" opacity={0.35} blur={34} dur={52} delay={4} />
      <Cloud className="left-[40%] top-[2%] h-32 w-[26rem]" opacity={0.28} blur={30} dur={40} delay={2} />
      {/* oiseaux */}
      <Birds />
    </div>
  )
}
