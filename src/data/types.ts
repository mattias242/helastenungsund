export interface Theme {
  id: number;
  emoji: string;
  name: string;
  subtitle: string;
  question: string;
  description: string;
}

export interface Proposal {
  id: number;
  themeId: number;
  title: string;
  subtitle: string;
  story: string;
  what: string;
  why: string;
  who: {
    primary: string;
    supporting: string[];
  };
  cost: 'Liten' | 'Medel' | 'Stor';
  timeline: 'Quick win' | 'Medel' | 'L\u00e5ngsiktig';
  targetGroup: string;
  season: string;
  location: string;
  sustainability: {
    social: number;
    ecological: number;
    economic: number;
  };
  associations: string[];
  type: string;
}
