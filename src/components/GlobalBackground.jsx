import { AnimatePresence, motion } from 'framer-motion'
import { Cloud } from './SkyScene'
import Birds from './Birds'
import Rain from './Rain'
import Airplane from './Airplane'
import { useWeather, useWeatherName } from './WeatherContext'

// Fond commun à toutes les pages : une continuité discrète du ciel de l'accueil
// (léger dégradé en haut, nuages estompés, grille, oiseaux), qui suit la météo.
export default function GlobalBackground() {
  const weather = useWeather()
  const name = useWeatherName()

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* voile de ciel en haut — fondu enchaîné entre les météos */}
      <AnimatePresence initial={false}>
        <motion.div
          key={name}
          className="absolute inset-x-0 top-0 h-[70vh]"
          style={{ background: weather.voile }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.2, ease: 'easeInOut' }}
        />
      </AnimatePresence>
      {/* lignes de grille */}
      <div className="absolute inset-y-0 left-1/4 hidden w-px bg-line lg:block" />
      <div className="absolute inset-y-0 left-1/2 hidden w-px bg-line lg:block" />
      <div className="absolute inset-y-0 left-3/4 hidden w-px bg-line lg:block" />
      {/* nuages estompés */}
      <Cloud className="left-[1%] top-[4%] h-40 w-[30rem]" opacity={0.45} blur={30} dur={46} />
      <Cloud className="right-[3%] top-[12%] h-44 w-[36rem]" opacity={0.35} blur={34} dur={52} delay={4} />
      <Cloud className="left-[40%] top-[2%] h-32 w-[26rem]" opacity={0.28} blur={30} dur={40} delay={2} />
      {/* oiseaux + un avion lointain */}
      <Birds />
      <Airplane top="9%" dur={42} delay={8} repeatDelay={26} scale={0.65} />
      {/* pluie */}
      <Rain active={weather.rain} count={42} />
    </div>
  )
}
