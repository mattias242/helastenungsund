import { useState, useMemo } from 'react';

interface Theme {
  id: number;
  emoji: string;
  name: string;
  subtitle: string;
  question: string;
  description: string;
}

interface Proposal {
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
  timeline: 'Quick win' | 'Medel' | 'Långsiktig';
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

interface Props {
  proposals: Proposal[];
  themes: Theme[];
}

const costColors: Record<string, string> = {
  Liten: 'bg-emerald-100 text-emerald-800',
  Medel: 'bg-amber-100 text-amber-800',
  Stor: 'bg-rose-100 text-rose-800',
};

const timelineLabels: Record<string, string> = {
  'Quick win': 'Quick win',
  Medel: 'Medel',
  'Långsiktig': 'Långsiktig',
};

export default function ExploreFilter({ proposals, themes }: Props) {
  const [search, setSearch] = useState('');
  const [selectedThemes, setSelectedThemes] = useState<number[]>([]);
  const [selectedCosts, setSelectedCosts] = useState<string[]>([]);
  const [selectedTimelines, setSelectedTimelines] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);

  const uniqueLocations = useMemo(() => {
    const locs = new Set(proposals.map((p) => p.location));
    return Array.from(locs).sort((a, b) => a.localeCompare(b, 'sv'));
  }, [proposals]);

  const costs = ['Liten', 'Medel', 'Stor'];
  const timelines = ['Quick win', 'Medel', 'Långsiktig'];

  const hasActiveFilters =
    search.length > 0 ||
    selectedThemes.length > 0 ||
    selectedCosts.length > 0 ||
    selectedTimelines.length > 0 ||
    selectedLocations.length > 0;

  const filtered = useMemo(() => {
    return proposals.filter((p) => {
      // Text search
      if (search.length > 0) {
        const q = search.toLowerCase();
        const match =
          p.title.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.what.toLowerCase().includes(q) ||
          p.why.toLowerCase().includes(q);
        if (!match) return false;
      }

      // Theme filter
      if (selectedThemes.length > 0 && !selectedThemes.includes(p.themeId)) {
        return false;
      }

      // Cost filter
      if (selectedCosts.length > 0 && !selectedCosts.includes(p.cost)) {
        return false;
      }

      // Timeline filter
      if (selectedTimelines.length > 0 && !selectedTimelines.includes(p.timeline)) {
        return false;
      }

      // Location filter
      if (selectedLocations.length > 0 && !selectedLocations.includes(p.location)) {
        return false;
      }

      return true;
    });
  }, [proposals, search, selectedThemes, selectedCosts, selectedTimelines, selectedLocations]);

