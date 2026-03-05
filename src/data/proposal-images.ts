/**
 * Maps proposal IDs to images.
 * Each theme has 3 images (a, b, c) shared across its 10 proposals.
 * Images are assigned so that visually similar proposals share the same image.
 */

const themeImages: Record<number, [string, string, string]> = {
  1: [
    '/images/proposals/tema01-a.png', // Torg & marknad
    '/images/proposals/tema01-b.png', // Kulturhus & kvällsliv
    '/images/proposals/tema01-c.png', // Scen & evenemang
  ],
  2: [
    '/images/proposals/tema02-a.png', // Gästhamn & båtar
    '/images/proposals/tema02-b.png', // Bad & strand
    '/images/proposals/tema02-c.png', // Fiske & hav
  ],
  3: [
    '/images/proposals/tema03-a.png', // Industri & energi
    '/images/proposals/tema03-b.png', // Expo & innovation
    '/images/proposals/tema03-c.png', // Hållbart samhälle
  ],
  4: [
    '/images/proposals/tema04-a.png', // Coworking & jobb
    '/images/proposals/tema04-b.png', // Boende & stadsliv
    '/images/proposals/tema04-c.png', // Ungdomsgård & fritid
  ],
  5: [
    '/images/proposals/tema05-a.png', // Bondens marknad
    '/images/proposals/tema05-b.png', // Restaurang & mat
    '/images/proposals/tema05-c.png', // Matfestival
  ],
  6: [
    '/images/proposals/tema06-a.png', // Idrott & sport
    '/images/proposals/tema06-b.png', // Teater & kultur
    '/images/proposals/tema06-c.png', // Gemenskap & integration
  ],
  7: [
    '/images/proposals/tema07-a.png', // Vandring & skog
    '/images/proposals/tema07-b.png', // Kajak & paddling
    '/images/proposals/tema07-c.png', // Camping & natur
  ],
  8: [
    '/images/proposals/tema08-a.png', // Ödsmål by
    '/images/proposals/tema08-b.png', // Stora Höga torg
    '/images/proposals/tema08-c.png', // Jörlanda landsbygd
  ],
  9: [
    '/images/proposals/tema09-a.png', // Bro & infrastruktur
    '/images/proposals/tema09-b.png', // Kollektivtrafik
    '/images/proposals/tema09-c.png', // Cykelvägar
  ],
  10: [
    '/images/proposals/tema10-a.png', // Skola & utbildning
    '/images/proposals/tema10-b.png', // Innovation & vetenskap
    '/images/proposals/tema10-c.png', // Bibliotek & lärande
  ],
};

// Map each proposal to one of the 3 theme images.
// Proposals 1-4 → image a, 5-7 → image b, 8-10 → image c (within each theme)
const proposalImageOverrides: Record<number, number> = {
  // Theme 1: Centrum
  1: 0, 2: 0, 3: 0, 4: 2,
  5: 1, 6: 1, 7: 2,
  8: 2, 9: 0, 10: 1,
  // Theme 2: Havet
  11: 0, 12: 1, 13: 2, 14: 0,
  15: 1, 16: 0, 17: 2,
  18: 2, 19: 1, 20: 0,
  // Theme 3: Gröna
  21: 0, 22: 0, 23: 1, 24: 2,
  25: 0, 26: 1, 27: 2,
  28: 1, 29: 2, 30: 0,
  // Theme 4: Unga
  31: 0, 32: 1, 33: 0, 34: 2,
  35: 1, 36: 0, 37: 2,
  38: 2, 39: 1, 40: 0,
  // Theme 5: Mat
  41: 0, 42: 1, 43: 2, 44: 0,
  45: 1, 46: 2, 47: 0,
  48: 1, 49: 2, 50: 0,
  // Theme 6: Föreningar
  51: 0, 52: 2, 53: 1, 54: 0,
  55: 2, 56: 0, 57: 1,
  58: 2, 59: 1, 60: 0,
  // Theme 7: Natur
  61: 0, 62: 1, 63: 2, 64: 0,
  65: 1, 66: 2, 67: 0,
  68: 1, 69: 2, 70: 0,
  // Theme 8: Byar
  71: 0, 72: 1, 73: 2, 74: 0,
  75: 1, 76: 2, 77: 0,
  78: 1, 79: 2, 80: 0,
  // Theme 9: Koppla ihop
  81: 0, 82: 1, 83: 2, 84: 0,
  85: 1, 86: 2, 87: 0,
  88: 1, 89: 2, 90: 0,
  // Theme 10: Kunskap
  91: 0, 92: 1, 93: 2, 94: 0,
  95: 1, 96: 2, 97: 0,
  98: 1, 99: 2, 100: 0,
};

export function getProposalImage(proposalId: number, themeId: number): string {
  const images = themeImages[themeId];
  if (!images) return '/images/hero.png';
  const index = proposalImageOverrides[proposalId] ?? 0;
  return images[index];
}
