// src/blog/posts.ts
// Nota: Gli import di React e librerie di rendering non sono necessari qui.

export type BlogLang = 'it' | 'en' | 'sv'

export type BlogTranslation = {
  title: string
  excerpt: string
  content: string
}

export type BlogPost = {
  id: string
  slug: string
  date: string // ISO tipo "2025-02-01"
  image: string
  translations: {
    it: BlogTranslation
    en: BlogTranslation
    sv: BlogTranslation
  }
}

export const blogPosts: BlogPost[] = [
  {
    id: 'autumn-light',
    slug: 'luce-autunnale',
    date: '2025-04-10',
    image: '/blog/portfolio-3.jpg',
    translations: {
  it: {
    title: 'Stoccolma: un inizio luminoso!',
    excerpt:
      'Ho lasciato tutto e sono arrivata ad aprile nel Nord. Ecco le prime impressioni su Bromma, Lagom e la nuova vita in Svezia.',
    content: `🇸🇪 Stoccolma, nuova vita: aprile, un inizio luminoso

(10 aprile)

Ciao a tutti!

Grandi novità: mi sono trasferita a Stoccolma. La capitale svedese è ufficialmente la mia nuova casa, e l'avventura è appena cominciata.

Sono arrivata ad aprile, il mese perfetto per assistere al risveglio del Nord. Non è la primavera mediterranea — c'è ancora un vento gelido — ma la magia sta nell'allungarsi delle giornate. Ogni sera, quei minuti in più di luce ricordano che il mitico sole di mezza estate si sta avvicinando. La città si sta liberando dal ghiaccio, ed è affascinante da osservare.

🏠 Il mio angolo a Bromma

Ho trovato il mio nido a Bromma, un quartiere che adoro per la sua atmosfera rilassata. Stoccolma è una città di quiet design e di lagom, quel concetto svedese che invita all’equilibrio e alla misura. Sto imparando ad abbracciare questa calma, sostituendo il rumore della metropoli con il lontano richiamo dei gabbiani.

🎯 La nuova sfida

Questo non è solo un cambio di Paese, ma un riassetto professionale e personale. Rimettersi in gioco in una cultura lavorativa basata su fiducia e work-life balance è stimolante e, a tratti, faticoso, ma l’adrenalina è altissima. Sto affrontando la lingua (svenska) con entusiasmo, un passo alla volta.

Cosa c’è in programma?

• Fika: imparare l’arte della pausa caffè svedese.  
• Arcipelago: esplorare le isole non appena il tempo lo permetterà.  
• Vivere lagom: portare un po’ di equilibrio svedese nella mia quotidianità.

Stoccolma è un inizio entusiasmante. Mi sento come una nave appena salpata: c’è tanto da scoprire, e sono pronta a navigare.`
  },

  en: {
    title: 'Stockholm: A Luminous Start!',
    excerpt:
      'I left everything and arrived in the North in April. Here are my first impressions of Bromma, Lagom, and the new life in Sweden.',
    content: `🇸🇪 Stockholm, new life: April, a luminous start

(April 10)

Hello everyone!

Big news: I have moved to Stockholm. The Swedish capital is officially my new home, and the adventure has just begun.

I arrived in April, the perfect month to witness the awakening of the North. It’s not a Mediterranean spring — there is still a sharp wind — but the magic lies in the way the days keep stretching. Every evening, those extra minutes of light are a reminder that the mythical midsummer sun is on its way. The city is slowly freeing itself from the ice, and it’s fascinating to watch.

🏠 My corner in Bromma

I’ve found my nest in Bromma, a district I love for its calm atmosphere. Stockholm is a city of quiet design and lagom, that Swedish idea of balance and “just enough”. I’m learning to embrace this calm, trading the noise of the metropolis for the distant calls of seagulls.

🎯 The new challenge

This is not just a change of country, but a complete personal and professional reset. Stepping into a work culture built on trust and work-life balance is exciting and, at times, a little tiring — but the adrenaline is high. I’m tackling the language (svenska) with enthusiasm, one small step at a time.

What’s on the list?

• Fika: mastering the art of the Swedish coffee break.  
• The archipelago: exploring the islands as soon as the weather allows.  
• Living lagom: bringing a bit of Swedish balance into my daily life.

Stockholm feels like a fresh beginning. I feel like a ship that has just left the harbour: there is so much to discover, and I’m ready to navigate.`
  },

  sv: {
    title: 'Stockholm: En Strålande Start!',
    excerpt:
      'Jag lämnade allt och anlände till Norden i april. Här är mina första intryck av Bromma, lagom och det nya livet i Sverige.',
    content: `🇸🇪 Stockholm, nytt liv: april, en strålande start

(10 april)

Hej allihopa!

Stora nyheter: jag har flyttat till Stockholm. Sveriges huvudstad är officiellt mitt nya hem, och äventyret har precis börjat.

Jag kom hit i april, den perfekta månaden för att se Norden vakna. Det är ingen medelhavsvår — vinden är fortfarande kylig — men magin ligger i hur dagarna hela tiden blir längre. Varje kväll, de där extra minuterna ljus, påminner om att den mytomspunna midsommarsolen närmar sig. Staden håller på att frigöra sig från isen, och det är fascinerande att följa.

🏠 Min hörna i Bromma

Jag har hittat mitt bo i Bromma, en stadsdel jag tycker om för den lugna stämningen. Stockholm är en stad av quiet design och lagom, det svenska begreppet som handlar om balans och lagom mycket av allt. Jag försöker omfamna detta lugn och byter storstadsbruset mot måsarnas avlägsna rop.

🎯 Den nya utmaningen

Det här är inte bara ett landbyte, utan en personlig och professionell nystart. Att kliva in i en arbetskultur som bygger på förtroende och work-life balance är både inspirerande och lite tröttande – men adrenalinet är på topp. Jag tar mig an språket (svenska) med entusiasm, steg för steg.

Vad står på listan?

• Fika: att lära mig konsten av den svenska fikapausen.  
• Skärgården: att utforska öarna så snart vädret tillåter.  
• Leva lagom: att ta in lite svensk balans i vardagen.

Stockholm känns som en ny början. Jag känner mig som ett skepp som just kastat loss: det finns så mycket att upptäcka, och jag är redo att navigera.`
  }
}

  },
  // ... aggiungi qui altri oggetti BlogPost






  {
    id: 'gentle-branding',
    slug: 'branding-gentile',
    date: '2025-01-15',
    image: '/blog/portfolio-1.jpg',
    translations: {
      it: {
        title: 'Branding gentile per piccoli atelier',
        excerpt:
          'Palette morbide, loghi essenziali e identità visive che non urlano ma sussurrano.',
        content: `Un piccolo studio su come penso il branding per realtà artigiane e progetti culturali.\n\nMeno rumore, più riconoscibilità, più storie.`
      },
      en: {
        title: 'Gentle branding for small studios',
        excerpt:
          'Soft palettes, essential logos and visual identities that whisper instead of shout.',
        content: `A short reflection on how I approach branding for small businesses and cultural projects.\n\nLess noise, more coherence, more stories.`
      },
      sv: {
        title: 'Varsam branding för små ateljéer',
        excerpt:
          'Mjuka paletter, enkla logotyper och visuella identiteter som viskar istället för att ropa.',
        content: `En kort reflektion kring hur jag arbetar med branding för hantverkare och kulturella projekt.\n\nMindre brus, mer igenkänning och fler berättelser.`
      }
    }
  },
  {
    id: 'slow-web',
    slug: 'slow-web',
    date: '2024-12-10',
    image: '/blog/portfolio-2.jpg',
    translations: {
      it: {
        title: 'Slow web: siti piccoli, chiari, respirabili',
        excerpt:
          'Qualche idea su come progettare pagine che non affaticano, soprattutto per progetti indipendenti.',
        content: `Per me uno "slow web" non è un web lento, ma un web più umano.\n\nMeno pop-up, meno frenesia; più spazio per il contenuto e per le persone dietro ai progetti.`
      },
      en: {
        title: 'Slow web: small, clear, breathable sites',
        excerpt:
          'A few ideas on designing pages that don’t overwhelm, especially for independent projects.',
        content: `For me, "slow web" doesn’t mean a slow website, but a more human one.\n\nLess noise and pop-ups, more room for content and the people behind it.`
      },
      sv: {
        title: 'Slow web: små, tydliga och lugna webbplatser',
        excerpt:
          'Några tankar om hur man bygger sidor som inte tröttar ut, särskilt för självständiga projekt.',
        content: `För mig betyder "slow web" inte långsamma sidor, utan ett mer mänskligt web.\n\nMindre brus och färre pop-ups, mer plats för innehållet och människorna bakom.`
      }
    }
  },
  {
    id: 'studio-notes',
    slug: 'note-di-studio',
    date: '2024-11-05',
    image: '/blog/portfolio-4.jpg',
    translations: {
      it: {
        title: 'Note di studio: piccoli riti prima di scattare',
        excerpt:
          'Preparare lo spazio, ascoltare il silenzio, lasciare che le persone si abituino alla stanza.',
        content: `Alcuni micro-rituali che uso prima di una sessione fotografica.\n\nSono dettagli minuscoli, ma spesso fanno la differenza nel modo in cui le persone si rilassano davanti all’obiettivo.`
      },
      en: {
        title: 'Studio notes: small rituals before shooting',
        excerpt:
          'Preparing the space, listening to silence, letting people get used to the room.',
        content: `A few tiny rituals I like to use before a photo session.\n\nThey seem small, but often they change how people settle and breathe in front of the camera.`
      },
      sv: {
        title: 'Studioanteckningar: små ritualer före fotografering',
        excerpt:
          'Att förbereda rummet, lyssna på tystnaden och låta personer vänja sig vid miljön.',
        content: `Några små ritualer jag använder innan en fotografering.\n\nDetaljerna är små, men de gör ofta stor skillnad för hur människor slappnar av framför kameran.`
      }
    }
  }
]
