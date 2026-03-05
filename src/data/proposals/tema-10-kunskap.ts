import type { Proposal } from '../types';

export const tema10Proposals: Proposal[] = [
  {
    id: 91,
    themeId: 10,
    title: 'Molekylverkstan expanderar',
    subtitle: 'Större science center med fler labb',
    story: 'Du kliver in i den nya flygeln på Molekylverkstan med ditt barn. Det doftar kemi och nyfikenhet. I ett labb bygger barn robotar, i ett annat gör de slime under mikroskop. Barnet vill bli forskare nu.',
    what: 'Molekylverkstan utökas med fler laboratorier, en permanent utställning om kemiklustret och utrymme för skolklasser. Centret blir ett nav för naturvetenskap i hela Bohuslän.',
    why: 'Molekylverkstan är redan en succé men lokalerna är för små. En expansion gör det möjligt att ta emot fler besökare och bygga starkare koppling mellan industrin och skolan.',
    who: {
      primary: 'Stenungsunds kommun (utbildning)',
      supporting: ['Borealis', 'Perstorp', 'INEOS Inovyn', 'Nouryon']
    },
    cost: 'Stor',
    timeline: 'Långsiktig',
    targetGroup: 'Barn',
    season: 'Året runt',
    location: 'Molekylverkstan, Stenungsund',
    sustainability: { social: 4, ecological: 3, economic: 4 },
    associations: ['Molekylverkstan', 'Kemiföretagen i Stenungsund'],
    type: 'Plats'
  },
  {
    id: 92,
    themeId: 10,
    title: 'Campus Stenungsund',
    subtitle: 'Högskolekurser lokalt i samarbete med GU och Chalmers',
    story: 'Du sitter i en föreläsningssal i Stenungsund och lyssnar på en professor från Chalmers. Kursen handlar om grön kemi och efter föreläsningen gör ni labbövningar på Molekylverkstan. Du pluggar högskola utan att flytta hemifrån.',
    what: 'Högskolekurser ges på plats i Stenungsund genom samarbete med Göteborgs universitet och Chalmers. Fokus på ämnen som kemi, teknik, hållbarhet och entreprenörskap — relevanta för kommunens näringsliv.',
    why: 'Att flytta till Göteborg är ett hinder för många som vill studera. Lokala högskolekurser ger fler chansen att utbilda sig och stärker kompetensförsörjningen till kemiklustret och lokalt näringsliv.',
    who: {
      primary: 'Stenungsunds kommun (utbildning)',
      supporting: ['Göteborgs universitet', 'Chalmers', 'Borealis', 'Hogia']
    },
    cost: 'Stor',
    timeline: 'Långsiktig',
    targetGroup: 'Unga',
    season: 'Året runt',
    location: 'Fregatten kulturhus / kommunala lokaler',
    sustainability: { social: 5, ecological: 2, economic: 5 },
    associations: ['Göteborgs universitet', 'Chalmers', 'Kemiföretagen i Stenungsund'],
    type: 'Program'
  },
  {
    id: 93,
    themeId: 10,
    title: 'Innovationshub',
    subtitle: 'Mötesplats för startups och etablerade företag',
    story: 'Du sitter i den ljusa coworking-lokalen och jobbar med din startup. Vid bordet bredvid sitter en ingenjör från Borealis som ger dig feedback på din idé. I eftermiddag kommer en investerare och lyssnar på tre pitchar.',
    what: 'En fysisk mötesplats med coworking, mötesrum och eventyta där startups, frilansare och etablerade företag kan mötas. Hubben erbjuder rådgivning, nätverk och koppling till kemiklustret.',
    why: 'Stenungsund har stora företag men saknar en plats där nya idéer möter erfarenhet. En innovationshub gör det enklare att starta företag lokalt och skapar nya samarbeten mellan nytt och etablerat.',
    who: {
      primary: 'Stenungsunds kommun (näringsliv)',
      supporting: ['Hogia', 'Borealis', 'Nyföretagarcentrum', 'Almi Väst']
    },
    cost: 'Medel',
    timeline: 'Medel',
    targetGroup: 'Vuxna',
    season: 'Året runt',
    location: 'Stenungsunds centrum',
    sustainability: { social: 3, ecological: 2, economic: 5 },
    associations: ['Nyföretagarcentrum', 'Almi Väst', 'Företagarna Stenungsund'],
    type: 'Plats'
  },
  {
    id: 94,
    themeId: 10,
    title: 'Kodklubb för barn',
    subtitle: 'Gratis programmeringskurser på biblioteket',
    story: 'Det är lördag förmiddag och tio barn sitter med laptops på biblioteket. De bygger sitt eget spel i Scratch och hjälper varandra med buggar. En elvaåring visar stolt upp sitt plattformsspel — hon har kodat helt själv.',
    what: 'Gratis kodklubbar för barn 8–15 år på Stenungsunds bibliotek. Utbildade volontärer och lärare leder veckovisa träffar där barn lär sig programmering genom att skapa spel och appar.',
    why: 'Programmering är en framtidskompetens men alla barn har inte tillgång hemma. En gratis kodklubb på biblioteket ger alla barn chansen att lära sig, oavsett bakgrund.',
    who: {
      primary: 'Stenungsunds bibliotek',
      supporting: ['Hogia', 'CoderDojo-nätverket', 'Stenungsunds kommun (utbildning)']
    },
    cost: 'Liten',
    timeline: 'Quick win',
    targetGroup: 'Barn',
    season: 'Året runt',
    location: 'Stenungsunds bibliotek',
    sustainability: { social: 4, ecological: 1, economic: 3 },
    associations: ['Stenungsunds bibliotek', 'Hogia', 'CoderDojo-nätverket'],
    type: 'Program'
  },
  {
    id: 95,
    themeId: 10,
    title: 'Industrins kunskapsprogram',
    subtitle: 'Öppna föreläsningar från kemiklustrets experter',
    story: 'Du sitter i Fregattens sal och en forskare från Perstorp berättar om hur de gör plast av koldioxid. Det är fascinerande och begripligt. Efteråt ställer du frågor och inser att världsledande forskning sker fem minuter från ditt hem.',
    what: 'En föreläsningsserie där experter från kemiklustret håller öppna, populärvetenskapliga föreläsningar för allmänheten. En gång i månaden, gratis, med fika efteråt.',
    why: 'Kemiklustret är världsledande men okänt för många invånare. Öppna föreläsningar bygger stolthet, ökar förståelsen för industrin och inspirerar unga att välja tekniska utbildningar.',
    who: {
      primary: 'Kemiföretagen i Stenungsund',
      supporting: ['Borealis', 'Perstorp', 'INEOS Inovyn', 'Nouryon', 'Stenungsunds kommun']
    },
    cost: 'Liten',
    timeline: 'Quick win',
    targetGroup: 'Alla',
    season: 'Året runt',
    location: 'Fregatten kulturhus',
    sustainability: { social: 4, ecological: 3, economic: 3 },
    associations: ['Kemiföretagen i Stenungsund', 'Molekylverkstan'],
    type: 'Event'
  },
  {
    id: 96,
    themeId: 10,
    title: 'Läxhjälp av studenter',
    subtitle: 'Högskolestudenter hjälper grundskoleelever',
    story: 'Du sitter i biblioteket efter skolan och en student från Chalmers förklarar matten du inte förstod på lektionen. Hon ritar en figur och plötsligt klickar det. Nästa prov går mycket bättre.',
    what: 'Ett program där högskolestudenter erbjuder gratis läxhjälp till grundskole- och gymnasieelever. Träffarna sker på biblioteket eller digitalt, med fokus på matte, naturvetenskap och svenska.',
    why: 'Alla barn har inte föräldrar som kan hjälpa med läxorna. Läxhjälp av studenter ger jämnare förutsättningar och inspirerar yngre elever att sikta på högre studier.',
    who: {
      primary: 'Stenungsunds kommun (utbildning)',
      supporting: ['Göteborgs universitet', 'Chalmers', 'Stenungsunds bibliotek', 'Röda Korset Stenungsund']
    },
    cost: 'Liten',
    timeline: 'Quick win',
    targetGroup: 'Barn',
    season: 'Året runt',
    location: 'Stenungsunds bibliotek',
    sustainability: { social: 5, ecological: 1, economic: 2 },
    associations: ['Röda Korset Stenungsund', 'Stenungsunds bibliotek'],
    type: 'Program'
  },
  {
    id: 97,
    themeId: 10,
    title: 'Makerspace',
    subtitle: 'Öppen verkstad med verktyg, 3D-skrivare, laser',
    story: 'Du står vid 3D-skrivaren och ser ditt eget designade mobilställ ta form lager för lager. Bredvid dig lasergraverrar någon ett träskilt med sitt företagsnamn. En tonåring löder ihop sin första robot. Allt är möjligt här.',
    what: 'En öppen verkstad där invånare kan använda verktyg som 3D-skrivare, laserskärare, symaskin och elektronikutrustning. Kurser och handledning erbjuds regelbundet.',
    why: 'Inte alla har verktyg eller verkstad hemma. Ett makerspace demokratiserar skapande och ger alla — från hobbyister till blivande entreprenörer — tillgång till modern teknik.',
    who: {
      primary: 'Stenungsunds kommun (kultur & fritid)',
      supporting: ['Stenungsunds bibliotek', 'Hogia', 'Studiefrämjandet']
    },
    cost: 'Medel',
    timeline: 'Medel',
    targetGroup: 'Alla',
    season: 'Året runt',
    location: 'Stenungsunds centrum eller biblioteket',
    sustainability: { social: 4, ecological: 2, economic: 4 },
    associations: ['Stenungsunds bibliotek', 'Hogia', 'Studiefrämjandet'],
    type: 'Plats'
  },
  {
    id: 98,
    themeId: 10,
    title: 'Forskarfredag',
    subtitle: 'Årligt evenemang där forskare möter allmänheten',
    story: 'Det är en fredag i september och Fregatten är full av nyfikna besökare. I ett rum visar en klimatforskare hur havet stiger, i ett annat bygger barn vulkaner som sprutar. Kemister från Borealis visar experiment som luktar och smäller.',
    what: 'Ett årligt evenemang inspirerat av den europeiska Forskarnatten. Forskare från industrin och universiteten visar experiment, håller miniföreläsningar och svarar på frågor. Gratis och öppet för alla.',
    why: 'Forskning kan kännas avlägset. Forskarfredag gör vetenskap tillgänglig och rolig, inspirerar barn och unga, och visar att Stenungsund är en plats där kunskap värderas högt.',
    who: {
      primary: 'Stenungsunds kommun (utbildning)',
      supporting: ['Molekylverkstan', 'Borealis', 'Perstorp', 'Göteborgs universitet']
    },
    cost: 'Medel',
    timeline: 'Medel',
    targetGroup: 'Familjer',
    season: 'Höst',
    location: 'Fregatten kulturhus',
    sustainability: { social: 4, ecological: 3, economic: 3 },
    associations: ['Molekylverkstan', 'Kemiföretagen i Stenungsund', 'Göteborgs universitet'],
    type: 'Event'
  },
  {
    id: 99,
    themeId: 10,
    title: 'Entreprenörskola',
    subtitle: 'Kurs för den som vill starta eget',
    story: 'Du har alltid drömt om att starta en restaurang. Nu sitter du i entreprenörskolan och lär dig skriva affärsplan, söka tillstånd och marknadsföra dig. Kursledaren är en lokal företagare som gjort samma resa. Om tre månader öppnar du.',
    what: 'En kvällskurs i entreprenörskap där deltagare lär sig allt från affärsplan till bokföring. Kursen ges i samarbete med Nyföretagarcentrum och lokala företagare som delar erfarenheter.',
    why: 'Många har affärsidéer men saknar kunskap om hur man startar. En lokal entreprenörskola sänker tröskeln och ger det stöd som behövs för att gå från idé till företag.',
    who: {
      primary: 'Nyföretagarcentrum',
      supporting: ['Stenungsunds kommun (näringsliv)', 'Almi Väst', 'Företagarna Stenungsund']
    },
    cost: 'Liten',
    timeline: 'Quick win',
    targetGroup: 'Vuxna',
    season: 'Året runt',
    location: 'Fregatten kulturhus',
    sustainability: { social: 3, ecological: 1, economic: 5 },
    associations: ['Nyföretagarcentrum', 'Almi Väst', 'Företagarna Stenungsund'],
    type: 'Program'
  },
  {
    id: 100,
    themeId: 10,
    title: 'Biblioteket som hubb',
    subtitle: 'Utöka biblioteket till medborgarcenter med café',
    story: 'Du går in på det nya biblioteket och beställer en kaffe i caféet. Sedan sätter du dig vid en arbetsplats med snabbt wifi och jobbar en stund. Du bläddrar i en bok, bokar en tid med medborgarrådgivaren och hämtar en reserverad kajak från friluftsbiblioteket.',
    what: 'Stenungsunds bibliotek utökas till ett medborgarcenter med café, coworking, medborgarrådgivning och friluftsbibliotek. Öppettiderna utökas och lokalen renoveras för att bli kommunens vardagsrum.',
    why: 'Biblioteket är redan en av kommunens mest besökta platser. Genom att utöka funktionerna blir det en ännu starkare mötesplats som samlar service, kunskap och gemenskap under ett tak.',
    who: {
      primary: 'Stenungsunds kommun (kultur & fritid)',
      supporting: ['Stenungsunds bibliotek', 'Lokala caféföretagare', 'Studieförbunden']
    },
    cost: 'Stor',
    timeline: 'Långsiktig',
    targetGroup: 'Alla',
    season: 'Året runt',
    location: 'Stenungsunds bibliotek',
    sustainability: { social: 5, ecological: 2, economic: 3 },
    associations: ['Stenungsunds bibliotek', 'Studieförbunden'],
    type: 'Plats'
  }
];
