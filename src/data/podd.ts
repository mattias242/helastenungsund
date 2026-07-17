export interface PoddAvsnitt {
  nr: number;
  slug: string;
  titel: string;
  person: string;
  roll: string;
  ort: string;
  beskrivning: string;
  langdMin: number;
  bild: string;
  audio: string;
}

export const serieTitel = 'Stenungsund 2035';

export const serieBeskrivning =
  'Sju fiktiva invånare berättar hur det är att bo i varsin del av Stenungsunds kommun ' +
  'år 2035 — om Vision 2035 blivit verklighet. Personliga monologer varvade med ' +
  'originalmusik, från Ödsmål i norr till Jörlanda i söder.';

export const aiNotis =
  'Serien är fiktion. Röster och musik är AI-genererade (ElevenLabs, Suno); ' +
  'personerna är påhittade, visionen är kommunens egen.';

export const poddAvsnitt: PoddAvsnitt[] = [
  {
    nr: 1,
    slug: 'odsmal-hanna',
    titel: 'Vägen ner till fjorden',
    person: 'Hanna Lind',
    roll: 'Förskollärare, 38',
    ort: 'Ödsmål',
    beskrivning:
      'Förskolläraren Hanna Lind, trettioåtta, lämnade en trea i Göteborg för ett radhus i ' +
      'Ödsmål — femton minuter från havet, femton meter från skogen. Om vad som gör en ort ' +
      'barnvänlig på riktigt: inte lekplatserna, utan vuxna som bestämt sig för att barnen hör ' +
      'till. En berättelse om pinnar, strandkrabbor och tryggheten i en ort som lever.',
    langdMin: 12,
    bild: '/podd/bilder/01_odsmal-hanna.webp',
    audio: '/podd/audio/01_odsmal-hanna.mp3',
  },
  {
    nr: 2,
    slug: 'svenshogen-gunnar',
    titel: 'Rälsen genom skogen',
    person: 'Gunnar Högberg',
    roll: 'Pensionerad lokförare, 74',
    ort: 'Svenshögen',
    beskrivning:
      'Gunnar Högberg, sjuttiofyra, körde tåg på Bohusbanan i fyrtio år och har sett sin ' +
      'stationsort vid Hällungen nästan tyna bort — och få tillbaka framtiden. Om täta tåg, ' +
      'servicepunkten i affären, schackpartier utan nåd mot en elvaåring, och varför ensamhet ' +
      'också är en infrastrukturfråga.',
    langdMin: 11,
    bild: '/podd/bilder/02_svenshogen-gunnar.webp',
    audio: '/podd/audio/02_svenshogen-gunnar.mp3',
  },
  {
    nr: 3,
    slug: 'ucklum-marianne',
    titel: 'Jorden minns',
    person: 'Marianne Dalkvist',
    roll: 'Lantbrukare, 52',
    ort: 'Ucklum',
    beskrivning:
      'Lantbrukaren Marianne Dalkvist, femtiotvå, driver gården hennes farfar köpte. Om ' +
      'ängsmarker som surrar igen, en våtmark som tranorna hittade före fakturan, gårdsbutiken ' +
      'som serverar gemenskap — och om bygden där ordet avfolkning inte hörts på tio år.',
    langdMin: 12,
    bild: '/podd/bilder/03_ucklum-marianne.webp',
    audio: '/podd/audio/03_ucklum-marianne.mp3',
  },
  {
    nr: 4,
    slug: 'spekerod-elias',
    titel: 'Världsmedborgare',
    person: 'Elias Vendel',
    roll: 'Gymnasieelev, 17',
    ort: 'Spekeröd',
    beskrivning:
      'Elias Vendel, sjutton, går klusterspåret på gymnasiet och praktiserar i science parken, ' +
      'där hans handledare gör plast av koldioxid. Om att växa upp i en ort som byggdes klokt, ' +
      'ett UF-företag med båtpool, och varför en sjuttonåring säger det ingen sjuttonåring ' +
      'brukar säga: jag kommer nog tillbaka.',
    langdMin: 11,
    bild: '/podd/bilder/04_spekerod-elias.webp',
    audio: '/podd/audio/04_spekerod-elias.mp3',
  },
  {
    nr: 5,
    slug: 'jorlanda-amina',
    titel: 'Fiber och saltvatten',
    person: 'Amina Idris',
    roll: 'Systemutvecklare, 29',
    ort: 'Jörlanda',
    beskrivning:
      'Systemutvecklaren Amina Idris, tjugonio, bytte en etta i Stockholm mot en tvåa med ' +
      'balkong mot fälten i barndomens Jörlanda. Om IT-klustret vägg i vägg med kemiindustrin, ' +
      'bostäder unga har råd med, och fotbollsklubben som fångar en innan ensamheten gör det.',
    langdMin: 10,
    bild: '/podd/bilder/05_jorlanda-amina.webp',
    audio: '/podd/audio/05_jorlanda-amina.mp3',
  },
  {
    nr: 6,
    slug: 'stora-hoga-fredrik',
    titel: 'Sju och fjorton',
    person: 'Fredrik Alms',
    roll: 'Egenföretagare, 45',
    ort: 'Stora Höga',
    beskrivning:
      'Egenföretagaren Fredrik Alms, fyrtiofem, satt åtta år i bilkö på E6 innan dubbelspåret ' +
      'kom. Om en tidtabell man kan lita på, företagslotsen som faktiskt svarar i telefon, och ' +
      'trehundra timmar om året som växlades in i bortamatcher, löprundor och middagar.',
    langdMin: 9,
    bild: '/podd/bilder/06_stora-hoga-fredrik.webp',
    audio: '/podd/audio/06_stora-hoga-fredrik.mp3',
  },
  {
    nr: 7,
    slug: 'centrum-kjell',
    titel: 'Ljusen över sundet',
    person: 'Kjell Antonsson',
    roll: 'Krögare, 61',
    ort: 'Stenungsund centrum',
    beskrivning:
      'Krögaren Kjell Antonsson, sextioett, hämtar dagens havskräftor hos fiskhandlaren som ' +
      'han gjort i trettio år — men numera vänder sig staden mot vattnet. Om torget som ' +
      'vaknade, kemiklustret som blev besöksmål, bohuslänsk mathistoria på menyn, och den ' +
      'röda tråden genom hela serien: en vision som togs på allvar. Seriens avslutning.',
    langdMin: 13,
    bild: '/podd/bilder/07_centrum-kjell.webp',
    audio: '/podd/audio/07_centrum-kjell.mp3',
  },
];
