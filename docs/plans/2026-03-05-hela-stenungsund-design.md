# Hela Stenungsund — Designdokument

**Datum:** 2026-03-05
**Status:** Godkänd

## Koncept

"100 forslag for Hela Stenungsund" — en oberoende, opolitisk plattform med 100 konkreta ideer for att vitalisera hela kommunen. Inspirerad av HBG City 100 (Helsingborg).

- **Initiativtagare:** Centerpartiet Stenungsund — men plattformen ar oberoende och opolitisk
- **Syfte:** Alla partier och aktorer uppmuntras hamta ideer och bygga politik/verksamhet runt dem
- **Principer:** Konkret, Positivt, Inkluderande, Genomforbart
- **Perspektiv:** "Utifran och in" — vad vill manniskor uppleva?
- **Sprak:** Lattlast svenska, korta meningar, vardagligt

## 10 Teman (10 forslag per tema = 100 totalt)

| # | Tema | Karnfraga |
|---|------|-----------|
| 1 | Centrum & motesplatser | "Varfor ska jag ga till centrum idag?" |
| 2 | Havet & kusten | "Hur lever vi mer med vattnet runt oss?" |
| 3 | Grona omstallningen | "Hur kan industrin gora hela Stenungsund starkare?" |
| 4 | Unga & framtid | "Varfor ska jag stanna i Stenungsund efter gymnasiet?" |
| 5 | Mat & smak | "Var hittar jag de basta smakerna?" |
| 6 | Foreningar & gemenskap | "Hur gor vi fler delaktiga?" |
| 7 | Natur & friluftsliv | "Vad finns att upptacka utanfor asfalten?" |
| 8 | Byar & orter | "Hur kan Odesmal, Jorlanda, Stora Hoga och Svenshogen blomstra?" |
| 9 | Koppla ihop | "Hur binder vi samman Stenungsund — med varandra och varlden?" |
| 10 | Kunskap & innovation | "Hur blir Stenungsund en plats man vaxer i?" |

## Teknik

- **Framework:** Astro + React-oar (islands architecture)
- **Styling:** Tailwind CSS
- **Deploy:** Statiska filer, nginx pa Synology NAS (eller Web Station)
- **Ingen backend** — allt ar statiskt genererat vid build

## Sidor

- **Hem** — Hero, statistik, 10 teman, utvalda forslag, arshjul
- **Utforska** — Alla 100 forslag med sok/filter
- **Tema-sidor** (10 st) — Varje tema med sina 10 forslag
- **Forslagssidor** (100 st) — Vad/Varfor/Vem/Kostnad/Kopplingar
- **Dashboard** — Oversikt med statistik
- **Arshjul** — Vad hander varje manad
- **Om** — Oberoende initiativ, principer, kontakt

## Bilder

AI-genererade bilder med Stenungsund-specifik pragel:
- Orter: Stenungsund centrum, Odesmal, Svenshogen, Hallungen, Stora Hoga, Jorlanda
- Industri: Petrokemiklustret, Borealis, Perstorp, storindustri
- Foretag: Hogia, digitala foretag, sma och medelstora foretag
- Grona naringar, hallbar energiproduktion
- Natur: Bad, fiske (havsoring, makrill), kust, klippor
- Landmarken: Tjornbron, gasthamn, Stenungson
- INTE generiska Bohuslan-fiskebyar

## Forslagsstruktur (per forslag)

- Vad — Kort beskrivning
- Varfor — Motivering
- Vem — Ansvariga aktorer
- Kostnad — Liten/Medel/Stor
- Tidshorisont — Quick win / Medel / Langsiktig
- Malgrupp — Barn/Unga/Vuxna/Seniorer/Alla
- Sasong — Aret runt / specifik sasong
- Plats — Var i kommunen
- Hallbarhet — Social/Ekologisk/Ekonomisk (1-5)
- Foreningskopplingar — Relevanta foreningar
