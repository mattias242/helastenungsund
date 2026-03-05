import type { Proposal } from '../types';

export const tema04: Proposal[] = [
  {
    id: 31,
    themeId: 4,
    title: 'Startupgarage',
    subtitle: 'Billiga lokaler för unga entreprenörer',
    story:
      'Du är 22 år och har en idé om en app. I startupgaraget vid stationen får du en arbetsplats, en mentor och tillgång till verktyg. Hyran är låg och du delar lokal med andra som också vågar satsa. Stenungsund blir din startpunkt.',
    what:
      'Billiga kontors- och verkstadslokaler nära stationen för unga som vill starta företag. Inkluderar mentorskap, nätverksträffar och grundläggande företagsrådgivning.',
    why:
      'Unga entreprenörer lämnar Stenungsund för att det saknas lokaler och stöd. Ett startupgarage ger dem en anledning att stanna och bygga sitt företag lokalt.',
    who: {
      primary: 'Stenungsunds kommun',
      supporting: ['Hogia', 'Företagarna Stenungsund', 'Nyföretagarcentrum'],
    },
    cost: 'Medel',
    timeline: 'Medel',
    targetGroup: 'Unga',
    season: 'Året runt',
    location: 'Stenungsund centrum',
    sustainability: { social: 4, ecological: 1, economic: 5 },
    associations: ['Nyföretagarcentrum', 'Företagarna Stenungsund'],
    type: 'Plats',
  },
  {
    id: 32,
    themeId: 4,
    title: 'Studentboende',
    subtitle: 'Bostäder nära stationen för unga',
    story:
      'Du har precis fått jobb på Borealis och behöver en bostad. Det nya studentboendet vid stationen har en ledig etta med rimlig hyra. Du flyttar in, cyklar till jobbet och tar tåget till Göteborg på helgerna. Det fungerar.',
    what:
      'Byggande av små, prisvärda bostäder nära stationen riktade till unga vuxna och studenter. Gemensamma ytor som kök, tvättstuga och umgängesrum.',
    why:
      'Unga lämnar kommunen för att det saknas bostäder de har råd med. Prisvärda bostäder nära kollektivtrafik gör det möjligt för unga att bo kvar.',
    who: {
      primary: 'Stenungsundshem',
      supporting: ['Stenungsunds kommun', 'Privata byggbolag', 'Trafikverket'],
    },
    cost: 'Stor',
    timeline: 'Långsiktig',
    targetGroup: 'Unga',
    season: 'Året runt',
    location: 'Stenungsund station',
    sustainability: { social: 5, ecological: 3, economic: 4 },
    associations: ['Stenungsundshem', 'Hyresgästföreningen'],
    type: 'Infrastruktur',
  },
  {
    id: 33,
    themeId: 4,
    title: 'Sommarjobb-garanti',
    subtitle: 'Alla 16-åringar erbjuds sommarjobb',
    story:
      'Du fyller 16 i vår och har redan fått besked: du har sommarjobb i tre veckor. Du ska hjälpa till i stadsparken, plantera blommor och måla bänkar. Dina kompisar jobbar på fritidsgården och i biblioteket. Alla har fått en plats.',
    what:
      'Kommunen garanterar alla 16-åringar i Stenungsund tre veckors sommarjobb. Jobben sprids över kommunala verksamheter, föreningar och lokala företag.',
    why:
      'Ett första jobb ger erfarenhet, självförtroende och egen inkomst. Garantin visar att samhället satsar på sina unga och ger alla samma chans.',
    who: {
      primary: 'Stenungsunds kommun',
      supporting: ['Lokala företag', 'Föreningar', 'Arbetsförmedlingen'],
    },
    cost: 'Medel',
    timeline: 'Medel',
    targetGroup: 'Unga',
    season: 'Sommar',
    location: 'Hela kommunen',
    sustainability: { social: 5, ecological: 1, economic: 4 },
    associations: ['Företagarna Stenungsund', 'Arbetsförmedlingen'],
    type: 'Program',
  },
  {
    id: 34,
    themeId: 4,
    title: 'Ungdomsråd med makt',
    subtitle: 'Riktig budget att bestämma över',
    story:
      'Du sitter i ungdomsrådet och har precis röstat igenom en satsning på en skatepark. Det är inte en låtsasövning — ni har en halv miljon att fördela och kommunstyrelsen lyssnar. Din röst räknas på riktigt.',
    what:
      'Ett ungdomsråd med egen budget på 500 000 kronor per år. Rådet beslutar om projekt som rör ungas vardag: fritid, kultur, utemiljö och digitalt.',
    why:
      'Ungdomar engagerar sig när de har verkligt inflytande. Ett ungdomsråd med budget ger demokratisk träning och skapar projekt som faktiskt möter ungas behov.',
    who: {
      primary: 'Stenungsunds kommun',
      supporting: ['Nösnäsgymnasiet', 'Fritidsgårdarna', 'Ungdomsorganisationer'],
    },
    cost: 'Medel',
    timeline: 'Quick win',
    targetGroup: 'Unga',
    season: 'Året runt',
    location: 'Stenungsund centrum',
    sustainability: { social: 5, ecological: 1, economic: 2 },
    associations: ['Nösnäsgymnasiet', 'Sveriges Ungdomsråd'],
    type: 'Program',
  },
  {
    id: 35,
    themeId: 4,
    title: 'Digital skaparverkstad',
    subtitle: '3D-printing, video och musik i Fregatten',
    story:
      'Du går in på Fregatten efter skolan och sätter dig vid en dator med musikprogram. Bredvid dig 3D-printar någon en prototyp till ett skolprojekt. I nästa rum spelar de in en podcast. Allt är gratis och öppet för alla under 25.',
    what:
      'En skaparverkstad i Fregatten med 3D-skrivare, videoutrustning, musikstudio och datorplatser. Öppet efter skoltid med handledare på plats. Workshops varje vecka.',
    why:
      'Digitalt skapande är framtidens kompetens men utrustningen är dyr. En öppen verkstad ger alla unga tillgång oavsett ekonomi och inspirerar till kreativitet.',
    who: {
      primary: 'Kulturhuset Fregatten',
      supporting: ['Stenungsunds kommun', 'Hogia', 'Kulturskolan'],
    },
    cost: 'Medel',
    timeline: 'Medel',
    targetGroup: 'Unga',
    season: 'Året runt',
    location: 'Kulturhuset Fregatten',
    sustainability: { social: 5, ecological: 1, economic: 3 },
    associations: ['Kulturskolan Stenungsund', 'Hogia'],
    type: 'Plats',
  },
  {
    id: 36,
    themeId: 4,
    title: 'Mentorprogram',
    subtitle: 'Lokala företagare coachar unga',
    story:
      'Du träffar din mentor varannan vecka på en fika. Hon driver ett eget företag och hjälper dig förstå hur arbetslivet fungerar. Hon ställer frågor du aldrig tänkt på och du börjar se möjligheter du inte visste fanns.',
    what:
      'Ett mentorprogram där lokala företagare och yrkespersoner kopplas ihop med gymnasieelever och unga vuxna. Programmet pågår i ett läsår med regelbundna träffar.',
    why:
      'Många unga saknar vuxna förebilder utanför familjen. Mentorskap stärker självförtroende, ger kontaktnät och ökar chansen att unga hittar sin väg.',
    who: {
      primary: 'Stenungsunds kommun',
      supporting: ['Företagarna Stenungsund', 'Nösnäsgymnasiet', 'Rotary Stenungsund'],
    },
    cost: 'Liten',
    timeline: 'Quick win',
    targetGroup: 'Unga',
    season: 'Året runt',
    location: 'Hela kommunen',
    sustainability: { social: 5, ecological: 1, economic: 3 },
    associations: ['Rotary Stenungsund', 'Företagarna Stenungsund'],
    type: 'Program',
  },
  {
    id: 37,
    themeId: 4,
    title: 'Festivalen',
    subtitle: 'Ungdomsdriven musikfestival i Stenungsund',
    story:
      'Det är en fredag i augusti och du har jobbat med festivalen hela sommaren. Nu står du backstage och ser publiken strömma in. Ditt band spelar om en timme. Du har bokat artister, gjort affischer och byggt scenen. Det är din festival.',
    what:
      'En årlig musikfestival helt driven av ungdomar. Unga planerar, bokar, marknadsför och genomför festivalen med stöd av vuxna handledare.',
    why:
      'En egen festival ger unga ansvar, kompetens och stolthet. Festivalen skapar en händelse som sätter Stenungsund på kartan och lockar besökare.',
    who: {
      primary: 'Ungdomsrådet',
      supporting: ['Stenungsunds kommun', 'Kulturhuset Fregatten', 'Lokala musiker'],
    },
    cost: 'Medel',
    timeline: 'Medel',
    targetGroup: 'Unga',
    season: 'Sommar',
    location: 'Stenungsund centrum',
    sustainability: { social: 5, ecological: 1, economic: 3 },
    associations: ['Kulturskolan Stenungsund', 'Studiefrämjandet'],
    type: 'Event',
  },
  {
    id: 38,
    themeId: 4,
    title: 'Mötesplats Kvällen',
    subtitle: 'Fritidsgård med öppet till 22 för äldre tonåringar',
    story:
      'Det är en onsdagskväll klockan nio och du sitter i soffan på Mötesplats Kvällen. Du spelar brädspel med kompisar medan andra spelar musik i rummet intill. Det finns ingenstans att vara på kvällen i Stenungsund — förutom här.',
    what:
      'En fritidsgård riktad till 16-19-åringar med öppet till 22 på vardagskvällar. Aktiviteter som musik, spel, filmvisning och samtal. Trygga vuxna på plats.',
    why:
      'Äldre tonåringar faller mellan stolarna — för gamla för fritidsgården, för unga för krogen. En kvällsöppen mötesplats fyller ett tomrum och minskar utanförskap.',
    who: {
      primary: 'Stenungsunds kommun',
      supporting: ['Hasselgården', 'Stora Högagården', 'Fältgruppen'],
    },
    cost: 'Medel',
    timeline: 'Medel',
    targetGroup: 'Unga',
    season: 'Året runt',
    location: 'Hasselgården',
    sustainability: { social: 5, ecological: 1, economic: 2 },
    associations: ['Hasselgården', 'KFUM Stenungsund'],
    type: 'Plats',
  },
  {
    id: 39,
    themeId: 4,
    title: 'Praktikveckor hos Hogia',
    subtitle: 'Tech-praktik på lokala IT-företag',
    story:
      'Du sitter framför skärmen på Hogias kontor och skriver din första riktiga kod i ett projekt som används av tusentals kunder. Din handledare visar hur teamet jobbar och du inser att du inte behöver flytta till Göteborg för att jobba med tech.',
    what:
      'Praktikveckor för gymnasieelever på Hogia och andra lokala IT-företag. Eleverna deltar i riktiga projekt under handledning och får inblick i tech-branschen.',
    why:
      'Stenungsund har IT-företag men ungdomar vet inte om det. Praktik visar att tech-karriär finns lokalt och ger företagen kontakt med framtida medarbetare.',
    who: {
      primary: 'Hogia',
      supporting: ['Nösnäsgymnasiet', 'Lokala IT-företag', 'Stenungsunds kommun'],
    },
    cost: 'Liten',
    timeline: 'Quick win',
    targetGroup: 'Unga',
    season: 'Året runt',
    location: 'Hogia, Stenungsund',
    sustainability: { social: 4, ecological: 1, economic: 4 },
    associations: ['Hogia', 'Nösnäsgymnasiet'],
    type: 'Program',
  },
  {
    id: 40,
    themeId: 4,
    title: 'Ungas röst',
    subtitle: 'Digital plattform där unga föreslår och röstar',
    story:
      'Du öppnar appen och ser att ditt förslag om en utomhusgym fått 200 röster. Det ligger tvåa i omröstningen. Du delar länken till kompisar och ber dem rösta. Nästa vecka presenteras vinnaren för kommunstyrelsen.',
    what:
      'En digital plattform där unga i Stenungsund kan lägga förslag, diskutera och rösta om vad kommunen ska satsa på. De mest populära förslagen tas vidare till ungdomsrådet.',
    why:
      'Unga är digitalt aktiva men saknar kanaler till kommunen. En plattform gör det enkelt att delta och ger beslutsfattare direkt input från unga.',
    who: {
      primary: 'Stenungsunds kommun',
      supporting: ['Nösnäsgymnasiet', 'Ungdomsrådet', 'Lokala IT-företag'],
    },
    cost: 'Liten',
    timeline: 'Quick win',
    targetGroup: 'Unga',
    season: 'Året runt',
    location: 'Digitalt',
    sustainability: { social: 5, ecological: 1, economic: 2 },
    associations: ['Nösnäsgymnasiet', 'Sveriges Ungdomsråd'],
    type: 'Tjänst',
  },
];
