// src/components/PortfolioModal.jsx
import { createPortal } from 'react-dom'

// qui decidi dove "tagliare" le sezioni delle FOTO
// es: [4, 15] = prima sezione 0–3, seconda 4–14, terza il resto
const PHOTO_SECTION_BREAKS = [5, 10, 16, 27]
const PHOTO_SECTION_TITLES = [
  'Stockholm, Sverige 2024',
  'Conversano, Italien 2023',
  'Suomenlinna, Finland 2024',
  'The Blackpool, Bari (IT), 2015'
  
]



export default function PortfolioModal({
  open,
  onClose,
  title,
  images,
  intro,
  layout, // 'photo' | 'brand' | 'web' ecc.
}) {
  if (!open) return null

  const isPhotoCollage = layout === 'photo'

  // helper: spezza l'array delle foto in sezioni
  const buildPhotoSections = (imgs) => {
    const sections = []
    let start = 0

    const validBreaks = PHOTO_SECTION_BREAKS.filter((b) => b > 0 && b < imgs.length)

    for (const br of validBreaks) {
      sections.push(imgs.slice(start, br))
      start = br
    }

    if (start < imgs.length) {
      sections.push(imgs.slice(start))
    }

    return sections
  }

  const photoSections = isPhotoCollage ? buildPhotoSections(images) : []

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div className="flex h-full w-full items-center justify-center px-3 sm:px-6">
        <div
          className="
            relative w-full max-w-5xl max-h-[90vh]
            rounded-none border border-white/15 bg-ft-cardSoft
            shadow-[0_0_40px_rgba(0,0,0,0.7)]
            p-4 sm:p-6 md:p-7
            flex flex-col gap-4
            overflow-y-auto
          "
          onClick={(e) => e.stopPropagation()}
        >
          {/* chiudi */}
          <button
            onClick={onClose}
            className="absolute right-4 top-3 text-sm text-ft-textMuted hover:text-ft-textMain"
          >
            ✕
          </button>

          {/* titolo + intro */}
          <div className="pr-8">
            <h2 className="text-[1rem] md:text-[1.2rem] text-ft-textMain mb-1">
              {title}
            </h2>
            {intro && (
              <p className="text-[0.8rem] text-ft-textMuted">
                {intro}
              </p>
            )}
          </div>

          {/* ===================== */}
          {/*      CONTENUTO       */}
          {/* ===================== */}

          {isPhotoCollage ? (
            // 🎞 FOTO → sezioni + masonry, immagini “a vivo”
            <div className="flex flex-col gap-6">
              {photoSections.map((sectionImages, sectionIndex) => (
  <div key={sectionIndex} className="flex flex-col gap-3">

    {/* titolo della sezione */}
    <div className="mt-4 mb-2 flex items-center gap-3 text-ft-textMuted/80">
      <div className="h-px flex-1 bg-white/10" />
      <span className="text-[0.75rem] uppercase tracking-[0.2em]">
        {PHOTO_SECTION_TITLES[sectionIndex] || `Series ${sectionIndex + 1}`}
      </span>
      <div className="h-px flex-1 bg-white/10" />
    </div>

    {/* masonry */}
    <div
      className="
        columns-2
        sm:columns-3
        gap-2
        [column-fill:balance]
      "
    >
      {sectionImages.map((img, i) => (
        <figure
          key={img.src || `${sectionIndex}-${i}`}
          className="mb-2 break-inside-avoid"
        >
          <img
            src={img.src}
            alt={img.caption || ''}
            className="w-full h-auto object-contain"
            loading="lazy"
          />
          {img.caption && (
            <figcaption className="mt-1 text-[0.65rem] text-ft-textMuted/80 truncate">
              {img.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>

  </div>
))}

            </div>
          ) : (
            // 🔳 BRAND / WEB → griglia semplice
            <div
              className="
                grid gap-3
                grid-cols-1
                sm:grid-cols-2
                md:grid-cols-3
              "
            >
              {images.map((img, i) => {
                const tile = (
                  <div
                    className="
                      group relative overflow-hidden rounded-none
                      bg-black/40 border border-white/10 p-2
                    "
                  >
                    <img
                      src={img.src}
                      alt={img.alt || img.caption || `${title} #${i + 1}`}
                      className="w-full h-auto max-h-[260px] object-contain transition-transform group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    {img.caption && (
                      <p className="mt-1 text-[0.65rem] text-ft-textMuted/80 truncate">
                        {img.caption}
                      </p>
                    )}
                  </div>
                )

                // se è WEB con link → cliccabile
                if (img.link) {
                  return (
                    <a
                      key={img.src || i}
                      href={img.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {tile}
                    </a>
                  )
                }

                return (
                  <div key={img.src || i}>
                    {tile}
                  </div>
                )
              })}
            </div>
          )}

          {/* info finale */}
          <div className="mt-2 text-[0.75rem] text-ft-textMuted text-right">
            {images.length} {images.length === 1 ? 'image' : 'images'}
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}
