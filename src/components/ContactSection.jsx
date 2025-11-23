import { useState } from 'react'


export default function ContactSection({ t, lang }) {
  const [intent, setIntent] = useState(null)
  const [sent, setSent] = useState(false)

  const intentIntroKeyMap = {
    project: 'contact_intent_intro_project',
    quote: 'contact_intent_intro_quote',
    consult: 'contact_intent_intro_consult'
  }

  const activeIntroKey = intent
    ? intentIntroKeyMap[intent]
    : 'contact_guidelines_intro_default'

  return (
    <section id="contact" className="card fade-up">
      {/* titolo */}
      <div className="mb-3">
        <h2 className="section-title-bar">
          {t('contact_section_title')}
        </h2>
      </div>

      <div className="px-5 pb-7 pt-5 space-y-6">
        {/* intro generale sopra i bottoni */}
        <p className="text-ft-textSoft text-[0.85rem] leading-relaxed">
          {t('contact_intro')}
        </p>

        {/* bottoni intenzione */}
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { key: 'project', label: t('contact_intent_project') },
            { key: 'quote', label: t('contact_intent_quote') },
            { key: 'consult', label: t('contact_intent_consult') }
          ].map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => setIntent(item.key)}
              className={[
                'group flex items-center justify-center',
                'text-center leading-tight',
                'min-h-[52px] w-full px-3 py-3',
                'text-[0.8rem] sm:text-[0.75rem]',
                'border border-white/10 rounded-none transition-all',
                intent === item.key
                  ? 'bg-ft-accentSoft text-black shadow-lg'
                  : 'bg-black/30 text-ft-textSoft hover:bg-black/40'
              ].join(' ')}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* intro + domande guida dinamiche */}
        <div className="space-y-1 pl-1 border-l border-ft-borderSubtle animate-fade-in">
          <p className="text-[0.75rem] text-ft-textMuted">
            {t(activeIntroKey)}
          </p>
          <ul className="text-[0.78rem] text-ft-textSoft space-y-1">
            <li>• {t('contact_guideline_scope')}</li>
            <li>• {t('contact_guideline_budget')}</li>
            <li>• {t('contact_guideline_timing')}</li>
          </ul>
        </div>

        {/* form (mock, per ora) */}
        <form
  action="https://getform.io/f/bvrmkoeb"
  method="POST"
  className="space-y-4 animate-fade-in"
>
  {/* INTENTO DEL CONTATTO (hidden) */}
  <input type="hidden" name="intent" value={intent || 'not-specified'} />

  <div className="space-y-1">
    <label className="text-[0.75rem] text-ft-textMuted">
      {t('contact_form_name')}
    </label>
    <input
      type="text"
      name="name"
      placeholder={t('contact_form_name_placeholder')}
      required
      className="w-full rounded-none border border-white/10 bg-black/20 px-3 py-2 text-sm text-ft-textMain focus:border-ft-accentSoft/60 outline-none transition"
    />
  </div>

  <div className="space-y-1">
    <label className="text-[0.75rem] text-ft-textMuted">
      {t('contact_form_email')}
    </label>
    <input
      type="email"
      name="email"
      placeholder={t('contact_form_name_placeholder')}
      required
      className="w-full rounded-none border border-white/10 bg-black/20 px-3 py-2 text-sm text-ft-textMain focus:border-ft-accentSoft/60 outline-none transition"
    />
  </div>

  <div className="space-y-1">
    <label className="text-[0.75rem] text-ft-textMuted">
      {t('contact_form_message')}
    </label>
    <textarea
      rows={5}
      name="message"
      placeholder={t('contact_form_name_placeholder')}
      required
      className="w-full rounded-none border border-white/10 bg-black/20 px-3 py-2 text-sm text-ft-textMain focus:border-ft-accentSoft/60 outline-none transition resize-none"
    />
  </div>

  {/* redirect opzionale */}
  <input 
    type="hidden" 
    name="_redirect" 
    value="https://fantasiatelje.com/grazie" 
  />

  <button
    type="submit"
    className="inline-flex items-center justify-center rounded-none bg-gradient-to-r from-ft-accentSoft to-amber-300 px-4 py-2 text-xs font-semibold text-black shadow-lg hover:opacity-90 transition"
  >
    {t('contact_form_send')}
  </button>
</form>


{sent && (
  <div className="
    mt-3 rounded-none border border-ft-accentSoft/40 bg-black/40 
    px-3 py-2 text-[0.78rem] text-ft-textSoft 
    animate-fade-in shadow-lg
  ">
    {t('contact_form_sent')}
  </div>
)}



{/* frase solo per Svezia */}
{lang === 'sv' && (
  <p className="mt-4 text-[0.75rem] text-ft-textMuted italic">
    I Sverige fungerar mejl oftast bäst - skriv några rader om vad du behöver, så återkommer jag snart.
  </p>
)}






        {/* email diretta */}
        <div className="pt-4 border-t border-white/10">
          <p className="text-[0.75rem] text-ft-textMuted mb-1">
            {t('contact_alt')}
          </p>
          <a
            href="mailto:info@fantasiatelje.se"
            className="inline-block text-[0.85rem] text-ft-accentSoft hover:text-amber-300 transition underline-offset-2"
          >
            info@fantasiatelje.se
          </a>
        </div>


      </div>
    </section>
  )
}
