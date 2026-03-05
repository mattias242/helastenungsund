import type { Proposal } from '../types';

export const tema08: Proposal[] = [
  {
    id: 71,
    themeId: 8,
    title: 'Ödsmåls torg',
    subtitle: 'Ny mötesplats med café och lekplats i Ödsmål',
    story: 'Du sitter på det nya caféet vid Ödsmåls torg med en latte medan barnen klättrar på lekställningen. Grannarna stannar till och pratar. Det som förut var en tom gräsplätt är nu ortens hjärta.',
    what: 'Ett nytt litet torg i Ödsmål med café, bänkar, lekplats och ytor för småskaliga marknader. Torget blir en naturlig mötesplats i en ort som saknar en egen samlingspunkt.',
    why: 'Ödsmål växer men saknar ett tydligt centrum. Ett torg skapar identitet, trygghet och gemenskap i orten. Det gör att fler stannar och handlar lokalt istället för att åka till Stenungsund.',
    who: {
      primary: 'Stenungsunds kommun (samhällsbyggnad)',
      supporting: ['Ödsmåls villaförening', 'Lokala företagare i Ödsmål']
    },
    cost: 'Stor',
    timeline: 'Långsiktig',
    targetGroup: 'Alla',
    season: 'Året runt',
    location: 'Ödsmål centrum',
    sustainability: { social: 5, ecological: 2, economic: 3 },
    associations: ['Ödsmåls villaförening', 'Lokala företagare i Ödsmål'],
    type: 'Plats'
  },
  {
    id: 72,
    themeId: 8,
    title: 'Jörlanda station',
    subtitle: 'Utveckla kring järnvägsstationen med bostäder och service',
    story: 'Du kliver av tåget i Jörlanda och går rakt in i det nya kvarteret med matbutik, frisör och ett mysigt bageri. Lägenheterna ovanpå är nybyggda och populära bland unga pendlare. Stationen har väckt Jörlanda till liv.',
    what: 'Ett utvecklingsprojekt kring Jörlanda station med nya bostäder, service och bättre pendlarparkering. Stationsområdet omvandlas till en levande knutpunkt.',
    why: 'Jörlanda har en järnvägsstation men omgivningen är outvecklad. Genom att bygga bostäder och service kring stationen stärks orten och fler väljer tåget framför bilen.',
    who: {
      primary: 'Stenungsunds kommun (samhällsbyggnad)',
      supporting: ['Trafikverket', 'Västtrafik', 'Privata byggföretag']
    },
    cost: 'Stor',
    timeline: 'Långsiktig',
    targetGroup: 'Alla',
    season: 'Året runt',
    location: 'Jörlanda station',
    sustainability: { social: 4, ecological: 3, economic: 4 },
    associations: ['Jörlanda intresseförening', 'Västtrafik'],
    type: 'Infrastruktur'
  },
  {
    id: 73,
    themeId: 8,
    title: 'Stora Höga kulturscen',
    subtitle: 'Scen vid skolan för lokala evenemang',
    story: 'Det är en ljummen junikväll och du sitter på en filt framför scenen vid Stora Höga skola. En lokal kör sjunger sommarvisor och barnen dansar framför scenen. Grannarna delar på en picknickkorg och stämningen är magisk.',
    what: 'En enkel utomhusscen vid Stora Höga skola som kan användas för konserter, teater och skolavslutningar. Scenen byggs i samarbete med föreningarna i orten.',
    why: 'Stora Höga har ett aktivt föreningsliv men saknar en scen. En fast scen gör det enklare att arrangera evenemang och ger orten en kulturell samlingspunkt.',
    who: {
      primary: 'Stenungsunds kommun (kultur & fritid)',
      supporting: ['Stora Höga bygdeförening', 'Stora Högagården', 'Lokala musikföreningar']
    },
    cost: 'Medel',
    timeline: 'Medel',
    targetGroup: 'Alla',
    season: 'Sommar',
    location: 'Stora Höga skola',
    sustainability: { social: 4, ecological: 1, economic: 2 },
    associations: ['Stora Höga bygdeförening', 'Stora Högagården'],
    type: 'Plats'
  },
  {
    id: 74,
    themeId: 8,
    title: 'Svenshögens byahus',
    subtitle: 'Samlingslokal för ortens föreningar och fester',
    story: 'Det är lördagskväll i Svenshögens nya byahus. Förra veckan var det bingo, ikväll är det quiz-kväll. Barnen spelar pingis i ett rum medan föräldrarna tävlar i lag. Det här huset har blivit Svenshögens vardagsrum.',
    what: 'En ny samlingslokal i Svenshögen som drivs av ortens föreningar gemensamt. Huset rymmer festlokal, mötesrum, kök och aktivitetsytor för barn och unga.',
    why: 'Svenshögen saknar en samlingslokal som fungerar för hela orten. Ett byahus ger föreningar en fast punkt och skapar möjligheter för spontana och planerade sammankomster.',
    who: {
      primary: 'Stenungsunds kommun (samhällsbyggnad)',
      supporting: ['Svenshögens intresseförening', 'Lokala föreningar i Svenshögen']
    },
    cost: 'Stor',
    timeline: 'Långsiktig',
    targetGroup: 'Alla',
    season: 'Året runt',
    location: 'Svenshögen',
    sustainability: { social: 5, ecological: 2, economic: 2 },
    associations: ['Svenshögens intresseförening'],
    type: 'Infrastruktur'
  },
  {
    id: 75,
    themeId: 8,
    title: 'Hällungens naturpark',
    subtitle: 'Markerade stigar runt sjön Hällungen',
    story: 'Du promenerar längs den nymarkerade stigen runt Hällungen. Solen speglar sig i sjön och du stannar vid ett av vindskydden för att grilla korv. Barnen hittar en groda vid vattenkanten. Allt detta bara femton minuter från E6.',
    what: 'Ett nätverk av markerade vandringsstigar runt sjön Hällungen med rastplatser, vindskydd och informationsskyltar om flora och fauna. En enklare badplats med brygga anläggs.',
    why: 'Hällungen är en vacker sjö som få utnyttjar på grund av dålig skyltning och brist på anläggningar. En naturpark gör området tillgängligt och ger Hällungens invånare stolthet över sin närnatur.',
    who: {
      primary: 'Stenungsunds kommun (samhällsbyggnad)',
      supporting: ['Friluftsfrämjandet Stenungsund', 'Hällungens bygdeförening', 'Västkuststiftelsen']
    },
    cost: 'Medel',
    timeline: 'Medel',
    targetGroup: 'Alla',
    season: 'Året runt',
    location: 'Sjön Hällungen',
    sustainability: { social: 4, ecological: 4, economic: 2 },
    associations: ['Friluftsfrämjandet Stenungsund', 'Hällungens bygdeförening', 'Västkuststiftelsen'],
    type: 'Plats'
  },
  {
    id: 76,
    themeId: 8,
    title: 'Byafester',
    subtitle: 'Stöd till lokala byafester i varje ort',
    story: 'Det är midsommarafton i Jörlanda och hela byn har samlats på ängen. Barnen dansar runt stången, kören sjunger och grillarna ryker. Kommunen har betalat för toaletter och scen, men allt annat har grannarna fixat själva.',
    what: 'Kommunen ger ekonomiskt stöd och praktisk hjälp till lokala byafester. Varje ort kan söka bidrag för en årlig fest med enkel ansökan. Kommunen hjälper till med tillstånd, toaletter och el.',
    why: 'Byafester är det bästa sättet att bygga gemenskap i en ort. Genom att ta bort administrativa hinder och ge lite pengar blir det enklare för eldsjälar att samla sina grannar.',
    who: {
      primary: 'Stenungsunds kommun (kultur & fritid)',
      supporting: ['Lokala intresseföreningar', 'Bygdeföreningar']
    },
    cost: 'Liten',
    timeline: 'Quick win',
    targetGroup: 'Alla',
    season: 'Sommar',
    location: 'Alla orter i kommunen',
    sustainability: { social: 5, ecological: 1, economic: 1 },
    associations: ['Bygdeföreningar i kommunen', 'Lokala intresseföreningar'],
    type: 'Event'
  },
  {
    id: 77,
    themeId: 8,
    title: 'Lantbrevbäraren 2.0',
    subtitle: 'Mobil service-hubb som besöker orterna',
    story: 'Det är torsdag förmiddag och den gröna bussen parkerar på sin vanliga plats i Svenshögen. Du lämnar in ett paket, förnyar ditt lånekort på biblioteket och pratar med kommunens medborgarlots om bygglovsansökan. Allt på en gång.',
    what: 'En mobil enhet som besöker kommunens orter regelbundet med samhällsservice. Bussen erbjuder bibliotekstjänster, postservice, enklare kommunal rådgivning och digital hjälp.',
    why: 'Inte alla kan eller vill åka in till Stenungsund för varje ärende. En mobil service-hubb ger orterna tillgång till service nära hemmet och visar att hela kommunen räknas.',
    who: {
      primary: 'Stenungsunds kommun (medborgarservice)',
      supporting: ['Stenungsunds bibliotek', 'Postnord', 'Lokala intresseföreningar']
    },
    cost: 'Medel',
    timeline: 'Medel',
    targetGroup: 'Alla',
    season: 'Året runt',
    location: 'Ödsmål, Jörlanda, Stora Höga, Svenshögen, Hällungen',
    sustainability: { social: 5, ecological: 2, economic: 2 },
    associations: ['Stenungsunds bibliotek', 'Lokala intresseföreningar'],
    type: 'Tjänst'
  },
  {
    id: 78,
    themeId: 8,
    title: 'Lokal odling',
    subtitle: 'Andelsodlingar i varje ort',
    story: 'Du går ner till odlingslotten efter jobbet och plockar tomater och örter till middagen. Grannen vattnar sina morötter och ni byter recept. I höst ska hela odlingsgruppen ha en gemensam skördefest.',
    what: 'Kommunen ställer mark till förfogande för andelsodlingar i varje ort. Invånare kan hyra en lott för en liten avgift. Gemensamma verktyg, vattenpost och kompost ingår.',
    why: 'Odling skapar gemenskap, ger närodlad mat och aktiverar outnyttjad mark. Det är särskilt värdefullt för de som bor i lägenhet och saknar trädgård.',
    who: {
      primary: 'Stenungsunds kommun (samhällsbyggnad)',
      supporting: ['Studiefrämjandet', 'Lokala odlingsföreningar', 'Omställning Stenungsund']
    },
    cost: 'Liten',
    timeline: 'Quick win',
    targetGroup: 'Alla',
    season: 'Vår',
    location: 'Kommunal mark i varje ort',
    sustainability: { social: 4, ecological: 5, economic: 2 },
    associations: ['Studiefrämjandet', 'Omställning Stenungsund'],
    type: 'Plats'
  },
  {
    id: 79,
    themeId: 8,
    title: 'Pendelparkering med laddning',
    subtitle: 'Park-and-ride vid E6-påfarterna',
    story: 'Du parkerar bilen vid pendelparkeringen i Stora Höga och sätter i laddkabeln. Bussen till Göteborg går om tre minuter. När du kommer tillbaka på kvällen är bilen fulladdad. Enklare kan det inte bli.',
    what: 'Pendelparkeringar med laddstolpar vid E6-påfarterna i Stora Höga och Ödsmål. Parkeringarna kopplas till busstider och har väderskyddade hållplatser.',
    why: 'Många pendlar med bil till Göteborg. Park-and-ride med laddning gör det attraktivt att byta till buss för sista sträckan. Det minskar trängsel, utsläpp och parkeringskostnader i stan.',
    who: {
      primary: 'Stenungsunds kommun (samhällsbyggnad)',
      supporting: ['Västtrafik', 'Trafikverket', 'Energibolag']
    },
    cost: 'Stor',
    timeline: 'Medel',
    targetGroup: 'Vuxna',
    season: 'Året runt',
    location: 'E6-påfarterna vid Stora Höga och Ödsmål',
    sustainability: { social: 3, ecological: 4, economic: 3 },
    associations: ['Västtrafik', 'Trafikverket'],
    type: 'Infrastruktur'
  },
  {
    id: 80,
    themeId: 8,
    title: 'Orternas historia',
    subtitle: 'Skyltar och QR-koder som berättar lokal historia',
    story: 'Du promenerar genom Jörlanda och stannar vid en skylt som berättar att kvarnruinen du ser är från 1700-talet. Du skannar QR-koden och hör en äldre Jörlandabo berätta minnen från sin barndom. Plötsligt ser du orten med helt nya ögon.',
    what: 'Historiska skyltar och QR-koder placeras ut vid intressanta platser i varje ort. QR-koderna leder till ljudberättelser, gamla foton och filmer. Materialet tas fram av hembygdsföreningar och skolor.',
    why: 'Varje ort har en rik historia som riskerar att glömmas. Genom att göra den synlig stärks ortens identitet och stoltheten hos invånarna. Det ger också besökare en anledning att stanna.',
    who: {
      primary: 'Stenungsunds hembygdsförening',
      supporting: ['Stenungsunds kommun (kultur & fritid)', 'Lokala skolor', 'Södra Bohuslän Turism']
    },
    cost: 'Liten',
    timeline: 'Medel',
    targetGroup: 'Alla',
    season: 'Året runt',
    location: 'Alla orter i kommunen',
    sustainability: { social: 4, ecological: 1, economic: 2 },
    associations: ['Stenungsunds hembygdsförening', 'Södra Bohuslän Turism'],
    type: 'Plats'
  }
];
