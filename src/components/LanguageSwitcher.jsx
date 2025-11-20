import { useState, useEffect } from 'react'
import { Sparkles } from 'lucide-react'

export default function LanguageSwitcher({ lang, setLang, langs, t }) {

  const [open, setOpen] = useState(false)
  const [mode, setMode] = useState('hero') // 'hero' | 'dock'

  useEffect(() => {
    const heroEl = document.getElementById('top')
    let heroBottom = 400

    const calcHeroBottom = () => {
      if (heroEl) {
        heroBottom = heroEl.offsetTop + heroEl.offsetHeight
      }
    }

    calcHeroBottom()

    const handleScroll = () => {
      const y = window.scrollY || window.pageYOffset || 0

      // Finché siamo "dentro" la hero -> modalità hero
      // Quando scrolliamo oltre la hero -> modalità dock
      if (y + 80 < heroBottom) {
        setMode('hero')
      } else {
        setMode('dock')
      }
    }

    const handleResize = () => {
      calcHeroBottom()
      handleScroll()
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const content = (
    <div className="relative text-[0.7rem] pointer-events-auto">
      {/* Bottone icona + lingua corrente */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-2 border border-white/15 bg-black/60 px-2.5 py-1 uppercase tracking-[0.16em] text-ft-textSoft hover:bg-black/80 transition-colors rounded-none shadow-ft-soft/40"
      >
        <Sparkles size={14} className="text-ft-accentSoft opacity-90" />
        <span>{lang.toUpperCase()}</span>
      </button>

      {/* Menu a goccia */}
      {open && (
        <div className="absolute right-0 top-full mt-1 min-w-[150px] border border-white/15 bg-[#111015]/95 shadow-ft-soft text-[0.7rem] uppercase tracking-[0.16em]">
          {langs.map((lng) => {
            const isActive = lang === lng
            return (
              <button
                key={lng}
                type="button"
                onClick={() => {
                  setLang(lng)
                  setOpen(false)
                }}
                className={[
                  'block w-full px-3 py-2 text-left transition-colors',
                  isActive
                    ? 'bg-ft-accentSoft text-black'
                    : 'text-ft-textSoft hover:bg-white/10'
                ].join(' ')}
              >
                {lng === 'sv'
                  ? 'Svenska'
                  : lng === 'it'
                  ? 'Italiano'
                  : 'English'}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )

  // HERO mode: in basso a destra sopra l'immagine
if (mode === 'hero') {
  return (
    <div className="absolute bottom-4 right-4 z-[9999]">
      {content}
    </div>
  )
}

// DOCK mode: barra blur in alto che copre la larghezza del sito
return (
  <div className="fixed top-0 inset-x-0 z-[9999] pointer-events-none">
    <div className="bg-black/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-5xl mx-auto px-5 py-2 flex justify-between items-center pointer-events-auto">

        <a
    href="#contact"
    className="dock-contact-link"
  >
    {t('dock_contact')}
  </a>

                 {content}
      </div>
    </div>
  </div>
)
}
