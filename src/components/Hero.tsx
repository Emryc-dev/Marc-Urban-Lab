import { ArrowRight, Compass, Layers, MapPin, ShieldCheck } from 'lucide-react';
import { ResilientImage } from './ResilientImage';

interface HeroProps {
  onExploreProjects: () => void;
  onRequestStudy: () => void;
  onOpenFeatured: () => void;
}

const KEY_METRICS = [
  {
    code: '01',
    label: '3D Masterplanning',
    metric: '2,4 ha+',
    detail: 'Modélisation aérienne, esplanades & parcs d’exposition',
    icon: Layers,
  },
  {
    code: '02',
    label: 'Études Urbaines',
    metric: '100 %',
    detail: 'Lotissements, faisabilité & suivi d’exécution chantier',
    icon: Compass,
  },
  {
    code: '03',
    label: 'SIG & Permis',
    metric: 'QGIS · PLU',
    detail: 'Cartographie géospatiale, permis de bâtir & autorisations',
    icon: ShieldCheck,
  },
];

export function Hero({ onExploreProjects, onRequestStudy, onOpenFeatured }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#050811] border-b border-white/10">
      {/* Full-bleed aerial 3D architectural masterplan background */}
      <div className="absolute inset-0">
        <ResilientImage
          src="/assets/aistudio/WhatsApp_Image_2026-11-23_at_15.32.46_411ed62c.jpeg"
          alt="Vue aérienne 3D du Masterplan Esplanade & Parc d'Exposition — MARC URBAN LAB"
          loading="eager"
          className="h-full w-full object-cover object-center opacity-45 scale-[1.02]"
        />
        {/* Measured multi-stop obsidian vignette scrim */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(5,8,17,0.84) 0%, rgba(5,8,17,0.68) 42%, rgba(5,8,17,0.92) 82%, #050811 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 75% 28%, rgba(56,189,248,0.12) 0%, rgba(37,99,235,0.06) 35%, transparent 65%)',
          }}
        />
        {/* Subtle architectural coordinate grid */}
        <div className="absolute inset-0 arch-grid-bg opacity-70" />
      </div>

      {/* Main Hero Content */}
      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 sm:pt-28 lg:px-8 lg:pb-24 lg:pt-32">
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            {/* Editorial metadata lead-in (unboxed, clean separators) */}
            <div className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs tracking-wider text-[#38BDF8]">
              <span>URBANISME</span>
              <span className="text-white/30" aria-hidden="true">
                ·
              </span>
              <span>ARCHITECTURE 3D</span>
              <span className="text-white/30" aria-hidden="true">
                ·
              </span>
              <span>CARTOGRAPHIE SIG</span>
              <span className="text-white/30" aria-hidden="true">
                ·
              </span>
              <span className="text-slate-300">DOUALA, CAMEROUN</span>
            </div>

            <h1
              className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
              style={{ textWrap: 'balance' }}
            >
              CONCEVOIR LES TERRITOIRES DE DEMAIN
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Études • Réalisation • Suivi de projets — Pour un urbanisme durable et des
              territoires mieux pensés.
            </p>

            {/* Dual CTAs */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onExploreProjects}
                className="inline-flex items-center gap-2.5 rounded-lg bg-[#2563EB] px-6 py-3.5 text-sm font-medium text-white shadow-[0_0_28px_rgba(56,189,248,0.3)] transition-all duration-200 hover:bg-[#1D4ED8] hover:shadow-[0_0_34px_rgba(56,189,248,0.45)] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
              >
                <span>Explorer nos projets</span>
                <ArrowRight className="h-4 w-4 text-[#38BDF8]" />
              </button>

              <button
                type="button"
                onClick={onRequestStudy}
                className="inline-flex items-center gap-2.5 rounded-lg border border-white/15 bg-[#0B132B]/70 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-md transition-all duration-200 hover:border-[#38BDF8]/60 hover:bg-[#0B132B] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
              >
                <span>Demander une étude</span>
              </button>
            </div>
          </div>

          {/* Right side: Quick Architectural Spotlight Card pointing to Featured Masterplan */}
          <div className="lg:col-span-4">
            <button
              type="button"
              onClick={onOpenFeatured}
              className="group block w-full overflow-hidden rounded-xl border border-white/10 glass-surface p-5 text-left transition-all duration-200 hover:border-[#38BDF8]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
            >
              <div className="flex items-center justify-between font-mono text-[11px] text-[#38BDF8]">
                <span>PROJET PHARE · MASTERPLAN 3D</span>
                <span className="tabular-nums text-slate-400">09 VUES</span>
              </div>
              <p className="mt-2 font-display text-base font-semibold text-white group-hover:text-[#38BDF8] transition-colors">
                Aménagement Esplanade &amp; Parc d’Exposition
              </p>
              <div className="mt-2 flex items-center gap-2 text-xs text-slate-400">
                <MapPin className="h-3.5 w-3.5 text-[#38BDF8]" />
                <span>Douala</span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">2,4 Hectares</span>
                <span aria-hidden="true">·</span>
                <span>Ouvrir le dossier</span>
              </div>
            </button>
          </div>
        </div>

        {/* Full-Width Architectural Metrics Bar */}
        <div className="mt-14 grid grid-cols-1 divide-y divide-white/10 overflow-hidden rounded-xl border border-white/10 glass-surface md:grid-cols-3 md:divide-x md:divide-y-0">
          {KEY_METRICS.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.code} className="flex items-start gap-4 p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#38BDF8]/25 bg-[#050811]/70 text-[#38BDF8]">
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <div className="min-w-0">
                  <div className="flex items-baseline gap-2.5">
                    <span className="font-mono text-xs text-[#38BDF8] tabular-nums">
                      {item.code}
                    </span>
                    <h2 className="font-display text-sm font-semibold text-white">
                      {item.label}
                    </h2>
                  </div>
                  <p className="mt-1 font-mono text-lg font-medium text-white tabular-nums">
                    {item.metric}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-400">
                    {item.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
