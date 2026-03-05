# Hela Stenungsund Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a static Astro site with 100 proposals across 10 themes for vitalizing Stenungsund municipality, inspired by HBG City 100.

**Architecture:** Astro with React islands for interactive components (search/filter). All 100 proposals stored as structured JSON data, rendered via Astro dynamic routes. Tailwind CSS for styling. Fully static output — no backend.

**Tech Stack:** Astro 5, React 19, Tailwind CSS 4, TypeScript

---

## Phase 1: Project Scaffold

### Task 1: Initialize Astro project

**Step 1: Create Astro project with Tailwind and React**

```bash
cd /Users/mattiaswahlberg/ai/helastenungsund
npm create astro@latest . -- --template minimal --no-git --no-install
npx astro add react tailwindcss --yes
npm install
```

**Step 2: Verify it builds**

```bash
npm run build
```

Expected: Build succeeds, `dist/` folder created.

**Step 3: Verify dev server**

```bash
npm run dev
```

Expected: Dev server at localhost:4321

**Step 4: Commit**

```bash
git init
echo "node_modules/\ndist/\n.astro/" > .gitignore
git add -A
git commit -m "feat: initialize Astro project with React and Tailwind"
```

---

### Task 2: Create base layout and color theme

**Files:**
- Create: `src/layouts/BaseLayout.astro`
- Create: `src/styles/global.css`
- Modify: `astro.config.mjs` (site config)

**Step 1: Define Stenungsund color palette in global.css**

