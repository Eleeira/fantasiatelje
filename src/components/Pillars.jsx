const pillarImages = [
  'pillar-photography.jpg',
  'pillar-branding.jpg',
  'pillar-web.jpg',
  'pillar-editorial.jpg',
  'pillar-workshops.jpg'
]

export default function Pillars({ t }) {
  return (
    <section
      id="services"
      className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
"
    >
      {pillarImages.map((img, i) => {
        const idx = i + 1
        return (
          <article
            key={img}
            className="rounded-t-[999px] rounded-b-none bg-ft-card p-0.3 shadow-ftSoft"
          >
            <div className="flex h-full flex-col gap-3 rounded-t-[999px] rounded-b-none bg-gradient-to-b from-[#3c2214] to-[#14121a] p-2.5">
              <div
                className="relative h-50 overflow-hidden rounded-t-[999px] rounded-b-none bg-cover bg-center"
                style={{ backgroundImage: `url(/${img})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70" />
              </div>

              <div className="space-y-2">
                <h3 className="pillar-title section-title-bar text-[0.8rem] font-semibold">
                {t(`pillar${idx}_title`)}
              </h3>

                <p className="text-[0.75rem] text-ft-textMuted">
                  {t(`pillar${idx}_text`)}
                </p>
                <a
                  href={idx === 5 ? '#contact' : '#portfolio'}
                  className="text-[0.76rem] text-ft-accentSoft"
                >
                  {t(`pillar${idx}_link`)}
                </a>
              </div>
            </div>
          </article>
        )
      })}
    </section>
  )
}
