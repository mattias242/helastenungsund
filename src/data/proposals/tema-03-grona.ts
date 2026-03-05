import type { Proposal } from '../types';

export const tema03: Proposal[] = [
  {
    id: 21,
    themeId: 3,
    title: 'Öppen industridag',
    subtitle: 'Årlig dag då Borealis, Perstorp och fler öppnar portarna',
    story:
      'Det är en lördag i maj och du kliver in genom grindarna på Borealis för första gången. En ingenjör visar dig hur plast kan tillverkas av återvunnet material. Din dotter ställer frågor om kemi och får prova ett experiment. Du förstår plötsligt vad som händer bakom staketen.',
    what:
      'En årlig öppen dag där industriföretagen i kemiklustret bjuder in allmänheten. Guidade turer, utställningar, experiment för barn och samtal om den gröna omställningen.',
    why:
      'Industrin är Stenungsunds största arbetsgivare men många invånare vet lite om vad som görs där. Öppenhet bygger förtroende och stolthet.',
    who: {
      primary: 'Borealis',
      supporting: ['Perstorp', 'INEOS Inovyn', 'Nouryon', 'Stenungsunds kommun'],
    },
    cost: 'Medel',
    timeline: 'Medel',
    targetGroup: 'Alla',
    season: 'Vår',
    location: 'Industriområdet Stenungsund',
    sustainability: { social: 5, ecological: 2, economic: 3 },
    associations: ['Företagarna Stenungsund', 'Molekylverkstan'],
    type: 'Event',
  },
  {
    id: 22,
    themeId: 3,
    title: 'Grön energipark',
    subtitle: 'Visningsanläggning för förnybar energi',
    story:
      'Du besöker energiparken med din skolklass. Solceller, en liten vindturbin och batterilagring visar hur förnybar energi fungerar. Du trycker på knappar och ser siffror ändras i realtid. Det som var abstrakt blir konkret.',
    what:
      'En visningsanläggning utomhus med solceller, vindkraft och energilagring i miniatyr. Interaktiva skärmar förklarar tekniken. Skolklasser och allmänhet kan besöka gratis.',
    why:
      'Den gröna omställningen behöver synliggöras. En energipark gör förnybar energi begriplig och inspirerar invånare och elever att engagera sig i klimatfrågan.',
    who: {
      primary: 'Stenungsunds kommun',
      supporting: ['Borealis', 'Linde', 'Molekylverkstan', 'Chalmers'],
    },
    cost: 'Stor',
    timeline: 'Långsiktig',
    targetGroup: 'Alla',
    season: 'Året runt',
    location: 'Molekylverkstan',
    sustainability: { social: 4, ecological: 5, economic: 3 },
    associations: ['Molekylverkstan', 'Naturskyddsföreningen Stenungsund'],
    type: 'Plats',
  },
  {
    id: 23,
    themeId: 3,
    title: 'Klimatfond',
    subtitle: 'Industrin finansierar lokala hållbarhetsprojekt',
    story:
      'Du läser i lokaltidningen att klimatfonden har beviljat pengar till ditt bostadsområdes förslag om gemensam kompost och odlingslotter. Pengarna kommer från industriföretagen. Det som var en idé på ett möte blir nu verklighet.',
    what:
      'Industriföretagen i Stenungsund finansierar en gemensam klimatfond. Invånare, föreningar och företag kan söka medel för lokala hållbarhetsprojekt.',
    why:
      'Industrin vill visa ansvar och invånare har idéer men saknar medel. En klimatfond kopplar samman dem och skapar konkreta resultat i kommunen.',
    who: {
      primary: 'Borealis',
      supporting: ['Perstorp', 'INEOS Inovyn', 'Nouryon', 'Stenungsunds kommun'],
    },
    cost: 'Stor',
    timeline: 'Medel',
    targetGroup: 'Alla',
    season: 'Året runt',
    location: 'Hela kommunen',
    sustainability: { social: 4, ecological: 5, economic: 4 },
    associations: ['Företagarna Stenungsund', 'Naturskyddsföreningen Stenungsund'],
    type: 'Program',
  },
  {
    id: 24,
    themeId: 3,
    title: 'Laddinfrastruktur',
    subtitle: 'Snabbladdare vid alla större orter',
    story:
      'Du kör elbil och svänger in vid snabbladdaren i Jörlanda. Medan bilen laddar i tjugo minuter tar du en kaffe på det lilla caféet intill. Ingen ångest — det finns laddare överallt i kommunen nu.',
    what:
      'Snabbladdningsstationer för elbilar installeras vid alla större orter: Stenungsund, Stora Höga, Ödsmål, Jörlanda och Svenshögen. Minst fyra snabbladdare per station.',
    why:
      'Övergången till elbilar kräver laddinfrastruktur. Många invånare bor i villa utan egen laddmöjlighet. Tillgängliga snabbladdare gör elbilen möjlig för fler.',
    who: {
      primary: 'Stenungsunds kommun',
      supporting: ['Linde', 'Vattenfall', 'Privata laddoperatörer'],
    },
    cost: 'Stor',
    timeline: 'Medel',
    targetGroup: 'Alla',
    season: 'Året runt',
    location: 'Hela kommunen',
    sustainability: { social: 2, ecological: 5, economic: 3 },
    associations: ['Företagarna Stenungsund', 'Elbilsföreningen'],
    type: 'Infrastruktur',
  },
  {
    id: 25,
    themeId: 3,
    title: 'Industrins trainee-program',
    subtitle: 'Praktik för gymnasieelever på industriföretagen',
    story:
      'Du går andra året på Nösnäsgymnasiet och tillbringar två veckor på Perstorp. Du följer en kemist genom labbet och förstår att det du läser i kemiboken används på riktigt. Du börjar fundera på att bli ingenjör.',
    what:
      'Ett strukturerat trainee-program där gymnasieelever praktiserar på industriföretagen i kemiklustret. Programmet inkluderar handledning, studiebesök och mentorskap.',
    why:
      'Industrin behöver framtida medarbetare och ungdomar behöver se möjligheter lokalt. Praktik kopplar teori till verklighet och stärker ungdomars framtidstro.',
    who: {
      primary: 'Borealis',
      supporting: ['Perstorp', 'INEOS Inovyn', 'Nösnäsgymnasiet', 'Stenungsunds kommun'],
    },
    cost: 'Medel',
    timeline: 'Medel',
    targetGroup: 'Unga',
    season: 'Året runt',
    location: 'Industriområdet Stenungsund',
    sustainability: { social: 5, ecological: 2, economic: 4 },
    associations: ['Nösnäsgymnasiet', 'Företagarna Stenungsund'],
    type: 'Program',
  },
  {
    id: 26,
    themeId: 3,
    title: 'Cirkulär marknad',
    subtitle: 'Byteshandel och reparationsverkstad',
    story:
      'Det är lördag och du tar med en trasig stol och en hög med kläder barnen vuxit ur. I reparationsverkstaden fixar en pensionerad snickare stolen på tjugo minuter. Kläderna byter du mot en cykelkärra. Inget hamnar i soporna.',
    what:
      'En permanent plats i centrum med reparationsverkstad, byteshörna och återbruksmarknad. Öppet varje helg med volontärer som hjälper till att laga saker.',
    why:
      'Cirkulär ekonomi minskar avfall och sparar pengar. En fysisk plats gör det enkelt att reparera, byta och återbruka istället för att slänga.',
    who: {
      primary: 'Stenungsunds kommun',
      supporting: ['Studiefrämjandet', 'Röda Korset Stenungsund', 'Lokala hantverkare'],
    },
    cost: 'Liten',
    timeline: 'Quick win',
    targetGroup: 'Alla',
    season: 'Året runt',
    location: 'Stenungsund centrum',
    sustainability: { social: 4, ecological: 5, economic: 3 },
    associations: ['Studiefrämjandet', 'Röda Korset Stenungsund'],
    type: 'Marknad',
  },
  {
    id: 27,
    themeId: 3,
    title: 'Solcellskooperativ',
    subtitle: 'Gemensamt solcellsprojekt för villaägare',
    story:
      'Du bor i en villa i Stora Höga och har länge velat ha solceller men tyckt det var dyrt och krångligt. Nu erbjuder kooperativet gemensam upphandling — priset sjunker med 30 procent. I sommar producerar ditt tak el åt dig och dina grannar.',
    what:
      'Ett solcellskooperativ bildas där villaägare gemensamt upphandlar solceller till lägre pris. Kommunen stödjer med rådgivning och samordning.',
    why:
      'Gemensam upphandling sänker priset och tröskeln. Fler solceller i kommunen minskar utsläpp och ger invånare lägre elkostnader.',
    who: {
      primary: 'Stenungsunds kommun',
      supporting: ['Lokala energibolag', 'Villaägarnas Riksförbund', 'Solcellsinstallatörer'],
    },
    cost: 'Medel',
    timeline: 'Medel',
    targetGroup: 'Vuxna',
    season: 'Året runt',
    location: 'Hela kommunen',
    sustainability: { social: 3, ecological: 5, economic: 4 },
    associations: ['Villaägarnas Riksförbund', 'Naturskyddsföreningen Stenungsund'],
    type: 'Program',
  },
  {
    id: 28,
    themeId: 3,
    title: 'Gröna jobb-mässa',
    subtitle: 'Årlig mässa för hållbara jobb',
    story:
      'Du vandrar mellan montrarna på Fregatten och pratar med företag som söker folk inom förnybar energi, cirkulär ekonomi och grön kemi. Du lämnar ditt CV på tre ställen och bokar en intervju. Framtiden ser grönare ut.',
    what:
      'En årlig jobbmässa i Stenungsund fokuserad på hållbara jobb inom industri, energi och cirkulär ekonomi. Arbetsgivare, utbildare och arbetssökande möts.',
    why:
      'Den gröna omställningen skapar nya jobb men matchningen brister. En mässa kopplar ihop arbetsgivare och arbetssökande och visar att Stenungsund är en plats för framtidsjobb.',
    who: {
      primary: 'Stenungsunds kommun',
      supporting: ['Arbetsförmedlingen', 'Borealis', 'Perstorp', 'Nösnäsgymnasiet'],
    },
    cost: 'Liten',
    timeline: 'Quick win',
    targetGroup: 'Alla',
    season: 'Höst',
    location: 'Kulturhuset Fregatten',
    sustainability: { social: 4, ecological: 3, economic: 5 },
    associations: ['Företagarna Stenungsund', 'Arbetsförmedlingen'],
    type: 'Event',
  },
  {
    id: 29,
    themeId: 3,
    title: 'Biogasanläggning',
    subtitle: 'Lokal biogas från matavfall',
    story:
      'Du sorterar matavfallet som vanligt, men nu vet du att det blir biogas som driver kommunens bussar. Du ser bussen passera med texten "Drivs av Stenungsunds matavfall" och känner en liten stolthet.',
    what:
      'En lokal biogasanläggning som omvandlar matavfall från hushåll och restauranger till biogas. Gasen används i kollektivtrafik och kommunens fordon.',
    why:
      'Matavfall är en outnyttjad resurs. Lokal biogas minskar transporter, skapar energi av avfall och kopplar invånarnas vardagliga sortering till ett konkret resultat.',
    who: {
      primary: 'Stenungsunds kommun',
      supporting: ['Renova', 'Västtrafik', 'Linde'],
    },
    cost: 'Stor',
    timeline: 'Långsiktig',
    targetGroup: 'Alla',
    season: 'Året runt',
    location: 'Industriområdet Stenungsund',
    sustainability: { social: 2, ecological: 5, economic: 4 },
    associations: ['Renova', 'Naturskyddsföreningen Stenungsund'],
    type: 'Infrastruktur',
  },
  {
    id: 30,
    themeId: 3,
    title: 'Formel Framtid Junior',
    subtitle: 'Hållbarhetskonferens för unga',
    story:
      'Du är 16 år och sitter i publiken på Molekylverkstan. En jämnårig från Nösnäsgymnasiet presenterar sitt projekt om plaståtervinning. En forskare kommenterar och du räcker upp handen med en fråga. Det känns som att du hör till den gröna framtiden.',
    what:
      'En årlig hållbarhetskonferens för unga inspirerad av Formel Framtid. Elever från gymnasiet presenterar projekt och möter forskare och företagare inom grön kemi.',
    why:
      'Formel Framtid når vuxna men ungdomar behöver en egen arena. Konferensen inspirerar nästa generation och kopplar skolprojekt till verkliga utmaningar.',
    who: {
      primary: 'Molekylverkstan',
      supporting: ['Nösnäsgymnasiet', 'Borealis', 'Chalmers', 'Stenungsunds kommun'],
    },
    cost: 'Liten',
    timeline: 'Quick win',
    targetGroup: 'Unga',
    season: 'Vår',
    location: 'Molekylverkstan',
    sustainability: { social: 5, ecological: 4, economic: 3 },
    associations: ['Molekylverkstan', 'Nösnäsgymnasiet'],
    type: 'Event',
  },
];
