export default function SidebarInfo({ t }) {
  return (
    <section className="card">
      <div className="mb-2">
        <h2 className="section-title-bar">{t('side_info_title')}</h2>
      </div>
      <ul className="space-y-3 text-xs text-ft-textSoft p-4">
        <li>
          <span className="mb-0.5 block text-[0.7rem] uppercase tracking-[0.18em] text-ft-textMuted">
            {t('side_info_location_label')}
          </span>
          <span>{t('side_info_location_value')}</span>
        </li>
        <li>
          <span className="mb-0.5 block text-[0.7rem] uppercase tracking-[0.18em] text-ft-textMuted">
            {t('side_info_focus_label')}
          </span>
          <span>{t('side_info_focus_value')}</span>
        </li>
        <li>
          <span className="mb-0.5 block text-[0.7rem] uppercase tracking-[0.18em] text-ft-textMuted">
            {t('side_info_clients_label')}
          </span>
          <span>{t('side_info_clients_value')}</span>
        </li>
      </ul>
    </section>
  )
}
