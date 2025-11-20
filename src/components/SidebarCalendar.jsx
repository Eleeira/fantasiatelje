import { useState } from 'react'
import Modal from './Modal'

export default function SidebarCalendar({ t }) {
  const [open, setOpen] = useState(null) // null | 'portrait' | 'logo' | 'ux'

  return (
    <section className="card">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="section-title-bar">{t('side_extra_title')}</h2>
      </div>

      <div className="px-5 pb-5 pt-4 space-y-6 text-[0.8rem] text-ft-textSoft">

        {/* SERVIZI RAPIDI */}
        <div>
          <h3 className="mb-2 uppercase tracking-[0.16em] text-ft-textMuted">
            {t('side_extra_quick_title')}
          </h3>

          <ul className="space-y-1.5 leading-snug">
            <li>
              <button
                onClick={() => setOpen('portrait')}
                className="text-left w-full hover:text-ft-accentSoft transition-colors"
              >
                {t('side_extra_quick_1')}
              </button>
            </li>
            <li>
              <button
                onClick={() => setOpen('logo')}
                className="text-left w-full hover:text-ft-accentSoft transition-colors"
              >
                {t('side_extra_quick_2')}
              </button>
            </li>
            <li>
              <button
                onClick={() => setOpen('ux')}
                className="text-left w-full hover:text-ft-accentSoft transition-colors"
              >
                {t('side_extra_quick_3')}
              </button>
            </li>
          </ul>
        </div>

        {/* FAQ */}
<div>
  <h3 className="mb-2 uppercase tracking-[0.16em] text-ft-textMuted">
    {t('side_extra_faq_title')}
  </h3>

  <ul className="space-y-1.5 leading-snug">
    <li>
      <button
        onClick={() => setOpen('faq1')}
        className="text-left w-full hover:text-ft-accentSoft transition-colors"
      >
        {t('side_extra_faq_1')}
      </button>
    </li>

    <li>
      <button
        onClick={() => setOpen('faq2')}
        className="text-left w-full hover:text-ft-accentSoft transition-colors"
      >
        {t('side_extra_faq_2')}
      </button>
    </li>

    <li>
      <button
        onClick={() => setOpen('faq3')}
        className="text-left w-full hover:text-ft-accentSoft transition-colors"
      >
        {t('side_extra_faq_3')}
      </button>
    </li>
  </ul>
</div>


        {/* DISPONIBILITÀ */}
        <div>
          <h3 className="mb-2 uppercase tracking-[0.16em] text-ft-textMuted">
            {t('side_extra_availability_title')}
          </h3>

          <p className="leading-snug">{t('side_extra_availability_text')}</p>

          <p className="mt-2 text-ft-textMuted">{t('side_extra_response')}</p>
        </div>
      </div>




{/* 🌙 MODALI SERVIZI RAPIDI */}
<Modal
  open={open === 'portrait'}
  onClose={() => setOpen(null)}
  title={t('side_extra_quick_modal1_title')}
>
  <p className="whitespace-pre-line text-sm text-ft-textSoft leading-relaxed">
    {t('side_extra_quick_modal1_text')}
  </p>
</Modal>

<Modal
  open={open === 'logo'}
  onClose={() => setOpen(null)}
  title={t('side_extra_quick_modal2_title')}
>
  <p className="whitespace-pre-line text-sm text-ft-textSoft leading-relaxed">
    {t('side_extra_quick_modal2_text')}
  </p>
</Modal>

<Modal
  open={open === 'ux'}
  onClose={() => setOpen(null)}
  title={t('side_extra_quick_modal3_title')}
>
  <p className="whitespace-pre-line text-sm text-ft-textSoft leading-relaxed">
    {t('side_extra_quick_modal3_text')}
  </p>
</Modal>





      {/* FAQ 1 */}
<Modal
  open={open === 'faq1'}
  onClose={() => setOpen(null)}
  title={t('side_extra_faq_1')}
>
  <p className="whitespace-pre-line text-sm text-ft-textSoft leading-relaxed">
    {t('side_extra_faq_answer_1')}
  </p>
</Modal>

{/* FAQ 2 */}
<Modal
  open={open === 'faq2'}
  onClose={() => setOpen(null)}
  title={t('side_extra_faq_2')}
>
  <p className="whitespace-pre-line text-sm text-ft-textSoft leading-relaxed">
    {t('side_extra_faq_answer_2')}
  </p>
</Modal>

{/* FAQ 3 */}
<Modal
  open={open === 'faq3'}
  onClose={() => setOpen(null)}
  title={t('side_extra_faq_3')}
>
  <p className="whitespace-pre-line text-sm text-ft-textSoft leading-relaxed">
    {t('side_extra_faq_answer_3')}
  </p>
</Modal>




    </section>
  )
}
