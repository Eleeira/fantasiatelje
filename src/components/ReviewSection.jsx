// src/components/ReviewsSection.jsx
const reviews = [
  {
    id: 1,
    name: 'Sara, ceramista',
    source: 'E-mail',
    text_it: 'Hildur ha colto esattamente l’atmosfera del mio laboratorio. Le foto sembrano parlare da sole.',
    text_en: 'Hildur captured the exact atmosphere of my studio. The photos almost speak on their own.',
    text_sv: 'Hildur fångade precis känslan i min verkstad. Bilderna känns som att de talar själva.'
  },
  {
    id: 2,
    name: 'Jonas, piccolo brand di caffè',
    source: 'Google',
    text_it: 'Identità visiva semplice, ma perfetta per noi. Chiara, calma, riconoscibile.',
    text_en: 'A simple visual identity, but perfect for us. Clear, calm and recognisable.',
    text_sv: 'En enkel visuell identitet, men perfekt för oss. Tydlig, lugn och igenkännbar.'
  }
]

export default function ReviewsSection({ t, lang }) {
  return (
    <section className="card mb-2">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="section-title-bar">
          {t('reviews_section_title')}
        </h2>
      </div>

      <div className="grid gap-4 px-5 pb-6 pt-5 md:grid-cols-2">
        {reviews.map((rev) => {
          const text =
            lang === 'sv'
              ? rev.text_sv
              : lang === 'en'
              ? rev.text_en
              : rev.text_it

          return (
            <article
              key={rev.id}
              className="rounded-none border border-white/10 bg-ft-cardSoft p-4 text-[0.85rem] text-ft-textSoft shadow-ft-soft/40"
            >
              <p className="mb-3 italic">“{text}”</p>
              <div className="flex items-baseline justify-between text-[0.75rem] text-ft-textMuted">
                <span>{rev.name}</span>
                <span className="opacity-70">
                  {rev.source === 'Google' ? 'Google' : 'E-mail'}
                </span>
              </div>
            </article>
          )
        })}
      </div>

      {/* link alla fonte esterna */}
      <div className="border-t border-white/10 px-5 py-3 text-[0.78rem] text-ft-textMuted flex justify-between items-center">
        <span>{t('reviews_more_label')}</span>
        <a
          href="https://link-alla-tua-pagina-google-o-trustpilot"
          target="_blank"
          rel="noreferrer"
          className="text-ft-accentSoft hover:text-amber-300 underline-offset-2 hover:underline"
        >
          {t('reviews_more_cta')}
        </a>
      </div>
    </section>
  )
}