  function toggleTheme(id: number) {
    setSelectedThemes((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  }

  function toggleCost(cost: string) {
    setSelectedCosts((prev) =>
      prev.includes(cost) ? prev.filter((c) => c !== cost) : [...prev, cost]
    );
  }

  function toggleTimeline(tl: string) {
    setSelectedTimelines((prev) =>
      prev.includes(tl) ? prev.filter((t) => t !== tl) : [...prev, tl]
    );
  }

  function toggleLocation(loc: string) {
    setSelectedLocations((prev) =>
      prev.includes(loc) ? prev.filter((l) => l !== loc) : [...prev, loc]
    );
  }

  function clearAll() {
    setSearch('');
    setSelectedThemes([]);
    setSelectedCosts([]);
    setSelectedTimelines([]);
    setSelectedLocations([]);
  }

  function getTheme(themeId: number) {
    return themes.find((t) => t.id === themeId);
  }

  function truncate(text: string, max: number) {
    if (text.length <= max) return text;
    return text.slice(0, max).trimEnd() + '...';
  }

  return (
    <div>
      {/* Filter area */}
      <div className="bg-[#f5f5f0] rounded-2xl p-5 sm:p-6 mb-8 border border-[#e5e5e0]">
        {/* Search bar */}
        <div className="relative mb-6">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6b7280]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={`Sok bland ${proposals.length} forslag...`}
            className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-[#e5e5e0] bg-white text-[#1a1a2e] placeholder:text-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/30 focus:border-[#1e3a5f] transition-colors text-sm sm:text-base"
          />
        </div>

        {/* Theme filters */}
        <div className="mb-5">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-[#6b7280] mb-2.5">
            Tema
          </h3>
          <div className="flex flex-wrap gap-2">
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => toggleTheme(theme.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  selectedThemes.includes(theme.id)
                    ? 'bg-[#1e3a5f] text-white shadow-sm'
                    : 'bg-white text-[#1a1a2e] border border-[#e5e5e0] hover:border-[#1e3a5f]/40'
                }`}
              >
                <span>{theme.emoji}</span>
                <span className="hidden sm:inline">{theme.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Cost + Timeline row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#6b7280] mb-2.5">
              Kostnad
            </h3>
            <div className="flex flex-wrap gap-2">
              {costs.map((cost) => (
                <button
                  key={cost}
                  onClick={() => toggleCost(cost)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    selectedCosts.includes(cost)
                      ? 'bg-[#1e3a5f] text-white shadow-sm'
                      : 'bg-white text-[#1a1a2e] border border-[#e5e5e0] hover:border-[#1e3a5f]/40'
                  }`}
                >
                  {cost}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#6b7280] mb-2.5">
              Tidshorisont
            </h3>
            <div className="flex flex-wrap gap-2">
              {timelines.map((tl) => (
                <button
                  key={tl}
                  onClick={() => toggleTimeline(tl)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    selectedTimelines.includes(tl)
                      ? 'bg-[#1e3a5f] text-white shadow-sm'
                      : 'bg-white text-[#1a1a2e] border border-[#e5e5e0] hover:border-[#1e3a5f]/40'
                  }`}
                >
                  {timelineLabels[tl]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="mb-2">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-[#6b7280] mb-2.5">
            Plats
          </h3>
          <select
            value=""
            onChange={(e) => {
              if (e.target.value) toggleLocation(e.target.value);
            }}
            className="w-full sm:w-64 px-3 py-2 rounded-lg border border-[#e5e5e0] bg-white text-[#1a1a2e] text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/30 focus:border-[#1e3a5f]"
          >
            <option value="">Valj plats...</option>
            {uniqueLocations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
                {selectedLocations.includes(loc) ? ' \u2713' : ''}
              </option>
            ))}
          </select>
        </div>

        {/* Active filters */}
        {hasActiveFilters && (
          <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-[#e5e5e0]">
            <span className="text-xs text-[#6b7280] font-medium">Aktiva filter:</span>

            {selectedThemes.map((id) => {
              const t = getTheme(id);
              return (
                <button
                  key={`theme-${id}`}
                  onClick={() => toggleTheme(id)}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#1e3a5f]/10 text-[#1e3a5f] text-xs font-medium hover:bg-[#1e3a5f]/20 transition-colors"
                >
                  {t?.emoji} {t?.name}
                  <svg className="w-3.5 h-3.5 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              );
            })}

            {selectedCosts.map((cost) => (
              <button
                key={`cost-${cost}`}
                onClick={() => toggleCost(cost)}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#1e3a5f]/10 text-[#1e3a5f] text-xs font-medium hover:bg-[#1e3a5f]/20 transition-colors"
              >
                Kostnad: {cost}
                <svg className="w-3.5 h-3.5 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            ))}

            {selectedTimelines.map((tl) => (
              <button
                key={`tl-${tl}`}
                onClick={() => toggleTimeline(tl)}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#1e3a5f]/10 text-[#1e3a5f] text-xs font-medium hover:bg-[#1e3a5f]/20 transition-colors"
              >
                {timelineLabels[tl]}
                <svg className="w-3.5 h-3.5 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            ))}

            {selectedLocations.map((loc) => (
              <button
                key={`loc-${loc}`}
                onClick={() => toggleLocation(loc)}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#1e3a5f]/10 text-[#1e3a5f] text-xs font-medium hover:bg-[#1e3a5f]/20 transition-colors"
              >
                {loc}
                <svg className="w-3.5 h-3.5 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            ))}

            <button
              onClick={clearAll}
              className="text-xs text-[#e8733a] font-semibold hover:text-[#d4662f] transition-colors ml-2"
            >
              Rensa alla
            </button>
          </div>
        )}
      </div>

      {/* Results count */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-[#6b7280] font-medium">
          Visar {filtered.length} av {proposals.length} forslag
        </p>
      </div>

      {/* Proposal grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((proposal) => {
            const theme = getTheme(proposal.themeId);
            return (
              <a
                key={proposal.id}
                href={`/forslag/${proposal.id}`}
                className="group bg-white rounded-xl p-5 shadow-sm hover:shadow-md border border-[#e5e5e0] hover:border-[#1e3a5f]/30 transition-all flex flex-col"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs bg-[#f5f5f0] text-[#6b7280] px-2 py-1 rounded-md font-medium">
                    {theme?.emoji} {theme?.name}
                  </span>
                  <span className="text-xs text-[#6b7280] font-mono">#{proposal.id}</span>
                </div>
                <h3
                  className="text-lg text-[#1a1a2e] group-hover:text-[#1e3a5f] transition-colors mb-1"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  {proposal.title}
                </h3>
                <p className="text-sm text-[#6b7280] mb-3">{proposal.subtitle}</p>
                <p className="text-sm text-[#1a1a2e]/70 leading-relaxed mb-4 flex-1">
                  {truncate(proposal.what, 80)}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-medium ${costColors[proposal.cost]}`}
                  >
                    {proposal.cost}
                  </span>
                  <span className="text-xs bg-[#f5f5f0] text-[#6b7280] px-2 py-0.5 rounded-full">
                    {proposal.timeline}
                  </span>
                  <span className="text-xs bg-[#f5f5f0] text-[#6b7280] px-2 py-0.5 rounded-full">
                    {proposal.season}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="text-4xl mb-4 opacity-50">&#x1F50D;</div>
          <p className="text-[#6b7280] text-lg mb-2">
            Inga forslag matchar din sokning.
          </p>
          <p className="text-[#6b7280] text-sm">
            Prova att andra filtren.
          </p>
          <button
            onClick={clearAll}
            className="mt-4 text-sm text-[#e8733a] font-semibold hover:text-[#d4662f] transition-colors"
          >
            Rensa alla filter
          </button>
        </div>
      )}
    </div>
  );
}
