// src/components/PortfolioSection.jsx
import { useState } from 'react'
import PortfolioModal from './PortfolioModal'

const CATEGORIES = [
  {
    key: 'editorial',
    img: 'portfolio-1.jpg',
    type: 'photo',
  },
  {
    key: 'brand',
    img: 'portfolio-2.jpg',
    type: 'brand',
  },
  {
    key: 'web',
    img: 'portfolio-3.jpg',
    type: 'web',
  },
]

// qui definisci le immagini per ogni categoria
const PORTFOLIO_IMAGES = {
  photo: [
    { src: '/photos/editorial-1.webp', caption: 'Stockholm, 2024' },
    { src: '/photos/editorial-2.webp', caption: 'Stockholm, 2024' },
    { src: '/photos/editorial-3.webp', caption: 'Stockholm, 2024' },
    { src: '/photos/editorial-4.webp', caption: 'Stockholm, 2024' },
    { src: '/photos/editorial-5.webp', caption: 'Stockholm, 2024' },
    // ...
  ],
  brand: [
    { src: '/portfolio/brand-1.jpg', caption: 'Logo + palette per artigiana.' },
    { src: '/portfolio/brand-2.jpg', caption: 'Identità minimale, carta stampata.' },
  ],
  web: [
    { src: '/portfolio/web-1.webp', caption: 'one-page 2025' },
    { src: '/portfolio/web-2.webp', caption: 'one-page 2025' },
    { src: '/portfolio/web-3.webp', caption: 'one-page 2025' },
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
      <div className="mb-3 flex items-center justify-between">
        <h2 className="section-title-bar">
          {t('portfolio_section_title')}
        </h2>
      </div>

      <div className="grid gap-3 p-4 sm:grid-cols-3">
        {CATEGORIES.map((item) => (
          <article
            key={item.key}
            className="
  relative overflow-hidden rounded-none
  pb-[62%]
  border border-ft-accentSoft/30
  bg-ft-cardSoft
  shadow-[0_0_18px_rgba(0,0,0,0.25)]
  cursor-pointer
"
            style={{
              backgroundImage: `url(/${item.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            onClick={() => setOpenType(item.type)}
          >
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/45 transition-colors" />
            <div className="absolute inset-x-0 bottom-0 p-2.5">
              <span className="inline-flex rounded-none bg-black/80 px-2 py-1 text-[0.7rem] text-ft-textSoft">
                {t(`portfolio_${item.key}_label`)}
              </span>
            </div>
          </article>
        ))}
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
