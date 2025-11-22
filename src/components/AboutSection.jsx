export default function AboutSection({ t }) {
  return (
    <section id="about" className="card">
      {/* titolo sezione */}
      <div className="mb-3 flex items-center justify-between">
        <h2 className="section-title-bar">{t('about_section_title')}</h2>
      </div>

      {/* contenuto */}
      <div className="grid gap-8 px-5 pb-8 pt-5 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.3fr)]">
        {/* colonna sinistra: testo */}
        <div className="space-y-5 text-[0.9rem] leading-relaxed text-ft-textSoft fade-up">
          <p>{t('about_paragraph1')}</p>
          <p>{t('about_paragraph2')}</p>

          {/* box lingue & contatto */}
          <div className="mt-2 rounded-none border border-white/10 bg-black/20 px-4 py-3 text-[0.85rem]">
            <strong className="mb-1 block text-[0.9rem] text-ft-textMain">
              {t('about_languages_title')}
            </strong>
            <p className="text-ft-textSoft">
              {t('about_languages_text')}
            </p>
          </div>
        </div>

        {/* colonna destra */}
        <div className="space-y-6">
          {/* FOTO PERSONALE */}
          <div className="fade-up overflow-hidden rounded-none border border-white/10 bg-black/20 shadow-lg">
            <img
              src="/hildur.webp"
              alt="Hildur portrait"
              className="w-full object-cover opacity-95 hover:opacity-100 transition-opacity duration-300"
            />
          </div>

          {/* highlight box */}
          <div className="fade-up rounded-none bg-gradient-to-b from-[#3b2415] to-[#13131b] p-5 text-[0.85rem] leading-relaxed text-ft-textSoft shadow-inner shadow-black/20">
            <strong className="mb-2 block text-[0.95rem] text-amber-300">
              {t('about_highlight_title')}
            </strong>
            <span>{t('about_highlight_text')}</span>
          </div>

          {/* timeline */}
          <ul className="fade-up mt-2 space-y-5 border-l border-ft-borderSubtle pl-6 relative">
            {[1, 2, 3].map((i) => (
              <li key={i} className="relative pt-1">
                <div className="mb-0.5 text-[0.95rem] text-ft-textMain">
                  {t(`timeline${i}_title`)}
                </div>
                <div className="text-[0.8rem] text-ft-textMuted leading-tight">
                  {t(`timeline${i}_meta`)}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
