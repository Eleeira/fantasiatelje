// src/components/WhatsAppBubble.jsx
import { MessageCircle } from 'lucide-react'

export default function WhatsAppBubble({ lang, t }) {
  // mostra solo per Italiano + Inglese
  if (lang !== 'it' && lang !== 'en') return null

  const phone = '46765863437' // <-- sostituisci col tuo numero senza +, spazi, trattini

  const messages = {
    it: 'Ciao Hildur, ti scrivo da Fantasiateljé.',
    en: 'Hi Hildur, I’m writing from Fantasiateljé.'
  }

  const text = encodeURIComponent(messages[lang] || messages.en)
  const url = `https://wa.me/${phone}?text=${text}`

  return (
    <>
      {/* 📱 Mobile / tablet: bubble tonda in basso a sinistra */}
      <div className="fixed bottom-6 left-4 z-[60] lg:hidden">

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="
  inline-flex items-center justify-center
  h-11 w-11
  rounded-full
  bg-ft-accentSoft text-black
  shadow-[0_10px_25px_rgba(0,0,0,0.55)]
  hover:shadow-[0_0_18px_rgba(184,117,62,0.5)]
  hover:scale-[1.06]
  active:scale-95
  transition-all duration-200
"

          aria-label={t('whatsapp_label')}
        >
          <MessageCircle size={18} className="text-black" aria-hidden="true" />
        </a>
      </div>

      {/* 🖥 Desktop: pill allineata alla pagina, in basso a destra */}
      <div className="fixed bottom-8 inset-x-0 z-[50] hidden lg:block">

        <div className="max-w-5xl mx-auto px-5 flex justify-end">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="
  inline-flex items-center gap-2
  bg-black/60 backdrop-blur-md
  border border-white/10
  px-3 py-2
  rounded-none
  shadow-[0_10px_25px_rgba(0,0,0,0.55)]
  hover:bg-black/80
  hover:shadow-[0_0_20px_rgba(184,117,62,0.35)]
  hover:translate-y-[-2px]
  transition-all duration-200
"

            aria-label={t('whatsapp_label')}
          >
            <MessageCircle
              size={18}
              className="text-ft-accentSoft"
              aria-hidden="true"
            />
            <span className="text-[0.75rem] uppercase tracking-[0.12em] text-ft-textSoft">
              {lang === 'it' ? 'Scrivimi su WhatsApp' : 'Message me on WhatsApp'}
            </span>
          </a>
        </div>
      </div>
    </>
  )
}