Use a coastal/industrial palette:
- Primary: Deep ocean blue (#1e3a5f)
- Secondary: Forest green (#2d5a3d)
- Accent: Sunset orange (#e8733a)
- Light backgrounds: Soft gray (#f5f5f0), white
- Dark text: Charcoal (#1a1a2e)

**Step 2: Create BaseLayout.astro**

Full HTML shell with:
- SEO meta tags (title, description, og:image)
- Swedish lang attribute
- Google Fonts: Inter (body) + DM Serif Display (headings)
- Navigation: Hem, Utforska, Dashboard, Arshjul, Om
- Footer: About blurb, navigation links, contact
- Mobile hamburger menu

**Step 3: Set site URL in astro.config.mjs**

```js
export default defineConfig({
  site: 'https://helastenungsund.se',
  integrations: [react(), tailwindcss()],
});
```

**Step 4: Verify layout renders**

Create a minimal `src/pages/index.astro` using the layout. Run dev server, verify in browser.

**Step 5: Commit**

```bash
git add -A
git commit -m "feat: add base layout with navigation and Stenungsund color theme"
```

---

## Phase 2: Data Layer

### Task 3: Define data schema and create theme data

**Files:**
- Create: `src/data/themes.ts`
- Create: `src/data/types.ts`

**Step 1: Define TypeScript types**

```typescript
// src/data/types.ts
export interface Theme {
  id: number;
  emoji: string;
  name: string;
  subtitle: string;
  question: string;
  description: string;
  image: string;
}

export interface Proposal {
  id: number;
  themeId: number;
  title: string;
  subtitle: string;
  story: string;        // Opening narrative/scenario
  what: string;
  why: string;
  who: {
    primary: string;
    supporting: string[];
  };
  cost: 'Liten' | 'Medel' | 'Stor';
  timeline: 'Quick win' | 'Medel' | 'Langsiktig';
  targetGroup: string;
  season: string;
  location: string;
  sustainability: {
    social: number;      // 1-5
    ecological: number;  // 1-5
    economic: number;    // 1-5
  };
  associations: string[];
  type: string;          // Event, Plats, Infrastruktur, etc.
}
```

**Step 2: Create themes data**

```typescript
// src/data/themes.ts
export const themes: Theme[] = [
  { id: 1, emoji: "🏙️", name: "Centrum & motesplatser", subtitle: "Torg, handel & stadsliv", question: "Varfor ska jag ga till centrum idag?" },
  { id: 2, emoji: "🌊", name: "Havet & kusten", subtitle: "Bad, hamn & sjofartskultur", question: "Hur lever vi mer med vattnet runt oss?" },
  { id: 3, emoji: "🌱", name: "Grona omstallningen", subtitle: "Industri, energi & hallbarhet", question: "Hur kan industrin gora hela Stenungsund starkare?" },
  { id: 4, emoji: "🚀", name: "Unga & framtid", subtitle: "Jobb, boende & driv", question: "Varfor ska jag stanna i Stenungsund efter gymnasiet?" },
  { id: 5, emoji: "🍽️", name: "Mat & smak", subtitle: "Lokala ravaror & matupplevelser", question: "Var hittar jag de basta smakerna?" },
  { id: 6, emoji: "🤝", name: "Foreningar & gemenskap", subtitle: "Idrottsrorelse, kultur & volontar", question: "Hur gor vi fler delaktiga?" },
  { id: 7, emoji: "🌲", name: "Natur & friluftsliv", subtitle: "Vandring, paddling & tystnad", question: "Vad finns att upptacka utanfor asfalten?" },
  { id: 8, emoji: "🏘️", name: "Byar & orter", subtitle: "Odesmal, Jorlanda, Stora Hoga, Svenshogen", question: "Hur kan vara orter blomstra?" },
  { id: 9, emoji: "🔗", name: "Koppla ihop", subtitle: "Trafik, broar & regionala band", question: "Hur binder vi samman Stenungsund — med varandra och varlden?" },
  { id: 10, emoji: "📚", name: "Kunskap & innovation", subtitle: "Skola, forskning & entreprenorskap", question: "Hur blir Stenungsund en plats man vaxer i?" },
];
```

**Step 3: Verify types compile**

```bash
npx tsc --noEmit
```

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: add data schema and theme definitions"
```

---

### Task 4: Generate all 100 proposals

**Files:**
- Create: `src/data/proposals/tema-01-centrum.ts` through `tema-10-kunskap.ts`
- Create: `src/data/proposals/index.ts` (re-exports all)

This is the largest task. Each theme gets 10 proposals (id 1-10, 11-20, ..., 91-100).

Content must be:
- Written in lattlast svenska (short sentences, simple words)
- Based on real Stenungsund context from our research
- Concrete and actionable
- Positive, no complaints
- Referencing real places, organizations, companies

**Key Stenungsund facts for content generation:**
- ~28,000 inhabitants, growing
- Chemical cluster: Borealis, Perstorp, INEOS Inovyn, Nouryon, Linde
- Cancelled travel center, center review underway
- Train replacement April 2026-March 2027
- Culture: Fregatten, Molekylverkstan, Arena
- Tourism: Tjornbron, Stenungson, guest harbor
- Companies: Hogia, digital firms
- Youth centers: Hasselgarden, Stora Hogagarden
- Nature: Ramson, hiking trails, kayaking
- Food: Trattoria Alberobello, Farmor Gretas
- Sodra Bohuslan Turism (with Orust, Tjorn, Kungalv)
- Formel Framtid conference (green industry)
- Golf club, swimming hall, ice rink

**Proposal ID mapping:**
- Theme 1 (Centrum): proposals 1-10
- Theme 2 (Havet): proposals 11-20
- Theme 3 (Grona): proposals 21-30
- Theme 4 (Unga): proposals 31-40
- Theme 5 (Mat): proposals 41-50
- Theme 6 (Foreningar): proposals 51-60
- Theme 7 (Natur): proposals 61-70
- Theme 8 (Byar): proposals 71-80
- Theme 9 (Koppla ihop): proposals 81-90
- Theme 10 (Kunskap): proposals 91-100

**Step 1: Generate proposal files**

Each file exports an array of 10 Proposal objects following the type definition.

**Step 2: Create index.ts that combines all**

```typescript
// src/data/proposals/index.ts
import { tema01 } from './tema-01-centrum';
// ... etc
export const proposals: Proposal[] = [...tema01, ...tema02, /* ... */];
```

**Step 3: Verify all 100 proposals exist and have valid data**

Write a quick check script:
```bash
npx tsx -e "import {proposals} from './src/data/proposals'; console.log('Total:', proposals.length); console.log('Themes:', new Set(proposals.map(p=>p.themeId)).size)"
```
Expected: Total: 100, Themes: 10

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: add all 100 proposals across 10 themes"
```

---

## Phase 3: Page Templates

### Task 5: Home page

**Files:**
- Modify: `src/pages/index.astro`
- Create: `src/components/HeroSection.astro`
- Create: `src/components/StatsBar.astro`
- Create: `src/components/ThemeGrid.astro`
- Create: `src/components/FeaturedProposals.astro`
- Create: `src/components/YearWheelPreview.astro`

**Sections (top to bottom):**
1. Hero with background image, tagline "Framtidens Stenungsund borjar har", subtitle "100 forslag · 10 teman · 1 kommun", search box, CTA
2. Disclaimer banner (AI-generated concept)
3. Stats bar: 100 Forslag, 10 Teman, X Quick wins, X Foreningar
4. Theme grid: 10 clickable theme cards with emoji, name, question
5. Featured proposals: 6 hand-picked proposals as cards
6. Year wheel preview: 12 month buttons + CTA
7. About section: "Perspektivet ar utifran och in" + CTAs

**Step 1: Build each component**
**Step 2: Assemble on index.astro**
**Step 3: Verify in browser**
**Step 4: Commit**

---

### Task 6: Theme pages (dynamic route)

**Files:**
- Create: `src/pages/tema/[id].astro`
- Create: `src/components/ProposalCard.astro`

**Step 1: Create dynamic route**

```astro
---
// src/pages/tema/[id].astro
import { themes } from '../../data/themes';
import { proposals } from '../../data/proposals';

export function getStaticPaths() {
  return themes.map(t => ({ params: { id: String(t.id) }, props: { theme: t } }));
}
const { theme } = Astro.props;
const themeProposals = proposals.filter(p => p.themeId === theme.id);
---
```

**Step 2: Layout with theme header, question, and 10 proposal cards**
**Step 3: Verify all 10 theme pages render**
**Step 4: Commit**

---

### Task 7: Proposal pages (dynamic route)

**Files:**
- Create: `src/pages/forslag/[id].astro`

**Step 1: Create dynamic route**

Renders single proposal with:
- Breadcrumb (Hem > Tema > #N)
- Opening story (blockquote)
- Title, subtitle, tags
- Tabbed content: Oversikt (Vad/Varfor/Vem/Kostnad), Hallbarhet, Kopplingar
- Quick facts sidebar
- Next/prev navigation

**Step 2: Verify proposal pages render**
**Step 3: Commit**

---

### Task 8: Explore page with React search/filter island

**Files:**
- Create: `src/pages/utforska.astro`
- Create: `src/components/ExploreFilter.tsx` (React island)

**Step 1: Create React component**

Interactive filters:
- Text search (title, description)
- Theme filter (dropdown/chips)
- Cost filter (Liten/Medel/Stor)
- Timeline filter (Quick win/Medel/Langsiktig)
- Location filter
- Target group filter

Shows filtered proposal cards in grid.

**Step 2: Mount as React island**

```astro
<ExploreFilter client:load proposals={proposals} themes={themes} />
```

**Step 3: Verify search and filters work**
**Step 4: Commit**

---

### Task 9: Dashboard page

**Files:**
- Create: `src/pages/dashboard.astro`

Shows aggregated statistics:
- Proposals by theme (bar chart or visual)
- Cost distribution (pie/donut)
- Timeline distribution
- Quick wins count
- Sustainability averages
- Location heatmap (text-based)

Use simple CSS-based charts (no heavy chart library).

**Step 1: Build dashboard with CSS charts**
**Step 2: Verify**
**Step 3: Commit**

---

### Task 10: Year wheel (Arshjul) page

**Files:**
- Create: `src/pages/arshjul.astro`

12-month calendar showing which proposals are active each month. Visual grid with months as columns, proposals mapped to their seasons.

**Step 1: Build year wheel layout**
**Step 2: Verify**
**Step 3: Commit**

---

### Task 11: About page

**Files:**
- Create: `src/pages/om.astro`

Sections:
- Disclaimer (AI-generated concept)
- "Varfor 100 forslag?"
- Principles (Konkret, Positivt, Inkluderande, Genomforbart)
- "Perspektivet: utifran och in"
- "Sa fungerar det" (10 teman, varje forslag beskriver...)
- De 10 temana (clickable list)
- Contact info
- Note: Oberoende initiativ, opolitiskt, alla partier valkomna

**Step 1: Build about page**
**Step 2: Verify**
**Step 3: Commit**

---

## Phase 4: Images

### Task 12: Generate theme hero images

**Files:**
- Create: `public/images/themes/` (10 images)
- Create: `public/images/hero.jpg`

Generate 11 AI images:
1. Hero: Stenungsund panorama (centrum + industry + coast)
2. Theme 1: Stenungsund centrum, Stenungstorg
3. Theme 2: Stenungsund coast, guest harbor, sea
4. Theme 3: Chemical cluster, Borealis towers, green energy
5. Theme 4: Young people in Stenungsund
6. Theme 5: Local food, seafood, market
7. Theme 6: Sports/culture associations, Fregatten
8. Theme 7: Nature trails, Ramson, kayaking
9. Theme 8: Small village life, Odesmal, Jorlanda
10. Theme 9: Tjornbron, train station, roads
11. Theme 10: Molekylverkstan, library, innovation

Prompt keywords: Stenungsund, NOT generic fishing villages.

**Step 1: Generate images using nano-banana or similar**
**Step 2: Place in public/images/**
**Step 3: Commit**

---

## Phase 5: Polish & Deploy

### Task 13: Mobile responsiveness and final polish

- Verify all pages work on mobile (375px)
- Verify navigation hamburger menu
- Check color contrast accessibility
- Add favicon
- Add 404 page

**Step 1: Test and fix responsive issues**
**Step 2: Commit**

---

### Task 14: Build and deploy to NAS

**Step 1: Build static site**

```bash
npm run build
```

**Step 2: Copy to NAS**

```bash
rsync -avz dist/ mattiaswahlberg@neomeda-nas.lan:/volume2/web/helastenungsund/
```

**Step 3: Verify site loads from NAS**

**Step 4: Final commit**

```bash
git add -A
git commit -m "feat: complete Hela Stenungsund v1.0"
```
