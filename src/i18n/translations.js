const year = new Date().getFullYear()

const translations = {



  //ITALIAN -------------------ITALIAN-----------------ITALIAN-----------------



  it: {
    nav_services: 'Servizi',
    nav_portfolio: 'Portfolio',
    nav_about: 'Chi sono',
    nav_contact: 'Contatto',
    nav_blog: 'Blog',


    hero_eyebrow: 'Spazio creativo indipendente',
    hero_title: 'Immagini, identità e web che profumano di storie.',
    hero_sub:
      'Fantasiateljé è lo spazio creativo di Hildur: fotografia, grafica e piccoli mondi digitali su misura per brand gentili, artigiani e progetti culturali.',
    hero_cta_primary: 'Raccontami il tuo progetto',
    hero_cta_secondary: 'Sfoglia il portfolio',

    pillar1_title: 'Fotografia narrativa',
    pillar1_text: 'Ritratti, still life e reportage visivi con luce morbida.',
    pillar1_link: 'Vedi gli scatti',

    pillar2_title: 'Identità visive & Palette',
    pillar2_text: 'Loghi, palette e sistemi grafici coerenti con il tuo mondo.',
    pillar2_link: 'Branding',

    pillar3_title: 'Siti web poetici',
    pillar3_text: 'Piccoli siti curati, responsive e facili da aggiornare.',
    pillar3_link: 'Progetti web',

pillar4_title: 'Servizi di traduzione',
pillar4_text: 'Piccole traduzioni tra svedese, inglese e italiano',
pillar4_link: 'Traduzioni',


    pillar5_title: 'Consulenze & Brainstorming',
    pillar5_text: 'Sessioni 1:1 per mettere ordine nel tuo immaginario.',
    pillar5_link: 'Scrivimi',


    

portfolio_section_title: 'Fotografie e Progetti',    

portfolio_editorial_label: "Fotografia",
portfolio_brand_label: "Branding",
portfolio_web_label: "Web & Layout",

portfolio_modal_photo_title: "Fotografia narrativa",
portfolio_modal_brand_title: "Identità visiva",
portfolio_modal_web_title: "Progetti digitali",

portfolio_modal_photo_intro: "Una selezione di ritratti, luce naturale e atmosfere quiete.",
portfolio_modal_brand_intro: "Studi visivi, palette e piccoli sistemi di identità.",
portfolio_modal_web_intro: "Layout chiari, struttura essenziale e attenzione al ritmo visivo.",











about_section_title: 'Dietro fantasiateljé',
about_section_tag: 'Processo & valori',

about_paragraph1:
  'Sono Hildur. Amo le immagini calme, la luce morbida e le storie che si svelano piano. Vengo dalla fotografia, poi ho trovato nel design un secondo linguaggio: forme, colore, respiro.',
about_paragraph2:
  'Sto ancora imparando - e mi piace così. Ho un occhio attento, curiosità costante e il desiderio di creare cose sincere e utili.',

about_highlight_title: 'Come lavoro',
about_highlight_text:
  'Preferisco la semplicità: ascolto, cura, equilibrio visivo. Ogni progetto è un dialogo. Raccolgo ciò che serve e cerco una forma che funzioni, emozioni e resti.',

about_languages_title: 'Lingue & contatto',
about_languages_text:
  'Parlo italiano e inglese, sto studiando svedese e vivo a caffè filtrato. Se hai un’idea o qualcosa da raccontare, scrivimi. Ci sono.',









    timeline1_title: 'Ascolto & moodboard',
    timeline1_meta: 'Call, questionario leggero e riferimenti condivisi.',
    timeline2_title: 'Shooting / design',
    timeline2_meta: 'Scatti, bozzetti e prime proposte con feedback.',
    timeline3_title: 'Consegna curata',
    timeline3_meta: 'File per stampa e web + mini guida d’uso.',

    services_section_title: 'Servizi in dettaglio',
    services_section_tag: 'Cosa possiamo creare insieme',

    service_learn_more: 'Scopri di più',

service1_title: 'Ritratto editoriale',
service1_text: 'Mini sessioni per bio, press-kit e profili professionali.',
service1_long_text: 'Un ritratto intimo, naturale, con una direzione leggera.\nSessione di 40–60 minuti, 6–10 scatti curati.',


service2_title: 'Branding essenziale',
service2_text: 'Logo, palette colore e micro-guida visiva.',
service2_long_text: 'Un pacchetto pensato per attività piccole o emergenti.\nLogo essenziale, palette cromatica e guida d’uso.',


service3_title: 'Mini-sito Web',
service3_text: 'One-page elegante e leggera.',
service3_long_text: 'Sito vetrina responsive, con attenzione a UX e storytelling.\nInclusi: struttura, design e setup tecnico.',


service4_title: 'Editing fotografico',
service4_text: 'Color grading narrativo per serie o reportage.',
service4_long_text: 'Editing coerente per progetti creativi, serie editoriali o reportage.',


service5_title: "Servizi di traduzione",
service5_text: "Piccole traduzioni generiche e traduzioni specialistiche culturali, artistiche e IT.",
service5_long_text: "Traduzioni curate tra svedese, inglese e italiano. Perfette per testi brevi, comunicazione culturale, materiali artistici e contenuti digitali. Disponibili anche revisioni e controlli qualità.",
service5_price: "Da 350–600 kr / h",



service6_title: 'Supporto creativo',
service6_text: 'Consulenze veloci per idee, direzione o revisione.',
service6_long_text: 'Sessioni da 45 minuti, brainstorming o revisione materiale.',



    side_intro_title: 'Aperta a nuove collaborazioni',
    side_intro_sub:
      'Disponibile per foto, identità visive e web da Dicembre in poi.',
    side_availability: 'Prenota da 1 a 3 mesi prima',

    side_info_title: 'In breve',
    side_info_location_label: 'Base',
    side_info_location_value: 'Svezia, tra boschi, città e musei.',
    side_info_focus_label: 'Focus',
    side_info_focus_value:
      'Fotografia, graphic design, front-end e semplici traduzioni tra svedese, inglese e italiano.',
    side_info_clients_label: 'Per chi',
    side_info_clients_value:
      'Artigiani, creativi, realtà culturali e piccoli brand.',





side_extra_title: 'Info utili',

side_extra_quick_title: 'Servizi rapidi',
side_extra_quick_1: 'Mini ritratto editoriale (30 min)',
side_extra_quick_2: 'Logo + palette base',
side_extra_quick_3: 'Revisione sito / UX check (1h)',

side_extra_quick_modal1_title: 'Mini ritratto editoriale',
side_extra_quick_modal1_text:
  'Perfetto per bio, portfolio e profili professionali.\nSessione da circa 30 minuti, con consegna di 3-5 scatti curati.',

side_extra_quick_modal2_title: 'Logo + palette base',
side_extra_quick_modal2_text:
  'Un piccolo pacchetto visivo per attività, studi e micro-brand.\nInclude un logo essenziale, una palette colori dedicata e una miniguida per usarli in modo consistente.',

side_extra_quick_modal3_title: 'Revisione sito / UX check',
side_extra_quick_modal3_text:
  'Analisi veloce del sito con suggerimenti pratici su struttura, testo e navigazione.\nIdeale per migliorare chiarezza, accessibilità e flusso prima di un restyling completo.',




side_extra_faq_title: 'FAQ',
side_extra_faq_1: 'Lavori anche da remoto?',
side_extra_faq_2: 'Fai preventivi gratuiti?',
side_extra_faq_3: 'Quanto dura un progetto medio?',

side_extra_faq_answer_1: 'Sì - lavoro tranquillamente sia a distanza che sul posto, in base alle necessità del progetto.',
side_extra_faq_answer_2: 'Certo! Preparare un preventivo è sempre gratuito. È sufficiente descrivermi il progetto e i tuoi obiettivi.',
side_extra_faq_answer_3: 'Dipende dal tipo di lavoro: progetti fotografici 1-2 settimane, mini-branding 1 settimana, revisione web/UX 24–48 ore.',


side_extra_availability_title: 'Disponibilità',
side_extra_availability_text: 'Lun-Ven · 8:00-16:00',
side_extra_response: 'Rispondo entro 24 ore.',



blog_label_prefix: "Blog · Fantasiateljé",
blog_meta_overview: "In breve",
blog_meta_tags: "Tag",
blog_meta_navigation: "Navigazione",
blog_prev_post: "Post precedente",
blog_next_post: "Post successivo",
blog_no_prev: "Nessun post precedente",
blog_no_next: "Nessun post successivo",
blog_reading_time: "~ {min} min di lettura",
blog_read_more: "Leggi l'articolo",
blog_section_title: "Diario visivo",



contact_section_title: 'Contatti',
contact_intro: 'Scrivimi qualche dettaglio su ciò che ti serve. Rispondo il prima possibile.',

contact_intent_project: 'Proposta di progetto',
contact_intent_quote: 'Preventivo veloce',
contact_intent_consult: 'Consulenza creativa',

contact_guidelines_intro_default: 'Qualche informazione utile per partire:',
contact_intent_intro_project: 'Raccontami cosa hai in mente - un progetto fotografico, un’identità visiva o un sito. Ti guiderò passo passo e preparo volentieri una proposta su misura.',
contact_intent_intro_quote: 'Se ti serve solo un’idea dei costi, scrivimi due righe. Rispondo con un preventivo chiaro e senza impegno.',
contact_intent_intro_consult: 'Hai un’idea da chiarire, un dubbio sul tuo brand o un feedback sul sito? Una breve consulenza può fare moltissimo - parliamone insieme.',

contact_guideline_scope: 'Di cosa si tratta',
contact_guideline_budget: 'Budget indicativo',
contact_guideline_timing: 'Tempistiche preferite',

contact_form_name: 'Nome',
contact_form_email: 'Email',
contact_form_message: 'Messaggio',
contact_form_send: 'Invia',

contact_alt: 'Oppure scrivi direttamente a:',



contact_form_sent: 'Messaggio inviato — grazie!',






    side_contact_title: 'Parliamone',
    side_contact_intro:
      'Scrivimi poche righe su di te, sul progetto e sulle tempistiche ideali.',

    form_name_label: 'Nome',
    form_email_label: 'Email',
    form_message_label: 'Messaggio',
    form_submit: 'Invia richiesta',

    w_mon: 'Lun',
    w_tue: 'Mar',
    w_wed: 'Mer',
    w_thu: 'Gio',
    w_fri: 'Ven',

    footer_left: `© ${year} Fantasiateljé · Ideato, disegnato e creato da Hildur.`,
    footer_right: 'Sito in lavorazione - font e immagini possono cambiare.',


    dock_contact: 'Contattami',




reviews_section_title: 'Cosa dicono i clienti',
reviews_more_label: 'Vuoi leggere altre opinioni?',
reviews_more_cta: 'Vedi tutte le recensioni su Google',




contact_quote: 'Ogni progetto merita uno spazio gentile in cui respirare.'

  },






//ENGLISH ------------------ENGLISH-------------ENGLISH--------------------


  en: {
    nav_services: 'Services',
    nav_portfolio: 'Portfolio',
    nav_about: 'About',
    nav_contact: 'Contact',
    nav_blog: 'Blog',


    hero_eyebrow: 'Independent creative space',
    hero_title: 'Images, identities and websites with a story to tell.',
    hero_sub:
      'Fantasiateljé is Hildur’s creative space: photography, graphic design and small digital worlds for gentle brands, artisans and cultural projects.',
    hero_cta_primary: 'Tell me about your project',
    hero_cta_secondary: 'Browse the portfolio',

    pillar1_title: 'Narrative photography',
    pillar1_text: 'Portrait, still life and reportage with soft light.',
    pillar1_link: 'See the images',

    pillar2_title: 'Visual identities',
    pillar2_text: 'Logos, palettes and systems that feel like your world.',
    pillar2_link: 'Branding',

    pillar3_title: 'Poetic websites',
    pillar3_text: 'Small, crafted, responsive sites that are easy to update.',
    pillar3_link: 'Web projects',

pillar4_title: 'Translation services',
pillar4_text: 'Small translations between Swedish, English, and Italian',
pillar4_link: 'Translations',


    pillar5_title: 'Consulting & workshops',
    pillar5_text: 'One-to-one sessions to tidy your visual universe.',
    pillar5_link: 'Get in touch',


    
portfolio_section_title: 'Photography & Projects',

    portfolio_editorial_label: 'Photography',
    portfolio_brand_label: 'Branding',
    portfolio_web_label: 'Web & Layout',

    portfolio_modal_photo_title: 'Narrative Photography',
    portfolio_modal_brand_title: 'Visual Identity',
    portfolio_modal_web_title: 'Digital Projects',

    portfolio_modal_photo_intro: 'A selection of portraits, natural light, and quiet atmospheres.',
    portfolio_modal_brand_intro: 'Visual studies, palettes, and small identity systems.',
    portfolio_modal_web_intro: 'Clear layouts, essential structure, and attention to visual rhythm.',
  






about_section_title: 'Behind fantasiateljé',
about_section_tag: 'Process & values',

about_paragraph1:
  'I’m Hildur. I love quiet images, soft light, and stories that reveal themselves slowly. I come from photography, then discovered design as a second language - shape, colour, breath.',
about_paragraph2:
  'I’m still learning - and I like it that way. I have a trained eye, constant curiosity, and the wish to create things that feel sincere and truly useful.',

about_highlight_title: 'How I work',
about_highlight_text:
  'I prefer simplicity: listening, care, visual balance. Every project is a dialogue. I gather what’s needed and look for a form that works, moves, and lasts.',

about_languages_title: 'Languages & contact',
about_languages_text:
  'I speak Italian and English, I’m learning Swedish, and I live on filtered coffee. If you have an idea or a story to share, write to me. I’m here.',










    timeline1_title: 'Listening & moodboard',
    timeline1_meta: 'Intro call, light questionnaire, shared references.',
    timeline2_title: 'Shooting / design',
    timeline2_meta: 'Sessions, sketches and first proposals with feedback.',
    timeline3_title: 'Thoughtful delivery',
    timeline3_meta: 'Files for print and web + small usage guide.',

    services_section_title: 'Services in detail',
    services_section_tag: 'What we can create together',

    service1_title: 'Photographic storytelling',
    service1_text: 'On-location or studio sessions, made to measure.',
    service2_title: 'Essential branding',
    service2_text: 'Logo, colours, type and a mini brand book.',
    service3_title: 'Mini websites',
    service3_text: 'Landing pages and portfolios, fully responsive.',
    service4_title: 'Social visuals',
    service4_text: 'Coherent image sets and templates.',
    service5_title: 'Museums & culture',
    service5_text: 'Visual materials for exhibitions and events.',
    service6_title: 'Creative mentoring',
    service6_text: 'Short paths to clarify aesthetic direction.',
    service_learn_more: 'Learn more',


    service1_title: "Editorial Portrait",
service1_text: "Mini sessions for bios, press kits and professional profiles.",
service1_long_text: "An intimate, natural portrait with gentle direction.\n40–60 minute session, 6–10 refined images.",
service1_price: "From €180",

service2_title: "Essential Branding",
service2_text: "Logo, color palette and micro visual guide.",
service2_long_text: "A compact branding kit designed for small or emerging businesses.\nEssential logo, chromatic palette and usage guide.",
service2_price: "€300–450",

service3_title: "Mini Website",
service3_text: "Elegant, lightweight one-page site.",
service3_long_text: "A responsive showcase website with attention to UX and storytelling.\nIncludes: structure, design and technical setup.",
service3_price: "From €500",

service4_title: "Photo Editing",
service4_text: "Narrative color grading for series or reportage.",
service4_long_text: "Consistent, narrative editing for creative projects, editorial series or reportage.",
service4_price: "€40–90 per series",

service5_title: "Translation services",
service5_text: "Small general translations and specialised cultural, artistic and IT translations.",
service5_long_text: "Careful translations between Swedish, English and Italian. Ideal for short texts, cultural communication, artistic materials and digital content. Revision and quality checks available.",
service5_price: "From 350–600 kr / h",

service6_title: "Creative Support",
service6_text: "Quick consultations for ideas, direction or review.",
service6_long_text: "45-minute sessions for brainstorming or material review.",
service6_price: "€35–50 / h",


    


    side_intro_title: 'Studio open for collaborations',
    side_intro_sub:
      'Available for photography, branding and web projects from September.',
    side_availability: 'Book 1–3 months in advance',

    side_info_title: 'At a glance',
side_info_location_label: 'Base',
side_info_location_value: 'Sweden (Bromma), between forests, city life and museums.',
side_info_focus_label: 'Focus',
side_info_focus_value: 'Photography, graphic design, front-end and simple translations between Swedish, English and Italian.',
side_info_clients_label: 'For',
side_info_clients_value: 'Artisans, creatives, cultural organisations and small brands.',





side_extra_title: 'Useful Info',

side_extra_quick_title: 'Quick Services',
side_extra_quick_1: 'Mini editorial portrait (30 min)',
side_extra_quick_2: 'Basic logo + color palette',
side_extra_quick_3: 'Website review / UX check (1h)',

side_extra_quick_modal1_title: 'Mini editorial portrait',
side_extra_quick_modal1_text:
  'Perfect for bios, portfolios and professional profiles.\nA 30-minute session with 3–5 carefully edited images delivered.',

side_extra_quick_modal2_title: 'Logo + basic colour palette',
side_extra_quick_modal2_text:
  'A small visual package for studios, makers and micro-brands.\nIncludes an essential logo, a custom colour palette and a short guide on how to use them consistently.',

side_extra_quick_modal3_title: 'Website review / UX check',
side_extra_quick_modal3_text:
  'A quick review of your website with practical suggestions on structure, copy and navigation.\nIdeal to improve clarity, accessibility and flow before a full redesign.',




side_extra_faq_title: 'FAQ',
side_extra_faq_1: 'Do you also work remotely?',
side_extra_faq_2: 'Do you offer free quotes?',
side_extra_faq_3: 'How long does an average project take?',

side_extra_faq_answer_1: 'Yes - I work both remotely and on site, depending on the project.',
side_extra_faq_answer_2: 'Absolutely! Quotes are always free. Just tell me about your project and goals.',
side_extra_faq_answer_3: 'It depends: photography projects 1–2 weeks, mini-branding 1 week, web/UX reviews 24–48 hours.',


side_extra_availability_title: 'Availability',
side_extra_availability_text: 'Mon–Fri · 8:00–16:00',
side_extra_response: 'I reply within 24 hours.',




blog_label_prefix: "Blog · Fantasiateljé",
blog_meta_overview: "Overview",
blog_meta_tags: "Tags",
blog_meta_navigation: "Navigation",
blog_prev_post: "Previous post",
blog_next_post: "Next post",
blog_no_prev: "No previous post",
blog_no_next: "No next post",
blog_reading_time: "~ {min} min read",
blog_read_more: "Read the article",
blog_section_title: "Visual notes",






contact_section_title: 'Contact',
contact_intro: 'Tell me a bit about what you need. I’ll get back to you as soon as I can.',

contact_intent_project: 'Project proposal',
contact_intent_quote: 'Quick quote',
contact_intent_consult: 'Creative consultation',

contact_guidelines_intro_default: 'A few details that help me get started:',
contact_intent_intro_project: 'Tell me what you have in mind - a photography project, a brand identity or a small website. I’ll guide you through the process and prepare a bespoke proposal.',
contact_intent_intro_quote: 'If you only need a quick idea of the cost, just leave me a few lines. I’ll get back to you with a clear, no-obligation quote.',
contact_intent_intro_consult: 'Have an idea to clarify, a branding doubt, or need feedback on your website? A short creative consultation can help a lot - let’s talk it through.',

contact_guideline_scope: 'What the project is about',
contact_guideline_budget: 'Indicative budget',
contact_guideline_timing: 'Preferred timeline',

contact_form_name: 'Name',
contact_form_email: 'Email',
contact_form_message: 'Message',
contact_form_send: 'Send',

contact_alt: 'Or write directly to:',


contact_form_sent: 'Message sent — thank you!',






    side_contact_title: 'Let’s talk',
    side_contact_intro:
      'Tell me briefly about you, your project and your ideal timeline.',

    form_name_label: 'Name',
    form_email_label: 'Email',
    form_message_label: 'Message',
    form_submit: 'Send request',

    w_mon: 'Mon',
    w_tue: 'Tue',
    w_wed: 'Wed',
    w_thu: 'Thu',
    w_fri: 'Fri',

    footer_left: `© ${year} Fantasiateljé · Designed and created by Hildur`,
    footer_right: 'Site in progress - fonts and imagery may change.',


    dock_contact: 'Contact me',



    reviews_section_title: 'What clients say',
reviews_more_label: 'Want to read more feedback?',
reviews_more_cta: 'See all reviews on Google',



contact_quote: 'Every project deserves a gentle space where it can breathe.'

  },








//SVENSKA---------------------SVENSKA---------------SVENSKA-------------------

  sv: {
    nav_services: 'Tjänster',
    nav_portfolio: 'Portfolio',
    nav_about: 'Om mig',
    nav_contact: 'Kontakt',
    nav_blog: 'Blogg',


    hero_eyebrow: 'Oberoende kreativt rum',
    hero_title: 'Bilder, identiteter och webbsidor med en berättelse.',
    hero_sub:
      'Fantasiateljé är Hildurs kreativ zon: fotografi, grafisk form och små digitala världar för varsamma varumärken, hantverkare och kulturprojekt.',
    hero_cta_primary: 'Berätta om ditt projekt',
    hero_cta_secondary: 'Se portfolion',

    pillar1_title: 'Berättande fotografi',
    pillar1_text: 'Porträtt, stilleben och reportage i mjukt ljus.',
    pillar1_link: 'Se bilderna',

    pillar2_title: 'Visuella identiteter',
    pillar2_text: 'Logotyper, färger och system som känns som ditt universum.',
    pillar2_link: 'Branding',

    pillar3_title: 'Poetiska webbplatser',
    pillar3_text: 'Små, omsorgsfullt gjorda, responsiva sidor.',
    pillar3_link: 'Webbprojekt',

pillar4_title: 'Översättning Tjänster',
pillar4_text: 'Mindre översättningar mellan svenska, engelska och italienska',
pillar4_link: 'Översättningar',


    pillar5_title: 'Rådgivning & workshops',
    pillar5_text: '1:1-sessioner för att reda ut ditt visuella språk.',
    pillar5_link: 'Hör av dig',


    

portfolio_section_title: 'Fotografi & projekt',

    portfolio_editorial_label: 'Fotografi',
    portfolio_brand_label: 'Branding',
    portfolio_web_label: 'Webb & layout',

    portfolio_modal_photo_title: 'Berättande fotografi',
    portfolio_modal_brand_title: 'Visuell identitet',
    portfolio_modal_web_title: 'Digitala projekt',

    portfolio_modal_photo_intro: 'Ett urval porträtt, naturligt ljus och stilla stämningar.',
    portfolio_modal_brand_intro: 'Visuella studier, paletter och små identitetssystem.',
    portfolio_modal_web_intro: 'Tydliga layouter, enkel struktur och fokus på visuell rytm.',
 




about_section_title: 'Bakom fantasiateljé',
about_section_tag: 'Process & värderingar',

about_paragraph1:
  'Jag heter Hildur. Jag älskar stilla bilder, mjukt ljus och berättelser som visar sig långsamt. Jag kommer från fotografi och fann sedan design som ett andra språk - form, färg, andrum.',
about_paragraph2:
  'Jag lär mig fortfarande - och jag trivs med det. Jag har ett tränat öga, ständig nyfikenhet och en vilja att skapa något som känns ärligt och verkligen användbart.',

about_highlight_title: 'Hur jag arbetar',
about_highlight_text:
  'Jag föredrar enkelhet: lyhördhet, omsorg och visuell balans. Varje projekt är en dialog. Jag samlar det som behövs och letar efter en form som fungerar, berör och består.',

about_languages_title: 'Språk & kontakt',
about_languages_text:
  'Jag talar italienska och engelska, lär mig svenska och överlever på bryggkaffe. Har du en idé eller en berättelse? Skriv gärna. Jag lyssnar.',







    timeline1_title: 'Samtal & moodboard',
    timeline1_meta: 'Introduktionssamtal, lätt formulär och referenser.',
    timeline2_title: 'Foto / formgivning',
    timeline2_meta: 'Plåtning, skisser och första förslag med feedback.',
    timeline3_title: 'Omsorgsfull leverans',
    timeline3_meta: 'Filer för tryck och web + kort guide.',

    services_section_title: 'Tjänster i detalj',
    services_section_tag: 'Vad vi kan skapa tillsammans',

    service1_title: 'Visuellt berättande',
    service1_text: 'Sessioner på plats eller i studio, runt dig.',
    service2_title: 'Essentiell branding',
    service2_text: 'Logotyp, färger, typsnitt och litet brand-dokument.',
    service3_title: 'Små webbplatser',
    service3_text: 'Landing pages och små portfolios, responsiva.',
    service4_title: 'Sociala medier-material',
    service4_text: 'Sammanhållna bildset och mallar.',
    service5_title: 'Museer & kultur',
    service5_text: 'Material för utställningar och program.',
    service6_title: 'Kreativ handledning',
    service6_text: 'Korta processer för att hitta riktning.',

    service_learn_more: 'Läs mer',




service1_title: "Editorialt porträtt",
service1_text: "Minisessioner för bio, presskit och professionella profiler.",
service1_long_text: "Ett intimt och naturligt porträtt med lätt handledning.\n40–60 minuters session, 6–10 färdigställda bilder.",
service1_price: "Från 180 €",

service2_title: "Grundläggande branding",
service2_text: "Logotyp, färgpalett och en liten visuell guide.",
service2_long_text: "Ett kompakt paket för små eller nystartade verksamheter.\nEssentiell logotyp, färgpalett och användningsguide.",
service2_price: "300–450 €",

service3_title: "Mini-webbplats",
service3_text: "Elegant och lätt en-sida-webbplats.",
service3_long_text: "En responsiv presentationssida med fokus på UX och storytelling.\nInkluderar struktur, design och teknisk setup.",
service3_price: "Från 500 €",

service4_title: "Foto-editing",
service4_text: "Berättande färggradering för serier eller reportage.",
service4_long_text: "Konsekvent och narrativ redigering för kreativa projekt, redaktionella serier eller reportage.",
service4_price: "40–90 € per serie",

service5_title: "Översättningar",
service5_text: "Mindre allmänna översättningar och specialiserade kultur-, konst- och IT-texter.",
service5_long_text: "Omsorgsfulla översättningar mellan svenska, engelska och italienska. Passar kortare texter, kulturkommunikation, konstnärligt material och digitalt innehåll. Även språkgranskning och kvalitetssäkring erbjuds.",
service5_price: "Från 350–600 kr / h",


service6_title: "Kreativt stöd",
service6_text: "Snabba konsultationer för idéer, riktning eller granskning.",
service6_long_text: "45-minuters sessioner för brainstorming eller materialgenomgång.",
service6_price: "35–50 € / h",




    side_intro_title: 'Studion är öppen för nya samarbeten',
    side_intro_sub:
      'Tillgänglig för foto, identitet och web från och med september.',
    side_availability: 'Boka gärna 1–3 månader i förväg',

    side_info_title: 'I korthet',
side_info_location_label: 'Bas',
side_info_location_value: 'Sverige (Bromma), mellan skogar, stadsliv och museer.',
side_info_focus_label: 'Fokus',
side_info_focus_value: 'Fotografi, grafisk design, front-end och enkla översättningar mellan svenska, engelska och italienska.',
side_info_clients_label: 'För vem',
side_info_clients_value: 'Hantverkare, kreatörer, kulturella verksamheter och små varumärken.',





side_extra_title: 'Praktisk info',

side_extra_quick_title: 'Snabbtjänster',
side_extra_quick_1: 'Mini–editorialt porträtt (30 min)',
side_extra_quick_2: 'Grundlogotyp + färgpalett',
side_extra_quick_3: 'Webbgranskning / UX-koll (1 h)',


side_extra_quick_modal1_title: 'Mini–editorialt porträtt',
side_extra_quick_modal1_text:
  'Perfekt för bio, portfolio och professionella profiler.\nEtt pass på cirka 30 minuter med leverans av 3–5 omsorgsfullt redigerade bilder.',

side_extra_quick_modal2_title: 'Logotyp + grundpalett',
side_extra_quick_modal2_text:
  'Ett litet visuellt paket för ateljéer, hantverkare och små varumärken.\nInnehåller en enkel, tydlig logotyp, en färgpalett och en kort guide för hur du använder dem konsekvent.',

side_extra_quick_modal3_title: 'Webbgranskning / UX-koll',
side_extra_quick_modal3_text:
  'En snabb genomgång av din webbplats med konkreta förslag på struktur, text och navigation.\nPerfekt för att förbättra tydlighet, tillgänglighet och flöde innan en större omgörning.',




side_extra_faq_title: 'FAQ',
side_extra_faq_1: 'Arbetar du även på distans?',
side_extra_faq_2: 'Erbjuder du kostnadsfria offerter?',
side_extra_faq_3: 'Hur lång tid tar ett genomsnittligt projekt?',

side_extra_availability_title: 'Tillgänglighet',
side_extra_availability_text: 'Mån–Fre · 8.00–16.00',
side_extra_response: 'Jag svarar inom 24 timmar.',

side_extra_faq_answer_1: 'Ja - jag arbetar både på distans och på plats, beroende på projektets behov.',
side_extra_faq_answer_2: 'Självklart! Offert är alltid kostnadsfri. Beskriv bara projektet och dina mål.',
side_extra_faq_answer_3: 'Det beror på: fotoprojekt 1–2 veckor, mini-branding 1 vecka, webb/UX-granskning 24–48 timmar.',




blog_label_prefix: "Blogg · Fantasiateljé",
blog_meta_overview: "I korthet",
blog_meta_tags: "Taggar",
blog_meta_navigation: "Navigering",
blog_prev_post: "Föregående inlägg",
blog_next_post: "Nästa inlägg",
blog_no_prev: "Inget föregående inlägg",
blog_no_next: "Inget nästa inlägg",
blog_reading_time: "~ {min} minuters läsning",
blog_read_more: "Läs artikeln",
blog_section_title: "Visuella anteckningar",






contact_section_title: 'Kontakt',
contact_intro: 'Berätta lite om vad du behöver. Jag återkommer så snart jag kan.',

contact_intent_project: 'Projektförslag',
contact_intent_quote: 'Snabb offert',
contact_intent_consult: 'Kreativ konsultation',

contact_guidelines_intro_default: 'Några detaljer som hjälper mig att komma igång:',
contact_intent_intro_project: 'Berätta gärna vad du har i tankarna - ett fotoprojekt, en visuell identitet eller en enkel webbplats. Jag guidar dig genom processen och tar fram ett förslag anpassat för dig.',
contact_intent_intro_quote: 'Om du bara behöver en snabb prisidé, skriv några rader. Jag återkommer med en tydlig offert - helt utan förpliktelser.',
contact_intent_intro_consult: 'Har du en idé som behöver formas, en varumärkesfråga eller snabb feedback på din webbplats? En kort kreativ konsultation kan göra stor skillnad - låt oss prata om det.',

contact_guideline_scope: 'Vad det handlar om',
contact_guideline_budget: 'Ungefärlig budget',
contact_guideline_timing: 'Önskad tidsram',

contact_form_name: 'Namn',
contact_form_email: 'E-post',
contact_form_message: 'Meddelande',
contact_form_send: 'Skicka',

contact_alt: 'Eller skriv direkt till:',




contact_form_sent: 'Meddelandet har skickats — tack!',








    side_contact_title: 'Hör av dig',
    side_contact_intro: 'Skriv några rader om dig, projektet och ungefärlig tidsplan.',

    form_name_label: 'Namn',
    form_email_label: 'E-post',
    form_message_label: 'Meddelande',
    form_submit: 'Skicka förfrågan',

    w_mon: 'Mån',
    w_tue: 'Tis',
    w_wed: 'Ons',
    w_thu: 'Tors',
    w_fri: 'Fre',

    footer_left: `© ${year} Fantasiateljé · Idealt, designat och skapat av Hildur`,
    footer_right: 'Sidan är under uppbyggnad - typsnitt och bilder kan ändras.',

    dock_contact: 'Kontakta mig',


reviews_section_title: 'Vad kunderna säger',
reviews_more_label: 'Vill du läsa fler omdömen?',
reviews_more_cta: 'Se alla recensioner på Google',

contact_quote: 'Varje projekt förtjänar ett stilla utrymme där det kan andas.'


  }
}




export default translations