import { useState } from 'react'
import BlogModal from './BlogModal'
import { blogPosts } from '../blog/posts'

export default function BlogSection({ t, lang }) {
  const [openPost, setOpenPost] = useState(null)

  const posts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <section id="blog" className="card">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="section-title-bar">{t('blog_section_title')}</h2>
      </div>

           {/* ====== LISTA POST - STRIP ORIZZONTALE ====== */}
      <div className="relative overflow-hidden px-5 pb-6 pt-4">
  {/* wrapper che crea aria ai lati */}
  <div className="overflow-hidden rounded-none">
    <div className="blog-strip-track flex gap-4 px-2 sm:px-4">
      {[...posts, ...posts].map((post, index) => {
        const tr = post.translations[lang] || post.translations.it
        return (
          <article
            key={post.id + '-' + index}
            className="min-w-[260px] max-w-[260px] sm:min-w-[280px] sm:max-w-[280px] fade-up rounded-none border border-ft-borderSubtle bg-ft-cardSoft p-4 text-[0.85rem] text-ft-textSoft hover:border-ft-accentSoft/50 transition-colors"
          >
            {/* data */}
            <div className="mb-2 flex items-center justify-between text-[0.7rem] text-ft-textMuted">
              <span>
                {new Date(post.date).toLocaleDateString(
                  lang === 'sv'
                    ? 'sv-SE'
                    : lang === 'en'
                    ? 'en-GB'
                    : 'it-IT'
                )}
              </span>
            </div>

            <h3 className="mb-1 text-[0.95rem] text-ft-textMain">
              {tr.title}
            </h3>

            <p className="mb-2 line-clamp-3">{tr.excerpt}</p>

            <button
              onClick={() => setOpenPost(post.id)}
              className="text-[0.75rem] text-ft-accentSoft underline-offset-2 hover:underline"
            >
              {t('blog_read_more')}
            </button>
          </article>
        )
      })}
    </div>
  </div>
</div>





                  {/* ====== MODALE SINGOLA: POST APERTO ====== */}
      {openPost && (() => {
        const index = posts.findIndex((p) => p.id === openPost)
        if (index === -1) return null

        const post = posts[index]
        const tr = post.translations[lang] || post.translations.it

        const locale =
          lang === 'sv' ? 'sv-SE' : lang === 'en' ? 'en-GB' : 'it-IT'

        const dateLabel = new Date(post.date).toLocaleDateString(locale, {
          year: 'numeric',
          month: 'long',
          day: '2-digit'
        })

        const wordCount = tr.content.split(/\s+/).filter(Boolean).length
        const readingMinutes = Math.max(2, Math.round(wordCount / 200))

        const hasPrev = index > 0
        const hasNext = index < posts.length - 1

        return (
  <BlogModal
    open={true}
    onClose={() => setOpenPost(null)}
    title={tr.title}
    t={t}
    meta={{
      date: dateLabel,
      tags: post.tags || [],
      image: post.image,
      readingMinutes,
      onPrev: hasPrev ? () => setOpenPost(posts[index - 1].id) : null,
      onNext: hasNext ? () => setOpenPost(posts[index + 1].id) : null
    }}
  >
    {tr.content}
  </BlogModal>
)

      })()}


    </section>
  )
}
