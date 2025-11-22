import { useState, useEffect } from 'react'
import { Sparkles } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'

function getGreeting(lang, hour) {
  if (lang === 'en') {
    if (hour >= 5 && hour < 12) return 'Good morning'
    if (hour >= 12 && hour < 18) return 'Good afternoon'
    if (hour >= 18 && hour < 22) return 'Good evening'
    return 'Good night'
  }

  if (lang === 'sv') {
    if (hour >= 5 && hour < 12) return 'God morgon'
    if (hour >= 12 && hour < 18) return 'God eftermiddag'
    if (hour >= 18 && hour < 22) return 'God kväll'
    return 'God natt'
  }

  // default: italiano
  if (hour >= 5 && hour < 12) return 'Buongiorno'
  if (hour >= 12 && hour < 18) return 'Buon pomeriggio'
  if (hour >= 18 && hour < 22) return 'Buonasera'
  return 'Buona notte'
}

export default function Hero({ lang, setLang, langs, t }) {
  const [now, setNow] = useState(new Date())
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const id = setInterval(() => {
      setNow(new Date())
    }, 30_000) // aggiorna ogni 30 secondi

    // fetch meteo Stoccolma
    fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=59.3293&longitude=18.0686&current_weather=true&temperature_unit=celsius'
    )
      .then((res) => res.json())
      .then((data) => {
        if (data && data.current_weather) {
          setWeather({
            temp: data.current_weather.temperature
          })
        } else {
          console.log('No current_weather in response', data)
        }
      })
      .catch((err) => {
        console.error('Weather fetch error', err)
      })

    return () => clearInterval(id)
  }, [])

  const hour = now.getHours()
  const greeting = getGreeting(lang, hour)
  const timeString = now.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit'
  })

  const cityLabel =
    lang === 'it' ? 'Stoccolma' : lang === 'sv' ? 'Stockholm' : 'Stockholm'

  return (
    <header
      id="top"
      className="relative -mx-5 mb-6 min-h-[360px] pt-4 bg-cover bg-center shadow-ftSoft 
                 sm:-mx-4 sm:min-h-[420px] 
                 md:min-h-[480px]"
      style={{
        backgroundImage:
          'linear-gradient(to bottom,rgba(0,0,0,0.4),rgba(5,5,7,0.9)),url(/hero-autumn.webp)',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      {/* overlay più scuro */}
      <div className="absolute inset-0 bg-black/60 sm:bg-black/50 pointer-events-none" />

      <div className="relative flex h-full flex-col justify-between px-5 pb-7 pt-4 sm:px-6">


        {/* riga sopra: logo / nav / lingue */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <span className="block shrink-0 font-quimil text-5xl sm:text-7xl md:text-8xl bg-gradient-to-b from-ft-textSoft to-ft-accentSoft bg-clip-text text-transparent drop-shadow-[0_2px_3px_rgba(0,0,0,0.4)] pr-2">
            Fantasiateljé
          </span>

          <nav className="ml-auto mt-1 flex flex-wrap gap-4 text-[0.8rem] uppercase tracking-[0.18em] text-ft-textSoft sm:mt-0 sm:gap-6 md:gap-10">
            <a href="#services" className="hover:text-ft-textMain">
              {t('nav_services')}
            </a>
            <a href="#portfolio" className="hover:text-ft-textMain">
              {t('nav_portfolio')}
            </a>
            <a href="#about" className="hover:text-ft-textMain">
              {t('nav_about')}
            </a>
            <a href="#blog" className="hover:text-ft-textMain">
            {t('nav_blog')}
            </a>
            <a href="#contact" className="hover:text-ft-textMain">
              {t('nav_contact')}
            </a>
          </nav>


        </div>

        {/* blocco testo hero */}
        <div className="mt-4 max-w-xl mt-8">
          <div key={lang} className="space-y-2 animate-fade-swap">
            {/* riga saluto + orologio + meteo */}
            <div className="mb-2 flex flex-wrap items-center gap-3 text-[0.8rem] text-ft-textSoft">
              <span>{greeting}</span>

              {/* orologio */}
              <span className="inline-flex items-center gap-1 text-[0.75rem] text-ft-textMuted">
                <span className="inline-block h-[10px] w-[10px] bg-ft-accentSoft rounded-full opacity-80" />
                {timeString}
              </span>

              {/* meteo Stoccolma */}
              {weather && (
                <span className="inline-flex items-center gap-1 text-[0.75rem] text-ft-textMuted border-l border-white/15 pl-3">
                  <span className="inline-block h-[8px] w-[8px] rounded-full bg-amber-300 opacity-80" />
                  {Math.round(weather.temp)}°C {cityLabel}
                </span>
              )}
            </div>

            <p className="mb-1 mt-6 text-[0.75rem] uppercase tracking-[0.2em] text-ft-textMuted">
              {t('hero_eyebrow')}
            </p>
            <h1 className="text-[1.8rem] leading-tight md:text-[2.2rem]">
              {t('hero_title')}
            </h1>
            <p className="mt-1 text-sm text-ft-textSoft">
              {t('hero_sub')}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-none bg-gradient-to-r from-ft-accentSoft to-amber-300 px-4 py-2 text-xs font-semibold text-black shadow-lg"
              >
                {t('hero_cta_primary')}
              </a>
            </div>
          </div>
        </div>
      </div>

      <LanguageSwitcher lang={lang} setLang={setLang} langs={langs} t={t} />


    </header>
  )
}
