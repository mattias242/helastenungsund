import type { Proposal } from '../types';

export const tema02: Proposal[] = [
  {
    id: 11,
    themeId: 2,
    title: 'Havsbad året runt',
    subtitle: 'Kallbadhus vid gästhamnen',
    story:
      'Det är en kall januarimorgon. Du kliver in i bastun vid gästhamnen, värmer upp dig ordentligt och tar sedan trappan ner i havet. Kylan biter till men du känner dig mer levande än på länge. Efteråt dricker du varm choklad med utsikt över fjorden.',
    what:
      'Ett kallbadhus byggs vid gästhamnen med bastu, omklädningsrum och brygga. Öppet året runt med tillgänglighetsanpassning. Kafé i anslutning.',
    why:
      'Kallbad är en växande trend som lockar besökare och förbättrar hälsan. Stenungsund har havet men saknar en anläggning som gör det enkelt att bada hela året.',
    who: {
      primary: 'Stenungsunds kommun',
      supporting: ['Södra Bohuslän Turism', 'Lokala byggföretag', 'Friskvårdsföreningar'],
    },
    cost: 'Stor',
    timeline: 'Långsiktig',
    targetGroup: 'Alla',
    season: 'Året runt',
    location: 'Gästhamnen',
    sustainability: { social: 5, ecological: 2, economic: 4 },
    associations: ['Stenungsunds Simklubb', 'Södra Bohuslän Turism'],
    type: 'Infrastruktur',
  },
  {
    id: 12,
    themeId: 2,
    title: 'Kajakled Stenungsund',
    subtitle: 'Markerad led runt Stenungsön',
    story:
      'Det är en stilla sommarmorgon. Du hyr en kajak vid gästhamnen och paddlar ut. Orange markeringar visar vägen runt Stenungsön. Du stannar vid en klippa, äter frukost med utsikt och ser en säl som kikar nyfiket.',
    what:
      'En markerad kajakled runt Stenungsön med iläggningsplatser, rastplatser och informationsskyltar. Kajakuthyrning vid startpunkten. Leden är cirka 12 km lång.',
    why:
      'Kajakpaddling är populärt i Bohuslän men Stenungsund saknar en markerad led. Leden lyfter kommunens kustmiljö och ger en unik naturupplevelse nära centrum.',
    who: {
      primary: 'Stenungsunds kommun',
      supporting: ['Stenungsunds Kanotförening', 'Södra Bohuslän Turism', 'Länsstyrelsen'],
    },
    cost: 'Medel',
    timeline: 'Medel',
    targetGroup: 'Alla',
    season: 'Sommar',
    location: 'Stenungsön',
    sustainability: { social: 3, ecological: 3, economic: 3 },
    associations: ['Stenungsunds Kanotförening', 'Friluftsfrämjandet Stenungsund'],
    type: 'Infrastruktur',
  },
  {
    id: 13,
    themeId: 2,
    title: 'Fiskekväll på bryggan',
    subtitle: 'Gemensamma fiskekvällar med makrill och havsöring',
    story:
      'Det är en ljum augustikväll. Du sitter på bryggan med ett dussin andra, metspöet i vattnet. En erfaren fiskare visar hur du knyter krokar. Plötsligt nappar det — en blank makrill glittrar i kvällssolen. Alla jublar.',
    what:
      'Regelbundna fiskekvällar vid gästhamnen där nybörjare och erfarna fiskar tillsammans. Utrustning lånas ut gratis. Tips och instruktioner från lokala fiskare.',
    why:
      'Fiske är en av de enklaste vägarna att uppleva havet. Gemensamma fiskekvällar sänker tröskeln, skapar gemenskap och kopplar invånare till kusten.',
    who: {
      primary: 'Stenungsunds Sportfiskeklubb',
      supporting: ['Stenungsunds kommun', 'Lokala fiskebutiker', 'Studiefrämjandet'],
    },
    cost: 'Liten',
    timeline: 'Quick win',
    targetGroup: 'Alla',
    season: 'Sommar',
    location: 'Gästhamnen',
    sustainability: { social: 5, ecological: 2, economic: 1 },
    associations: ['Stenungsunds Sportfiskeklubb', 'Studiefrämjandet'],
    type: 'Event',
  },
  {
    id: 14,
    themeId: 2,
    title: 'Seglarskola för alla',
    subtitle: 'Sommarkurser i samarbete med båtklubben',
    story:
      'Det är din första lektion och du är nervös men nyfiken. Instruktören visar hur du sätter segel och snart glider du över vattnet med vinden. Du skrattar högt — varför har du aldrig provat detta förut?',
    what:
      'Seglarskola med kurser för barn, ungdomar och vuxna under sommaren. Samarbete med Stenungsunds Båtklubb som tillhandahåller båtar och instruktörer.',
    why:
      'Stenungsund är en kustkommun men få invånare seglar. En tillgänglig seglarskola sprider glädjen med segling och stärker kopplingen till havet.',
    who: {
      primary: 'Stenungsunds Båtklubb',
      supporting: ['Stenungsunds kommun', 'Södra Bohuslän Turism', 'Studieförbund'],
    },
    cost: 'Medel',
    timeline: 'Medel',
    targetGroup: 'Alla',
    season: 'Sommar',
    location: 'Gästhamnen',
    sustainability: { social: 4, ecological: 2, economic: 3 },
    associations: ['Stenungsunds Båtklubb', 'Stenungsunds Segelsällskap'],
    type: 'Program',
  },
  {
    id: 15,
    themeId: 2,
    title: 'Strandstädardagar',
    subtitle: 'Månatlig strandrensning med fika efteråt',
    story:
      'Det är söndag förmiddag och du samlar skräp längs stranden tillsammans med ett tiotal grannar. Barnen tävlar om vem som hittar mest. Efter en timme samlas ni, fikar och beundrar den rena stranden. Det känns bra.',
    what:
      'Månatliga strandstädardagar längs Stenungsunds kust. Kommunen tillhandahåller säckar och handskar. Fika serveras efteråt. Alla åldrar välkomna.',
    why:
      'Ren kust är viktig för både miljö och trivsel. Gemensam städning skapar gemenskap och engagemang för havsmiljön.',
    who: {
      primary: 'Stenungsunds kommun',
      supporting: ['Naturskyddsföreningen', 'Håll Sverige Rent', 'Lokala föreningar'],
    },
    cost: 'Liten',
    timeline: 'Quick win',
    targetGroup: 'Alla',
    season: 'Året runt',
    location: 'Stenungsunds kuststräcka',
    sustainability: { social: 4, ecological: 5, economic: 1 },
    associations: ['Naturskyddsföreningen Stenungsund', 'Håll Sverige Rent'],
    type: 'Event',
  },
  {
    id: 16,
    themeId: 2,
    title: 'Kustvandringsled',
    subtitle: 'Sammanhängande led längs hela kusten',
    story:
      'Du vandrar på den nya kustleden söderut från centrum. Havet glittrar till höger, klipporna är rosa av thrift. Du passerar små badplatser och vikar du aldrig sett. Efter tio kilometer tar du bussen hem — mätt av frisk luft.',
    what:
      'En sammanhängande vandringsled längs Stenungsunds kust med markering, rastplatser och informationsskyltar. Leden kopplar samman badplatser, naturreservat och utsiktspunkter.',
    why:
      'Stenungsund har vacker kust men saknar en sammanhängande led. En kustled stärker friluftslivet, turismen och stoltheten över kommunens natur.',
    who: {
      primary: 'Stenungsunds kommun',
      supporting: ['Länsstyrelsen', 'Friluftsfrämjandet', 'Södra Bohuslän Turism'],
    },
    cost: 'Medel',
    timeline: 'Långsiktig',
    targetGroup: 'Alla',
    season: 'Året runt',
    location: 'Stenungsunds kuststräcka',
    sustainability: { social: 4, ecological: 3, economic: 3 },
    associations: ['Friluftsfrämjandet Stenungsund', 'Södra Bohuslän Turism'],
    type: 'Infrastruktur',
  },
  {
    id: 17,
    themeId: 2,
    title: 'Flytande scen',
    subtitle: 'Sommarkonserter på vattnet i gästhamnen',
    story:
      'Det är midsommarafton och du sitter på kajen med fötterna dinglande över vattnet. På en flytande scen mitt i hamnen spelar ett lokalt band. Solen går ner bakom Tjörnbron och musiken studsar över vattnet.',
    what:
      'En flytande scen i gästhamnen som används för konserter, teater och evenemang under sommaren. Publiken sitter på kajen och i båtar. Programmet blandas med lokala och inbjudna artister.',
    why:
      'Gästhamnen har potential som arena men används lite. En flytande scen skapar unika upplevelser som lockar besökare och sätter Stenungsund på kartan.',
    who: {
      primary: 'Stenungsunds kommun',
      supporting: ['Kulturhuset Fregatten', 'Lokala musiker', 'Stenungsunds Båtklubb'],
    },
    cost: 'Medel',
    timeline: 'Medel',
    targetGroup: 'Alla',
    season: 'Sommar',
    location: 'Gästhamnen',
    sustainability: { social: 5, ecological: 1, economic: 4 },
    associations: ['Kulturskolan Stenungsund', 'Stenungsunds Båtklubb'],
    type: 'Event',
  },
  {
    id: 18,
    themeId: 2,
    title: 'SUP-uthyrning',
    subtitle: 'Stand-up paddleboard vid gästhamnen',
    story:
      'Det är en vindstilla kväll i juli. Du hyr en paddleboard vid gästhamnen och glider ut på spegelblank sjö. Tjörnbron reser sig framför dig. Under dig skymtar du tång och fiskar. Det är meditation i rörelse.',
    what:
      'Uthyrning av stand-up paddleboards vid gästhamnen med säkerhetsintroduktion. Öppet hela sommaren med kvällspass och guidade turer som tillval.',
    why:
      'SUP är enkelt att lära sig och ger en unik upplevelse av havet. Uthyrningen ger Stenungsund ett nytt sommarerbjudande och skapar aktivitet vid hamnen.',
    who: {
      primary: 'Privat entreprenör',
      supporting: ['Stenungsunds kommun', 'Södra Bohuslän Turism', 'Stenungsunds Båtklubb'],
    },
    cost: 'Liten',
    timeline: 'Quick win',
    targetGroup: 'Alla',
    season: 'Sommar',
    location: 'Gästhamnen',
    sustainability: { social: 3, ecological: 2, economic: 3 },
    associations: ['Stenungsunds Båtklubb', 'Södra Bohuslän Turism'],
    type: 'Tjänst',
  },
  {
    id: 19,
    themeId: 2,
    title: 'Hamnpromenaden',
    subtitle: 'Upprustad strandpromenad med belysning och konst',
    story:
      'Det är en höstskymning och du promenerar längs den upplysta hamnpromenaden. Konstverk i stål och glas fångar ljuset. Bänkar med havsutsikt lockar till att stanna. Du möter joggare, barnfamiljer och par som flanerar.',
    what:
      'Strandpromenaden vid gästhamnen rustas upp med ny belysning, konstverk, bänkar och tillgänglighetsanpassning. Promenaden förlängs och kopplas till centrum.',
    why:
      'En attraktiv strandpromenad ökar trivseln och kopplar centrum till havet. Belysning och konst gör promenaden trygg och inbjudande även kvällstid.',
    who: {
      primary: 'Stenungsunds kommun',
      supporting: ['Lokala konstnärer', 'Trafikverket', 'Fastighetsägare'],
    },
    cost: 'Stor',
    timeline: 'Långsiktig',
    targetGroup: 'Alla',
    season: 'Året runt',
    location: 'Gästhamnen',
    sustainability: { social: 5, ecological: 2, economic: 3 },
    associations: ['Stenungsunds Konstförening', 'Stenungsunds Cityförening'],
    type: 'Infrastruktur',
  },
  {
    id: 20,
    themeId: 2,
    title: 'Musselodling',
    subtitle: 'Lokal produktion med restaurangsamarbete',
    story:
      'Du sitter på en restaurang i hamnen och beställer musslor. Kocken berättar att de är odlade alldeles utanför, i Stenungsunds eget vatten. Du kan se odlingen från fönstret. Smaken är havet — salt, sött och helt färskt.',
    what:
      'En lokal musselodling startas i samarbete med Göteborgs universitet och lokala restauranger. Odlingen kombinerar matproduktion med vattenrening och forskning.',
    why:
      'Musselodling renar vattnet, producerar hållbar mat och skapar jobb. Samarbete med restauranger ger en unik lokal produkt som stärker Stenungsunds varumärke.',
    who: {
      primary: 'Privat entreprenör',
      supporting: [
        'Göteborgs universitet',
        'Stenungsunds kommun',
        'Lokala restauranger',
      ],
    },
    cost: 'Medel',
    timeline: 'Långsiktig',
    targetGroup: 'Alla',
    season: 'Året runt',
    location: 'Stenungsunds kustvatten',
    sustainability: { social: 3, ecological: 5, economic: 4 },
    associations: ['Göteborgs universitet', 'Södra Bohuslän Turism'],
    type: 'Infrastruktur',
  },
];
