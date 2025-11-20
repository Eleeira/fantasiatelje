import { createPortal } from 'react-dom'



export default function BlogModal({
  open,
  onClose,
  title,
  children,
  meta,
  t
}) {
  if (!open) return null

  const { date, tags = [], image, readingMinutes, onPrev, onNext } = meta || {}

  const readingLabel =
    readingMinutes != null
      ? t('blog_reading_time').replace('{min}', readingMinutes)
      : null

  return createPortal(
    <div
      className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      {/* wrapper centrato */}
      <div
        className="flex h-full w-full items-start justify-center px-3 py-6 sm:px-6 sm:py-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* FOGLIO ARTICOLO */}
        <article
          className="
            w-full 
            max-w-5xl 
            max-h-[90vh]
            overflow-y-auto
            rounded-none 
            border border-white/12 
            bg-ft-cardSoft 
            shadow-[0_0_40px_rgba(0,0,0,0.55)]
            px-4 py-5
            sm:px-8 sm:py-7
            md:px-10 md:py-9
            animate-fade-up
          "
        >
          {/* barra in alto interna */}
          <header className="mb-5 flex items-start justify-between gap-4">
            <div>
              <div className="text-[0.7rem] uppercase tracking-[0.18em] text-ft-textMuted mb-1">
                {t('blog_label_prefix')}
              </div>
              <h2 className="text-[1.2rem] sm:text-[1.4rem] md:text-[1.55rem] font-semibold text-ft-textMain">
                {title}
              </h2>

              <div className="mt-2 flex flex-wrap items-center gap-2 text-[0.75rem] text-ft-textMuted">
                {date && <span>{date}</span>}
                {readingLabel && (
                  <>
                    <span className="h-[3px] w-[3px] rounded-full bg-ft-textMuted inline-block" />
                    <span>{readingLabel}</span>
                  </>
                )}
                {tags && tags.length > 0 && (
                  <>
                    <span className="h-[3px] w-[3px] rounded-full bg-ft-textMuted inline-block" />
                    <span className="flex flex-wrap gap-1">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-none bg-white/5 px-2 py-[2px] text-[0.7rem] uppercase tracking-[0.14em]"
                        >
                          {tag}
                        </span>
                      ))}
                    </span>
                  </>
                )}
              </div>
            </div>

            <button
              onClick={onClose}
              className="text-sm text-ft-textMuted hover:text-ft-textMain transition"
            >
              ✕
            </button>
          </header>

          {/* immagine di copertina */}
          {image && (
            <div className="mb-6 overflow-hidden rounded-none border border-white/10">
              <img
                src={image}
                alt={title}
                className="h-56 w-full object-cover sm:h-72 md:h-80 opacity-95 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          )}

          {/* layout principale: contenuto + sidebar */}
          <div className="flex flex-col gap-8 md:flex-row">
            {/* CONTENUTO ARTICOLO */}
            <div
              className="
                flex-1 
                text-sm sm:text-[0.95rem] 
                leading-relaxed 
                text-ft-textSoft 
                whitespace-pre-line 
                space-y-4
                font-serif
              "
            >
              {children}
            </div>

            {/* SIDEBAR / INDICE */}
            <aside className="hidden w-[210px] shrink-0 md:block text-[0.78rem] text-ft-textMuted">
              <div className="mb-4 border-b border-white/10 pb-3">
                <div className="mb-1 text-[0.7rem] uppercase tracking-[0.18em]">
                  {t('blog_meta_overview')}
                </div>
                {date && <div>{date}</div>}
                {readingLabel && <div>{readingLabel}</div>}
              </div>

              {tags && tags.length > 0 && (
                <div className="mb-4 border-b border-white/10 pb-3">
                  <div className="mb-1 text-[0.7rem] uppercase tracking-[0.18em]">
                    {t('blog_meta_tags')}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-none bg-white/5 px-2 py-[2px] text-[0.7rem] uppercase tracking-[0.14em]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <div className="mb-1 text-[0.7rem] uppercase tracking-[0.18em]">
                  {t('blog_meta_navigation')}
                </div>
                <button
                  disabled={!onPrev}
                  onClick={onPrev || undefined}
                  className={[
                    'block w-full border px-2 py-1 text-left text-[0.75rem] transition',
                    onPrev
                      ? 'border-white/20 hover:border-ft-accentSoft hover:text-ft-textMain'
                      : 'border-white/5 text-ft-textMuted/60 cursor-default'
                  ].join(' ')}
                >
                  {t('blog_prev_post')}
                </button>
                <button
                  disabled={!onNext}
                  onClick={onNext || undefined}
                  className={[
                    'block w-full border px-2 py-1 text-left text-[0.75rem] transition',
                    onNext
                      ? 'border-white/20 hover:border-ft-accentSoft hover:text-ft-textMain'
                      : 'border-white/5 text-ft-textMuted/60 cursor-default'
                  ].join(' ')}
                >
                  {t('blog_next_post')}
                </button>
              </div>
            </aside>
          </div>

          {/* navigazione in basso anche su mobile */}
          <div className="mt-8 flex justify-between gap-3 md:hidden text-[0.78rem]">
            <button
              disabled={!onPrev}
              onClick={onPrev || undefined}
              className={[
                'flex-1 border px-2 py-1 text-left transition',
                onPrev
                  ? 'border-white/20 text-ft-textSoft hover:border-ft-accentSoft hover:text-ft-textMain'
                  : 'border-white/5 text-ft-textMuted/60 cursor-default'
              ].join(' ')}
            >
              {onPrev ? `← ${t('blog_prev_post')}` : t('blog_no_prev')}
            </button>
            <button
              disabled={!onNext}
              onClick={onNext || undefined}
              className={[
                'flex-1 border px-2 py-1 text-right transition',
                onNext
                  ? 'border-white/20 text-ft-textSoft hover:border-ft-accentSoft hover:text-ft-textMain'
                  : 'border-white/5 text-ft-textMuted/60 cursor-default'
              ].join(' ')}
            >
              {onNext ? `${t('blog_next_post')} →` : t('blog_no_next')}
            </button>
          </div>
        </article>
      </div>
    </div>,
    document.body
  )
}