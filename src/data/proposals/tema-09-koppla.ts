import type { Proposal } from '../types';

export const tema09Proposals: Proposal[] = [
  {
    id: 81,
    themeId: 9,
    title: 'Bro till Orust',
    subtitle: 'Fast förbindelse som öppnar nya möjligheter',
    story: 'Du cyklar över den nya bron till Orust en sommarkväll. Vinden från havet tar i håret och utsikten är fantastisk. På andra sidan väntar en restaurang med havsutsikt. Det som förut var en omväg på en timme tar nu tio minuter.',
    what: 'En fast bro eller tunnel som kopplar ihop Stenungsund med Orust. Förbindelsen skulle minska restider, stärka arbetsmarknaden och öppna för turism och samarbete mellan kommunerna.',
    why: 'Orust och Stenungsund ligger nära varandra men saknar fast förbindelse. En bro skulle skapa en gemensam arbetsmarknad, göra det lättare att nå service och stärka hela regionen.',
    who: {
      primary: 'Västra Götalandsregionen',
      supporting: ['Stenungsunds kommun', 'Orust kommun', 'Trafikverket']
    },
    cost: 'Stor',
    timeline: 'Långsiktig',
    targetGroup: 'Alla',
    season: 'Året runt',
    location: 'Stenungsund–Orust',
    sustainability: { social: 4, ecological: 2, economic: 5 },
    associations: ['Södra Bohuslän Turism', 'Västsvenska Handelskammaren'],
    type: 'Infrastruktur'
  },
  {
    id: 82,
    themeId: 9,
    title: 'Expressbuss Uddevalla',
    subtitle: 'Snabb busslinje norrut',
    story: 'Du sätter dig på expressbussen vid Stenungsunds station klockan åtta. Trettio minuter senare kliver du av i Uddevalla centrum. Inget byte, inga stopp. Du hinner till mötet med marginal och behövde aldrig ta bilen.',
    what: 'En snabb busslinje mellan Stenungsund och Uddevalla med få stopp och hög turtäthet. Bussen kör via E6 och tar under 30 minuter. Avgångar varannan kvart under rusningstid.',
    why: 'Kopplingen norrut till Uddevalla är viktig men långsam idag. En expressbuss gör det realistiskt att pendla och stärker banden mellan kommunerna. Det ger också tillgång till Uddevallas utbud.',
    who: {
      primary: 'Västtrafik',
      supporting: ['Stenungsunds kommun', 'Uddevalla kommun', 'Västra Götalandsregionen']
    },
    cost: 'Medel',
    timeline: 'Medel',
    targetGroup: 'Alla',
    season: 'Året runt',
    location: 'Stenungsund–Uddevalla (via E6)',
    sustainability: { social: 3, ecological: 4, economic: 3 },
    associations: ['Västtrafik', 'Pendlarföreningen'],
    type: 'Tjänst'
  },
  {
    id: 83,
    themeId: 9,
    title: 'Cykelväg E6-korridoren',
    subtitle: 'Sammanhängande cykelväg genom kommunen',
    story: 'Du cyklar från Ödsmål till Stenungsund på den nya cykelvägen. Den går parallellt med E6 men skild från biltrafiken. Det tar tjugo minuter och du känner dig trygg hela vägen. Barnen kan cykla till skolan själva nu.',
    what: 'En sammanhängande cykelväg som löper genom hela kommunen, parallellt med E6-korridoren. Vägen kopplar ihop Ödsmål, Stora Höga, Stenungsund och norrut med säkra korsningar och belysning.',
    why: 'Kommunen saknar en sammanhängande cykelväg. Det gör att cyklister tvingas ut på farliga vägar. En riktig cykelväg ökar tryggheten, minskar bilanvändningen och gör det möjligt att pendla med cykel.',
    who: {
      primary: 'Stenungsunds kommun (samhällsbyggnad)',
      supporting: ['Trafikverket', 'Cykelfrämjandet', 'Västra Götalandsregionen']
    },
    cost: 'Stor',
    timeline: 'Långsiktig',
    targetGroup: 'Alla',
    season: 'Året runt',
    location: 'Ödsmål–Stenungsund–norrut',
    sustainability: { social: 4, ecological: 5, economic: 3 },
    associations: ['Cykelfrämjandet', 'Trafikverket'],
    type: 'Infrastruktur'
  },
  {
    id: 84,
    themeId: 9,
    title: 'Elcykelpool',
    subtitle: 'Delade elcyklar vid stationer och knutpunkter',
    story: 'Du kommer av bussen vid stationen och tar en elcykel ur stativet med en app. Tio minuter senare är du hemma. Cykeln kostade åtta kronor och du slapp vänta på nästa buss.',
    what: 'Ett system med delade elcyklar placerade vid stationer, hållplatser och viktiga knutpunkter. Cyklarna lånas med en app och kan lämnas vid valfri station.',
    why: 'Sista sträckan från hållplats till hem är ofta det som hindrar folk från att ta kollektivtrafik. Elcyklar löser det problemet och gör det enkelt att förflytta sig utan bil.',
    who: {
      primary: 'Stenungsunds kommun (samhällsbyggnad)',
      supporting: ['Västtrafik', 'Privata elcykeloperatörer']
    },
    cost: 'Medel',
    timeline: 'Medel',
    targetGroup: 'Alla',
    season: 'Året runt',
    location: 'Stenungsunds station, Stora Höga, Ödsmål',
    sustainability: { social: 3, ecological: 4, economic: 3 },
    associations: ['Cykelfrämjandet', 'Västtrafik'],
    type: 'Tjänst'
  },
  {
    id: 85,
    themeId: 9,
    title: 'Skärgårdsbåt',
    subtitle: 'Sommarbåt mellan Stenungsund, Tjörn och Orust',
    story: 'Du kliver ombord på skärgårdsbåten vid Stenungsunds gästhamn en lördagsmorgon. Solen glittrar på vattnet och efter fyrtio minuter lägger ni till vid Skärhamn på Tjörn. Du fikar, besöker akvarellmuseet och tar båten hem på kvällen.',
    what: 'En sommarbåtlinje som trafikerar sträckan Stenungsund–Tjörn–Orust under juni till augusti. Båten tar passagerare och cyklar och kopplar ihop tre kommuner via havet.',
    why: 'Havet förbinder men vägen runt tar tid. En sommarbåt ger en helt ny upplevelse, minskar biltrafiken på Tjörnbron och gör det enkelt att besöka öarna. Det stärker turismen för alla tre kommuner.',
    who: {
      primary: 'Västtrafik',
      supporting: ['Stenungsunds kommun', 'Tjörns kommun', 'Orust kommun', 'Södra Bohuslän Turism']
    },
    cost: 'Medel',
    timeline: 'Medel',
    targetGroup: 'Alla',
    season: 'Sommar',
    location: 'Stenungsunds gästhamn–Skärhamn–Henån',
    sustainability: { social: 4, ecological: 3, economic: 4 },
    associations: ['Södra Bohuslän Turism', 'Västtrafik', 'Stenungsunds gästhamn'],
    type: 'Tjänst'
  },
  {
    id: 86,
    themeId: 9,
    title: 'Nattbuss fredag–lördag',
    subtitle: 'Kollektivtrafik som funkar efter midnatt',
    story: 'Det är fredag kväll och du har varit på konsert i Göteborg. Klockan halv ett kliver du på nattbussen vid Nils Ericson-terminalen och sover hela vägen hem till Stenungsund. Inget dyrt taxi, ingen nykter kompis som behöver köra.',
    what: 'Nattbussförbindelse mellan Göteborg och Stenungsund fredagar och lördagar. Bussen avgår vid midnatt och klockan två från Göteborg och stannar vid de stora hållplatserna i kommunen.',
    why: 'Unga och vuxna som vill ta del av kvällslivet i Göteborg har idag inget kollektivt alternativ hem. Nattbuss gör det möjligt att leva i Stenungsund utan att missa stadens utbud.',
    who: {
      primary: 'Västtrafik',
      supporting: ['Stenungsunds kommun', 'Västra Götalandsregionen']
    },
    cost: 'Medel',
    timeline: 'Medel',
    targetGroup: 'Unga',
    season: 'Året runt',
    location: 'Göteborg–Stenungsund (E6)',
    sustainability: { social: 4, ecological: 3, economic: 2 },
    associations: ['Västtrafik'],
    type: 'Tjänst'
  },
  {
    id: 87,
    themeId: 9,
    title: 'Digital infrastruktur',
    subtitle: 'Fiber till alla hushåll',
    story: 'Du jobbar hemifrån i Svenshögen med perfekt uppkoppling. Videomötet fungerar utan hack, filerna laddas upp på sekunder. Det spelar ingen roll att du bor på landsbygden — uppkopplingen är lika bra som i stan.',
    what: 'Utbyggnad av fibernätet så att alla hushåll i kommunen får tillgång till snabbt bredband. Fokus på de orter och landsbygdsområden som idag saknar fiber.',
    why: 'Bra uppkoppling är grundläggande infrastruktur i dag. Det möjliggör distansarbete, studier och tillgång till digitala tjänster. Utan fiber riskerar delar av kommunen att halka efter.',
    who: {
      primary: 'Stenungsunds kommun (samhällsbyggnad)',
      supporting: ['IP-Only', 'Telia', 'Länsstyrelsen Västra Götaland']
    },
    cost: 'Stor',
    timeline: 'Långsiktig',
    targetGroup: 'Alla',
    season: 'Året runt',
    location: 'Hela kommunen, särskilt landsbygden',
    sustainability: { social: 4, ecological: 2, economic: 4 },
    associations: ['Lokala företagarföreningar'],
    type: 'Infrastruktur'
  },
  {
    id: 88,
    themeId: 9,
    title: 'Samåkningsapp',
    subtitle: 'Lokal plattform för att dela bilresor',
    story: 'Du ska till Göteborg klockan sju imorgon. Du öppnar appen och ser att din granne ska samma väg. Ni delar på bensinkostnaden och pratar hela vägen. Nu samåker ni varje tisdag.',
    what: 'En lokal samåkningsplattform anpassad för Stenungsunds pendlare. Appen matchar resenärer utifrån tid, riktning och hållplats. Kommunen driver marknadsföring och integration med Västtrafik.',
    why: 'Många pendlar ensamma i sina bilar. Samåkning minskar kostnader, utsläpp och trängsel. En lokal plattform skapar tillit och gör det enkelt att hitta reskompisar i närområdet.',
    who: {
      primary: 'Stenungsunds kommun (samhällsbyggnad)',
      supporting: ['Västtrafik', 'Lokala arbetsgivare', 'Borealis']
    },
    cost: 'Liten',
    timeline: 'Medel',
    targetGroup: 'Vuxna',
    season: 'Året runt',
    location: 'Hela kommunen',
    sustainability: { social: 3, ecological: 4, economic: 3 },
    associations: ['Västtrafik', 'Lokala företagarföreningar'],
    type: 'Tjänst'
  },
  {
    id: 89,
    themeId: 9,
    title: 'Gångbro över E6',
    subtitle: 'Trygg koppling mellan centrum och havet',
    story: 'Du promenerar med barnvagnen över den nya gångbron och ser havet öppna sig framför dig. E6 brusar under dig men du hör det knappt. På andra sidan väntar strandpromenaden och gästhamnen. Centrum och havet hänger äntligen ihop.',
    what: 'En gång- och cykelbro som kopplar ihop Stenungsunds centrum med hamnområdet och havet. Bron är bred, tillgänglig och belyst, med utsikt åt alla håll.',
    why: 'E6 skär genom Stenungsund och skapar en barriär mellan centrum och havet. En gångbro gör det tryggt och enkelt att gå mellan de två sidorna och läker ihop staden.',
    who: {
      primary: 'Stenungsunds kommun (samhällsbyggnad)',
      supporting: ['Trafikverket', 'Centrumföreningen Stenungsund']
    },
    cost: 'Stor',
    timeline: 'Långsiktig',
    targetGroup: 'Alla',
    season: 'Året runt',
    location: 'Stenungsunds centrum, över E6',
    sustainability: { social: 5, ecological: 2, economic: 3 },
    associations: ['Centrumföreningen Stenungsund', 'Trafikverket'],
    type: 'Infrastruktur'
  },
  {
    id: 90,
    themeId: 9,
    title: 'Regionaltåg norrut',
    subtitle: 'Lobba för tågförbindelse Stenungsund–Uddevalla',
    story: 'Du sitter på tåget som glider norrut längs kusten. Tjugo minuter och du är i Uddevalla. Du hinner med föreläsningen på högskolan, äter lunch vid hamnen och tar tåget hem. Det som förut tog en timme med bil tar nu en kvart.',
    what: 'Stenungsund driver en aktiv lobbykampanj för att få till stånd en regionaltågsförbindelse norrut till Uddevalla. Kommunen samarbetar med grannkommuner och regionen för att lyfta frågan.',
    why: 'Tåget är det snabbaste och mest hållbara sättet att resa. En förbindelse norrut kopplar ihop arbetsmarknader, ger tillgång till Uddevallas högskola och gör Stenungsund mer attraktivt att bo i.',
    who: {
      primary: 'Stenungsunds kommun (kommunledning)',
      supporting: ['Västra Götalandsregionen', 'Uddevalla kommun', 'Trafikverket', 'Västtrafik']
    },
    cost: 'Liten',
    timeline: 'Långsiktig',
    targetGroup: 'Alla',
    season: 'Året runt',
    location: 'Stenungsund–Uddevalla',
    sustainability: { social: 4, ecological: 5, economic: 4 },
    associations: ['Västtrafik', 'Västsvenska Handelskammaren'],
    type: 'Infrastruktur'
  }
];
