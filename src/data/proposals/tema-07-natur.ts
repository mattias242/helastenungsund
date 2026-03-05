import type { Proposal } from '../types';

export const tema07Proposals: Proposal[] = [
  {
    id: 61,
    themeId: 7,
    title: 'Vandringsled Stenungsund',
    subtitle: 'Sammanhängande led genom hela kommunen',
    story: 'Du lämnar centrum med ryggsäcken på morgonen och vandrar genom skog, längs klippor och förbi små sjöar. Vid lunch sitter du på en bänk med utsikt över havet. Leden tar dig genom hela kommunen på tre dagar.',
    what: 'En sammanhängande vandringsled som går genom hela Stenungsunds kommun. Leden kopplar ihop befintliga stigar med nya sträckor och har tydlig skyltning, rastplatser och vindskydd.',
    why: 'Stenungsund har fantastisk natur men saknar en sammanhängande led som visar upp den. En kommunled lockar både invånare och besökare och stärker Stenungsund som friluftskommun.',
    who: {
      primary: 'Stenungsunds kommun (samhällsbyggnad)',
      supporting: ['Friluftsfrämjandet Stenungsund', 'Västkuststiftelsen', 'Länsstyrelsen Västra Götaland']
    },
    cost: 'Medel',
    timeline: 'Medel',
    targetGroup: 'Alla',
    season: 'Året runt',
    location: 'Hela kommunen',
    sustainability: { social: 4, ecological: 3, economic: 3 },
    associations: ['Friluftsfrämjandet Stenungsund', 'Västkuststiftelsen', 'Södra Bohuslän Turism'],
    type: 'Infrastruktur'
  },
  {
    id: 62,
    themeId: 7,
    title: 'Naturskola för alla',
    subtitle: 'Uteklasser och naturäventyr för barn',
    story: 'Det är tisdag och klassen har lektion i skogen idag. Barnen räknar årsringar på en stubbe, bygger en fördämning i bäcken och lär sig namnen på tre fåglar. Läraren säger att de lär sig bättre utomhus.',
    what: 'En kommunal naturskola som erbjuder uteklasser för alla grundskolor. Utbildade naturpedagoger besöker skolor eller tar klasser till naturen för dagslånga äventyr.',
    why: 'Barn tillbringar allt mer tid inomhus framför skärmar. Naturskolan ger alla barn chansen att lära sig om naturen genom att vara i den. Det stärker hälsa, koncentration och miljömedvetenhet.',
    who: {
      primary: 'Stenungsunds kommun (utbildning)',
      supporting: ['Friluftsfrämjandet Stenungsund', 'Naturskyddsföreningen Stenungsund', 'Stenungsunds skolor']
    },
    cost: 'Medel',
    timeline: 'Medel',
    targetGroup: 'Barn',
    season: 'Året runt',
    location: 'Naturen runt Stenungsunds skolor',
    sustainability: { social: 4, ecological: 5, economic: 1 },
    associations: ['Friluftsfrämjandet Stenungsund', 'Naturskyddsföreningen Stenungsund'],
    type: 'Program'
  },
  {
    id: 63,
    themeId: 7,
    title: 'Mountainbikeleder',
    subtitle: 'Markerade MTB-leder i skogarna',
    story: 'Du svänger in på den blåmarkerade leden och cyklar genom tallskogen. Spåret går uppför en kulle, ner i en sänka och längs en bäck. Efter tio kilometer kommer du till rastplatsen med pumpstation och karta.',
    what: 'Ett nät av markerade mountainbikeleder med olika svårighetsgrader. Lederna har tydlig skyltning, kartmaterial och enklare service som pumpstationer vid startpunkterna.',
    why: 'Mountainbike växer snabbt och Stenungsunds terräng passar perfekt. Markerade leder minskar konflikter med markägare och vandring, och lockar cykelturister till kommunen.',
    who: {
      primary: 'Stenungsunds kommun (kultur & fritid)',
      supporting: ['Lokala MTB-grupper', 'Svenska Cykelförbundet', 'Friluftsfrämjandet Stenungsund']
    },
    cost: 'Medel',
    timeline: 'Medel',
    targetGroup: 'Alla',
    season: 'Vår',
    location: 'Skogsområden i kommunen',
    sustainability: { social: 3, ecological: 3, economic: 3 },
    associations: ['Svenska Cykelförbundet', 'Friluftsfrämjandet Stenungsund'],
    type: 'Infrastruktur'
  },
  {
    id: 64,
    themeId: 7,
    title: 'Fågelskådartorn',
    subtitle: 'Utsiktstorn vid Norums holme och Ramsön',
    story: 'Du klättrar upp i tornet vid Ramsön en tidig morgon i maj. Med kikaren ser du häger, strandskator och en havsörn som glider över vattnet. Du antecknar i fågelappen och delar bilden med de andra skådarna.',
    what: 'Två utsiktstorn vid Norums holme och Ramsön naturreservat. Tornen ger utsikt över fågelrika våtmarker och kust, med informationsskyltar om fågelarter och ekosystem.',
    why: 'Fågelskådning är en av Sveriges mest populära friluftsaktiviteter. Stenungsund har rika fågelmiljöer men saknar bra utsiktspunkter. Torn gör naturen tillgänglig utan att störa fågellivet.',
    who: {
      primary: 'Stenungsunds kommun (samhällsbyggnad)',
      supporting: ['Bohusläns Ornitologiska Förening', 'Västkuststiftelsen', 'Länsstyrelsen Västra Götaland']
    },
    cost: 'Medel',
    timeline: 'Medel',
    targetGroup: 'Alla',
    season: 'Året runt',
    location: 'Norums holme och Ramsön naturreservat',
    sustainability: { social: 3, ecological: 4, economic: 2 },
    associations: ['Bohusläns Ornitologiska Förening', 'Västkuststiftelsen', 'Friluftsfrämjandet Stenungsund'],
    type: 'Infrastruktur'
  },
  {
    id: 65,
    themeId: 7,
    title: 'Utegym-slinga',
    subtitle: 'Friluftsträning längs populära stråk',
    story: 'Du joggar längs strandpromenaden och stannar vid stationen med armhävningsställning och ribbstol. Du kör tre set, tittar ut över havet och joggar vidare till nästa station. Gratis och alltid öppet.',
    what: 'En slinga med utegymstationer längs populära promenadstråk. Varje station har utrustning för styrka och rörlighet, med instruktioner på skyltar och QR-koder till träningsprogram.',
    why: 'Utegym är populära, gratis och tillgängliga för alla. En slinga gör det enkelt att kombinera löpning med styrketräning utomhus. Det främjar hälsa utan krav på medlemskap eller avgifter.',
    who: {
      primary: 'Stenungsunds kommun (kultur & fritid)',
      supporting: ['Korpen Stenungsund', 'Friluftsfrämjandet Stenungsund']
    },
    cost: 'Medel',
    timeline: 'Medel',
    targetGroup: 'Alla',
    season: 'Året runt',
    location: 'Strandpromenaden och Kvarnbergsparken',
    sustainability: { social: 4, ecological: 2, economic: 1 },
    associations: ['Korpen Stenungsund', 'Friluftsfrämjandet Stenungsund'],
    type: 'Infrastruktur'
  },
  {
    id: 66,
    themeId: 7,
    title: 'Naturnätter',
    subtitle: 'Guidade nattvandringar med stjärnskådning',
    story: 'Det är en klar oktoberkväll och du går tyst genom skogen med pannlampa. Guiden pekar ut ugglans rop och visar Orion på stjärnhimlen. Barnen viskar av spänning. Natten är magisk på ett sätt som dagen aldrig kan vara.',
    what: 'Guidade nattvandringar i naturen med teman som stjärnskådning, nattdjur och nordiskt ljus. Arrangeras en gång i månaden under höst och vinter med utbildade guider.',
    why: 'Naturen på natten är en upplevelse de flesta aldrig får. Naturnätter öppnar en ny dimension av friluftsliv och ger en unik aktivitet som passar alla åldrar.',
    who: {
      primary: 'Friluftsfrämjandet Stenungsund',
      supporting: ['Stenungsunds kommun (kultur & fritid)', 'Astronomisk förening', 'Naturskyddsföreningen Stenungsund']
    },
    cost: 'Liten',
    timeline: 'Quick win',
    targetGroup: 'Alla',
    season: 'Höst',
    location: 'Ramsön naturreservat',
    sustainability: { social: 4, ecological: 3, economic: 1 },
    associations: ['Friluftsfrämjandet Stenungsund', 'Naturskyddsföreningen Stenungsund'],
    type: 'Event'
  },
  {
    id: 67,
    themeId: 7,
    title: 'Kanotled inlandet',
    subtitle: 'Paddla på sjöarna i inlandet',
    story: 'Du sjösätter kanoten vid Svenshögens brygga och paddlar in i tystnaden. Sjön speglar tallarna och en häger lyfter framför dig. Vid iordningställda rastplatsen grillar du lunch innan du paddlar vidare till nästa sjö.',
    what: 'En markerad kanotled som kopplar ihop sjöar i inlandet med portage-sträckor emellan. Leden har iordningställda startplatser, rastplatser och kartmaterial.',
    why: 'Havet får all uppmärksamhet men inlandets sjöar är dolda pärlor. En kanotled lyfter fram dessa och ger ett lugnt paddlingsalternativ som passar familjer och nybörjare.',
    who: {
      primary: 'Stenungsunds kommun (samhällsbyggnad)',
      supporting: ['Svenska Kanotförbundet', 'Friluftsfrämjandet Stenungsund', 'Södra Bohuslän Turism']
    },
    cost: 'Medel',
    timeline: 'Medel',
    targetGroup: 'Alla',
    season: 'Sommar',
    location: 'Sjöar i inlandet kring Svenshögen',
    sustainability: { social: 3, ecological: 3, economic: 3 },
    associations: ['Svenska Kanotförbundet', 'Friluftsfrämjandet Stenungsund', 'Södra Bohuslän Turism'],
    type: 'Infrastruktur'
  },
  {
    id: 68,
    themeId: 7,
    title: 'Naturens år',
    subtitle: '12 naturteman, ett per månad med guidade turer',
    story: 'Det är mars och månadens tema är "Vårens första tecken". Du går med guiden längs ån och hittar tussilago, hör trasten sjunga och ser att björken börjar knoppas. Varje månad ger dig nya ögon för det du alltid gått förbi.',
    what: 'Ett årsprogram med tolv naturteman — ett per månad. Varje månad erbjuds guidade turer, föreläsningar och tips på egen utforskning. Teman kan vara svampar, fåglar, insekter eller stjärnor.',
    why: 'Naturen förändras hela tiden men de flesta missar det. Naturens år ger struktur och inspiration att upptäcka naturen året runt. Det bygger kunskap och skapar gemenskap kring det vi alla delar.',
    who: {
      primary: 'Naturskyddsföreningen Stenungsund',
      supporting: ['Friluftsfrämjandet Stenungsund', 'Stenungsunds bibliotek', 'Stenungsunds kommun']
    },
    cost: 'Liten',
    timeline: 'Quick win',
    targetGroup: 'Alla',
    season: 'Året runt',
    location: 'Olika naturområden i kommunen',
    sustainability: { social: 3, ecological: 5, economic: 1 },
    associations: ['Naturskyddsföreningen Stenungsund', 'Friluftsfrämjandet Stenungsund', 'Stenungsunds bibliotek'],
    type: 'Program'
  },
  {
    id: 69,
    themeId: 7,
    title: 'Friluftsbibliotek',
    subtitle: 'Låna utrustning på biblioteket — tält, kajak, spö',
    story: 'Du går till biblioteket och lånar en kajak, flytväst och vattentät säck. Allt gratis i tre dagar. Du hade aldrig köpt egen utrustning, men nu paddlar du för första gången och älskar det.',
    what: 'Biblioteket utökas med ett friluftsbibliotek där invånare kan låna friluftsutrustning. Tält, sovsäckar, kajaker, fiskespön, vandringsstavar och kikare finns att reservera online.',
    why: 'Friluftsutrustning är dyrt och tar plats. Ett friluftsbibliotek sänker tröskeln för alla att komma ut i naturen. Det är särskilt värdefullt för barnfamiljer och nyanlända som saknar utrustning.',
    who: {
      primary: 'Stenungsunds bibliotek',
      supporting: ['Friluftsfrämjandet Stenungsund', 'Stenungsunds kommun (kultur & fritid)', 'Naturskyddsföreningen Stenungsund']
    },
    cost: 'Medel',
    timeline: 'Medel',
    targetGroup: 'Alla',
    season: 'Året runt',
    location: 'Stenungsunds bibliotek',
    sustainability: { social: 5, ecological: 4, economic: 2 },
    associations: ['Stenungsunds bibliotek', 'Friluftsfrämjandet Stenungsund', 'Naturskyddsföreningen Stenungsund'],
    type: 'Tjänst'
  },
  {
    id: 70,
    themeId: 7,
    title: 'Skogsträdgård',
    subtitle: 'Gemensam odling med ätbara växter i skogsmiljö',
    story: 'Du plockar äpplen, hasselnötter och vinbär i skogsträdgården en septemberdag. Allt växer bland björkar och buskar, som en skog fast full av mat. Du tar med en korg hem och lovar att komma tillbaka och hjälpa till med beskärningen.',
    what: 'En skogsträdgård anläggs i kommunal mark där ätbara växter som fruktträd, bärbuskar och örter planteras i naturlig skogsmiljö. Alla är välkomna att plocka och hjälpa till med skötseln.',
    why: 'En skogsträdgård ger gratis frukt och bär, ökar biologisk mångfald och skapar en unik mötesplats. Det är ett konkret sätt att visa att hållbarhet kan vara vackert och gott.',
    who: {
      primary: 'Stenungsunds kommun (samhällsbyggnad)',
      supporting: ['Omställning Stenungsund', 'Naturskyddsföreningen Stenungsund', 'Studiefrämjandet']
    },
    cost: 'Liten',
    timeline: 'Medel',
    targetGroup: 'Alla',
    season: 'Året runt',
    location: 'Kommunal mark nära Stenungsunds centrum',
    sustainability: { social: 4, ecological: 5, economic: 2 },
    associations: ['Omställning Stenungsund', 'Naturskyddsföreningen Stenungsund', 'Studiefrämjandet'],
    type: 'Plats'
  }
];
