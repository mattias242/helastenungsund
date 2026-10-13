// Länkar till delsajten Stenungsund 2126.
//
// Delsajten ligger i mappen /2136/ på samma webbserver. Den är en egen app
// och ingen Astro-sida, så den finns inte i dist/. Mappen heter 2136 men
// verktyget heter 2126: synlig text säger alltid 2126, bara href säger 2136.
//
// Testerna läser den byggda sajten i dist/. Bygg först:
//   npm run build && npm test
//
// Inga beroenden: bara node:test, node:assert och node:fs.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const DIST = new URL('../dist/', import.meta.url);

const SITE_NAME = 'Hela Stenungsund';
const SUBSITE_HREF = '/2136/';
const MENU_TEXT = 'Stenungsund 2126';
const SECTION_HEADING = 'Hur kan Stenungsund se ut om hundra år?';
const BUTTON_TEXT = 'Öppna Stenungsund 2126';

const EXISTING_MENU = [
  ['Hem', '/'],
  ['Utforska', '/utforska'],
  ['Invånare berättar', '/podd'],
  ['Dashboard', '/dashboard'],
  ['Årshjul', '/arshjul'],
  ['Om projektet', '/om'],
];

// Den nya raden står mellan "Årshjul" och "Om projektet".
const MENU_WITH_SUBSITE = [
  ...EXISTING_MENU.slice(0, 5),
  [MENU_TEXT, SUBSITE_HREF],
  EXISTING_MENU[5],
];

const HOME_HEADINGS = [
  '10 teman, 100 idéer',
  'Utvalda förslag',
  'Perspektivet är utifrån och in',
  SECTION_HEADING,
  'Alltid en anledning att besöka Stenungsund',
];

// ---------------------------------------------------------------------------
// Liten HTML-läsare. Den räcker för Astros byggda sidor.
// ---------------------------------------------------------------------------

const ATTRS = `(?:[^>"']|"[^"]*"|'[^']*')*`;
const ANY_TAG = new RegExp(`<!?/?[a-zA-Z]${ATTRS}>`, 'g');

function decode(s) {
  return s
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(Number(dec)))
    .replace(/&nbsp;/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

function parseAttrs(source) {
  const attrs = {};
  const pattern = /([^\s"'=<>/]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;
  for (const m of source.matchAll(pattern)) {
    attrs[m[1].toLowerCase()] = decode(m[2] ?? m[3] ?? m[4] ?? '');
  }
  return attrs;
}

// Kommentarer, skript och stilmallar syns inte för besökaren.
function visibleMarkup(html) {
  return html
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<(script|style)(?=[\s>])[\s\S]*?<\/\1\s*>/gi, '');
}

// Texten som blir kvar när alla taggar är borta.
function text(markup) {
  return decode(markup.replace(ANY_TAG, ' ')).replace(/\s+/g, ' ').trim();
}

// Alla element med ett visst namn, även nästlade. Sorterade i dokumentordning.
function elements(markup, name) {
  const pattern = new RegExp(`<${name}(?=[\\s>/])(${ATTRS})>|</${name}\\s*>`, 'gi');
  const open = [];
  const found = [];
  for (const m of markup.matchAll(pattern)) {
    if (m[0].startsWith('</')) {
      const el = open.pop();
      if (el) {
        found.push({ ...el, end: m.index + m[0].length, inner: markup.slice(el.innerStart, m.index) });
      }
    } else {
      open.push({ attrs: parseAttrs(m[1]), start: m.index, innerStart: m.index + m[0].length });
    }
  }
  return found.sort((a, b) => a.start - b.start);
}

// Taggar utan sluttagg, till exempel <img> och <link>.
function tags(markup, name) {
  const pattern = new RegExp(`<${name}(?=[\\s>/])(${ATTRS})>`, 'gi');
  return [...markup.matchAll(pattern)].map((m) => parseAttrs(m[1]));
}

function elementById(markup, id) {
  const pattern = new RegExp(`<([a-zA-Z][\\w-]*)(?=[\\s>/])(${ATTRS})>`, 'g');
  for (const m of markup.matchAll(pattern)) {
    if (m[2].includes(id) && parseAttrs(m[2]).id === id) {
      return elements(markup, m[1]).find((el) => el.start === m.index);
    }
  }
  return undefined;
}

function links(markup) {
  return elements(markup, 'a').map((a) => ({
    text: text(a.inner),
    href: a.attrs.href,
    attrs: a.attrs,
    classes: (a.attrs.class ?? '').split(/\s+/).filter(Boolean),
    start: a.start,
    end: a.end,
  }));
}

const within = (outer) => (inner) => Boolean(outer) && inner.start >= outer.start && inner.end <= outer.end;

// ---------------------------------------------------------------------------
// De byggda sidorna
// ---------------------------------------------------------------------------

function htmlFiles(dir = DIST, prefix = '') {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      files.push(...htmlFiles(new URL(`${encodeURIComponent(entry.name)}/`, dir), `${prefix}${entry.name}/`));
    } else if (entry.name.endsWith('.html')) {
      files.push({ name: `${prefix}${entry.name}`, url: new URL(encodeURIComponent(entry.name), dir) });
    }
  }
  return files.sort((a, b) => a.name.localeCompare(b.name));
}

