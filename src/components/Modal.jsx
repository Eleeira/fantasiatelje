export default function Modal({ open, onClose, title, children }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* card */}
      <div className="relative z-10 w-[90%] max-w-sm rounded-none bg-gradient-to-b from-[#2b1a13] to-[#100f14] border border-white/10 p-5 shadow-xl animate-scale-in">
        <h3 className="mb-3 text-ft-accentSoft uppercase tracking-[0.15em] text-[0.8rem]">
          {title}
        </h3>

        <div className="text-sm text-ft-textSoft leading-relaxed">
          {children}
        </div>

        <button
          onClick={onClose}
          className="mt-4 inline-block border border-white/20 px-3 py-1 text-xs text-ft-textMuted hover:bg-white/10 transition-colors"
        >
          Chiudi
        </button>
      </div>
    </div>
  )
}
