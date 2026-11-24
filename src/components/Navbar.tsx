import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  onResetHome: () => void;
}

const NAV_LINKS = [
  { id: 'expertise', label: 'Expertise' },
  { id: 'projets', label: 'Projets' },
  { id: 'approche', label: 'Approche' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar({ onNavigate, onResetHome }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = (id: string) => {
    setMobileOpen(false);
    onNavigate(id);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 glass-nav">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <button
          type="button"
          onClick={() => {
            setMobileOpen(false);
            onResetHome();
          }}
          className="group flex items-center gap-2.5 text-left whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] rounded"
          aria-label="MARC URBAN LAB — Retour à l'accueil"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#38BDF8]/40 bg-[#0B132B] text-[#38BDF8] transition-colors duration-200 group-hover:border-[#38BDF8] group-hover:bg-[#38BDF8]/10">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4"
              stroke="currentColor"
              strokeWidth="1.75"
              aria-hidden="true"
            >
              <path d="M3 20V6l6 5 6-5v14" />
              <path d="M15 11l6-5v14" />
              <path d="M3 20h18" />
            </svg>
          </span>
          <span className="font-display text-sm sm:text-base font-bold tracking-wider text-white">
            MARC URBAN LAB
          </span>
        </button>

        {/* Zone 2: 4 Single-line Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300"
          aria-label="Navigation principale"
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleLinkClick(link.id)}
              className="relative py-1 whitespace-nowrap shrink-0 text-slate-300 transition-colors duration-200 hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#38BDF8] after:transition-all after:duration-200 hover:after:w-full focus-visible:outline-none focus-visible:text-[#38BDF8]"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleLinkClick('contact')}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-[#2563EB] px-4 py-2 text-xs sm:text-sm font-medium text-white shadow-[0_0_24px_rgba(56,189,248,0.28)] transition-all duration-200 hover:bg-[#1D4ED8] hover:shadow-[0_0_28px_rgba(56,189,248,0.45)] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
          >
            <span>Démarrer un projet</span>
            <ArrowUpRight className="h-4 w-4 text-[#38BDF8]" />
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex md:hidden h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#0B132B]/80 text-slate-200 transition-colors hover:border-[#38BDF8]/40 hover:text-white"
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#050811]/95 px-4 pb-5 pt-3 backdrop-blur-xl">
          <nav className="flex flex-col gap-1" aria-label="Navigation mobile">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleLinkClick(link.id)}
                className="flex h-11 items-center justify-between rounded-lg px-3 text-left text-sm font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-[#38BDF8]"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="h-4 w-4 text-slate-500" />
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleLinkClick('contact')}
              className="mt-3 flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#2563EB] px-4 text-sm font-medium text-white shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-colors hover:bg-[#1D4ED8]"
            >
              <span>Démarrer un projet</span>
              <ArrowUpRight className="h-4 w-4 text-[#38BDF8]" />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