function readPage(file) {
  const markup = visibleMarkup(fs.readFileSync(file.url, 'utf8'));
  const allLinks = links(markup);

  const footer = elements(markup, 'footer')[0];
  const navs = elements(markup, 'nav');
  const headerNav = navs.find((nav) => !within(footer)(nav));
  const footerNav = navs.find(within(footer));
  const mobileMenu = elementById(markup, 'mobile-menu');

  return {
    name: file.name,
    markup,
    links: allLinks,
    menus: {
      skrivbordsmenyn: allLinks.filter(
        (a) => within(headerNav)(a) && !within(mobileMenu)(a) && a.text !== SITE_NAME,
      ),
      mobilmenyn: allLinks.filter(within(mobileMenu)),
      sidfoten: allLinks.filter(within(footerNav)),
    },
  };
}

let pages = [];
try {
  pages = htmlFiles().map(readPage);
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
}

function builtPages() {
  assert.ok(pages.length > 0, 'dist/ saknas eller är tom. Bygg först: npm run build');
  return pages;
}

function homePage() {
  const home = builtPages().find((page) => page.name === 'index.html');
  assert.ok(home, 'dist/index.html saknas. Bygg först: npm run build');
  return home;
}

// Sektionen på startsidan som har rubriken om hundra år.
function subsiteSection() {
  const home = homePage();
  const section = elements(home.markup, 'section')
    .filter((s) => elements(s.inner, 'h2').some((h2) => text(h2.inner) === SECTION_HEADING))
    .at(-1);
  assert.ok(section, `Startsidan saknar en sektion med rubriken (h2) "${SECTION_HEADING}"`);
  return section;
}

const pointsToSubsite = (a) => /2136/.test(a.href ?? '') || a.text.includes(MENU_TEXT);

const pairs = (menu) => menu.map((a) => [a.text, a.href]);

function assertNoProblems(problems) {
  assert.equal(
    problems.length,
    0,
    `${problems.length} fel. De första:\n  ${problems.slice(0, 5).join('\n  ')}`,
  );
}

// ---------------------------------------------------------------------------
// Scenarier
// ---------------------------------------------------------------------------

test('S1 Startsidan: sektionen om hundra år har exakt en länk "Öppna Stenungsund 2126" till /2136/', () => {
  const section = subsiteSection();
  const toSubsite = links(section.inner).filter(pointsToSubsite);

  assert.deepEqual(pairs(toSubsite), [[BUTTON_TEXT, SUBSITE_HREF]]);
});

test('S2 Ordningen: rubrikerna på startsidan står i rätt ordning och sidan har exakt en h1', () => {
  const home = homePage();

  assert.deepEqual(
    elements(home.markup, 'h2').map((h2) => text(h2.inner)),
    HOME_HEADINGS,
  );
  assert.equal(elements(home.markup, 'h1').length, 1, 'Startsidan ska ha exakt en h1');
});

test('S3 Alla sidor: "Stenungsund 2126" finns en gång i varje meny, mellan "Årshjul" och "Om projektet"', () => {
  const problems = [];
  for (const page of builtPages()) {
    for (const [menuName, menu] of Object.entries(page.menus)) {
      const actual = JSON.stringify(pairs(menu));
      if (actual !== JSON.stringify(MENU_WITH_SUBSITE)) {
        problems.push(`${page.name}, ${menuName}: ${actual}`);
      }
    }
  }
  assertNoProblems(problems);
});

test('S4 Länkarna: varje länk till delsajten har exakt href="/2136/" och inget target', () => {
  const problems = [];
  for (const page of builtPages()) {
    const toSubsite = page.links.filter(pointsToSubsite);
    // Tre i menyerna på varje sida. Startsidan har dessutom knappen i sektionen.
    const expected = page.name === 'index.html' ? 4 : 3;
    if (toSubsite.length !== expected) {
      problems.push(`${page.name}: ${toSubsite.length} länkar till delsajten, väntade ${expected}`);
    }
    for (const a of toSubsite) {
      if (a.href !== SUBSITE_HREF) {
        problems.push(`${page.name}: "${a.text}" har href="${a.href}", ska vara "${SUBSITE_HREF}"`);
      }
      if ('target' in a.attrs) {
        problems.push(`${page.name}: "${a.text}" har target="${a.attrs.target}", ska öppnas i samma flik`);
      }
    }
  }
  assertNoProblems(problems);
});

