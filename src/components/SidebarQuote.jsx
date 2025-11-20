export default function SidebarQuote({ t }) {
  return (
    <div className="fade-up p-4">
      <p className="text-[0.90rem] italic text-ft-textSoft">
        «{t('contact_quote')}»
      </p>

      <div className="mt-3 flex justify-end">
        <img
          src="/hilde.png"
          alt="Hildur"
          className="h-20 opacity-90"
        />
      </div>
    </div>
  )
}
