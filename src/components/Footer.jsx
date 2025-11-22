export default function Footer({ t }) {
  return (
    <footer className="mt-10 border-t border-white/10 pt-6 text-[0.75rem] text-ft-textMuted">
  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">

    {/* Left: testo */}
    <div className="space-y-1">
      <span className="block text-ft-textSoft">{t('footer_left')}</span>
      <span className="block opacity-70">{t('footer_right')}</span>
    </div>



    {/* Middle: menu minimal */}
    <nav className="flex items-center gap-4 uppercase tracking-[0.15em] text-[0.65rem]">
      <a href="#services" className="hover:text-ft-textMain">
        {t('nav_services')}
      </a>
      <a href="#portfolio" className="hover:text-ft-textMain">
        {t('nav_portfolio')}
      </a>
      <a href="#contact" className="hover:text-ft-textMain">
        {t('nav_contact')}
      </a>
    </nav>



  </div>

  {/* micro linea rame */}
  <div className="mt-4 h-[1px] w-full bg-ft-accentSoft/20" />
</footer>

  )
}
