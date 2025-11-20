import { useState, useMemo, useEffect } from 'react'


import translations from './i18n/translations'
import Reveal from './components/Reveal'
import Hero from './components/Hero'
import Pillars from './components/Pillars'
import PortfolioSection from './components/PortfolioSection'
import AboutSection from './components/AboutSection'
import ServicesDetail from './components/ServicesDetail'
import SidebarIntro from './components/SidebarIntro'
import SidebarInfo from './components/SidebarInfo'
import SidebarCalendar from './components/SidebarCalendar'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import BlogSection from './components/BlogSection'
import ReviewsSection from './components/ReviewSection'
import SidebarQuote from './components/SidebarQuote'


const LANGS = ['sv', 'en', 'it']


export default function App() {


useEffect(() => {
  const blockEverything = (e) => {
    // blocca tasto destro
    if (e.type === "contextmenu") e.preventDefault();

    // blocca CTRL+S, CTRL+U, CTRL+P, CTRL+SHIFT+I
    if (
      (e.ctrlKey && ["s", "u", "p"].includes(e.key.toLowerCase())) ||
      (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i")
    ) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  document.addEventListener("contextmenu", blockEverything);
  document.addEventListener("keydown", blockEverything);

  return () => {
    document.removeEventListener("contextmenu", blockEverything);
    document.removeEventListener("keydown", blockEverything);
  };
}, []);



  const [lang, setLang] = useState('sv')

  const t = useMemo(
    () => (key) => translations[lang][key] ?? key,
    [lang]
  )








  return (
    <div className="page">

      
<div id="global-bokeh">
  {Array.from({ length: 28 }).map((_, i) => {
    // palette autunno Fantasiateljé
    const colors = [
      'rgba(163, 92, 47, 0.9)',   // rame
      'rgba(196, 122, 66, 0.9)',  // zucca
      'rgba(227, 168, 107, 0.9)', // miele
      'rgba(139, 63, 36, 0.9)'    // bruciato
    ]
    const color = colors[Math.floor(Math.random() * colors.length)]

    const size = 40 + Math.random() * 110 // 40–150px

    return (
      <div
        key={i}
        className="bokeh-dot"
        style={{
          left: `${Math.random() * 100}%`,
          animationDuration: `${14 + Math.random() * 16}s`, // 14–30s
          animationDelay: `${Math.random() * 10}s`,
          width: `${size}px`,
          height: `${size}px`,
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
          opacity: 0.25 + Math.random() * 0.35
        }}
      />
    )
  })}
</div>

      <Hero lang={lang} setLang={setLang} langs={LANGS} t={t} />
      
      <Reveal as="section" className="mt-4" delay={0}>
      <Pillars t={t} />
      </Reveal>

{/* 🔸 DIVIDER DECORATIVO */}
<div className="mt-6 mb-2 flex items-center gap-3 text-ft-textMuted">
  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-ft-accentSoft/60 to-transparent" />
  <span className="text-[0.7rem] tracking-[0.35em] uppercase">
    ✶ ✶ ✶
  </span>
  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-ft-accentSoft/60 to-transparent" />
</div>




      <main className="mt-6 grid gap-6 grid-cols-1 lg:grid-cols-[minmax(0,1.9fr)_minmax(0,1.2fr)] items-start">
  <section className="flex flex-col gap-6">
    <Reveal as="div">
      <PortfolioSection t={t} />
    </Reveal>

    <Reveal as="div">
      <AboutSection t={t} />
    </Reveal>

    <Reveal as="div">
      <ServicesDetail t={t} lang={lang} />
    </Reveal>

<Reveal as="div">
      <ReviewsSection t={t} lang={lang} />
    </Reveal>





{/* 🔸 DIVIDER DECORATIVO */}
<div className=" flex items-center gap-3 text-ft-textMuted">
  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-ft-accentSoft/60 to-transparent" />
  <span className="text-[0.7rem] tracking-[0.35em] uppercase">
    ✶ ✶ ✶
  </span>
  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-ft-accentSoft/60 to-transparent" />
</div>

  <Reveal as="div">
  <BlogSection t={t} lang={lang} />
</Reveal>


  </section>

  <aside className="flex flex-col gap-6">
    <Reveal as="div">
      <SidebarIntro t={t} />
    </Reveal>

    <Reveal as="div">
      <SidebarInfo t={t} />
    </Reveal>

    <Reveal as="div">
      <SidebarCalendar t={t} />
    </Reveal>

    <Reveal as="div">
      <ContactSection t={t} />
    </Reveal>



     <Reveal as="div">
    <SidebarQuote t={t} />
  </Reveal>


  </aside>
</main>

      <Footer t={t} lang={lang} />

    </div>
  )
}
