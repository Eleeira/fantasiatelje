// src/components/PortfolioSection.jsx
import { useState } from 'react'
import PortfolioModal from './PortfolioModal'

const CATEGORIES = [
  {
    key: 'editorial',
    type: 'photo',
  },

  /*
  {
    key: 'brand',
    type: 'brand',
  },
*/

  
  {
    key: 'web',
    type: 'web',
  },
]

// immagini per ogni categoria
const PORTFOLIO_IMAGES = {
  photo: [
    { src: '/photos/editorial-1.webp', caption: 'Stockholm, 2024' },
    { src: '/photos/editorial-2.webp', caption: 'Stockholm, 2024' },
    { src: '/photos/editorial-3.webp', caption: 'Stockholm, 2024' },
    { src: '/photos/editorial-4.webp', caption: 'Stockholm, 2024' },
    { src: '/photos/editorial-5.webp', caption: 'Stockholm, 2024' },
  ],
  brand: [
    { src: '/portfolio/brand-1.jpg', caption: 'Logo + palette per artigiana.' },
    { src: '/portfolio/brand-2.jpg', caption: 'Identità minimale, carta stampata.' },
  ],
  web: [
    {
      src: '/portfolio/web-1.webp',
      caption: 'BEANIESTECH.DEV 2025',
      link: 'https://beaniestech.dev/', // <-- metti il vero link
    },
    {
      src: '/portfolio/web-2.webp',
      caption: 'Ada Digital Services',
      link: 'https://adacatucci.com',
    },
    {
      src: '/portfolio/web-3.webp',
      caption: 'Restyling dataguard.se (this is just a case study, NOT a real website) 2025',
      link: 'https://example3.com',
    },
    {
      src: '/portfolio/web-4.webp',
      caption: 'Job Application APP',
      link: 'https://eleeira.github.io/job-tracker/',
    },
    {
      src: '/portfolio/web-5.webp',
      caption: 'Legacy Fantasiateljé',
      link: 'none',
    },
    {
      src: '/portfolio/web-6.webp',
      caption: 'e-commerce & Shopify',
      link: 'none',
    },
    {
      src: '/portfolio/web-7.webp',
      caption: 'one-page website',
      link: 'none',
    },
  ],
}

export default function PortfolioSection({ t, lang }) {
  const [openType, setOpenType] = useState(null)

  const getTitle = (type) => {
    if (type === 'photo') return t('portfolio_modal_photo_title')
    if (type === 'brand') return t('portfolio_modal_brand_title')
    if (type === 'web') return t('portfolio_modal_web_title')
    return ''
  }

  const getIntro = (type) => {
    if (type === 'photo') return t('portfolio_modal_photo_intro')
    if (type === 'brand') return t('portfolio_modal_brand_intro')
    if (type === 'web') return t('portfolio_modal_web_intro')
    return ''
  }

  return (
    <section id="portfolio" className="card">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="section-title-bar">
          {t('portfolio_section_title')}
        </h2>
      </div>

      {/* layout verticale */}
      <div className="flex flex-col gap-5 p-4">
        {CATEGORIES.map((item) => {
          const thumbs = (PORTFOLIO_IMAGES[item.type] || []).slice(0, 2)

          return (
            <article
              key={item.key}
              className="
                border border-ft-accentSoft/40
                bg-ft-cardSoft
                shadow-[0_0_18px_rgba(0,0,0,0.25)]
                px-3 py-4 sm:px-4 sm:py-5
                flex flex-col gap-3
              "
            >
              {/* riga titolo + more */}
              <div className="flex items-baseline justify-between gap-3">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.16em]">
                    {t(`portfolio_${item.key}_label`)}
                  </h3>
                  <p className="mt-1 text-[0.7rem] text-ft-textSoft/80">
                    {item.type === 'photo' && t('portfolio_photo_teaser_title')}
                    {item.type === 'brand' && t('portfolio_brand_teaser_title')}
                    {item.type === 'web' && t('portfolio_web_teaser_title')}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setOpenType(item.type)}
                  className="text-[0.7rem] font-medium uppercase tracking-wide underline underline-offset-4"
                >
                  {t('portfolio_more')}
                </button>
              </div>

              {/* due esempi ben visibili */}
              {thumbs.length > 0 && (
                <div className="grid gap-3 sm:grid-cols-2">
                  {thumbs.map((img) => {
                    const inner = (
                      <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-none">
                        <img
                          src={img.src}
                          alt={img.caption || ''}
                          className="h-full w-full object-cover transition-transform group-hover:scale-[1.03]"
                          loading="lazy"
                        />
                        {img.caption && (
                          <div className="absolute inset-x-0 bottom-0 bg-black/65 px-2 py-1">
                            <p className="text-[0.65rem] text-ft-textSoft truncate">
                              {img.caption}
                            </p>
                          </div>
                        )}
                      </div>
                    )

                    // per il web: link diretto al sito
                    if (item.type === 'web' && img.link) {
                      return (
                        <a
                          key={img.src}
                          href={img.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          {inner}
                        </a>
                      )
                    }

                    // per foto / brand: apri il modal
                    return (
                      <button
                        key={img.src}
                        type="button"
                        onClick={() => setOpenType(item.type)}
                        className="block text-left"
                      >
                        {inner}
                      </button>
                    )
                  })}
                </div>
              )}

              {/* riga descrizione finale */}
              <p className="text-[0.7rem] text-ft-textSoft/75">
                {item.type === 'web'
                  ? t('portfolio_web_teaser_text')
                  : t('portfolio_teaser_text')}
              </p>
            </article>
          )
        })}
      </div>

      {/* MODALE */}
      {openType && (
        <PortfolioModal
          open={!!openType}
          onClose={() => setOpenType(null)}
          title={getTitle(openType)}
          intro={getIntro(openType)}
          images={PORTFOLIO_IMAGES[openType] || []}
        />
      )}
    </section>
  )
}
