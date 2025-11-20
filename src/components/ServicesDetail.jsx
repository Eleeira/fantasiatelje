import { useState } from 'react'
import { Camera, PenTool, Monitor, Layers, Feather, Sparkles } from 'lucide-react'
import Modal from './Modal'



const EUR_TO_SEK = 11.5 // tasso indicativo fisso

const SERVICE_PRICES = {
  1: { kind: 'from', eurMin: 180 },
  2: { kind: 'range', eurMin: 300, eurMax: 450 },
  3: { kind: 'from', eurMin: 500 },
  4: { kind: 'range', eurMin: 40, eurMax: 90, unit: 'series' },
  5: { kind: 'from', eurMin: 40 },
  6: { kind: 'range', eurMin: 35, eurMax: 50, unit: 'hour' }
}

function formatPriceForLang(serviceId, lang) {
  const cfg = SERVICE_PRICES[serviceId]
  if (!cfg) return ''

  const { kind, eurMin, eurMax, unit } = cfg
  const sekMin = Math.round(eurMin * EUR_TO_SEK)
  const sekMax = eurMax ? Math.round(eurMax * EUR_TO_SEK) : null

  // helper per unità
  const unitIt =
    unit === 'series' ? ' a serie' : unit === 'hour' ? ' / h' : ''
  const unitSv =
    unit === 'series' ? ' per serie' : unit === 'hour' ? ' / timme' : ''
  const unitEn =
    unit === 'series' ? ' per series' : unit === 'hour' ? ' / h' : ''

  if (lang === 'it') {
    if (kind === 'from') {
      return `Da ${eurMin} €`
    }
    if (kind === 'range') {
      return `${eurMin}–${eurMax} €${unitIt}`
    }
  }

  if (lang === 'sv') {
    if (kind === 'from') {
      return `Från ${sekMin.toLocaleString('sv-SE')} kr`
    }
    if (kind === 'range') {
      return `${sekMin.toLocaleString('sv-SE')}–${sekMax.toLocaleString(
        'sv-SE'
      )} kr${unitSv}`
    }
  }

  // default: inglese → entrambe le valute
  if (kind === 'from') {
    return `From €${eurMin} (≈ ${sekMin.toLocaleString('en-US')} SEK)`
  }
  if (kind === 'range') {
    return `€${eurMin}–${eurMax}${unitEn} (≈ ${sekMin.toLocaleString(
      'en-US'
    )}–${sekMax.toLocaleString('en-US')} SEK)`
  }

  return ''
}




export default function ServicesDetail({ t, lang }) {
  const [open, setOpen] = useState(null)

  const ids = [1, 2, 3, 4, 5, 6]

  // icone estetiche
  const iconMap = {
    1: Camera,
    2: PenTool,
    3: Monitor,
    4: Layers,
    5: Feather,
    6: Sparkles
  }

  return (
    <section className="card">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="section-title-bar">{t('services_section_title')}</h2>
      </div>

      <div className="grid gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
        {ids.map((id) => {
          const Icon = iconMap[id]
          return (
            <div
              key={id}
              className="relative rounded-none border border-ft-accent/20 bg-gradient-to-b from-[#1f1d22] to-[#131217] p-4 text-xs transition hover:border-ft-accentSoft/40 hover:bg-[#1c1b20]"
            >
              {/* Icona */}
              <div className="mb-2 flex items-center gap-2">
                <Icon size={20} className="text-ft-accentSoft opacity-80" />
                <strong className="text-[0.9rem] text-ft-textMain">
                  {t(`service${id}_title`)}
                </strong>
              </div>

              <p className="mb-3 text-ft-textSoft">
                {t(`service${id}_text`)}
              </p>

              <button
                onClick={() => setOpen(id)}
                className="text-ft-accentSoft text-[0.75rem] underline-offset-2 hover:underline"
              >
                {t('service_learn_more')}
              </button>
            </div>
          )
        })}
      </div>

      {/* MODALI */}
      {ids.map((id) => (
        <Modal
          key={id}
          open={open === id}
          onClose={() => setOpen(null)}
          title={t(`service${id}_title`)}
        >
          <p className="whitespace-pre-line text-sm text-ft-textSoft leading-relaxed">
            {t(`service${id}_long_text`)}
          </p>

          <p className="mt-5 border-t border-white/10 pt-3 text-ft-accentSoft font-semibold">
  {formatPriceForLang(id, lang)}
</p>

        </Modal>
      ))}
    </section>
  )
}