test('S5 Texten: sektionen säger "inte en prognos" och "2136" syns aldrig i text', () => {
  const sectionText = text(subsiteSection().inner);
  assert.ok(
    sectionText.includes('inte en prognos'),
    `Sektionen ska innehålla orden "inte en prognos". Texten är: ${sectionText}`,
  );

  // Text som besökaren ser eller får uppläst: brödtext, sidtitel, alt-texter med mera.
  const spokenAttribute = /\s(?:alt|title|aria-label|placeholder|content)\s*=\s*(?:"([^"]*)"|'([^']*)')/gi;
  const problems = [];
  for (const page of builtPages()) {
    if (text(page.markup).includes('2136')) {
      problems.push(`${page.name}: "2136" står i synlig text`);
    }
    for (const m of page.markup.matchAll(spokenAttribute)) {
      if ((m[1] ?? m[2]).includes('2136')) {
        problems.push(`${page.name}: "2136" står i attributet ${m[0].trim()}`);
      }
    }
  }
  assertNoProblems(problems);
});

test('S6 Bilden: finns i dist/, laddas med loading="lazy" och har en alt-text', () => {
  const images = tags(subsiteSection().inner, 'img');
  assert.equal(images.length, 1, 'Sektionen ska ha exakt en bild');
  const [image] = images;

  assert.match(image.src ?? '', /^\/[^/]/, 'Bildens src ska vara en rotrelativ sökväg');
  const file = new URL(image.src.slice(1).split(/[?#]/)[0], DIST);
  assert.ok(
    fs.existsSync(file) && fs.statSync(file).size > 0,
    `Bildfilen ${image.src} finns inte i dist/`,
  );
  assert.equal(image.loading, 'lazy');
  assert.ok(
    (image.alt ?? '').startsWith('Stillbild ur filmen Stenungsund 2126'),
    `Alt-texten ska börja med "Stillbild ur filmen Stenungsund 2126". Den är: ${image.alt}`,
  );
});

test('S7 De sex gamla menyraderna finns kvar i samma ordning på alla sidor', () => {
  const problems = [];
  for (const page of builtPages()) {
    for (const [menuName, menu] of Object.entries(page.menus)) {
      const actual = JSON.stringify(pairs(menu.filter((a) => !pointsToSubsite(a))));
      if (actual !== JSON.stringify(EXISTING_MENU)) {
        problems.push(`${page.name}, ${menuName}: ${actual}`);
      }
    }
  }
  assertNoProblems(problems);
});

// De sex gamla raderna fyller redan menyraden vid 768 px. Därför visas den nya
// länken i skrivbordsmenyn först från 1024 px (lg). I mobilmenyn och sidfoten
// visas den alltid.
test('S8 Skrivbordsmenyn: den nya länken visas först från 1024 px', () => {
  const stylesheets = new Map();
  const cssFor = (page) =>
    tags(page.markup, 'link')
      .filter((link) => link.rel === 'stylesheet' && /^\/[^/]/.test(link.href ?? ''))
      .map((link) => {
        if (!stylesheets.has(link.href)) {
          const file = new URL(link.href.slice(1), DIST);
          stylesheets.set(link.href, fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '');
        }
        return stylesheets.get(link.href);
      })
      .join('\n');

  const problems = [];
  for (const page of builtPages()) {
    const find = (menu) => menu.find(pointsToSubsite);
    const desktop = find(page.menus.skrivbordsmenyn);
    if (!desktop) {
      problems.push(`${page.name}: skrivbordsmenyn saknar länken`);
      continue;
    }
    if (!desktop.classes.includes('hidden') || !desktop.classes.includes('lg:inline')) {
      problems.push(`${page.name}: skrivbordslänken ska ha klasserna "hidden lg:inline", har "${desktop.attrs.class}"`);
    }
    for (const menuName of ['mobilmenyn', 'sidfoten']) {
      const link = find(page.menus[menuName]);
      if (link && link.classes.some((c) => c === 'hidden' || c.endsWith(':hidden'))) {
        problems.push(`${page.name}, ${menuName}: länken ska alltid synas, har "${link.attrs.class}"`);
      }
    }

    // Klasserna gör bara nytta om sidans stilmall har reglerna, i rätt ordning.
    const css = cssFor(page);
    const hidden = css.search(/\.hidden\s*\{\s*display:\s*none;?\s*\}/);
    const lgInline = css.search(/\.lg\\:inline\s*\{\s*display:\s*inline;?\s*\}/);
    const before = css.slice(0, Math.max(lgInline, 0));
    const mediaAt = before.lastIndexOf('@media');
    const media = mediaAt < 0 ? '' : before.slice(mediaAt);
    // Regeln ska stå inuti media-blocket, inte efter att det har stängts.
    const stillOpen = (media.match(/\{/g) ?? []).length > (media.match(/\}/g) ?? []).length;
    if (hidden < 0 || lgInline < hidden || !stillOpen || !/^@media[^{]*min-width:\s*64rem/.test(media)) {
      problems.push(`${page.name}: stilmallen saknar .lg\\:inline{display:inline} under min-width:64rem efter .hidden`);
    }
  }
  assertNoProblems(problems);
});
