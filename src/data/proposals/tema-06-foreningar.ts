import type { Proposal } from '../types';

export const tema06: Proposal[] = [
  {
    id: 51,
    themeId: 6,
    title: 'Föreningarnas dag',
    subtitle: 'Stor mässa där alla föreningar visar upp sig',
    story: 'Det är en solig lördag i september och hela Stenungsunds torg är fullt av montrar. Du går runt med barnen och testar boxning, lär dig sticka och skriver upp er för en körövning. Barnen vill komma tillbaka nästa vecka redan.',
    what: 'En årlig mässa i centrum där alla föreningar i kommunen får visa upp sin verksamhet. Besökare kan prova aktiviteter, ställa frågor och anmäla sig direkt på plats.',
    why: 'Många vet inte vilka föreningar som finns. En gemensam dag gör det enkelt att hitta rätt och sänker tröskeln att börja med något nytt. Det stärker också samarbetet mellan föreningarna.',
    who: {
      primary: 'Stenungsunds kommun (kultur & fritid)',
      supporting: ['Föreningsrådet', 'Centrumföreningen Stenungsund']
    },
    cost: 'Liten',
    timeline: 'Quick win',
    targetGroup: 'Alla',
    season: 'Höst',
    location: 'Stenungsunds torg',
    sustainability: { social: 5, ecological: 1, economic: 2 },
    associations: ['Föreningsrådet', 'Centrumföreningen Stenungsund', 'Studieförbund'],
    type: 'Event'
  },
  {
    id: 52,
    themeId: 6,
    title: 'Generationsbryggan',
    subtitle: 'Unga och äldre möts genom gemensamma aktiviteter',
    story: 'Du är 78 år och sitter med en 14-åring som visar dig hur man redigerar film på en surfplatta. I utbyte berättar du om hur Stenungsund såg ut på 60-talet. Ni skrattar båda och bestämmer er för att ses igen nästa tisdag.',
    what: 'Ett program där unga och seniorer möts regelbundet för gemensamma aktiviteter. Det kan vara teknikhjälp, berättarkvällar, matlagning eller promenader.',
    why: 'Ensamhet är ett växande problem bland äldre, och unga saknar ofta kontakt med äldre generationer. Generationsbryggan bygger förståelse och minskar isolering för båda grupper.',
    who: {
      primary: 'Stenungsunds kommun (socialtjänsten)',
      supporting: ['Röda Korset Stenungsund', 'Hasselgården', 'PRO Stenungsund']
    },
    cost: 'Liten',
    timeline: 'Quick win',
    targetGroup: 'Alla',
    season: 'Året runt',
    location: 'Fregatten kulturhus',
    sustainability: { social: 5, ecological: 1, economic: 1 },
    associations: ['Röda Korset Stenungsund', 'PRO Stenungsund', 'Hasselgården'],
    type: 'Program'
  },
  {
    id: 53,
    themeId: 6,
    title: 'Kulturkvarter',
    subtitle: 'Samlade lokaler för kulturföreningar i centrum',
    story: 'Det är onsdag kväll och du hör musik från ett rum, ser en konstutställning i korridoren och känner doften av lera från keramikverkstaden. Allt under samma tak, mitt i Stenungsund.',
    what: 'Ett kvarter eller en byggnad i centrum där kulturföreningar samlas. Här finns replokaler, ateljéer, utställningsyta och en gemensam scen. Föreningarna delar på kostnader och utrustning.',
    why: 'Många kulturföreningar saknar bra lokaler. Genom att samla dem skapas en kreativ miljö där idéer korsar varandra. Det gör också kulturen mer synlig för invånarna.',
    who: {
      primary: 'Stenungsunds kommun (samhällsbyggnad)',
      supporting: ['Kulturföreningen Stenungsund', 'Studiefrämjandet', 'ABF Stenungsund']
    },
    cost: 'Stor',
    timeline: 'Långsiktig',
    targetGroup: 'Alla',
    season: 'Året runt',
    location: 'Stenungsunds centrum',
    sustainability: { social: 5, ecological: 1, economic: 3 },
    associations: ['Kulturföreningen Stenungsund', 'Studiefrämjandet', 'ABF Stenungsund'],
    type: 'Plats'
  },
  {
    id: 54,
    themeId: 6,
    title: 'Föreningspott',
    subtitle: 'Enkel ansökan för små projekt, snabba beslut',
    story: 'Du har en idé om att ordna en filmkväll utomhus för grannarna. Du fyller i en enkel ansökan på webben och inom en vecka har du fått 5 000 kronor till utrustning och fika. Det var inte svårare än så.',
    what: 'En kommunal pott med pengar för små föreningsprojekt. Ansökan är kort och enkel, och beslut fattas inom två veckor. Maxbelopp per projekt: 10 000 kronor.',
    why: 'Traditionella bidrag kräver ofta långa ansökningar och lång väntetid. En snabb pott gör det lättare för små föreningar och informella grupper att genomföra idéer. Det ökar engagemanget i hela kommunen.',
    who: {
      primary: 'Stenungsunds kommun (kultur & fritid)',
      supporting: ['Föreningsrådet', 'Leader Södra Bohuslän']
    },
    cost: 'Medel',
    timeline: 'Quick win',
    targetGroup: 'Alla',
    season: 'Året runt',
    location: 'Hela kommunen',
    sustainability: { social: 4, ecological: 1, economic: 2 },
    associations: ['Föreningsrådet', 'Leader Södra Bohuslän'],
    type: 'Tjänst'
  },
  {
    id: 55,
    themeId: 6,
    title: 'Idrottens allaktivitetshus',
    subtitle: 'Gemensam hall för flera sporter',
    story: 'Det är lördag morgon och i samma byggnad spelar ungarna padel, äldre gör yoga och en grupp nyanlända testar innebandy. I caféet möts tränare från olika föreningar och planerar en gemensam sommarcamp.',
    what: 'En stor idrottshall som rymmer flera sporter under samma tak. Padel, klättring, kampsport, dans och bollsporter samsas om ytan. Hallen drivs av föreningarna gemensamt.',
    why: 'Stenungsund behöver fler halltider. En allaktivitetshall samlar idrotten och gör det enkelt att prova nya sporter. Det minskar också behovet av dyra specialhallar.',
    who: {
      primary: 'Stenungsunds kommun (samhällsbyggnad)',
      supporting: ['SISU Idrottsutbildarna', 'Stenungsunds IF', 'RF-SISU Västra Götaland']
    },
    cost: 'Stor',
    timeline: 'Långsiktig',
    targetGroup: 'Alla',
    season: 'Året runt',
    location: 'Stenungsund, nära centrum',
    sustainability: { social: 5, ecological: 2, economic: 3 },
    associations: ['Stenungsunds IF', 'SISU Idrottsutbildarna', 'RF-SISU Västra Götaland'],
    type: 'Infrastruktur'
  },
  {
    id: 56,
    themeId: 6,
    title: 'Integration genom idrott',
    subtitle: 'Föreningar som aktivt rekryterar nyanlända',
    story: 'Du har bott i Stenungsund i tre månader. En tränare från fotbollsklubben kommer till ditt boende och bjuder in till träning. Nu har du lagkamrater, och på matchen i helgen hejar dina nya vänner på dig.',
    what: 'Ett program där idrottsföreningar får stöd för att aktivt rekrytera och välkomna nyanlända. Avgifterna subventioneras och tränare får utbildning i inkluderande ledarskap.',
    why: 'Idrott är ett av de snabbaste sätten att bygga gemenskap och lära sig språket. Genom att aktivt söka upp nyanlända blir föreningarna en viktig del av integrationen.',
    who: {
      primary: 'Stenungsunds kommun (integration)',
      supporting: ['SISU Idrottsutbildarna', 'Stenungsunds FK', 'Röda Korset Stenungsund']
    },
    cost: 'Medel',
    timeline: 'Medel',
    targetGroup: 'Alla',
    season: 'Året runt',
    location: 'Idrottsanläggningar i hela kommunen',
    sustainability: { social: 5, ecological: 1, economic: 2 },
    associations: ['Stenungsunds FK', 'SISU Idrottsutbildarna', 'Röda Korset Stenungsund'],
    type: 'Program'
  },
  {
    id: 57,
    themeId: 6,
    title: 'Digital föreningsguide',
    subtitle: 'Hitta rätt förening på en sajt',
    story: 'Du har precis flyttat till Stenungsund och vill hitta en kör att sjunga i. Du går in på foreningar.stenungsund.se, filtrerar på musik och ser tre alternativ med tider, platser och kontaktpersoner. Du skickar ett meddelande direkt.',
    what: 'En webbplats där alla föreningar i kommunen presenteras med aktuell information. Besökare kan söka på intresse, ålder och ort. Föreningarna uppdaterar själva sin profil.',
    why: 'Det är svårt att få överblick över föreningslivet idag. En digital guide gör det enkelt att hitta rätt, särskilt för nyinflyttade och unga som söker aktiviteter.',
    who: {
      primary: 'Stenungsunds kommun (kultur & fritid)',
      supporting: ['Föreningsrådet', 'Stenungsunds bibliotek']
    },
    cost: 'Liten',
    timeline: 'Medel',
    targetGroup: 'Alla',
    season: 'Året runt',
    location: 'Online (stenungsund.se)',
    sustainability: { social: 4, ecological: 1, economic: 1 },
    associations: ['Föreningsrådet', 'Stenungsunds bibliotek'],
    type: 'Tjänst'
  },
  {
    id: 58,
    themeId: 6,
    title: 'Volontärpool',
    subtitle: 'Gemensam plattform för att hitta volontärer',
    story: 'Föreningen behöver fem personer som kan hjälpa till vid loppet på söndag. Du lägger ut en förfrågan på volontärpoolen och inom ett dygn har sju personer anmält sig. Bland dem är en pensionär och två gymnasieelever.',
    what: 'En digital plattform där föreningar kan söka volontärer och privatpersoner kan erbjuda sin tid. Matchning sker utifrån intresse, tillgänglighet och kompetens.',
    why: 'Många vill hjälpa till men vet inte var. Föreningar kämpar med att hitta funktionärer. En gemensam pool löser problemet för båda sidor och gör volontärarbete mer synligt.',
    who: {
      primary: 'Stenungsunds kommun (kultur & fritid)',
      supporting: ['Volontärbyrån', 'Föreningsrådet', 'Röda Korset Stenungsund']
    },
    cost: 'Liten',
    timeline: 'Medel',
    targetGroup: 'Alla',
    season: 'Året runt',
    location: 'Online (stenungsund.se)',
    sustainability: { social: 5, ecological: 1, economic: 1 },
    associations: ['Volontärbyrån', 'Föreningsrådet', 'Röda Korset Stenungsund'],
    type: 'Tjänst'
  },
  {
    id: 59,
    themeId: 6,
    title: 'Föreningsfika',
    subtitle: 'Månatligt nätverkande mellan föreningarna',
    story: 'Du sitter med en kaffe och en bulle i Fregattens foajé. Bredvid dig sitter en boxningstränare och en ordförande i hembygdsföreningen. Ni kommer på att ni kan ordna en gemensam utomhusdag i sommar.',
    what: 'Ett månatligt frukostmöte där föreningsaktiva träffas, delar erfarenheter och hittar samarbeten. Kommunen bjuder på fika och ger korta uppdateringar om bidrag och lokaler.',
    why: 'Föreningar jobbar ofta i sina egna bubblor. Genom regelbundna träffar uppstår nya samarbeten och idéer. Det stärker hela föreningslivet och minskar dubbelarbete.',
    who: {
      primary: 'Stenungsunds kommun (kultur & fritid)',
      supporting: ['Föreningsrådet', 'Fregatten kulturhus']
    },
    cost: 'Liten',
    timeline: 'Quick win',
    targetGroup: 'Vuxna',
    season: 'Året runt',
    location: 'Fregatten kulturhus',
    sustainability: { social: 4, ecological: 1, economic: 1 },
    associations: ['Föreningsrådet', 'Fregatten kulturhus'],
    type: 'Event'
  },
  {
    id: 60,
    themeId: 6,
    title: 'Familjeföreningar',
    subtitle: 'Aktiviteter där hela familjen deltar',
    story: 'Det är söndag och hela familjen är på väg till scouttorpet. Mamma paddlar, pappa grillar och barnen bygger en koja. Efteråt fikar ni med tre andra familjer. Det här gör ni varje månad nu.',
    what: 'Nya föreningsformer där hela familjen deltar tillsammans. Det kan vara friluftsliv, orientering, pyssel eller matlagning. Fokus ligger på gemenskap snarare än prestation.',
    why: 'Många familjer saknar gemensamma fritidsaktiviteter. Familjeföreningar ger både vuxna och barn en meningsfull hobby och bygger sociala nätverk mellan familjer.',
    who: {
      primary: 'Friluftsfrämjandet Stenungsund',
      supporting: ['Scouterna Stenungsund', 'Studieförbunden', 'Stenungsunds kommun']
    },
    cost: 'Liten',
    timeline: 'Quick win',
    targetGroup: 'Familjer',
    season: 'Året runt',
    location: 'Olika platser i kommunen',
    sustainability: { social: 5, ecological: 2, economic: 1 },
    associations: ['Friluftsfrämjandet Stenungsund', 'Scouterna Stenungsund', 'Studieförbunden'],
    type: 'Program'
  }
];
