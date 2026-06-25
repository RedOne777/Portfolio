import { createContext, useContext, useEffect, useState } from 'react'

// ---------------------------------------------------------------------------
// Météo du ciel : un petit climat qui évolue « de temps en temps ».
// Chaque préréglage décrit le dégradé du ciel, le soleil, des nuages en plus,
// la pluie et une teinte d'ambiance. On peut forcer un état via ?weather=…
// ---------------------------------------------------------------------------

export const WEATHERS = {
  clear: {
    label: 'ensoleillé',
    sky: 'linear-gradient(180deg, #a6c8fb 0%, #cfe0fa 38%, #e9eff8 72%, #eef1f7 100%)',
    voile:
      'linear-gradient(180deg, rgba(150,189,249,0.40) 0%, rgba(200,219,248,0.20) 38%, rgba(230,235,243,0) 100%)',
    sun: { opacity: 0.95, color: 'rgba(255,255,255,0.95)' },
    extraClouds: 0,
    rain: false,
  },
  cloudy: {
    label: 'nuageux',
    sky: 'linear-gradient(180deg, #aebccd 0%, #c6cfdb 40%, #dde3ec 74%, #eef1f7 100%)',
    voile:
      'linear-gradient(180deg, rgba(150,162,178,0.44) 0%, rgba(196,205,217,0.22) 40%, rgba(230,235,243,0) 100%)',
    sun: { opacity: 0.35, color: 'rgba(255,255,255,0.85)' },
    extraClouds: 3,
    rain: false,
  },
  rain: {
    label: 'pluvieux',
    sky: 'linear-gradient(180deg, #8090a4 0%, #a3b0c1 40%, #ccd4de 74%, #e4e8ef 100%)',
    voile:
      'linear-gradient(180deg, rgba(110,124,144,0.50) 0%, rgba(170,182,198,0.26) 40%, rgba(228,232,239,0) 100%)',
    sun: { opacity: 0.12, color: 'rgba(255,255,255,0.7)' },
    extraClouds: 4,
    rain: true,
  },
  sunset: {
    label: 'coucher de soleil',
    sky: 'linear-gradient(180deg, #ffb27a 0%, #ffc8a0 26%, #f1c2bd 50%, #d8c6dd 74%, #cdd6ec 100%)',
    voile:
      'linear-gradient(180deg, rgba(255,178,122,0.42) 0%, rgba(244,196,176,0.22) 40%, rgba(230,235,243,0) 100%)',
    sun: { opacity: 0.9, color: 'rgba(255,214,170,0.95)' },
    extraClouds: 1,
    rain: false,
  },
}

const ORDER = ['clear', 'cloudy', 'rain', 'clear', 'sunset']
const INTERVAL = 25000

const WeatherContext = createContext({ name: 'clear', weather: WEATHERS.clear })

function getOverride() {
  if (typeof window === 'undefined') return null
  const p = new URLSearchParams(window.location.search).get('weather')
  return p && WEATHERS[p] ? p : null
}

export function WeatherProvider({ children }) {
  const override = getOverride()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (override) return
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const id = setInterval(() => setIndex((i) => (i + 1) % ORDER.length), INTERVAL)
    return () => clearInterval(id)
  }, [override])

  const name = override || ORDER[index]
  const weather = WEATHERS[name]

  return (
    <WeatherContext.Provider value={{ name, weather }}>{children}</WeatherContext.Provider>
  )
}

export function useWeather() {
  return useContext(WeatherContext).weather
}

export function useWeatherName() {
  return useContext(WeatherContext).name
}
