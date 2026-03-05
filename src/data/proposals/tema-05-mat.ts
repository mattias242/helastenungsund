import type { Proposal } from '../types';

export const tema05: Proposal[] = [
  {
    id: 41,
    themeId: 5,
    title: 'Smaka Stenungsund',
    subtitle: 'Food trail med lokala restauranger och caféer',
    story:
      'Du har laddat ner kartan och följer matvandringsleden genom Stenungsund. Första stoppet är Trattoria Alberobello där du provsmakar en antipasto. Sen vidare till Farmor Gretas för en hembakad bulle. Varje stopp är en ny smakupplevelse.',
    what:
      'En matvandringsled som kopplar ihop restauranger, caféer och matbutiker i Stenungsund. Deltagarna får en karta med stämpelställen och rabatter. Genomförs som event och permanent guide.',
    why:
      'Stenungsund har bra matställen men de saknar synlighet. En food trail skapar en upplevelse som lockar besökare och stärker den lokala restaurangbranschen.',
    who: {
      primary: 'Stenungsunds Cityförening',
      supporting: [
        'Lokala restauranger',
        'Södra Bohuslän Turism',
        'Stenungsunds kommun',
      ],
    },
    cost: 'Liten',
    timeline: 'Quick win',
    targetGroup: 'Alla',
    season: 'Året runt',
    location: 'Stenungsund centrum',
    sustainability: { social: 4, ecological: 2, economic: 5 },
    associations: ['Stenungsunds Cityförening', 'Södra Bohuslän Turism'],
    type: 'Tjänst',
  },
  {
    id: 42,
    themeId: 5,
    title: 'Fiskemarknad',
    subtitle: 'Veckomarknad med dagens fångst vid hamnen',
    story:
      'Det är lördagsmorgon och du står vid hamnen. Fiskaren häller upp färska räkor i din påse, fortfarande varma. Bredvid säljer hans kollega rökt makrill. Måsarna skriker och lukten av hav fyller luften. Du planerar redan middagen.',
    what:
      'En veckomarknad vid gästhamnen där lokala fiskare säljer dagens fångst direkt till konsumenter. Marknaden hålls varje lördag med fisk, skaldjur och rökt fisk.',
    why:
      'Lokalt fångad fisk är hållbar och efterfrågad. En fiskemarknad kopplar konsumenter till havet, stödjer lokala fiskare och skapar liv vid hamnen.',
    who: {
      primary: 'Lokala fiskare',
      supporting: ['Stenungsunds kommun', 'Fiskeföreningen', 'Södra Bohuslän Turism'],
    },
    cost: 'Liten',
    timeline: 'Quick win',
    targetGroup: 'Alla',
    season: 'Året runt',
    location: 'Gästhamnen',
    sustainability: { social: 4, ecological: 3, economic: 4 },
    associations: ['Yrkesfiskarna Väst', 'Södra Bohuslän Turism'],
    type: 'Marknad',
  },
  {
    id: 43,
    themeId: 5,
    title: 'Matfestival Bohuslän',
    subtitle: 'Årlig festival med lokala råvaror',
    story:
      'Det är en septemberhelg och torget är fullt av stånd. Du provar ostron för första gången, smakar getost från en gård i Jörlanda och dricker äppelmust från Ödsmål. Kockar lagar mat live och barn rullar pasta. Hela Stenungsund luktar gott.',
    what:
      'En årlig matfestival i Stenungsund med lokala producenter, kockuppvisningar, smakprovning och matlagningsworkshops. Festivalen lyfter Bohusläns matkultur.',
    why:
      'Mat samlar alla. En festival synliggör regionen som matdestination, stödjer lokala producenter och ger invånare en helg att vara stolta över.',
    who: {
      primary: 'Stenungsunds kommun',
      supporting: [
        'Södra Bohuslän Turism',
        'Lokala restauranger',
        'LRF Västra Götaland',
      ],
    },
    cost: 'Medel',
    timeline: 'Medel',
    targetGroup: 'Alla',
    season: 'Höst',
    location: 'Stenungstorg',
    sustainability: { social: 5, ecological: 3, economic: 5 },
    associations: ['Södra Bohuslän Turism', 'LRF Västra Götaland'],
    type: 'Event',
  },
  {
    id: 44,
    themeId: 5,
    title: 'Skolkök med lokala råvaror',
    subtitle: 'Kommunens skolor lagar mat med lokalt',
    story:
      'Din dotter kommer hem från skolan och berättar att de ätit fisk som fångades utanför Stenungsund och potatis från en gård i Jörlanda. Kocken hade berättat var maten kom ifrån. Hon frågar om ni kan köpa samma potatis hemma.',
    what:
      'Kommunens skolkök ökar andelen lokala råvaror. Samarbete med lokala bönder, fiskare och producenter. Barnen får lära sig varifrån maten kommer.',
    why:
      'Lokala råvaror i skolan stödjer närproducenter, minskar transporter och ger barn en koppling till sin mat. Det är hållbart, hälsosamt och lärorikt.',
    who: {
      primary: 'Stenungsunds kommun',
      supporting: ['Lokala bönder', 'Lokala fiskare', 'LRF Västra Götaland'],
    },
    cost: 'Medel',
    timeline: 'Medel',
    targetGroup: 'Barn',
    season: 'Året runt',
    location: 'Kommunens skolor',
    sustainability: { social: 4, ecological: 4, economic: 4 },
    associations: ['LRF Västra Götaland', 'Skolmatsakademin'],
    type: 'Program',
  },
  {
    id: 45,
    themeId: 5,
    title: 'Mathantverk-inkubator',
    subtitle: 'Stöd till nya matproducenter',
    story:
      'Du har alltid drömt om att sälja dina marmelader. I inkubatorn får du tillgång till ett godkänt kök, hjälp med märkning och regler, och en plats på den lokala marknaden. Efter sex månader säljer du till tre butiker.',
    what:
      'En inkubator för mathantverk med godkänt storkök, rådgivning om livsmedelssäkerhet och marknadsföring. Plats för sex producenter åt gången med sex månaders program.',
    why:
      'Många har matidéer men tröskeln att starta är hög. En inkubator sänker hindren och skapar nya lokala matprodukter som stärker Stenungsunds identitet.',
    who: {
      primary: 'Stenungsunds kommun',
      supporting: ['Nyföretagarcentrum', 'Livsmedelsverket', 'Coompanion'],
    },
    cost: 'Medel',
    timeline: 'Medel',
    targetGroup: 'Vuxna',
    season: 'Året runt',
    location: 'Stenungsund centrum',
    sustainability: { social: 4, ecological: 3, economic: 5 },
    associations: ['Nyföretagarcentrum', 'Coompanion'],
    type: 'Plats',
  },
  {
    id: 46,
    themeId: 5,
    title: 'Farmors kök',
    subtitle: 'Matlagningskurser med äldre som lärare',
    story:
      'Du står i köket bredvid Ingrid, 78 år, som visar dig hur man gör riktig ärtsoppa. Hon berättar om sin barndom medan hon rör i grytan. Du har aldrig lagat mat med någon från en annan generation förut. Det smakar som hos mormor.',
    what:
      'Matlagningskurser där äldre invånare lär ut traditionella recept. Kurserna hålls i Fregattens kök en gång i veckan. Generationsöverskridande möten kring mat.',
    why:
      'Traditionell matkunskap riskerar att försvinna. Kurserna bevarar recept, bryter ensamhet bland äldre och skapar möten mellan generationer.',
    who: {
      primary: 'Kulturhuset Fregatten',
      supporting: ['PRO Stenungsund', 'Studieförbundet Vuxenskolan', 'Stenungsunds kommun'],
    },
    cost: 'Liten',
    timeline: 'Quick win',
    targetGroup: 'Alla',
    season: 'Året runt',
    location: 'Kulturhuset Fregatten',
    sustainability: { social: 5, ecological: 2, economic: 2 },
    associations: ['PRO Stenungsund', 'Studieförbundet Vuxenskolan'],
    type: 'Program',
  },
  {
    id: 47,
    themeId: 5,
    title: 'Food truck-fredag',
    subtitle: 'Food trucks i centrum varje fredag sommar',
    story:
      'Det är fredagskväll i juni och torget doftar av tacos, thai och nygräddade hamburgare. Du vandrar mellan food trucks och bestämmer dig för att prova den nya ramen-trucken. Du sätter dig på en bänk i kvällssolen och njuter.',
    what:
      'Food trucks bjuds in till Stenungstorg varje fredag under sommaren. Olika teman varje vecka: asiatiskt, mexikanskt, vegetariskt och lokalt. Kombineras med musik.',
    why:
      'Fredagskvällar behöver en mötesplats. Food trucks skapar variation, lockar folk till centrum och ger matföretagare en plattform att testa sin mat.',
    who: {
      primary: 'Stenungsunds Cityförening',
      supporting: ['Stenungsunds kommun', 'Food truck-företagare', 'Lokala musiker'],
    },
    cost: 'Liten',
    timeline: 'Quick win',
    targetGroup: 'Alla',
    season: 'Sommar',
    location: 'Stenungstorg',
    sustainability: { social: 4, ecological: 2, economic: 4 },
    associations: ['Stenungsunds Cityförening', 'Företagarna Stenungsund'],
    type: 'Event',
  },
  {
    id: 48,
    themeId: 5,
    title: 'Havsöringsafari',
    subtitle: 'Guidade fisketurer med tillagning',
    story:
      'Du vadar ut i vattnet med en flugspö i handen. Guiden visar var havsöringen brukar stå. Efter två timmar har du fångat din första fisk. Tillbaka på land grillas den över öppen eld. Ingen fisk har någonsin smakat bättre.',
    what:
      'Guidade havsöringsafaris med lokal guide. Halv- och heldagsturer som inkluderar fiske, tillagning och måltid utomhus. Utrustning ingår.',
    why:
      'Havsöringsfiske lockar besökare från hela Sverige. Guidade turer gör upplevelsen tillgänglig för nybörjare och skapar en unik turismprodukt.',
    who: {
      primary: 'Lokala fiskeguider',
      supporting: ['Södra Bohuslän Turism', 'Stenungsunds kommun', 'Sportfiskeklubben'],
    },
    cost: 'Liten',
    timeline: 'Quick win',
    targetGroup: 'Vuxna',
    season: 'Vår',
    location: 'Stenungsunds kuststräcka',
    sustainability: { social: 3, ecological: 3, economic: 4 },
    associations: ['Stenungsunds Sportfiskeklubb', 'Södra Bohuslän Turism'],
    type: 'Tjänst',
  },
  {
    id: 49,
    themeId: 5,
    title: 'Öl- och vinprovning',
    subtitle: 'Lokalt mikrobryggeri-event',
    story:
      'Du sitter i Fregattens foajé med ett provningsglas framför dig. Bryggaren berättar om humlen och vattnet. Du provar en ale med smak av bohuslänsk havtorn och nickar förvånat — den är riktigt god. Du köper ett sexpack att ta med hem.',
    what:
      'Regelbundna provningskvällar med lokala och regionala mikrobryggare och vinproducenter. Kombineras med ost och lokala tilltugg. Arrangemang på Fregatten eller i gästhamnen.',
    why:
      'Mikrobryggeritrenden växer och Bohuslän har flera producenter. Provningskvällar skapar en vuxen mötesplats och lyfter regionens matkultur.',
    who: {
      primary: 'Kulturhuset Fregatten',
      supporting: [
        'Lokala mikrobryggare',
        'Systembolaget Stenungsund',
        'Stenungsunds kommun',
      ],
    },
    cost: 'Liten',
    timeline: 'Quick win',
    targetGroup: 'Vuxna',
    season: 'Året runt',
    location: 'Kulturhuset Fregatten',
    sustainability: { social: 3, ecological: 1, economic: 3 },
    associations: ['Kulturhuset Fregatten', 'Sveriges Oberoende Bryggerier'],
    type: 'Event',
  },
  {
    id: 50,
    themeId: 5,
    title: 'Bondens egen marknad',
    subtitle: 'Gårdsbutiker samlas en lördag i månaden',
    story:
      'Det är en lördag i oktober och bönder från hela kommunen har ställt upp stånd på torget. Du köper ägg, morötter och äppelmos direkt från den som odlat dem. Du pratar med en bonde från Ödsmål som berättar om sin gård. Det känns nära.',
    what:
      'En lördag i månaden samlas lokala gårdsbutiker och producenter på Stenungstorg. Fokus på ekologiskt, närproducerat och säsongens skörd.',
    why:
      'Lokala bönder behöver fler försäljningskanaler och invånare vill handla närproducerat. En månatlig marknad kopplar samman dem och stärker kommunens matkultur.',
    who: {
      primary: 'LRF Västra Götaland',
      supporting: ['Stenungsunds kommun', 'Lokala bönder', 'Stenungsunds Cityförening'],
    },
    cost: 'Liten',
    timeline: 'Quick win',
    targetGroup: 'Alla',
    season: 'Året runt',
    location: 'Stenungstorg',
    sustainability: { social: 4, ecological: 4, economic: 4 },
    associations: ['LRF Västra Götaland', 'KRAV'],
    type: 'Marknad',
  },
];
