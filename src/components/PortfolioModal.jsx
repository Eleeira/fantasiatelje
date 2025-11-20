// src/components/PortfolioModal.jsx
import { useState } from 'react'
import { createPortal } from 'react-dom'

export default function PortfolioModal({ open, onClose, title, images, intro }) {
  const [index, setIndex] = useState(0)

  if (!open) return null

  const current = images[index]

  const goPrev = () => {
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1))
  }

  const goNext = () => {
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1))
  }

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




          {/* immagine principale */}
          <div className="relative flex-1 flex items-center justify-center">
  <div
    className="
      relative w-full max-w-4xl
      max-h-[60vh]
      rounded-none border border-white/12
      bg-black/30
      shadow-[0_18px_45px_rgba(0,0,0,0.75)]
      flex items-center justify-center
      px-3 py-3
    "
  >
    <img
      src={current.src}
      alt={current.alt || title}
      className="max-h-[52vh] w-full object-contain"
    />
  </div>


            {/* frecce */}
            {images.length > 1 && (
              <>
                <button
                  onClick={goPrev}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-[1.4rem] text-ft-textSoft hover:text-ft-textMain"
                >
                  ‹
                </button>
                <button
                  onClick={goNext}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-[1.4rem] text-ft-textSoft hover:text-ft-textMain"
                >
                  ›
                </button>
              </>
            )}
          </div>

          {/* info in basso: numero + caption */}
          <div className="flex items-center justify-between text-[0.75rem] text-ft-textMuted">
            <span>
              {index + 1} / {images.length}
            </span>
            {current.caption && (
              <span className="text-right">
                {current.caption}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}
