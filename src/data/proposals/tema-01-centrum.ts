import type { Proposal } from '../types';

export const tema01: Proposal[] = [
  {
    id: 1,
    themeId: 1,
    title: 'Levande Stenungstorg',
    subtitle: 'Marknadshelger med lokala producenter',
    story:
      'Det är en lördagsmorgon i maj. Du promenerar mot torget och möts av doften av nybakat bröd och grillad fisk. Stånd med honung, keramik och grönsaker kantar torget. Du stannar vid en ost från en lokal gård, provsmakar och slår en pratstund med odlaren.',
    what:
      'Stenungstorg förvandlas till en levande marknadsplats varannan helg med lokala producenter, hantverkare och matförsäljare. Marknaden kombineras med barnaktiviteter och livemusik.',
    why:
      'Ett centrum utan liv tappar invånare till köpcentra och näthandel. Marknadshelger skapar anledning att besöka torget, stärker lokala producenter och bygger gemenskap.',
    who: {
      primary: 'Stenungsunds kommun',
      supporting: ['Stenungsunds Cityförening', 'Lokala producenter', 'Studieförbund'],
    },
    cost: 'Liten',
    timeline: 'Quick win',
    targetGroup: 'Alla',
    season: 'Året runt',
    location: 'Stenungstorg',
    sustainability: { social: 5, ecological: 3, economic: 4 },
    associations: ['Stenungsunds Cityförening', 'LRF Västra Götaland'],
    type: 'Marknad',
  },
  {
    id: 2,
    themeId: 1,
    title: 'Pop-up-park',
    subtitle: 'Tillfällig grön oas vid torget',
    story:
      'Det är lunch en varm junidag. Du tar din matlåda och sätter dig på en bänk bland odlingslådor och blommande träd, mitt i centrum. Barn klättrar i en liten lekstruktur av trä. Igår var det bara en parkeringsplats.',
    what:
      'En tillfällig park med växter, sittplatser, lekutrustning och scen anläggs på en parkeringsyta vid torget under sommaren. Parken kan byggas av återbruksmaterial och flyttas efter säsongen.',
    why:
      'Centrum behöver fler gröna ytor som inbjuder till vistelse. En pop-up-park testar konceptet utan permanent investering och visar vad som är möjligt.',
    who: {
      primary: 'Stenungsunds kommun',
      supporting: ['Lokala arkitekter', 'Studiefrämjandet', 'Återbruket Stenungsund'],
    },
    cost: 'Liten',
    timeline: 'Quick win',
    targetGroup: 'Alla',
    season: 'Sommar',
    location: 'Stenungstorg',
    sustainability: { social: 4, ecological: 4, economic: 2 },
    associations: ['Studiefrämjandet', 'Naturskyddsföreningen Stenungsund'],
    type: 'Plats',
  },
  {
    id: 3,
    themeId: 1,
    title: 'Kulturkvällar på Fregatten',
    subtitle: 'Öppna kvällar varje månad',
    story:
      'Det är en torsdagskväll i oktober. Du kliver in på Fregatten och möts av en utställning med lokala konstnärer. I rummet bredvid läser en författare ur sin nya bok. Du tar en kopp te och sätter dig bland grannar du aldrig pratat med förut.',
    what:
      'Kulturhuset Fregatten bjuder in till öppen kväll en gång i månaden med blandade kulturupplevelser: konst, musik, litteratur och samtal. Gratis inträde och fika ingår.',
    why:
      'Fregatten är Stenungsunds kulturhus men når inte alla. Öppna kvällar sänker tröskeln och skapar en mötesplats som lockar både kulturvana och ovana besökare.',
    who: {
      primary: 'Kulturhuset Fregatten',
      supporting: ['Stenungsunds kommun', 'Lokala konstnärer', 'Stenungsunds bibliotek'],
    },
    cost: 'Liten',
    timeline: 'Quick win',
    targetGroup: 'Alla',
    season: 'Året runt',
    location: 'Kulturhuset Fregatten',
    sustainability: { social: 5, ecological: 1, economic: 2 },
    associations: ['Stenungsunds Konstförening', 'Studieförbundet Vuxenskolan'],
    type: 'Event',
  },
  {
    id: 4,
    themeId: 1,
    title: 'Centrumvandringar',
    subtitle: 'Guidade turer med lokal historia',
    story:
      'Det är en söndagseftermiddag i september. Du följer med en pensionerad lärare på en vandring genom centrum. Hon pekar på hus och berättar historier du aldrig hört. Du ser gator du gått tusen gånger med helt nya ögon.',
    what:
      'Guidade vandringar genom Stenungsunds centrum som berättar om platsens historia, arkitektur och människor. Vandringarna hålls regelbundet och kan bokas av grupper.',
    why:
      'Lokal historia stärker identitet och stolthet. Vandringarna lockar både invånare och besökare, och gör centrum mer intressant att vistas i.',
    who: {
      primary: 'Stenungsunds hembygdsförening',
      supporting: ['Stenungsunds kommun', 'Södra Bohuslän Turism', 'Stenungsunds bibliotek'],
    },
    cost: 'Liten',
    timeline: 'Quick win',
    targetGroup: 'Alla',
    season: 'Året runt',
    location: 'Stenungsund centrum',
    sustainability: { social: 4, ecological: 1, economic: 2 },
    associations: ['Stenungsunds hembygdsförening', 'Södra Bohuslän Turism'],
    type: 'Event',
  },
  {
    id: 5,
    themeId: 1,
    title: 'Barnens lördag',
    subtitle: 'Gratis aktiviteter i centrum varje lördag',
    story:
      'Det är lördagsmorgon och din femåring drar dig mot torget. Idag är det ansiktsmålning och trollerishow. Förra veckan var det cirkusverkstad. Du möter andra föräldrar och barnen leker vidare medan ni tar en kaffe.',
    what:
      'Varje lördag erbjuds gratis barnaktiviteter i centrum: trolleri, pyssel, teater, cirkus och musik. Föreningar och kulturskolan turas om att arrangera.',
    why:
      'Familjer behöver en anledning att besöka centrum. Barnens lördag gör centrum till en destination och stärker gemenskapen mellan familjer.',
    who: {
      primary: 'Stenungsunds kommun',
      supporting: ['Kulturskolan', 'Lokala föreningar', 'Stenungsunds Cityförening'],
    },
    cost: 'Liten',
    timeline: 'Quick win',
    targetGroup: 'Familjer',
    season: 'Året runt',
    location: 'Stenungstorg',
    sustainability: { social: 5, ecological: 1, economic: 3 },
    associations: ['Kulturskolan Stenungsund', 'Studiefrämjandet'],
    type: 'Event',
  },
  {
    id: 6,
    themeId: 1,
    title: 'Gatumusik-scen',
    subtitle: 'Fast plats för spontan musik',
    story:
      'Det är fredag eftermiddag och du hör gitarrspel från torget. En ung musiker spelar egna låtar på den nya gatumusik-scenen. Folk stannar och lyssnar. Någon filmar och lägger ut — nästa vecka kommer fler.',
    what:
      'En permanent liten scen med tak och eluttag placeras i centrum där vem som helst kan spela musik. Bokningssystem via app gör det enkelt att boka tid.',
    why:
      'Musik ger liv åt offentliga platser. En fast scen visar att spontan kultur är välkommen och ger lokala musiker en plats att synas.',
    who: {
      primary: 'Stenungsunds kommun',
      supporting: ['Kulturskolan', 'Lokala musiker', 'Stenungsunds Cityförening'],
    },
    cost: 'Liten',
    timeline: 'Medel',
    targetGroup: 'Alla',
    season: 'Året runt',
    location: 'Stenungstorg',
    sustainability: { social: 4, ecological: 1, economic: 2 },
    associations: ['Kulturskolan Stenungsund', 'Stenungsunds Musikförening'],
    type: 'Plats',
  },
  {
    id: 7,
    themeId: 1,
    title: 'Coworking i centrum',
    subtitle: 'Delat kontor för distansarbetare och småföretagare',
    story:
      'Det är tisdag morgon. Istället för att pendla till Göteborg tar du cykeln till coworking-lokalen vid torget. Du sätter dig vid ett skrivbord, beställer en kaffe och börjar jobba. Vid lunch äter du med en granne som driver eget.',
    what:
      'En coworking-yta öppnas i centrum med flexibla arbetsplatser, mötesrum och kafé. Riktar sig till distansarbetare, frilansare och småföretagare.',
    why:
      'Många i Stenungsund jobbar på distans men saknar en arbetsplats utanför hemmet. Coworking ger centrum liv på vardagar och minskar pendling.',
    who: {
      primary: 'Stenungsunds kommun',
      supporting: ['Hogia', 'Lokala företagare', 'Fastighetsägare i centrum'],
    },
    cost: 'Medel',
    timeline: 'Medel',
    targetGroup: 'Vuxna',
    season: 'Året runt',
    location: 'Stenungsund centrum',
    sustainability: { social: 4, ecological: 3, economic: 4 },
    associations: ['Företagarna Stenungsund', 'Hogia'],
    type: 'Plats',
  },
  {
    id: 8,
    themeId: 1,
    title: 'Ljusfestival',
    subtitle: 'Belysningsevent som gör centrum lockande kvällstid',
    story:
      'Det är en novemberkväll och centrum lyser i tusen färger. Ljusinstallationer hänger mellan husen, projiceringar dansar på fasaderna. Du går med familjen och upptäcker gränd efter gränd av ljuskonst. Mörkret har blivit vackert.',
    what:
      'En årlig ljusfestival i november-december med ljusinstallationer, projiceringar och lyktvandringar i centrum. Butiker och restauranger har utökade öppettider.',
    why:
      'Mörka månader töms centrum på kvällstid. En ljusfestival skapar anledning att besöka centrum, stärker handeln och lyfter stämningen under årets mörkaste tid.',
    who: {
      primary: 'Stenungsunds kommun',
      supporting: [
        'Stenungsunds Cityförening',
        'Lokala konstnärer',
        'Kulturhuset Fregatten',
      ],
    },
    cost: 'Medel',
    timeline: 'Medel',
    targetGroup: 'Alla',
    season: 'Vinter',
    location: 'Stenungsund centrum',
    sustainability: { social: 5, ecological: 2, economic: 4 },
    associations: ['Stenungsunds Konstförening', 'Stenungsunds Cityförening'],
    type: 'Event',
  },
  {
    id: 9,
    themeId: 1,
    title: 'Torghandel året runt',
    subtitle: 'Permanent torghandel varje vecka',
    story:
      'Det är en onsdag i februari. Du svänger förbi torget på väg hem och handlar färsk fisk, grönsaker och bröd direkt från producenten. Handlaren känner igen dig och har sparat den ost du gillar. Torget lever även mitt i vintern.',
    what:
      'Torghandel varje onsdag och lördag året runt, med plats för minst tio försäljare. Väderskydd och el finns på plats. Kommunen subventionerar ståndplatser under vintern.',
    why:
      'Torghandel skapar liv och rörelse. Genom att erbjuda handel året runt, inte bara sommartid, blir torget en pålitlig mötesplats och handelsplats.',
    who: {
      primary: 'Stenungsunds kommun',
      supporting: ['Lokala producenter', 'LRF Västra Götaland', 'Stenungsunds Cityförening'],
    },
    cost: 'Liten',
    timeline: 'Quick win',
    targetGroup: 'Alla',
    season: 'Året runt',
    location: 'Stenungstorg',
    sustainability: { social: 4, ecological: 3, economic: 4 },
    associations: ['LRF Västra Götaland', 'Stenungsunds Cityförening'],
    type: 'Marknad',
  },
  {
    id: 10,
    themeId: 1,
    title: 'Centrumappen',
    subtitle: 'Digital guide med erbjudanden och evenemang',
    story:
      'Du öppnar appen på telefonen och ser att det är poesi-kväll på Fregatten ikväll, att fiskhandlaren har erbjudande på lax och att det är loppis på torget i helgen. Allt på ett ställe — du vet alltid vad som händer i Stenungsund.',
    what:
      'En app och webbplats som samlar alla evenemang, erbjudanden och nyheter från centrum. Butiker och föreningar kan enkelt lägga upp sitt eget innehåll.',
    why:
      'Information om vad som händer i centrum är utspridd på många ställen. En gemensam digital plattform gör det enklare att hitta dit och stärker handeln.',
    who: {
      primary: 'Stenungsunds kommun',
      supporting: ['Stenungsunds Cityförening', 'Lokala IT-företag', 'Hogia'],
    },
    cost: 'Medel',
    timeline: 'Medel',
    targetGroup: 'Alla',
    season: 'Året runt',
    location: 'Stenungsund centrum',
    sustainability: { social: 3, ecological: 1, economic: 4 },
    associations: ['Stenungsunds Cityförening', 'Företagarna Stenungsund'],
    type: 'Tjänst',
  },
];
