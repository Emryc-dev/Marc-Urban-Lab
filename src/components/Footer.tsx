import { Phone, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onResetHome: () => void;
}

export function Footer({ onNavigate, onResetHome }: FooterProps) {
  return (
    <footer className="bg-[#050811] py-14 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 md:grid-cols-12">
          {/* Brand & Tagline */}
          <div className="md:col-span-5">
            <button
              type="button"
              onClick={onResetHome}
              className="font-display text-lg font-bold tracking-wider text-white transition-colors hover:text-[#38BDF8]"
            >
              MARC URBAN LAB
            </button>
            <p className="mt-2 font-mono text-xs tracking-widest text-[#38BDF8]">
              AMÉNAGER • BÂTIR • PRÉSERVER
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Études urbaines, architecture 3D, cartographie SIG, dossiers de permis et gestion
              de projets immobiliers pour des territoires durables.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3">
            <p className="font-mono text-[11px] tracking-widest text-slate-300">NAVIGATION</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { id: 'expertise', label: 'Nos expertises' },
                { id: 'projets', label: 'Portfolio & Rendus 3D' },
                { id: 'approche', label: 'Notre approche SIG' },
                { id: 'contact', label: 'Demander une étude' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate(link.id)}
                    className="transition-colors hover:text-[#38BDF8]"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="md:col-span-4">
            <p className="font-mono text-[11px] tracking-widest text-slate-300">
              CONTACT DIRECT
            </p>
            <div className="mt-4 space-y-3">
              <a
                href="https://wa.me/237651763753"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-lg border border-white/10 bg-[#0B132B]/70 px-4 py-3 text-sm font-medium text-white transition-colors hover:border-[#38BDF8]/50"
              >
                <Phone className="h-4 w-4 text-[#38BDF8]" />
                <span className="font-mono tabular-nums">+237 651 763 753</span>
                <ArrowUpRight className="h-4 w-4 text-slate-400 transition-colors group-hover:text-[#38BDF8]" />
              </a>
              <p className="text-xs text-slate-400">
                Téléphone &amp; Conciergerie WhatsApp — Lundi au Samedi, 08h00 – 18h30.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} MARC URBAN LAB. Tous droits réservés.</p>
          <p className="font-mono text-[11px] text-slate-500">
            URBANISME · ARCHITECTURE 3D · CARTOGRAPHIE SIG
          </p>
        </div>
      </div>
    </footer>
  );
}
