export default function SidebarIntro({ t }) {
  return (
    <section className="mt-1 rounded-none bg-gradient-to-b from-[#3e2415] to-[#131219] shadow-ftSoft border border-white/10">
      <h2 className="section-title-bar">{t('side_intro_title')}</h2>
      <p className="text-xs text-ft-textSoft p-4">
        {t('side_intro_sub')}
      </p>
      <div className="inline-flex flex-wrap gap-2 text-[0.7rem] p-4">
        <span className="rounded-none border border-amber-300/60 bg-black/80 px-2 py-1 text-amber-200">
          {t('side_availability')}
        </span>
      </div>
    </section>
  )
}
