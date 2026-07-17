export type ManusBlock =
  | { typ: 'del'; nr: number }
  | { typ: 'musik'; titel: string }
  | { typ: 'text'; text: string };

const manusFiler = import.meta.glob<string>('./manus/*.txt', {
  query: '?raw',
  import: 'default',
  eager: true,
});

// Talmanusen är skrivna för ElevenLabs v3: audio-taggar i hakparenteser ([warmly],
// [pause] …) ska inte visas för läsaren, och musikbryten (==== MUSIK N — "Titel" ====)
// visas som låttitlar mellan talpartierna.
export function parseManus(raw: string): ManusBlock[] {
  const lines = raw.split('\n');
  const start = lines.findIndex((l) => l.trim() === 'DEL 1');
  if (start === -1) return [];

  const blocks: ManusBlock[] = [];
  for (let i = start; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('=====')) break;
    if (!line) continue;

    const del = line.match(/^DEL (\d+)$/);
    if (del) {
      blocks.push({ typ: 'del', nr: Number(del[1]) });
      continue;
    }

    const musik = line.match(/^=+\s*MUSIK\s+\d+\s*—\s*"(.+)"\s*=+$/);
    if (musik) {
      blocks.push({ typ: 'musik', titel: musik[1] });
      continue;
    }

    const text = line
      .replace(/\[[^\]]{1,40}\]/g, '')
      .replace(/\s{2,}/g, ' ')
      .trim();
    if (text) blocks.push({ typ: 'text', text });
  }
  return blocks;
}

export function hamtaManus(nr: number): ManusBlock[] {
  const key = `./manus/program${String(nr).padStart(2, '0')}.txt`;
  const raw = manusFiler[key];
  return raw ? parseManus(raw) : [];
}
